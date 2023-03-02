import { getStringForAST, getAST } from './grammers/SubC/CSubWrapper.js';
import { Visitor } from './grammers/SubC/Visitor.js';

const pushPop = (A) => {
    A.push({tag : 'pop'});
}

const microcode = {
    program : (cmd) => {
        const stat = cmd.stat;
        const nextProgram = cmd.nextProgram;
        if(nextProgram != undefined) {
            A.push(nextProgram);
            pushPop(A);
        }
        A.push(stat);
    },

    stat : (cmd) => {
        const children = cmd.children;
        pushPop(A);
        A.push(children);
    },

    expr : (cmd) => {
        
        if(cmd.expr1 == undefined) {
            // literal or identifier
            if(cmd.sym == undefined && cmd.expr1 == undefined){
                /// literal
                S.push(Number(cmd.curExpr));
            } else if(cmd.sym != undefined && cmd.expr1 == undefined) {
                // identifier
                // here we could have pushed an obj {type : int, value : 1}
                S.push(searchForVar(cmd.sym).value);
            }
        } else if(cmd.op != undefined && cmd.expr2 == undefined){
            // unaryOp
            A.push(cmd.op);
            A.push(cmd.expr1);
        } else if(cmd.op != undefined && cmd.expr2 != undefined){
            // binaryOp
            A.push(cmd.op);
            A.push(cmd.expr1);
            A.push(cmd.expr2);
        } else if(cmd.op == undefined && cmd.expr2 == undefined){
            // parenthesis
            A.push(cmd.expr1);
        }
    }, 

    unaryOp : (cmd) => {
        var top = S.pop();
        S.push(applyUnaryOp(cmd.symbol, top));
    }, 

    binaryOp : (cmd) => {
        var op1 = S.pop();
        var op2 = S.pop();
        S.push(applyBinaryOp(cmd.symbol, op1, op2));
    }, 

    def : (cmd) => {
        A.push(cmd.children);
    },

    varDef : (cmd) => {
        if(cmd.assg != undefined) {
            // declaration + assg
            addVarToFrame(currFrame, cmd.type.type, cmd.assg.symbol, undefined);
            A.push(cmd.assg);
        } else {
            // declaration
            addVarToFrame(currFrame, cmd.type.type, cmd.symbol, undefined);
        }
    },

    assg : (cmd) => {
        A.push({tag : "assg_i", symbol : cmd.symbol});
        A.push(cmd.expr);
    },

    assg_i : (cmd) => {
        var value = S[S.length - 1];
        setValueInFrame(currFrame, cmd.symbol, value);
        S.push(value);
    }, 

    pop : (cmd) => {
        S.pop();
    }, 

    funDef : (cmd) => {
        addFuncToFrame(currFrame, cmd.returnType, cmd.funcName, cmd.block);
    }
}

const applyUnaryOp = (op, expr) => {
    switch(op){
        case '+': 
            return expr;
        case '-':
            return -expr;
        case '!':
            return !expr;
    }
}

const applyBinaryOp = (op, expr1, expr2) => {
    switch(op){
        case '+': 
            return expr1 + expr2;

        case '-':
            return expr1 - expr2;

        case '*':
            return expr1 * expr2;

        case '/':
            return expr1 / expr2;

        case '%': 
            return expr1 % expr2;
    }
}

const addVarToFrame = (frame, type, symbol, value) => {
    frame.vars[symbol] = {type : type, value : value};

}

const addFuncToFrame = (frame, returnType, funcName, block) => {
    frame.methods[funcName] = {returnType : returnType, block : block};

}

const setValueInFrame = (frame, symbol, value, isFunction) => {
    if(!isFunction) {
        frame.vars[symbol].value = value;
    }
}

const searchForVar = (sym) => {
    var ptr = currFrame;
    var ptrVars = ptr.vars;
    while(ptr != null && ptrVars[sym] == undefined){
        ptr = ptr.next;
        if(ptr != null) ptrVars = ptr.vars;
    }

    return ptrVars[sym];
}

const initFrame = (frame) => {
    frame.next = null;
    frame.prev = null;
    frame.methods = {};
    frame.vars = {};
}

const createFrame = () => {
    const frame = {};
    frame.next = currFrame;
    frame.prev = null;
    frame.methods = {};
    frame.vars = {};
    currFrame = frame;
    return frame;
}

const globalFrame = createFrame();;
var currFrame = null;
var S;
const step_limit = 1000;
var A;


const execute = (program) => {
    S = [];
    const tree = getAST(program);
    const visitor = new Visitor();
    const ret = visitor.visitProgram(tree)
    A = [ret];
    currFrame = globalFrame;

    let i = 0
    while (i < step_limit) {
        if (A.length === 0) break
        const cmd = A.pop();
        console.log(cmd);
        if (microcode.hasOwnProperty(cmd.tag)) {
            microcode[cmd.tag](cmd)
        } else {
            console.log("unknow command: ", cmd);
        } 
        i++;
    }
    if (i === step_limit) {
        console.log("step limit " + String(step_limit) + " exceeded")
    }

    return S[S.length-1];
}



const test = (program, expected) => {
    // console.log(`****************Test case:*************** ` + program + "\n")
    const result = execute(program);
    if (String(result) === String(expected)) {
        console.log(result, "success:");
    } else {
        console.log("FAILURE! expected: ", expected);
        console.log("result:", result);
    }
}


// example test case:
test("int test(){return 1;} test();", 1);

// after you complete this question, the following test cases should pass

// test("[].length;", 0)

// test("[1,20].length;", 2)

// test("const a = [1,2,30]; a.length;", 3)

// test("function f() { return [1,2,3,40]; } f().length;", 4)

// test("function f() { const a = [1,2,3]; return a; } f().length;", 3)