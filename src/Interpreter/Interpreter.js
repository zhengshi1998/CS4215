import React from "react";
import { getStringForAST, getAST } from '../grammers/SubC/CSubWrapper.js';
import { Visitor } from '../grammers/SubC/Visitor.js';

export class Interpreter {
    createFrame = () => {
        const frame = {};
        frame.next = this.currFrame;
        frame.prev = null;
        frame.methods = {};
        frame.vars = {};
        return frame;
    }

    constructor(){
        this.S = null;
        this.A = null;
        this.step_limit = 1000;
        this.currFrame = null;
        this.globalFrame = this.createFrame();
        this.HEAP = [];
        this.HeapSize = 100;
        this.HeapCnt = 0;
        this.freeList = {};
    }

    
    initHEAP = () => {
        for (var i = 0; i < this.HeapSize; i++) {
            this.HEAP.push(null);
        }
        this.freeList.next = null;
        this.freeList.size = this.HeapSize;
        this.freeList.head = 0;
    }
    
    allocate = (n) => {
        var prev = null;
        var ptr = this.freeList;
    
        while (ptr != null) {
            if (ptr.size >= n) {
                for (var i = 0; i < n; i++) { 
                    // this.HeapCnt: to show these n positions belong to the same var
                    this.HEAP[ptr.head + i] = { value: null, HeapCnt: this.HeapCnt };
                }
    
                if (ptr.size == n) {
                    prev.next = ptr.next;
                } else {
                    const rest = ptr.size - n;
                    const newNode = { head: ptr.head + n, size: rest, next: ptr.next };
                    if (prev == null) this.freeList = newNode;
                    else prev.next = newNode;
                    newNode.next = ptr.next;
                }
    
                this.HeapCnt += 1;
                return { type: "void*", value: ptr.head, size: n, isInHEAP: true };
            }
            prev = ptr;
            ptr = ptr.next;
        }
    
        this.error("this.HEAP out of space!");
    }
    
    free = (ptr) => {
        if (ptr >= this.HeapSize) {
            this.error("Pointer out of this.HEAP!");
        }
        // console.log(ptr, this.HEAP[ptr]);
        var cnt = this.HEAP[ptr].HeapCnt;
        var start = ptr, size = 0;
    
        while (true) {
            if (this.HEAP[ptr] != null && this.HEAP[ptr].HeapCnt == cnt) {
                this.HEAP[ptr] = null;
            } else break;
            ptr++;
            size++;
        }
    
        this.insertIntofreeList(start, size);
    }
    
