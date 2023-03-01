// Generated from .\CSub.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import CSubListener from './CSubListener.js';
import CSubVisitor from './CSubVisitor.js';

const serializedATN = [4,1,32,152,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,1,0,1,0,1,0,3,0,35,8,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,50,8,1,1,2,1,2,3,2,54,8,2,1,3,1,3,1,3,1,3,
1,3,1,3,3,3,62,8,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,86,8,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,
94,8,8,1,8,1,8,1,8,1,8,5,8,100,8,8,10,8,12,8,103,9,8,1,8,1,8,1,8,1,9,1,9,
1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,119,8,9,1,9,1,9,1,9,1,9,5,9,125,
8,9,10,9,12,9,128,9,9,1,10,1,10,1,10,1,10,1,10,5,10,135,8,10,10,10,12,10,
138,9,10,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,
0,1,18,15,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,0,3,3,0,5,7,15,17,26,26,
3,0,8,8,15,19,24,25,1,0,9,12,154,0,34,1,0,0,0,2,49,1,0,0,0,4,51,1,0,0,0,
6,61,1,0,0,0,8,63,1,0,0,0,10,67,1,0,0,0,12,73,1,0,0,0,14,85,1,0,0,0,16,87,
1,0,0,0,18,118,1,0,0,0,20,129,1,0,0,0,22,141,1,0,0,0,24,143,1,0,0,0,26,145,
1,0,0,0,28,149,1,0,0,0,30,35,3,2,1,0,31,32,3,2,1,0,32,33,3,0,0,0,33,35,1,
0,0,0,34,30,1,0,0,0,34,31,1,0,0,0,35,1,1,0,0,0,36,37,3,8,4,0,37,38,5,22,
0,0,38,50,1,0,0,0,39,40,3,18,9,0,40,41,5,22,0,0,41,50,1,0,0,0,42,50,3,12,
6,0,43,50,3,14,7,0,44,50,3,10,5,0,45,50,3,26,13,0,46,47,3,4,2,0,47,48,5,
22,0,0,48,50,1,0,0,0,49,36,1,0,0,0,49,39,1,0,0,0,49,42,1,0,0,0,49,43,1,0,
0,0,49,44,1,0,0,0,49,45,1,0,0,0,49,46,1,0,0,0,50,3,1,0,0,0,51,53,5,1,0,0,
52,54,3,18,9,0,53,52,1,0,0,0,53,54,1,0,0,0,54,5,1,0,0,0,55,56,3,28,14,0,
56,57,5,32,0,0,57,62,1,0,0,0,58,59,3,28,14,0,59,60,3,8,4,0,60,62,1,0,0,0,
61,55,1,0,0,0,61,58,1,0,0,0,62,7,1,0,0,0,63,64,5,32,0,0,64,65,5,23,0,0,65,
66,3,18,9,0,66,9,1,0,0,0,67,68,5,2,0,0,68,69,5,27,0,0,69,70,3,18,9,0,70,
71,5,28,0,0,71,72,3,26,13,0,72,11,1,0,0,0,73,74,5,3,0,0,74,75,5,27,0,0,75,
76,3,18,9,0,76,77,5,28,0,0,77,78,3,26,13,0,78,79,5,4,0,0,79,80,3,26,13,0,
80,13,1,0,0,0,81,82,3,6,3,0,82,83,5,22,0,0,83,86,1,0,0,0,84,86,3,16,8,0,
85,81,1,0,0,0,85,84,1,0,0,0,86,15,1,0,0,0,87,88,3,28,14,0,88,89,5,32,0,0,
89,93,5,27,0,0,90,91,3,28,14,0,91,92,5,32,0,0,92,94,1,0,0,0,93,90,1,0,0,
0,93,94,1,0,0,0,94,101,1,0,0,0,95,96,5,20,0,0,96,97,3,28,14,0,97,98,5,32,
0,0,98,100,1,0,0,0,99,95,1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,101,102,
1,0,0,0,102,104,1,0,0,0,103,101,1,0,0,0,104,105,5,28,0,0,105,106,3,26,13,
0,106,17,1,0,0,0,107,108,6,9,-1,0,108,119,5,32,0,0,109,119,5,31,0,0,110,
119,3,20,10,0,111,112,3,22,11,0,112,113,3,18,9,3,113,119,1,0,0,0,114,115,
5,27,0,0,115,116,3,18,9,0,116,117,5,28,0,0,117,119,1,0,0,0,118,107,1,0,0,
0,118,109,1,0,0,0,118,110,1,0,0,0,118,111,1,0,0,0,118,114,1,0,0,0,119,126,
1,0,0,0,120,121,10,2,0,0,121,122,3,24,12,0,122,123,3,18,9,3,123,125,1,0,
0,0,124,120,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,
19,1,0,0,0,128,126,1,0,0,0,129,130,5,32,0,0,130,131,5,27,0,0,131,136,3,18,
9,0,132,133,5,20,0,0,133,135,3,18,9,0,134,132,1,0,0,0,135,138,1,0,0,0,136,
134,1,0,0,0,136,137,1,0,0,0,137,139,1,0,0,0,138,136,1,0,0,0,139,140,5,28,
0,0,140,21,1,0,0,0,141,142,7,0,0,0,142,23,1,0,0,0,143,144,7,1,0,0,144,25,
1,0,0,0,145,146,5,29,0,0,146,147,3,0,0,0,147,148,5,30,0,0,148,27,1,0,0,0,
149,150,7,2,0,0,150,29,1,0,0,0,10,34,49,53,61,85,93,101,118,126,136];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CSubParser extends antlr4.Parser {

    static grammarFileName = "CSub.g4";
    static literalNames = [ null, "'return'", "'while'", "'if'", "'else'", 
                            "'++'", "'--'", "'&'", "'=='", "'void'", "'int'", 
                            "'char'", "'void*'", null, null, "'+'", "'-'", 
                            "'*'", "'/'", "'%'", "','", "'print'", "';'", 
                            "'='", "'&&'", "'||'", "'!'", "'('", "')'", 
                            "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "STRING", "WS", 
                             "ADD", "SUB", "MUL", "DIV", "MOD", "COMMA", 
                             "PRINT", "COLON", "EQ", "AND", "OR", "NOT", 
                             "LPAREN", "RPAREN", "LCURLY", "RCURLY", "INT", 
                             "ID" ];
    static ruleNames = [ "program", "stat", "return", "varDef", "assg", 
                         "whileStat", "ifStat", "def", "funDef", "expr", 
                         "funCall", "unaryOp", "binaryOp", "block", "type" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CSubParser.ruleNames;
        this.literalNames = CSubParser.literalNames;
        this.symbolicNames = CSubParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 9:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CSubParser.RULE_program);
	    try {
	        this.state = 34;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.stat();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.stat();
	            this.state = 32;
	            this.program();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CSubParser.RULE_stat);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.assg();
	            this.state = 37;
	            this.match(CSubParser.COLON);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.expr(0);
	            this.state = 40;
	            this.match(CSubParser.COLON);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 42;
	            this.ifStat();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 43;
	            this.def();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 44;
	            this.whileStat();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 45;
	            this.block();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 46;
	            this.return_();
	            this.state = 47;
	            this.match(CSubParser.COLON);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	return_() {
	    let localctx = new ReturnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CSubParser.RULE_return);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(CSubParser.T__0);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 5)) & ~0x1f) === 0 && ((1 << (_la - 5)) & 207625223) !== 0)) {
	            this.state = 52;
	            this.expr(0);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varDef() {
	    let localctx = new VarDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CSubParser.RULE_varDef);
	    try {
	        this.state = 61;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 55;
	            this.type();
	            this.state = 56;
	            this.match(CSubParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.type();
	            this.state = 59;
	            this.assg();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assg() {
	    let localctx = new AssgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CSubParser.RULE_assg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(CSubParser.ID);
	        this.state = 64;
	        this.match(CSubParser.EQ);
	        this.state = 65;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStat() {
	    let localctx = new WhileStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CSubParser.RULE_whileStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(CSubParser.T__1);
	        this.state = 68;
	        this.match(CSubParser.LPAREN);
	        this.state = 69;
	        this.expr(0);
	        this.state = 70;
	        this.match(CSubParser.RPAREN);
	        this.state = 71;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStat() {
	    let localctx = new IfStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CSubParser.RULE_ifStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(CSubParser.T__2);
	        this.state = 74;
	        this.match(CSubParser.LPAREN);
	        this.state = 75;
	        this.expr(0);
	        this.state = 76;
	        this.match(CSubParser.RPAREN);
	        this.state = 77;
	        this.block();
	        this.state = 78;
	        this.match(CSubParser.T__3);
	        this.state = 79;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	def() {
	    let localctx = new DefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CSubParser.RULE_def);
	    try {
	        this.state = 85;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 81;
	            this.varDef();
	            this.state = 82;
	            this.match(CSubParser.COLON);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 84;
	            this.funDef();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funDef() {
	    let localctx = new FunDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CSubParser.RULE_funDef);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.type();
	        this.state = 88;
	        this.match(CSubParser.ID);
	        this.state = 89;
	        this.match(CSubParser.LPAREN);
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 7680) !== 0)) {
	            this.state = 90;
	            this.type();
	            this.state = 91;
	            this.match(CSubParser.ID);
	        }

	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 95;
	            this.match(CSubParser.COMMA);
	            this.state = 96;
	            this.type();
	            this.state = 97;
	            this.match(CSubParser.ID);
	            this.state = 103;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 104;
	        this.match(CSubParser.RPAREN);
	        this.state = 105;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, CSubParser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 108;
	            this.match(CSubParser.ID);
	            break;

	        case 2:
	            this.state = 109;
	            this.match(CSubParser.INT);
	            break;

	        case 3:
	            this.state = 110;
	            this.funCall();
	            break;

	        case 4:
	            this.state = 111;
	            this.unaryOp();
	            this.state = 112;
	            this.expr(3);
	            break;

	        case 5:
	            this.state = 114;
	            this.match(CSubParser.LPAREN);
	            this.state = 115;
	            this.expr(0);
	            this.state = 116;
	            this.match(CSubParser.RPAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 126;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, CSubParser.RULE_expr);
	                this.state = 120;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 121;
	                this.binaryOp();
	                this.state = 122;
	                this.expr(3); 
	            }
	            this.state = 128;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	funCall() {
	    let localctx = new FunCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CSubParser.RULE_funCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(CSubParser.ID);
	        this.state = 130;
	        this.match(CSubParser.LPAREN);
	        this.state = 131;
	        this.expr(0);
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 132;
	            this.match(CSubParser.COMMA);
	            this.state = 133;
	            this.expr(0);
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 139;
	        this.match(CSubParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unaryOp() {
	    let localctx = new UnaryOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CSubParser.RULE_unaryOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 67338464) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	binaryOp() {
	    let localctx = new BinaryOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CSubParser.RULE_binaryOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 51347712) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, CSubParser.RULE_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.match(CSubParser.LCURLY);
	        this.state = 146;
	        this.program();
	        this.state = 147;
	        this.match(CSubParser.RCURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, CSubParser.RULE_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7680) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CSubParser.EOF = antlr4.Token.EOF;
CSubParser.T__0 = 1;
CSubParser.T__1 = 2;
CSubParser.T__2 = 3;
CSubParser.T__3 = 4;
CSubParser.T__4 = 5;
CSubParser.T__5 = 6;
CSubParser.T__6 = 7;
CSubParser.T__7 = 8;
CSubParser.T__8 = 9;
CSubParser.T__9 = 10;
CSubParser.T__10 = 11;
CSubParser.T__11 = 12;
CSubParser.STRING = 13;
CSubParser.WS = 14;
CSubParser.ADD = 15;
CSubParser.SUB = 16;
CSubParser.MUL = 17;
CSubParser.DIV = 18;
CSubParser.MOD = 19;
CSubParser.COMMA = 20;
CSubParser.PRINT = 21;
CSubParser.COLON = 22;
CSubParser.EQ = 23;
CSubParser.AND = 24;
CSubParser.OR = 25;
CSubParser.NOT = 26;
CSubParser.LPAREN = 27;
CSubParser.RPAREN = 28;
CSubParser.LCURLY = 29;
CSubParser.RCURLY = 30;
CSubParser.INT = 31;
CSubParser.ID = 32;

CSubParser.RULE_program = 0;
CSubParser.RULE_stat = 1;
CSubParser.RULE_return = 2;
CSubParser.RULE_varDef = 3;
CSubParser.RULE_assg = 4;
CSubParser.RULE_whileStat = 5;
CSubParser.RULE_ifStat = 6;
CSubParser.RULE_def = 7;
CSubParser.RULE_funDef = 8;
CSubParser.RULE_expr = 9;
CSubParser.RULE_funCall = 10;
CSubParser.RULE_unaryOp = 11;
CSubParser.RULE_binaryOp = 12;
CSubParser.RULE_block = 13;
CSubParser.RULE_type = 14;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_program;
    }

	stat() {
	    return this.getTypedRuleContext(StatContext,0);
	};

	program() {
	    return this.getTypedRuleContext(ProgramContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_stat;
    }

	assg() {
	    return this.getTypedRuleContext(AssgContext,0);
	};

	COLON() {
	    return this.getToken(CSubParser.COLON, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ifStat() {
	    return this.getTypedRuleContext(IfStatContext,0);
	};

	def() {
	    return this.getTypedRuleContext(DefContext,0);
	};

	whileStat() {
	    return this.getTypedRuleContext(WhileStatContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	return_() {
	    return this.getTypedRuleContext(ReturnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReturnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_return;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterReturn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitReturn(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitReturn(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_varDef;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	ID() {
	    return this.getToken(CSubParser.ID, 0);
	};

	assg() {
	    return this.getTypedRuleContext(AssgContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterVarDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitVarDef(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitVarDef(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_assg;
    }

	ID() {
	    return this.getToken(CSubParser.ID, 0);
	};

	EQ() {
	    return this.getToken(CSubParser.EQ, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterAssg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitAssg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitAssg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_whileStat;
    }

	LPAREN() {
	    return this.getToken(CSubParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(CSubParser.RPAREN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterWhileStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitWhileStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitWhileStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_ifStat;
    }

	LPAREN() {
	    return this.getToken(CSubParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(CSubParser.RPAREN, 0);
	};

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterIfStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitIfStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitIfStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_def;
    }

	varDef() {
	    return this.getTypedRuleContext(VarDefContext,0);
	};

	COLON() {
	    return this.getToken(CSubParser.COLON, 0);
	};

	funDef() {
	    return this.getTypedRuleContext(FunDefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitDef(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitDef(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_funDef;
    }

	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CSubParser.ID);
	    } else {
	        return this.getToken(CSubParser.ID, i);
	    }
	};


	LPAREN() {
	    return this.getToken(CSubParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(CSubParser.RPAREN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CSubParser.COMMA);
	    } else {
	        return this.getToken(CSubParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterFunDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitFunDef(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitFunDef(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_expr;
    }

	ID() {
	    return this.getToken(CSubParser.ID, 0);
	};

	INT() {
	    return this.getToken(CSubParser.INT, 0);
	};

	funCall() {
	    return this.getTypedRuleContext(FunCallContext,0);
	};

	unaryOp() {
	    return this.getTypedRuleContext(UnaryOpContext,0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	LPAREN() {
	    return this.getToken(CSubParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(CSubParser.RPAREN, 0);
	};

	binaryOp() {
	    return this.getTypedRuleContext(BinaryOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_funCall;
    }

	ID() {
	    return this.getToken(CSubParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(CSubParser.LPAREN, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(CSubParser.RPAREN, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CSubParser.COMMA);
	    } else {
	        return this.getToken(CSubParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterFunCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitFunCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitFunCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnaryOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_unaryOp;
    }

	NOT() {
	    return this.getToken(CSubParser.NOT, 0);
	};

	MUL() {
	    return this.getToken(CSubParser.MUL, 0);
	};

	ADD() {
	    return this.getToken(CSubParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(CSubParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterUnaryOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitUnaryOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitUnaryOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BinaryOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_binaryOp;
    }

	MUL() {
	    return this.getToken(CSubParser.MUL, 0);
	};

	ADD() {
	    return this.getToken(CSubParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(CSubParser.SUB, 0);
	};

	DIV() {
	    return this.getToken(CSubParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(CSubParser.MOD, 0);
	};

	AND() {
	    return this.getToken(CSubParser.AND, 0);
	};

	OR() {
	    return this.getToken(CSubParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterBinaryOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitBinaryOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitBinaryOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_block;
    }

	LCURLY() {
	    return this.getToken(CSubParser.LCURLY, 0);
	};

	program() {
	    return this.getTypedRuleContext(ProgramContext,0);
	};

	RCURLY() {
	    return this.getToken(CSubParser.RCURLY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_type;
    }


	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CSubParser.ProgramContext = ProgramContext; 
CSubParser.StatContext = StatContext; 
CSubParser.ReturnContext = ReturnContext; 
CSubParser.VarDefContext = VarDefContext; 
CSubParser.AssgContext = AssgContext; 
CSubParser.WhileStatContext = WhileStatContext; 
CSubParser.IfStatContext = IfStatContext; 
CSubParser.DefContext = DefContext; 
CSubParser.FunDefContext = FunDefContext; 
CSubParser.ExprContext = ExprContext; 
CSubParser.FunCallContext = FunCallContext; 
CSubParser.UnaryOpContext = UnaryOpContext; 
CSubParser.BinaryOpContext = BinaryOpContext; 
CSubParser.BlockContext = BlockContext; 
CSubParser.TypeContext = TypeContext; 
