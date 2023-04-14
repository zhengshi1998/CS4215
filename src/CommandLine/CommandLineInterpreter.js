import { getStringForAST, getAST } from '../grammers/SubC/CSubWrapper.js';
import { Visitor } from '../grammers/SubC/Visitor.js';

const pushPop = (A) => {
    A.push({ tag: 'pop' });
}

const checkTypeForBinaryOp = (op, op1, op2) => {
    // console.log(op1, op2);
    switch (op) {
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
    switch (op) {
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
    program: (cmd) => {
        const stat = cmd.stat;
        const nextProgram = cmd.nextProgram;
        if (nextProgram != undefined) {
            A.push(nextProgram);
            pushPop(A);
        }
        A.push(stat);
    },

    stat: (cmd) => {
        const children = cmd.children;
        A.push(children);
    },

    expr: (cmd) => {
        if (cmd.expr1 == undefined) {
            // literal or identifier
            if (cmd.sym == undefined && cmd.expr1 == undefined) {
                /// literal
                // console.log(cmd);
                if (cmd.type === 'int') {
                    S.push({ type: cmd.type, value: Number(cmd.curExpr) });
                } else if (cmd.type === 'char') {
                    S.push({ type: cmd.type, value: cmd.curExpr });
                }
            } else if (cmd.sym != undefined && cmd.expr1 == undefined) {
                // identifier
                // here we could have pushed an obj {type : int, value : 1}
                S.push(searchForVar(cmd.sym));
            }
        } else if (cmd.op != undefined && cmd.expr2 == undefined) {
            // unaryOp
            // console.log("unary op, cmd is: ", cmd.op);
            A.push(cmd.op);
            if (cmd.op.symbol === "&" || cmd.op.symbol === "*") {
                S.push(cmd.expr1)
            } else {
                A.push(cmd.expr1);
            }
        } else if (cmd.op != undefined && cmd.expr2 != undefined) {
            // binaryOp
            A.push(cmd.op);
            A.push(cmd.expr1);
            A.push(cmd.expr2);
        } else if (cmd.op == undefined && cmd.expr2 == undefined) {
            // parenthesis
            A.push(cmd.expr1);
        }
    },

    unaryOp: (cmd) => {
        var top = S.pop();
        // console.log("Input data ", top);
        if (checkTypeForUnaryOp(cmd.symbol, top)) {
            // console.log("after unary op: ", applyUnaryOp(cmd.symbol, top));
            S.push(applyUnaryOp(cmd.symbol, top));
        } else {
            error("wrong type!!!");
        }

    },

    binaryOp: (cmd) => {
        var op1 = S.pop();
        var op2 = S.pop();
        if (checkTypeForBinaryOp(cmd.symbol, op1, op2)) {

            S.push(applyBinaryOp(cmd.symbol, op1.value, op2.value));
        } else {
            error("wrong type!!!");
        }
    },

    def: (cmd) => {
        A.push(cmd.children);
    },

    varDef: (cmd) => {
        if (cmd.assg != undefined) {
            // declaration + assg
            addVarToFrame(currFrame, cmd.type.type, cmd.assg.symbol, undefined);
            A.push(cmd.assg);
        } else {
            // declaration
            addVarToFrame(currFrame, cmd.type.type, cmd.symbol, undefined);
        }
    },

    assg: (cmd) => {
        A.push({ tag: "assg_i", symbol: cmd.symbol });
        A.push(cmd.expr);
    },

    assg_i: (cmd) => {
        var S_var = S[S.length - 1];
        // console.log("assg_i value: ", S_var)
        // console.log("assg_i cmd: ", res)
        if (S_var.value != undefined) {
            var record = searchForVar(cmd.symbol);
            if (cmd.symbol.startsWith("*")) {
                // assg to a pointer var
                var ptrSymbol = cmd.symbol.substring(1);

                var ptr = searchForVar(ptrSymbol);
                // console.log("ptr is : ", ptr);
                var realSymbol = ptr.value.symbol;

                if (realSymbol == undefined) {
                    // heap var pointer
                    setHeapVar(ptr, S_var);
                    ptr.addr = ptr.value;
                } else {
                    // stack var pointer
                    var realVar = searchForVar(realSymbol);
                    if (realVar == null) {
                        error("There is no reference to " + realSymbol);
                    }
                    // console.log("real var is : ", realVar);
                    realVar.value = S_var.value;
                }
                S.push(S_var.value);

            } else {
                setValueInFrame(currFrame, cmd.symbol, S_var.value);
                S.push(S_var.value);
            }

        } else {
            setValueInFrame(currFrame, cmd.symbol, S_var);
        }
    },

    pop: (cmd) => {
        S.pop();
    },

    funDef: (cmd) => {
        addFuncToFrame(currFrame, cmd.returnType, cmd.funcName, cmd.program, cmd.args);
    },

    funCall: (cmd) => {
        const func = searchForFunc(cmd.funcName);
        currFrame = createFrame();

        A.push(func.program);   // push program body

        if (func.args.length == cmd.args.length) {
            for (var i = 0; i < func.args.length; i++) {
                // assign call args to func params
                A.push({ tag: "assgFuncArg", symbol: func.args[i].symbol, type: func.args[i].type });
                A.push(cmd.args[i]); // computes value for expr in S stack
            }
        } else {
            console.log("Mismatch args between fuc def and fun call !!!");
        }

    },

    return: (cmd) => {
        A.push({ tag: 'return_i' });

        if (cmd.expr != undefined) {
            A.push(cmd.expr);
        }

    },

    return_i: (cmd) => {
        popFrame();
    },

    assgFuncArg: (cmd) => {
        addVarToFrame(currFrame, cmd.type, cmd.symbol, S.pop().value);
    },

    ifStat: (cmd) => {
        A.push({ tag: 'ifStat_i', ifBlock: cmd.ifBlock, elseBlock: cmd.elseBlock });
        A.push(cmd.predExpr);
    },

    ifStat_i: (cmd) => {
        var predRes = S.pop().value == 1 ? true : false;
        if (predRes) {
            A.push(cmd.ifBlock);
        } else {
            A.push(cmd.elseBlock);
        }
    },

    block: (cmd) => {
        currFrame = createFrame();
        A.push({ tag: 'popFrame' });
        A.push(cmd.program);
    },

    popFrame: (cmd) => {
        popFrame();
    },

    whileStat: (cmd) => {
        A.push({ tag: 'whileStat_i', block: cmd.block, predExpr: cmd.predExpr });
        A.push(cmd.predExpr);
    },

    whileStat_i: (cmd) => {
        var pred = S.pop().value == 1 ? true : false;

        if (pred) {
            A.push({ tag: 'whileStat_i', block: cmd.block, predExpr: cmd.predExpr });
            A.push(cmd.predExpr);
            A.push(cmd.block);
        }
    },

    forStat: (cmd) => {
        A.push({ tag: 'forStat_i', block: cmd.block, predExpr: cmd.predExpr, updateExpr: cmd.updateExpr });
        A.push(cmd.predExpr);
        A.push(cmd.initExpr);
    },

    forStat_i: (cmd) => {
        var pred = S.pop().value == 1 ? true : false;

        if (pred) {
            A.push({ tag: 'forStat_i', block: cmd.block, predExpr: cmd.predExpr, updateExpr: cmd.updateExpr });
            A.push(cmd.predExpr);
            A.push(cmd.updateExpr);
            A.push(cmd.block);
        }
    },

    break: (cmd) => {
        // pop all commands until whileStat_i or forStat_i
        while (A.length > 0) {
            var cmd = A.pop();
            if (cmd.tag == 'whileStat_i' || cmd.tag == 'forStat_i') {
                break;
            }
        }
        // if there is no while or for loop, error
        if (cmd.tag != 'whileStat_i' && cmd.tag != 'forStat_i') {
            error("There is no while or for loop to break from !!!");
        }
    },

    continue: (cmd) => {
        // pop all commands until whileStat_i or forStat_i
        while (A.length > 0) {
            var cmd = A.pop();
            if (cmd.tag == 'whileStat_i' || cmd.tag == 'forStat_i') {
                // if it is whileStat_i, push the predExpr and whileStat_i
                A.push(cmd);
                A.push(cmd.predExpr);
                // if it is forStat_i, push the updateExpr, predExpr and forStat_i
                if (cmd.tag == 'forStat_i') {
                    A.push(cmd.updateExpr);
                }
                break;
            }
        }
        // if there is no while or for loop, error
        if (cmd.tag != 'whileStat_i' && cmd.tag != 'forStat_i') {
            error("There is no while or for loop to continue from !!!");
        }
    },

    error: (cmd) => {
        while (A.length > 0) {
            A.pop();
        }
    },

    malloc: (cmd) => {
        var sizeVar = searchForVar(cmd.n);
        const ptr = allocate(sizeVar.value);
        // console.log(freeList);
        S.push(ptr);
    },

    free: (cmd) => {
        // console.log("free cmd : ", cmd)
        var ptr = searchForVar(cmd.ptr);
        // console.log("pointer var : ", ptr)
        console.log("before freeing: ", freeList);
        free(ptr.value);
        console.log("after freeing: ", freeList);
        S.push(ptr);
    },
}

const applyUnaryOp = (op, expr) => {
    switch (op) {
        case '+':
            return { type: 'int', value: expr.value };

        case '-':
            return { type: 'int', value: -expr.value };

        case '!':
            return { type: 'int', value: !expr.value };

        case '&':
            if (expr['addr'] == undefined) {
                // console.log("at & ops: ", expr)
                if (expr.sym == undefined) {
                    error("Invalid use of & operator!");
                }
                var target = searchForVar(expr.sym);
                // console.log("at & ops, var: ", target)
                return { type: target.type + "*", symbol: expr.sym };
            }

            return { type: 'int', value: !expr };

        case '*':
            // console.log("at * ops: ", expr)
            var ptr = searchForVar(expr.sym);
            // console.log("ptr is : ", ptr);
            if (ptr.addr == undefined) {
                var realSymbol = ptr.value.symbol;
                var realVar = searchForVar(realSymbol);
                if (realVar == null) {
                    error("There is no reference to " + realSymbol);
                }
                // console.log("real var is : ", realVar);
                return realVar;
            } else {
                var ret = HEAP[ptr.addr].value;
                // console.log("real var in heap is : ", ret);
                return ret;
            }
    }
}

const applyBinaryOp = (op, expr1, expr2) => {
    switch (op) {
        case '+':
            return { type: 'int', value: expr1 + expr2 };

        case '-':
            return { type: 'int', value: expr1 - expr2 };

        case '*':
            return { type: 'int', value: expr1 * expr2 };

        case '/':
            return { type: 'int', value: expr1 / expr2 };

        case '%':
            return { type: 'int', value: expr1 % expr2 };

        case '==':
            return { type: 'int', value: expr1 === expr2 };

        case '>':
            return { type: 'int', value: expr1 > expr2 };

        case '>=':
            return { type: 'int', value: expr1 >= expr2 };

        case '<=':
            return { type: 'int', value: expr1 <= expr2 };

        case '<':
            return { type: 'int', value: expr1 < expr2 };
    }
}

const popFrame = () => {
    if (currFrame != undefined) {
        currFrame = currFrame.next;
    } else {
        console.log("Current Frame is null !!!!");
    }

}

const error = (msg) => {
    console.log(msg);
    A.push({ tag: 'error' });
}

const addVarToFrame = (frame, type, symbol, value) => {
    frame.vars[symbol] = { type: type, value: value };

}

const addFuncToFrame = (frame, returnType, funcName, program, args) => {
    frame.methods[funcName] = { returnType: returnType, program: program, args: args };

}

const setValueInFrame = (frame, symbol, value) => {
    var init = currFrame, ptr = currFrame;
    var ptrVars = ptr.vars;
    while (ptr != null && ptrVars[symbol] == undefined) {
        ptr = ptr.next;
        if (ptr != null) ptrVars = ptr.vars;
    }


    if (ptrVars[symbol] == null || ptrVars[symbol] == undefined) {
        init.vars[symbol] = value;
    } else {
        ptrVars[symbol].value = value;
    }
}

const searchForFunc = (sym) => {
    var ptr = currFrame;
    var ptrFuncs = ptr.methods;
    while (ptr != null && ptrFuncs[sym] == undefined) {
        ptr = ptr.next;
        if (ptr != null) ptrFuncs = ptr.methods;
    }

    return ptrFuncs[sym];
}

const searchForVar = (sym) => {
    var ptr = currFrame;
    var ptrVars = ptr.vars;
    while (ptr != null && ptrVars[sym] == undefined) {
        ptr = ptr.next;
        if (ptr != null) ptrVars = ptr.vars;
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

// ======================== HEAP =========================
const HEAP = [];
const heapSize = 100;
var heapCnt = 0;
var freeList = {};

const initHeap = () => {
    for (var i = 0; i < heapSize; i++) {
        HEAP.push(null);
    }
    freeList.next = null;
    freeList.size = heapSize;
    freeList.head = 0;
}

const allocate = (n) => {
    var prev = null;
    var ptr = freeList;

    while (ptr != null) {
        if (ptr.size >= n) {
            for (var i = 0; i < n; i++) {
                // heapCnt: to show these n positions belong to the same var
                HEAP[ptr.head + i] = { value: null, heapCnt: heapCnt };
            }

            if (ptr.size == n) {
                prev.next = ptr.next;
            } else {
                const rest = ptr.size - n;
                const newNode = { head: ptr.head + n, size: rest, next: ptr.next };
                if (prev == null) freeList = newNode;
                else prev.next = newNode;
                newNode.next = ptr.next;
            }

            heapCnt++;
            return { type: "void*", value: ptr.head, size: n, isInHeap: true };
        }
        prev = ptr;
        ptr = ptr.next;
    }

    error("Heap out of space!");
}

const free = (ptr) => {
    if (ptr >= heapSize) {
        error("Pointer out of heap!");
    }
    // console.log(ptr, HEAP[ptr]);
    var cnt = HEAP[ptr].heapCnt;
    var start = ptr, size = 0;

    while (true) {
        if (HEAP[ptr] != null && HEAP[ptr].heapCnt == cnt) {
            HEAP[ptr] = null;
        } else break;
        ptr++;
        size++;
    }

    insertIntoFreelist(start, size);
}

const insertIntoFreelist = (start, size) => {
    var ptr = freeList;
    var prev = null;

    if (freeList == null || freeList.head < start) {
        var temp = freeList;
        freeList = { head: start, size: size, next: temp };
        return;
    }

    // console.log(ptr, start, size)

    if(ptr.head >= start + size){
        if(ptr.head == start + size){
            ptr.head -= size;
            ptr.size += size;
        } else {
            freeList = { head: start, size: size, next: ptr };
            
        }
        return;
    }

    while (ptr != null) {
        if (prev.head < start && ptr.head > start) {
            if (ptr.head == start + size) {
                ptr.head = start;
                ptr.size += size;
            } else {
                prev.next = { head: start, size: size, next: ptr };
            }
            return;
        }
        prev = ptr;
        ptr = ptr.next;
    }

    prev.next = { head: start, size: size, next: null };
}

const setHeapVar = (ptr, S_var) => {
    var pos = ptr.value;

    var label = HEAP[pos].heapCnt;

    while (pos < heapSize) {
        if (HEAP[pos] != null && HEAP[pos].heapCnt == label) {
            HEAP[pos].value = S_var;
        } else break;
        pos++;
    }
}

const addBuiltIn = () => {
    globalFrame.methods['malloc'] = { returnType: 'void*', program: { tag: 'malloc', n: 'n' }, args: [{ type: 'int', symbol: 'n' }] };
    globalFrame.methods['free'] = { returnType: 'void', program: { tag: 'free', ptr: 'ptr' }, args: [{ type: 'void*', symbol: 'ptr' }] };
}

const execute = (program) => {
    addBuiltIn();
    S = [];
    const tree = getAST(program);
    const visitor = new Visitor();
    const ret = visitor.visitProgram(tree)
    A = [ret];
    currFrame = globalFrame;
    initHeap();

    let i = 0;
    while (i < step_limit) {
        if (A.length === 0) break
        const cmd = A.pop();
        // console.log(cmd);
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
    // console.log(searchForVar("y"))
    return S[S.length - 1];
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



// test('7 * (3 + 2);', 35);  // basic numerical operations

// test("int x = 7; x;", 7);  // definition of variable

// test("int x = 7; int test(int x, int y ){return x + y;} test(1, 4);", 5); // function def and call

// test('int x = 1; if(x == 1){1 + 3;} else {6 + 2;};', 4);  // if branch

// test('int x = 1; while(x < 10){x = x + 3;} x;', 10);   // while loop

// test("int x = 8; int* y = &x; *y;", 8)  // definition of pointer and dereferencing of pointer

// test("int x = 9; int z = 10; int* y = &x; y = &z; *y;", 10); // opearation on pointers

// test("int x = 9; int* y = &x; *y = 10; x;", 10); // modifying the pointer will take effect on the original variable

// test("int* x = malloc(4); *x = 16; *x;", 16);  // malloc heap memory

// test("int* x = malloc(4); *x = 16; x;", null);  // malloc heap memory, x stores the address in heap array

// test("int* x = malloc(4); *x = 16; free(x); 0;", 0);  // free heap memory

// test("int* x = malloc(4); int* y = malloc(4); *y = 12; free(x); *y;", 12);  // free heap memory

// test('int x = 0; int i; for(i = 0; i < 10; i = i + 1){x = x + 4; if(x >= 10){break;} else {x = x;}} x;', 12); // for loop, break and continue

test('int x = 0; int i; for(i = 1; i < 10; i = i * 2;){x = x + 4;} x;', 16);