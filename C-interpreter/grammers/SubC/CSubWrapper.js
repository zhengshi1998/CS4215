import antlr4 from 'antlr4';
import CSubLexer from './CSubLexer.js';
import CSubParser from './CSubParser.js';
import { Visitor } from './Visitor.js';


export const getStringForAST = (input) => {
    const chars = new antlr4.InputStream(input);
    const lexer = new CSubLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CSubParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.program();

    return tree.toStringTree(parser.ruleNames);
}


export const getAST = (input) => {
    const chars = new antlr4.InputStream(input);
    const lexer = new CSubLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CSubParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.program();
    return tree;
}


export const generateObj = (tree) => {

}