    insertIntofreeList = (start, size) => {
        var ptr = this.freeList;
        var prev = null;
    
        if (this.freeList == null || this.freeList.head < start) {
            var temp = this.freeList;
            this.freeList = { head: start, size: size, next: temp };
            return;
        }
    
        // console.log(ptr, start, size)
    
        if(ptr.head >= start + size){
            if(ptr.head == start + size){
                ptr.head -= size;
                ptr.size += size;
            } else {
                this.freeList = { head: start, size: size, next: ptr };
                
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
    
    setHEAPVar = (ptr, S_var) => {
        var pos = ptr.value;
    
        var label = this.HEAP[pos].HeapCnt;
    
        while (pos < this.HeapSize) {
            if (this.HEAP[pos] != null && this.HEAP[pos].HeapCnt == label) {
                this.HEAP[pos].value = S_var;
            } else break;
            pos++;
        }
    }
    
    pushPop = (A) => {
        this.A.push({ tag: 'pop' });
    }
    
    checkTypeForBinaryOp = (op, op1, op2) => {
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
    
    checkTypeForUnaryOp = (op, op1) => {
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
    
    microcode = {
        program: (cmd) => {
            const stat = cmd.stat;
            const nextProgram = cmd.nextProgram;
            if (nextProgram != undefined) {
                this.A.push(nextProgram);
                this.pushPop(this.A);
            }
            this.A.push(stat);
        },
    
        stat: (cmd) => {
            const children = cmd.children;
            this.A.push(children);
        },
    
        expr: (cmd) => {
            if (cmd.expr1 == undefined) {
                // literal or identifier
                if (cmd.sym == undefined && cmd.expr1 == undefined) {
                    /// literal
                    // console.log(cmd);
                    if (cmd.type === 'int') {
                        this.S.push({ type: cmd.type, value: Number(cmd.curExpr) });
                    } else if (cmd.type === 'char') {
                        this.S.push({ type: cmd.type, value: cmd.curExpr });
                    }
                } else if (cmd.sym != undefined && cmd.expr1 == undefined) {
                    // identifier
                    // here we could have pushed an obj {type : int, value : 1}
                    this.S.push(this.searchForVar(cmd.sym));
                }
            } else if (cmd.op != undefined && cmd.expr2 == undefined) {
                // unaryOp
                // console.log("unary op, cmd is: ", cmd.op);
                this.A.push(cmd.op);
                if (cmd.op.symbol === "&" || cmd.op.symbol === "*") {
                    this.S.push(cmd.expr1)
                } else {
                    this.A.push(cmd.expr1);
                }
            } else if (cmd.op != undefined && cmd.expr2 != undefined) {
                // binaryOp
                this.A.push(cmd.op);
                this.A.push(cmd.expr1);
                this.A.push(cmd.expr2);
            } else if (cmd.op == undefined && cmd.expr2 == undefined) {
                // parenthesis
                this.A.push(cmd.expr1);
            }
        },
    
        unaryOp: (cmd) => {
            var top = this.S.pop();
            // console.log("Input data ", top);
            if (this.checkTypeForUnaryOp(cmd.symbol, top)) {
                // console.log("after unary op: ", applyUnaryOp(cmd.symbol, top));
                this.S.push(this.applyUnaryOp(cmd.symbol, top));
            } else {
                this.error("wrong type!!!");
            }
    
        },
    
        binaryOp: (cmd) => {
            var op1 = this.S.pop();
            var op2 = this.S.pop();
            if (this.checkTypeForBinaryOp(cmd.symbol, op1, op2)) {
    
                this.S.push(this.applyBinaryOp(cmd.symbol, op1.value, op2.value));
            } else {
                this.error("wrong type!!!");
            }
        },
    
        def: (cmd) => {
            this.A.push(cmd.children);
        },
    
        varDef: (cmd) => {
            if (cmd.assg != undefined) {
                // declaration + assg
                this.addVarToFrame(this.currFrame, cmd.type.type, cmd.assg.symbol, undefined);
                this.A.push(cmd.assg);
            } else {
                // declaration
                this.addVarToFrame(this.currFrame, cmd.type.type, cmd.symbol, undefined);
            }
        },
    
        assg: (cmd) => {
            this.A.push({ tag: "assg_i", symbol: cmd.symbol });
            this.A.push(cmd.expr);
        },
    
        assg_i: (cmd) => {
            var S_var = this.S[this.S.length - 1];
            // console.log("assg_i value: ", S_var)
            // console.log("assg_i cmd: ", res)
            if (S_var.value != undefined) {
                var record = this.searchForVar(cmd.symbol);
                if (cmd.symbol.startsWith("*")) {
                    // assg to a pointer var
                    var ptrSymbol = cmd.symbol.substring(1);
    
                    var ptr = this.searchForVar(ptrSymbol);
                    // console.log("ptr is : ", ptr);
                    var realSymbol = ptr.value.symbol;
    
                    if (realSymbol == undefined) {
                        // this.HEAP var pointer
                        this.setHEAPVar(ptr, S_var);
                        ptr.addr = ptr.value;
                    } else {
                        // stack var pointer
                        var realVar = this.searchForVar(realSymbol);
                        if (realVar == null) {
                            this.error("There is no reference to " + realSymbol);
                        }
                        // console.log("real var is : ", realVar);
                        realVar.value = S_var.value;
                    }
                    this.S.push(S_var.value);
    
                } else {
                    this.setValueInFrame(this.currFrame, cmd.symbol, S_var.value);
                    this.S.push(S_var.value);
                }
    
            } else {
                this.setValueInFrame(this.currFrame, cmd.symbol, S_var);
            }
        },
    
        pop: (cmd) => {
            this.S.pop();
        },
    
        funDef: (cmd) => {
            this.addFuncToFrame(this.currFrame, cmd.returnType, cmd.funcName, cmd.program, cmd.args);
        },
    
        funCall: (cmd) => {
            const func = this.searchForFunc(cmd.funcName);
            this.currFrame = this.createFrame();
    
            this.A.push(func.program);   // push program body
    
            if (func.args.length == cmd.args.length) {
                for (var i = 0; i < func.args.length; i++) {
                    // assign call args to func params
                    this.A.push({ tag: "assgFuncArg", symbol: func.args[i].symbol, type: func.args[i].type });
                    this.A.push(cmd.args[i]); // computes value for expr in S stack
                }
            } else {
                console.log("Mismatch args between fuc def and fun call !!!");
            }
    
        },
    
        return: (cmd) => {
            this.A.push({ tag: 'return_i' });
    
            if (cmd.expr != undefined) {
                this.A.push(cmd.expr);
            }
    
        },
    
        return_i: (cmd) => {
            this.popFrame();
        },
    
        assgFuncArg: (cmd) => {
            this.addVarToFrame(this.currFrame, cmd.type, cmd.symbol, this.S.pop().value);
        },
    
        ifStat: (cmd) => {
            this.A.push({ tag: 'ifStat_i', ifBlock: cmd.ifBlock, elseBlock: cmd.elseBlock });
            this.A.push(cmd.predExpr);
        },
    
        ifStat_i: (cmd) => {
            var predRes = this.S.pop().value == 1 ? true : false;
            if (predRes) {
                this.A.push(cmd.ifBlock);
            } else {
                this.A.push(cmd.elseBlock);
            }
        },
    
        block: (cmd) => {
            this.currFrame = this.createFrame();
            this.A.push({ tag: 'popFrame' });
            this.A.push(cmd.program);
        },
    
        popFrame: (cmd) => {
            this.popFrame();
        },
    
        whileStat: (cmd) => {
            this.A.push({ tag: 'whileStat_i', block: cmd.block, predExpr: cmd.predExpr });
            this.A.push(cmd.predExpr);
        },
    
        whileStat_i: (cmd) => {
            var pred = this.S.pop().value == 1 ? true : false;
    
            if (pred) {
                this.A.push({ tag: 'whileStat_i', block: cmd.block, predExpr: cmd.predExpr });
                this.A.push(cmd.predExpr);
                this.A.push(cmd.block);
            }
        },

        forStat: (cmd) => {
            this.A.push({ tag: 'forStat_i', block: cmd.block, predExpr: cmd.predExpr, updateExpr: cmd.updateExpr });
            this.A.push(cmd.predExpr);
            this.A.push(cmd.initExpr);
        },
    
        forStat_i: (cmd) => {
            var pred = this.S.pop().value == 1 ? true : false;
    
            if (pred) {
                this.A.push({ tag: 'forStat_i', block: cmd.block, predExpr: cmd.predExpr, updateExpr: cmd.updateExpr });
                this.A.push(cmd.predExpr);
                this.A.push(cmd.updateExpr);
                this.A.push(cmd.block);
            }
        },
    
        break: (cmd) => {
            // pop all commands until whileStat_i or forStat_i
            while (this.A.length > 0) {
                var cmd = this.A.pop();
                if (cmd.tag == 'whileStat_i' || cmd.tag == 'forStat_i') {
                    break;
                }
            }
            // if there is no while or for loop, error
            if (cmd.tag != 'whileStat_i' && cmd.tag != 'forStat_i') {
                this.error("There is no while or for loop to break from !!!");
            }
        },
    
        continue: (cmd) => {
            // pop all commands until whileStat_i or forStat_i
            while (this.A.length > 0) {
                var cmd = this.A.pop();
                if (cmd.tag == 'whileStat_i' || cmd.tag == 'forStat_i') {
                    // if it is whileStat_i, push the predExpr and whileStat_i
                    this.A.push(cmd);
                    this.A.push(cmd.predExpr);
                    // if it is forStat_i, push the updateExpr, predExpr and forStat_i
                    if (cmd.tag == 'forStat_i') {
                        this.A.push(cmd.updateExpr);
                    }
                    break;
                }
            }
            // if there is no while or for loop, error
            if (cmd.tag != 'whileStat_i' && cmd.tag != 'forStat_i') {
                this.error("There is no while or for loop to continue from !!!");
            }
        },
    
        error: (cmd) => {
            while (this.A.length > 0) {
                this.A.pop();
            }
        },
    
        malloc: (cmd) => {
            var sizeVar = this.searchForVar(cmd.n);
            const ptr = this.allocate(sizeVar.value);
            // console.log(this.freeList);
            this.S.push(ptr);
        },
    
        free: (cmd) => {
            // console.log("free cmd : ", cmd)
            var ptr = this.searchForVar(cmd.ptr);
            // console.log("pointer var : ", ptr)
            console.log("before freeing: ", this.freeList);
            this.free(ptr.value);
            console.log("after freeing: ", this.freeList);
            this.S.push(ptr);
        },
    }
    
    applyUnaryOp = (op, expr) => {
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
                        this.error("Invalid use of & operator!");
                    }
                    var target = this.searchForVar(expr.sym);
                    // console.log("at & ops, var: ", target)
                    return { type: target.type + "*", symbol: expr.sym };
                }
    
                return { type: 'int', value: !expr };
    
            case '*':
                // console.log("at * ops: ", expr)
                var ptr = this.searchForVar(expr.sym);
                // console.log("ptr is : ", ptr);
                if (ptr.addr == undefined) {
                    var realSymbol = ptr.value.symbol;
                    var realVar = this.searchForVar(realSymbol);
                    if (realVar == null) {
                        this.error("There is no reference to " + realSymbol);
                    }
                    // console.log("real var is : ", realVar);
                    return realVar;
                } else {
                    var ret = this.HEAP[ptr.addr].value;
                    // console.log("real var in this.HEAP is : ", ret);
                    return ret;
                }
        }
    }
    
    applyBinaryOp = (op, expr1, expr2) => {
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
    
    popFrame = () => {
        if (this.currFrame != undefined) {
            this.currFrame = this.currFrame.next;
        } else {
            console.log("Current Frame is null !!!!");
        }
    
    }
    
    error = (msg) => {
        console.log(msg);
        this.A.push({ tag: 'this.error' });
    }
    
    addVarToFrame = (frame, type, symbol, value) => {
        frame.vars[symbol] = { type: type, value: value };
    
    }
    
    addFuncToFrame = (frame, returnType, funcName, program, args) => {
        frame.methods[funcName] = { returnType: returnType, program: program, args: args };
    
    }
    
    setValueInFrame = (frame, symbol, value) => {
        var init = this.currFrame, ptr = this.currFrame;
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
    
    searchForFunc = (sym) => {
        var ptr = this.currFrame;
        var ptrFuncs = ptr.methods;
        while (ptr != null && ptrFuncs[sym] == undefined) {
            ptr = ptr.next;
            if (ptr != null) ptrFuncs = ptr.methods;
        }
    
        return ptrFuncs[sym];
    }
    
    searchForVar = (sym) => {
        var ptr = this.currFrame;
        var ptrVars = ptr.vars;
        while (ptr != null && ptrVars[sym] == undefined) {
            ptr = ptr.next;
            if (ptr != null) ptrVars = ptr.vars;
        }
    
        return ptrVars[sym];
    }
    
    
    addBuiltIn = () => {
        this.globalFrame.methods['malloc'] = { returnType: 'void*', program: { tag: 'malloc', n: 'n' }, args: [{ type: 'int', symbol: 'n' }] };
        this.globalFrame.methods['free'] = { returnType: 'void', program: { tag: 'free', ptr: 'ptr' }, args: [{ type: 'void*', symbol: 'ptr' }] };
    }
    
    execute = (program) => {
        this.addBuiltIn();
        this.S = [];
        const tree = getAST(program);
        const visitor = new Visitor();
        const ret = visitor.visitProgram(tree)
        this.A = [ret];
        this.currFrame = this.globalFrame;
        this.initHEAP();
    
        let i = 0;
        while (i < this.step_limit) {
            if (this.A.length === 0) break
            const cmd = this.A.pop();
            // console.log(cmd);
            if (this.microcode.hasOwnProperty(cmd.tag)) {
                this.microcode[cmd.tag](cmd)
            } else {
                console.log("unknow command: ", cmd);
            }
            i++;
        }
        if (i === this.step_limit) {
            console.log("step limit " + String(this.step_limit) + " exceeded")
        }
        // console.log(searchForVar("y"))
        return this.S[this.S.length - 1];
    }
    
    
    test = (program, expected) => {
        // console.log(`****************Test case:*************** ` + program + "\n")
        const result = this.execute(program);
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
    
    // test("int* x = malloc(4); *x = 16; *x;", 16);  // malloc this.HEAP memory
    
    // test("int* x = malloc(4); *x = 16; x;", null);  // malloc this.HEAP memory, x stores the address in this.HEAP array
    
    // test("int* x = malloc(4); *x = 16; *x; free(x);", 16);  // free this.HEAP memory
    
    // test("int* x = malloc(4); int* y = malloc(4); free(x);", 16);  // free this.HEAP memory
}
