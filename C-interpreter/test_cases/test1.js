import { getStringForAST, getAST } from '../grammers/SubC/CSubWrapper.js';
import { Visitor } from '../grammers/SubC/Visitor.js';

const input = "int test(){return 1;} test();"

const tree = getAST(input);
const visitor = new Visitor();
const ret = visitor.visitProgram(tree)

// console.log(ret)
