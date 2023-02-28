import { getStringForAST, getAST } from '../grammers/SubC/CSubWrapper.js';
import { Visitor } from '../grammers/SubC/Visitor.js';

const input = "int x = 3 + 2;"

const tree = getAST(input);
const visitor = new Visitor();
visitor.visitProgram(tree)

// console.log(getStringForAST(input));
// console.log(tree);
// console.log(tree.getChild(0));
// console.log(tree.getChild(1));