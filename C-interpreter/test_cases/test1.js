import { getStringForAST, getAST } from '../grammers/SubC/CSubWrapper.js';
import { Visitor } from '../grammers/SubC/Visitor.js';

const input = "int x = + b;"

const tree = getAST(input);
const visitor = new Visitor();
const ret = visitor.visitProgram(tree)

console.log(ret.children.children.children.assg.children)
