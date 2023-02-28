import CSubVisitor from "./CSubVisitor.js";

export class Visitor extends CSubVisitor {

    // Visit a parse tree produced by CSubParser#program.
    visitProgram(ctx) {
        
        console.log(ctx);
        const parseTree = {};
        parseTree['tag'] = 'program';
        parseTree['content'] = this.visitChildren(ctx);
        return parseTree;
    }


    // Visit a parse tree produced by CSubParser#stat.
    visitStat(ctx) {
        console.log(ctx);
        const obj = {};
        obj['tag'] = 'stat';
        obj['content'] = this.visitChildren(ctx);
        return obj;
    }


    // Visit a parse tree produced by CSubParser#return.
    visitReturn(ctx) {
        console.log(ctx);
        const obj = {};
        obj['tag'] = 'return';
        obj['content'] = this.visitChildren(ctx);
        return obj;
    }


    // Visit a parse tree produced by CSubParser#varDef.
    visitVarDef(ctx) {
        console.log(ctx);
        const obj = {};
        obj['tag'] = 'return';
        obj['content'] = this.visitChildren(ctx);
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by CSubParser#assg.
    visitAssg(ctx) {
        console.log(ctx);
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by CSubParser#whileStat.
    visitWhileStat(ctx) {
        console.log(ctx);
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by CSubParser#ifStat.
    visitIfStat(ctx) {
        console.log(ctx);
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by CSubParser#def.
    visitDef(ctx) {
        console.log(ctx);
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by CSubParser#funDef.
    visitFunDef(ctx) {
        console.log(ctx);
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by CSubParser#expr.
    visitExpr(ctx) {
        console.log(ctx);
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by CSubParser#funCall.
    visitFunCall(ctx) {
        console.log(ctx);
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by CSubParser#unaryOp.
    visitUnaryOp(ctx) {
        console.log(ctx);
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by CSubParser#binaryOp.
    visitBinaryOp(ctx) {
        console.log(ctx);
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by CSubParser#block.
    visitBlock(ctx) {
        console.log(ctx);
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by CSubParser#type.
    visitType(ctx) {
        console.log(ctx);
        return this.visitChildren(ctx);
    }
}