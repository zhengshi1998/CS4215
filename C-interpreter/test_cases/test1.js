import { getStringForAST, getAST } from '../grammers/SubC/CSubWrapper.js';
import { Visitor } from '../grammers/SubC/Visitor.js';

// const input = "int x = 1; if(x == 1){1 + 3;} else {6 + 2;};"
// const input = 'int x = 1; while(x < 10){x = x + 2;} x;';
const input = "1;"

const tree = getAST(input);
const visitor = new Visitor();
const ret = visitor.visitProgram(tree)

// console.log(ret)
