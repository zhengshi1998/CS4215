// Generated from .\CSub.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import CSubListener from './CSubListener.js';
import CSubVisitor from './CSubVisitor.js';

const serializedATN = [4,1,37,169,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,1,0,3,0,37,8,0,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,52,8,1,1,2,1,2,3,2,56,8,2,1,3,1,
3,1,3,1,3,1,3,1,3,3,3,64,8,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,88,8,7,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,104,8,8,10,8,12,8,107,9,8,1,8,
1,8,1,8,1,8,1,8,3,8,114,8,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,3,10,130,8,10,1,10,1,10,1,10,1,10,5,10,136,8,10,10,
10,12,10,139,9,10,1,11,1,11,1,11,1,11,1,11,5,11,146,8,11,10,11,12,11,149,
9,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,157,8,11,1,12,1,12,1,13,1,13,1,14,
1,14,1,14,1,14,1,15,1,15,1,15,0,1,20,16,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,0,3,3,0,5,7,20,22,31,31,3,0,8,12,20,24,29,30,1,0,13,16,172,0,36,
1,0,0,0,2,51,1,0,0,0,4,53,1,0,0,0,6,63,1,0,0,0,8,65,1,0,0,0,10,69,1,0,0,
0,12,75,1,0,0,0,14,87,1,0,0,0,16,113,1,0,0,0,18,115,1,0,0,0,20,129,1,0,0,
0,22,156,1,0,0,0,24,158,1,0,0,0,26,160,1,0,0,0,28,162,1,0,0,0,30,166,1,0,
0,0,32,37,3,2,1,0,33,34,3,2,1,0,34,35,3,0,0,0,35,37,1,0,0,0,36,32,1,0,0,
0,36,33,1,0,0,0,37,1,1,0,0,0,38,39,3,8,4,0,39,40,5,27,0,0,40,52,1,0,0,0,
41,42,3,20,10,0,42,43,5,27,0,0,43,52,1,0,0,0,44,52,3,12,6,0,45,52,3,14,7,
0,46,52,3,10,5,0,47,52,3,28,14,0,48,49,3,4,2,0,49,50,5,27,0,0,50,52,1,0,
0,0,51,38,1,0,0,0,51,41,1,0,0,0,51,44,1,0,0,0,51,45,1,0,0,0,51,46,1,0,0,
0,51,47,1,0,0,0,51,48,1,0,0,0,52,3,1,0,0,0,53,55,5,1,0,0,54,56,3,20,10,0,
55,54,1,0,0,0,55,56,1,0,0,0,56,5,1,0,0,0,57,58,3,30,15,0,58,59,5,37,0,0,
59,64,1,0,0,0,60,61,3,30,15,0,61,62,3,8,4,0,62,64,1,0,0,0,63,57,1,0,0,0,
63,60,1,0,0,0,64,7,1,0,0,0,65,66,5,37,0,0,66,67,5,28,0,0,67,68,3,20,10,0,
68,9,1,0,0,0,69,70,5,2,0,0,70,71,5,32,0,0,71,72,3,20,10,0,72,73,5,33,0,0,
73,74,3,28,14,0,74,11,1,0,0,0,75,76,5,3,0,0,76,77,5,32,0,0,77,78,3,20,10,
0,78,79,5,33,0,0,79,80,3,28,14,0,80,81,5,4,0,0,81,82,3,28,14,0,82,13,1,0,
0,0,83,84,3,6,3,0,84,85,5,27,0,0,85,88,1,0,0,0,86,88,3,16,8,0,87,83,1,0,
0,0,87,86,1,0,0,0,88,15,1,0,0,0,89,90,3,30,15,0,90,91,3,18,9,0,91,92,5,32,
0,0,92,93,5,33,0,0,93,94,5,34,0,0,94,95,3,0,0,0,95,96,5,35,0,0,96,114,1,
0,0,0,97,98,3,30,15,0,98,99,3,18,9,0,99,100,5,32,0,0,100,105,3,6,3,0,101,
102,5,25,0,0,102,104,3,6,3,0,103,101,1,0,0,0,104,107,1,0,0,0,105,103,1,0,
0,0,105,106,1,0,0,0,106,108,1,0,0,0,107,105,1,0,0,0,108,109,5,33,0,0,109,
110,5,34,0,0,110,111,3,0,0,0,111,112,5,35,0,0,112,114,1,0,0,0,113,89,1,0,
0,0,113,97,1,0,0,0,114,17,1,0,0,0,115,116,5,37,0,0,116,19,1,0,0,0,117,118,
6,10,-1,0,118,130,5,37,0,0,119,130,5,36,0,0,120,130,5,17,0,0,121,130,3,22,
11,0,122,123,3,24,12,0,123,124,3,20,10,3,124,130,1,0,0,0,125,126,5,32,0,
0,126,127,3,20,10,0,127,128,5,33,0,0,128,130,1,0,0,0,129,117,1,0,0,0,129,
119,1,0,0,0,129,120,1,0,0,0,129,121,1,0,0,0,129,122,1,0,0,0,129,125,1,0,
0,0,130,137,1,0,0,0,131,132,10,2,0,0,132,133,3,26,13,0,133,134,3,20,10,3,
134,136,1,0,0,0,135,131,1,0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,137,138,
1,0,0,0,138,21,1,0,0,0,139,137,1,0,0,0,140,141,3,18,9,0,141,142,5,32,0,0,
142,147,3,20,10,0,143,144,5,25,0,0,144,146,3,20,10,0,145,143,1,0,0,0,146,
149,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,147,1,0,
0,0,150,151,5,33,0,0,151,157,1,0,0,0,152,153,3,18,9,0,153,154,5,32,0,0,154,
155,5,33,0,0,155,157,1,0,0,0,156,140,1,0,0,0,156,152,1,0,0,0,157,23,1,0,
0,0,158,159,7,0,0,0,159,25,1,0,0,0,160,161,7,1,0,0,161,27,1,0,0,0,162,163,
5,34,0,0,163,164,3,0,0,0,164,165,5,35,0,0,165,29,1,0,0,0,166,167,7,2,0,0,
167,31,1,0,0,0,11,36,51,55,63,87,105,113,129,137,147,156];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CSubParser extends antlr4.Parser {

    static grammarFileName = "CSub.g4";
    static literalNames = [ null, "'return'", "'while'", "'if'", "'else'", 
                            "'++'", "'--'", "'&'", "'=='", "'<'", "'>'", 
                            "'>='", "'<='", "'void'", "'int'", "'char'", 
                            "'void*'", null, null, null, "'+'", "'-'", "'*'", 
                            "'/'", "'%'", "','", "'print'", "';'", "'='", 
                            "'&&'", "'||'", "'!'", "'('", "')'", "'{'", 
                            "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "CHAR", "STRING", "WS", "ADD", "SUB", 
                             "MUL", "DIV", "MOD", "COMMA", "PRINT", "COLON", 
                             "EQ", "AND", "OR", "NOT", "LPAREN", "RPAREN", 
                             "LCURLY", "RCURLY", "INT", "ID" ];
    static ruleNames = [ "program", "stat", "return", "varDef", "assg", 
                         "whileStat", "ifStat", "def", "funDef", "funcName", 
                         "expr", "funCall", "unaryOp", "binaryOp", "block", 
                         "type" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CSubParser.ruleNames;
        this.literalNames = CSubParser.literalNames;
        this.symbolicNames = CSubParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 10:
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
	        this.state = 36;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.stat();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 33;
	            this.stat();
	            this.state = 34;
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
	        this.state = 51;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.assg();
	            this.state = 39;
	            this.match(CSubParser.COLON);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.expr(0);
	            this.state = 42;
	            this.match(CSubParser.COLON);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.ifStat();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 45;
	            this.def();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 46;
	            this.whileStat();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 47;
	            this.block();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 48;
	            this.return_();
	            this.state = 49;
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
	        this.state = 53;
	        this.match(CSubParser.T__0);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2154954976) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 49) !== 0)) {
	            this.state = 54;
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
	        this.state = 63;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.type();
	            this.state = 58;
	            this.match(CSubParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.type();
	            this.state = 61;
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
	        this.state = 65;
	        this.match(CSubParser.ID);
	        this.state = 66;
	        this.match(CSubParser.EQ);
	        this.state = 67;
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
	        this.state = 69;
	        this.match(CSubParser.T__1);
	        this.state = 70;
	        this.match(CSubParser.LPAREN);
	        this.state = 71;
	        this.expr(0);
	        this.state = 72;
	        this.match(CSubParser.RPAREN);
	        this.state = 73;
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
	        this.state = 75;
	        this.match(CSubParser.T__2);
	        this.state = 76;
	        this.match(CSubParser.LPAREN);
	        this.state = 77;
	        this.expr(0);
	        this.state = 78;
	        this.match(CSubParser.RPAREN);
	        this.state = 79;
	        this.block();
	        this.state = 80;
	        this.match(CSubParser.T__3);
	        this.state = 81;
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
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.varDef();
	            this.state = 84;
	            this.match(CSubParser.COLON);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 86;
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
	        this.state = 113;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 89;
	            this.type();
	            this.state = 90;
	            this.funcName();
	            this.state = 91;
	            this.match(CSubParser.LPAREN);
	            this.state = 92;
	            this.match(CSubParser.RPAREN);
	            this.state = 93;
	            this.match(CSubParser.LCURLY);
	            this.state = 94;
	            this.program();
	            this.state = 95;
	            this.match(CSubParser.RCURLY);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.type();
	            this.state = 98;
	            this.funcName();
	            this.state = 99;
	            this.match(CSubParser.LPAREN);

	            this.state = 100;
	            this.varDef();
	            this.state = 105;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===25) {
	                this.state = 101;
	                this.match(CSubParser.COMMA);
	                this.state = 102;
	                this.varDef();
	                this.state = 107;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 108;
	            this.match(CSubParser.RPAREN);
	            this.state = 109;
	            this.match(CSubParser.LCURLY);
	            this.state = 110;
	            this.program();
	            this.state = 111;
	            this.match(CSubParser.RCURLY);
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



	funcName() {
	    let localctx = new FuncNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CSubParser.RULE_funcName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(CSubParser.ID);
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
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, CSubParser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 118;
	            this.match(CSubParser.ID);
	            break;

	        case 2:
	            this.state = 119;
	            this.match(CSubParser.INT);
	            break;

	        case 3:
	            this.state = 120;
	            this.match(CSubParser.CHAR);
	            break;

	        case 4:
	            this.state = 121;
	            this.funCall();
	            break;

	        case 5:
	            this.state = 122;
	            this.unaryOp();
	            this.state = 123;
	            this.expr(3);
	            break;

	        case 6:
	            this.state = 125;
	            this.match(CSubParser.LPAREN);
	            this.state = 126;
	            this.expr(0);
	            this.state = 127;
	            this.match(CSubParser.RPAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 137;
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
	                this.state = 131;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 132;
	                this.binaryOp();
	                this.state = 133;
	                this.expr(3); 
	            }
	            this.state = 139;
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
	    this.enterRule(localctx, 22, CSubParser.RULE_funCall);
	    var _la = 0;
	    try {
	        this.state = 156;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 140;
	            this.funcName();
	            this.state = 141;
	            this.match(CSubParser.LPAREN);
	            this.state = 142;
	            this.expr(0);
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===25) {
	                this.state = 143;
	                this.match(CSubParser.COMMA);
	                this.state = 144;
	                this.expr(0);
	                this.state = 149;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 150;
	            this.match(CSubParser.RPAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 152;
	            this.funcName();
	            this.state = 153;
	            this.match(CSubParser.LPAREN);
	            this.state = 154;
	            this.match(CSubParser.RPAREN);
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



	unaryOp() {
	    let localctx = new UnaryOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CSubParser.RULE_unaryOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2154823904) !== 0))) {
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
	    this.enterRule(localctx, 26, CSubParser.RULE_binaryOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1643126528) !== 0))) {
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
	    this.enterRule(localctx, 28, CSubParser.RULE_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(CSubParser.LCURLY);
	        this.state = 163;
	        this.program();
	        this.state = 164;
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
	    this.enterRule(localctx, 30, CSubParser.RULE_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 122880) !== 0))) {
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
CSubParser.T__12 = 13;
CSubParser.T__13 = 14;
CSubParser.T__14 = 15;
CSubParser.T__15 = 16;
CSubParser.CHAR = 17;
CSubParser.STRING = 18;
CSubParser.WS = 19;
CSubParser.ADD = 20;
CSubParser.SUB = 21;
CSubParser.MUL = 22;
CSubParser.DIV = 23;
CSubParser.MOD = 24;
CSubParser.COMMA = 25;
CSubParser.PRINT = 26;
CSubParser.COLON = 27;
CSubParser.EQ = 28;
CSubParser.AND = 29;
CSubParser.OR = 30;
CSubParser.NOT = 31;
CSubParser.LPAREN = 32;
CSubParser.RPAREN = 33;
CSubParser.LCURLY = 34;
CSubParser.RCURLY = 35;
CSubParser.INT = 36;
CSubParser.ID = 37;

CSubParser.RULE_program = 0;
CSubParser.RULE_stat = 1;
CSubParser.RULE_return = 2;
CSubParser.RULE_varDef = 3;
CSubParser.RULE_assg = 4;
CSubParser.RULE_whileStat = 5;
CSubParser.RULE_ifStat = 6;
CSubParser.RULE_def = 7;
CSubParser.RULE_funDef = 8;
CSubParser.RULE_funcName = 9;
CSubParser.RULE_expr = 10;
CSubParser.RULE_funCall = 11;
CSubParser.RULE_unaryOp = 12;
CSubParser.RULE_binaryOp = 13;
CSubParser.RULE_block = 14;
CSubParser.RULE_type = 15;

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

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	funcName() {
	    return this.getTypedRuleContext(FuncNameContext,0);
	};

	LPAREN() {
	    return this.getToken(CSubParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(CSubParser.RPAREN, 0);
	};

	LCURLY() {
	    return this.getToken(CSubParser.LCURLY, 0);
	};

	program() {
	    return this.getTypedRuleContext(ProgramContext,0);
	};

	RCURLY() {
	    return this.getToken(CSubParser.RCURLY, 0);
	};

	varDef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarDefContext);
	    } else {
	        return this.getTypedRuleContext(VarDefContext,i);
	    }
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



class FuncNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_funcName;
    }

	ID() {
	    return this.getToken(CSubParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterFuncName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitFuncName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitFuncName(this);
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

	CHAR() {
	    return this.getToken(CSubParser.CHAR, 0);
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

	funcName() {
	    return this.getTypedRuleContext(FuncNameContext,0);
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
CSubParser.FuncNameContext = FuncNameContext; 
CSubParser.ExprContext = ExprContext; 
CSubParser.FunCallContext = FunCallContext; 
CSubParser.UnaryOpContext = UnaryOpContext; 
CSubParser.BinaryOpContext = BinaryOpContext; 
CSubParser.BlockContext = BlockContext; 
CSubParser.TypeContext = TypeContext; 
