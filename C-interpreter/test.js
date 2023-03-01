import { getStringForAST, getAST } from './grammers/SubC/CSubWrapper.js';
import { Visitor } from './grammers/SubC/Visitor.js';

const microcode = {
    program : (cmd) => {
        const stat = cmd.stat;
        const nextProgram = cmd.nextProgram;
        
    }
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
    console.log(A);
    currFrame = globalFrame;

    let i = 0
    while (i < step_limit) {
        if (A.length === 0) break
        const cmd = A.pop()
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

    return S[0];
}



const test = (program, expected) => {
    // console.log(`****************Test case:*************** ` + program + "\n")
    const result = execute(program);
    if (String(result) === String(expected)) {
        console.log(result, "success:")
    } else {
        console.log(expected, "FAILURE! expected:")
        console.log("result:", result)
    }
}


// example test case:
test("1;", 1)

// after you complete this question, the following test cases should pass

// test("[].length;", 0)

// test("[1,20].length;", 2)

// test("const a = [1,2,30]; a.length;", 3)

// test("function f() { return [1,2,3,40]; } f().length;", 4)

// test("function f() { const a = [1,2,3]; return a; } f().length;", 3)