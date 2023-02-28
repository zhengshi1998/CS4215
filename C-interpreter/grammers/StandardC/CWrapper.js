import antlr4 from 'antlr4';
import CLexer from '../grammers/CLexer.js';
import CParser from '../grammers/CParser.js';
import CListener from '../grammers/CListener.js';

export const getStringForAST = (input) => {
    const chars = new antlr4.InputStream(input);
    const lexer = new CLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.compilationUnit();
    return tree.toStringTree(parser.ruleNames);
}

export const generateObj = (tree) => {
    
}
