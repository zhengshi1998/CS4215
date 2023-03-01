import { getStringForAST, getAST } from '../grammers/SubC/CSubWrapper.js';
import { Visitor } from '../grammers/SubC/Visitor.js';

const input = "1 + 3;2 + 4;"

const tree = getAST(input);
const visitor = new Visitor();
const ret = visitor.visitProgram(tree)

console.log(ret)
