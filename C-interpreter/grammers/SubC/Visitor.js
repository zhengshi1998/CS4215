import CSubVisitor from "./CSubVisitor.js";

export class Visitor extends CSubVisitor {

    // Visit a parse tree produced by CSubParser#program.
    visitProgram(ctx) {
        const obj = {};
        obj['tag'] = 'program';
        var program, stat;
        [stat, program] = this.visitChildren(ctx);
        obj['nextProgram'] = program;
        obj['stat'] = stat;
        return obj;
    }


    // Visit a parse tree produced by CSubParser#stat.
    visitStat(ctx) {

        const obj = {};
        obj['tag'] = 'stat';
        var children;
        [children] = this.visitChildren(ctx);
        obj['children'] = children;

        return obj;
    }


    // Visit a parse tree produced by CSubParser#return.
    visitReturn(ctx) {
        const obj = {};
        obj['tag'] = 'return';
        var children;
        [children] = this.visitChildren(ctx);

        obj['children'] = children;
        
        return obj;
    }


    // Visit a parse tree produced by CSubParser#varDef.
    visitVarDef(ctx) {
        const obj = {};
        obj['tag'] = 'varDef';
        var type, idOrAssg;
        [type, idOrAssg] = this.visitChildren(ctx);

        obj['type'] = type;

        if(idOrAssg != undefined && idOrAssg.tag === 'assg'){
            obj['assg'] = idOrAssg;
        } else {
            obj['symbol'] = ctx.ID().getText();
        }

        return obj;
    }


    // Visit a parse tree produced by CSubParser#assg.
    visitAssg(ctx) {

        const obj = {};
        obj['tag'] = 'assg';
        obj['symbol'] = ctx.ID().getText();
        
        var symbolChild, eqChild, exprChild;
        [symbolChild, eqChild, exprChild] = this.visitChildren(ctx);
        obj['expr'] = exprChild;

        return obj;
    }


    // Visit a parse tree produced by CSubParser#whileStat.
    visitWhileStat(ctx) {
        const obj = {};
        obj['tag'] = 'whileStat';
        var children;
        [children] = this.visitChildren(ctx);
        obj['children'] = children;
        return obj;
    }


    // Visit a parse tree produced by CSubParser#ifStat.
    visitIfStat(ctx) {
        const obj = {};
        obj['tag'] = 'ifStat';
        var children;
        [children] = this.visitChildren(ctx);
        obj['children'] = children;
        return obj;
    }


    // Visit a parse tree produced by CSubParser#def.
    visitDef(ctx) {
        const obj = {};
        obj['tag'] = 'def';
        var children;
        [children] = this.visitChildren(ctx);
        obj['children'] = children;
        return obj;
    }


    // Visit a parse tree produced by CSubParser#funDef.
    visitFunDef(ctx) {
        const obj = {};
        obj['tag'] = 'funDef';
        const numChild = ctx.getChildCount();
        const args = [];
        console.log(ctx.getChild(1));
        for(var i = 0; i< numChild; i++){
            var res = this.visit(ctx.getChild(i));
            console.log(i, " : ", res);
            if(i == 0){
                obj['returnType'] = res;
            } else if(i == 1){
                obj['funcName'] = res;
            } else if(i == numChild - 1){
                obj['block'] = res;
            } else {
                // console.log(i, " : ", res);
            }
        }

        // console.log(Object.keys(ctx));
        console.log(obj);
        return obj;
    }


    // Visit a parse tree produced by CSubParser#expr.
    visitExpr(ctx) {
        const obj = {};
        obj['tag'] = 'expr';
        var expr1, op, expr2;
        [expr1, op, expr2] = this.visitChildren(ctx);

        obj['curExpr'] = ctx.getText();

        if(ctx.ID() != undefined){
            obj['sym'] = ctx.ID().getText();
        }

        // console.log(expr1);
        // console.log(op);
        // console.log(expr2);

        if(expr1 != undefined && op != undefined && expr2 != undefined){
            obj['expr1'] = expr1;
            obj['op'] = op;
            obj['expr2'] = expr2;
        } else if(expr1 != undefined && op != undefined && expr2 == undefined){
            obj['op'] = expr1;
            obj['expr1'] = op;
        } else if(expr1 != undefined && op == undefined && expr2 == undefined){
            obj['expr1'] = expr1;
        } else if(expr1 == undefined && op != undefined && expr2 == undefined){
            obj['expr1'] = op;
        }

        return obj;
    }


    // Visit a parse tree produced by CSubParser#funCall.
    visitFunCall(ctx) {
        const obj = {};
        obj['tag'] = 'funCall';
        var children;
        [children] = this.visitChildren(ctx);
        obj['children'] = children;
        return obj;
    }


    // Visit a parse tree produced by CSubParser#unaryOp.
    visitUnaryOp(ctx) {
        const obj = {};
        obj['tag'] = 'unaryOp';
        obj['symbol'] = ctx.getText();
        return obj;
    }


    // Visit a parse tree produced by CSubParser#binaryOp.
    visitBinaryOp(ctx) {
        const obj = {};
        obj['tag'] = 'binaryOp';
        obj['symbol'] = ctx.getText();

        return obj;
    }


    // Visit a parse tree produced by CSubParser#block.
    visitBlock(ctx) {
        const obj = {};
        obj['tag'] = 'block';
        var children;
        [children] = this.visitChildren(ctx);
        obj['children'] = children;
        return obj;
    }


    // Visit a parse tree produced by CSubParser#type.
    visitType(ctx) {
        const obj = {};
        obj['tag'] = 'type';
        obj['type'] = ctx.getText();

        return obj;
    }
}