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
        var childNum = ctx.getChildCount();
        if(childNum == 2) {
            obj['expr'] = this.visit(ctx.getChild(1));
        }
        
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
        console.log(obj)
        return obj;
    }


    // Visit a parse tree produced by CSubParser#assg.
    visitAssg(ctx) {
        
        const obj = {};
        obj['tag'] = 'assg';
        
        var childNum = ctx.getChildCount();
        if(childNum == 3){
            var symbolChild, eqChild, exprChild;
            [symbolChild, eqChild, exprChild] = this.visitChildren(ctx);
            obj['symbol'] = ctx.ID().getText();
            obj['expr'] = exprChild;
            return obj;
        } else {
            var starChild, symbolChild, eqChild, exprChild;
            [starChild, symbolChild, eqChild, exprChild] = this.visitChildren(ctx);
            obj['symbol'] = "*" + ctx.ID().getText();
            obj['expr'] = exprChild;
            return obj;
        }
    }


    // Visit a parse tree produced by CSubParser#whileStat.
    visitWhileStat(ctx) {
        const obj = {};
        obj['tag'] = 'whileStat';
        obj['predExpr'] = this.visit(ctx.getChild(2));
        obj['block'] = this.visit(ctx.getChild(4));
        console.log(obj);
        return obj;
    }


    // Visit a parse tree produced by CSubParser#ifStat.
    visitIfStat(ctx) {
        const obj = {};
        obj['tag'] = 'ifStat';
        obj['predExpr'] = this.visit(ctx.getChild(2));
        obj['ifBlock'] = this.visit(ctx.getChild(4));
        obj['elseBlock'] = this.visit(ctx.getChild(6));
        console.log(obj);
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
        
        for(var i = 0; i< numChild; i++){
            var res = this.visit(ctx.getChild(i));
            if(i == 0){
                obj['returnType'] = res;
            } else if(i == 1){
                obj['funcName'] = res;
            } else if(i == numChild - 2){
                console.log("program obj: ", res)
                obj['program'] = res;
            } else if(res != undefined){
                const param = {type : res.type.type, symbol : res.symbol};
                args.push(param);
            }
        }
        obj['args'] = args;
        return obj;
    }


    // Visit a parse tree produced by CSubParser#funcName.
	visitFuncName(ctx) {
        return ctx.ID().getText()
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

        if(ctx.INT() != null){
            obj['type'] = 'int';
        } else if(ctx.CHAR() != null) {
            obj['type'] = 'char';
        }

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
            // (expr)
            obj['expr1'] = op;
        }

        return obj;
    }


    // Visit a parse tree produced by CSubParser#funCall.
    visitFunCall(ctx) {
        const obj = {};
        obj['tag'] = 'funCall';
        var childNum = ctx.getChildCount();
        const args = [];

        for(var i=0; i<childNum; i++){
            var res = this.visit(ctx.getChild(i));

            if(i == 0) {
                obj['funcName'] = res;
            } else if(res != undefined){
                args.push(res);
            }
        }
        obj['args'] = args;
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
        var _, program;
        [_, program, _] = this.visitChildren(ctx);
        obj['program'] = program;
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