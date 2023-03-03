import { getStringForAST, getAST } from './grammers/SubC/CSubWrapper.js';
import { Visitor } from './grammers/SubC/Visitor.js';

const pushPop = (A) => {
    A.push({tag : 'pop'});
}

const checkTypeForBinaryOp = (op, op1, op2) => {
    console.log(op1, op2);
    switch(op){
        case '+': 
            return op1.type === 'int' && op2.type === 'int';

        case '-':
            return op1.type === 'int' && op2.type === 'int';

        case '*':
            return op1.type === 'int' && op2.type === 'int';

        case '/':
            return op1.type === 'int' && op2.type === 'int';

        case '%': 
            return op1.type === 'int' && op2.type === 'int';

        case '==': 
            return op1.type === op2.type;

        case '>': 
            return op1.type === 'int' && op2.type === 'int';

        case '>=': 
            return op1.type === 'int' && op2.type === 'int';

        case '<=': 
            return op1.type === 'int' && op2.type === 'int';

        case '<': 
            return op1.type === 'int' && op2.type === 'int';
    }
}

const checkTypeForUnaryOp = (op, op1) => {
    switch(op){
        case '+': 
            return op1.type === 'int';

        case '-':
            return op1.type === 'int';

        case '*':
            return true;

        case '&':
            return true;
        
        case '++':
            return op1.type === 'int';

        case '--':
                return op1.type === 'int';
    }
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
        A.push(children);
    },

    expr : (cmd) => {
        if(cmd.expr1 == undefined) {
            // literal or identifier
            if(cmd.sym == undefined && cmd.expr1 == undefined){
                /// literal
                console.log(cmd);
                if(cmd.type === 'int'){
                    S.push({type : cmd.type, value : Number(cmd.curExpr)});
                } else if(cmd.type === 'char'){
                    S.push({type : cmd.type, value : cmd.curExpr});
                }
                
            } else if(cmd.sym != undefined && cmd.expr1 == undefined) {
                // identifier
                // here we could have pushed an obj {type : int, value : 1}
                S.push(searchForVar(cmd.sym));
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
        if(checkTypeForUnaryOp(cmd.symbol, top)){
            S.push(applyUnaryOp(cmd.symbol, top.value));
        } else {
            error("wrong type!!!");
        }
        
    }, 

    binaryOp : (cmd) => {
        var op1 = S.pop();
        var op2 = S.pop();
        if(checkTypeForBinaryOp(cmd.symbol, op1, op2)){
            S.push(applyBinaryOp(cmd.symbol, op1.value, op2.value));
        } else {
            error("wrong type!!!");
        }
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
        var value = S[S.length - 1].value;
        console.log("current frame: ", currFrame.vars);
        setValueInFrame(currFrame, cmd.symbol, value);
        S.push(value);
    }, 

    pop : (cmd) => {
        S.pop();
    }, 

    funDef : (cmd) => {
        addFuncToFrame(currFrame, cmd.returnType, cmd.funcName, cmd.program, cmd.args);
    },

    funCall : (cmd) => {
        const func = searchForFunc(cmd.funcName);
        currFrame = createFrame();

        A.push(func.program);   // push program body

        if(func.args.length == cmd.args.length) {
            for(var i=0; i<func.args.length; i++){
                // assign call args to func params
                A.push({tag : "assgFuncArg", symbol: func.args[i].symbol, type : func.args[i].type});
                A.push(cmd.args[i]); // computes value for expr in S stack
            }
        } else {
            console.log("Mismatch args between fuc def and fun call !!!");
        }

    },

    return : (cmd) => {
        A.push({tag : 'return_i'});

        if(cmd.expr != undefined){
            A.push(cmd.expr);
        }
        
    },

    return_i : (cmd) => {
        popFrame();
    },

    assgFuncArg : (cmd) => {
        addVarToFrame(currFrame, cmd.type, cmd.symbol, S.pop().value);
        console.log("current Frame is : ", currFrame);
    }, 

    ifStat : (cmd) => {
        A.push({tag : 'ifStat_i', ifBlock : cmd.ifBlock, elseBlock : cmd.elseBlock});
        A.push(cmd.predExpr);
    },

    ifStat_i : (cmd) => {
        var predRes = S.pop().value == 1? true : false;
        if(predRes) {
            A.push(cmd.ifBlock);
        } else {
            A.push(cmd.elseBlock);
        }
    },

    block : (cmd) => {
        currFrame = createFrame();
        A.push({tag : 'popFrame'});
        A.push(cmd.program);
    },

    popFrame : (cmd) => {
        popFrame();
    }, 

    whileStat : (cmd) => {
        A.push({tag : 'whileStat_i', block : cmd.block, predExpr : cmd.predExpr});
        A.push(cmd.predExpr);
    },

    whileStat_i : (cmd) => {
        var pred = S.pop().value == 1? true : false;

        if(pred) {
            A.push({tag : 'whileStat_i', block : cmd.block, predExpr : cmd.predExpr});
            A.push(cmd.predExpr);
            A.push(cmd.block);
        }
    },

    error : (cmd) => {
        while(A.length > 0){
            A.pop();
        }
    }
}

const applyUnaryOp = (op, expr) => {
    switch(op){
        case '+': 
            return {type : 'int', value : expr};
        case '-':
            return {type : 'int', value : -expr};
        case '!':
            return {type : 'int', value : !expr};
    }
}

const applyBinaryOp = (op, expr1, expr2) => {
    switch(op){
        case '+': 
            return {type : 'int', value : expr1 + expr2};

        case '-':
            return {type : 'int', value : expr1 - expr2};

        case '*':
            return {type : 'int', value : expr1 * expr2};

        case '/':
            return {type : 'int', value : expr1 / expr2};

        case '%': 
            return {type : 'int', value : expr1 % expr2};

        case '==': 
            return {type : 'int', value : expr1 === expr2};

        case '>': 
            return {type : 'int', value : expr1 > expr2};

        case '>=': 
            return {type : 'int', value : expr1 >= expr2};

        case '<=': 
            return {type : 'int', value : expr1 <= expr2};

        case '<': 
            return {type : 'int', value : expr1 < expr2};
    }
}

const popFrame = () => {
    if(currFrame != undefined){
        currFrame = currFrame.next;
    } else {
        console.log("Current Frame is null !!!!");
    }
    
}

const error = (msg) => {
    console.log(msg);
    A.push({tag : 'error'});
}

const addVarToFrame = (frame, type, symbol, value) => {
    frame.vars[symbol] = {type : type, value : value};

}

const addFuncToFrame = (frame, returnType, funcName, program, args) => {
    frame.methods[funcName] = {returnType : returnType, program : program, args : args};

}

const setValueInFrame = (frame, symbol, value) => {
    var init = currFrame, ptr = currFrame;
    var ptrVars = ptr.vars;
    while(ptr != null && ptrVars[symbol] == undefined){
        ptr = ptr.next;
        if(ptr != null) ptrVars = ptr.vars;
    }


    if(ptrVars[symbol] == null || ptrVars[symbol] == undefined) {
        init.vars[symbol] = value;
    } else {
        ptrVars[symbol].value = value;
    }
}

const searchForFunc = (sym) => {
    var ptr = currFrame;
    var ptrFuncs = ptr.methods;
    while(ptr != null && ptrFuncs[sym] == undefined){
        ptr = ptr.next;
        if(ptr != null) ptrFuncs = ptr.methods;
    }

    return ptrFuncs[sym];
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

const createFrame = () => {
    const frame = {};
    frame.next = currFrame;
    frame.prev = null;
    frame.methods = {};
    frame.vars = {};
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
    if (String(result.value) === String(expected)) {
        console.log("success:", result.value);
    } else {
        console.log("FAILURE! expected: ", expected);
        console.log("result:", result);
    }
}


// test("int x = 7; x;", 7);

test("int x = 7; int test(int x, int y ){return x + y;} test(1, 4);", 5);

// test('int x = 1; if(x == 1){1 + 3;} else {6 + 2;};', 4);

// test('int x = 1; while(x < 10){x = x + 3;} x;', 10);

// test('7 * (3 + 2);', 35);

// test("[].length;", 0)

// test("[1,20].length;", 2)

// test("const a = [1,2,30]; a.length;", 3)

// test("function f() { return [1,2,3,40]; } f().length;", 4)

// test("function f() { const a = [1,2,3]; return a; } f().length;", 3)