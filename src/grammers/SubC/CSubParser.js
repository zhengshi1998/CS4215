// Generated from .\CSub.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import CSubListener from './CSubListener.js';
import CSubVisitor from './CSubVisitor.js';

const serializedATN = [4,1,44,216,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,1,0,1,0,1,0,1,0,3,0,47,8,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,75,
8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,5,1,5,
1,6,1,6,1,7,1,7,3,7,98,8,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,106,8,8,1,9,1,9,1,
9,1,9,1,9,1,9,1,9,3,9,115,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,3,12,135,8,12,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,151,8,13,
10,13,12,13,154,9,13,1,13,1,13,1,13,1,13,1,13,3,13,161,8,13,1,14,1,14,1,
15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,177,8,15,
1,15,1,15,1,15,1,15,5,15,183,8,15,10,15,12,15,186,9,15,1,16,1,16,1,16,1,
16,1,16,5,16,193,8,16,10,16,12,16,196,9,16,1,16,1,16,1,16,1,16,1,16,1,16,
3,16,204,8,16,1,17,1,17,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,0,1,
30,21,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,0,3,3,0,
10,12,27,29,38,38,3,0,13,17,27,31,36,37,1,0,18,23,220,0,46,1,0,0,0,2,74,
1,0,0,0,4,76,1,0,0,0,6,86,1,0,0,0,8,89,1,0,0,0,10,91,1,0,0,0,12,93,1,0,0,
0,14,95,1,0,0,0,16,105,1,0,0,0,18,114,1,0,0,0,20,116,1,0,0,0,22,122,1,0,
0,0,24,134,1,0,0,0,26,160,1,0,0,0,28,162,1,0,0,0,30,176,1,0,0,0,32,203,1,
0,0,0,34,205,1,0,0,0,36,207,1,0,0,0,38,209,1,0,0,0,40,213,1,0,0,0,42,47,
3,2,1,0,43,44,3,2,1,0,44,45,3,0,0,0,45,47,1,0,0,0,46,42,1,0,0,0,46,43,1,
0,0,0,47,1,1,0,0,0,48,49,3,18,9,0,49,50,5,34,0,0,50,75,1,0,0,0,51,52,3,30,
15,0,52,53,5,34,0,0,53,75,1,0,0,0,54,75,3,22,11,0,55,75,3,24,12,0,56,75,
3,20,10,0,57,75,3,4,2,0,58,75,3,38,19,0,59,60,3,6,3,0,60,61,5,34,0,0,61,
75,1,0,0,0,62,63,3,8,4,0,63,64,5,1,0,0,64,75,1,0,0,0,65,66,3,10,5,0,66,67,
5,34,0,0,67,75,1,0,0,0,68,69,3,12,6,0,69,70,5,34,0,0,70,75,1,0,0,0,71,72,
3,14,7,0,72,73,5,34,0,0,73,75,1,0,0,0,74,48,1,0,0,0,74,51,1,0,0,0,74,54,
1,0,0,0,74,55,1,0,0,0,74,56,1,0,0,0,74,57,1,0,0,0,74,58,1,0,0,0,74,59,1,
0,0,0,74,62,1,0,0,0,74,65,1,0,0,0,74,68,1,0,0,0,74,71,1,0,0,0,75,3,1,0,0,
0,76,77,5,2,0,0,77,78,5,39,0,0,78,79,3,18,9,0,79,80,5,34,0,0,80,81,3,30,
15,0,81,82,5,34,0,0,82,83,3,18,9,0,83,84,5,40,0,0,84,85,3,38,19,0,85,5,1,
0,0,0,86,87,5,3,0,0,87,88,5,44,0,0,88,7,1,0,0,0,89,90,5,44,0,0,90,9,1,0,
0,0,91,92,5,4,0,0,92,11,1,0,0,0,93,94,5,5,0,0,94,13,1,0,0,0,95,97,5,6,0,
0,96,98,3,30,15,0,97,96,1,0,0,0,97,98,1,0,0,0,98,15,1,0,0,0,99,100,3,40,
20,0,100,101,5,44,0,0,101,106,1,0,0,0,102,103,3,40,20,0,103,104,3,18,9,0,
104,106,1,0,0,0,105,99,1,0,0,0,105,102,1,0,0,0,106,17,1,0,0,0,107,108,5,
44,0,0,108,109,5,35,0,0,109,115,3,30,15,0,110,111,5,29,0,0,111,112,5,44,
0,0,112,113,5,35,0,0,113,115,3,30,15,0,114,107,1,0,0,0,114,110,1,0,0,0,115,
19,1,0,0,0,116,117,5,7,0,0,117,118,5,39,0,0,118,119,3,30,15,0,119,120,5,
40,0,0,120,121,3,38,19,0,121,21,1,0,0,0,122,123,5,8,0,0,123,124,5,39,0,0,
124,125,3,30,15,0,125,126,5,40,0,0,126,127,3,38,19,0,127,128,5,9,0,0,128,
129,3,38,19,0,129,23,1,0,0,0,130,131,3,16,8,0,131,132,5,34,0,0,132,135,1,
0,0,0,133,135,3,26,13,0,134,130,1,0,0,0,134,133,1,0,0,0,135,25,1,0,0,0,136,
137,3,40,20,0,137,138,3,28,14,0,138,139,5,39,0,0,139,140,5,40,0,0,140,141,
5,41,0,0,141,142,3,0,0,0,142,143,5,42,0,0,143,161,1,0,0,0,144,145,3,40,20,
0,145,146,3,28,14,0,146,147,5,39,0,0,147,152,3,16,8,0,148,149,5,32,0,0,149,
151,3,16,8,0,150,148,1,0,0,0,151,154,1,0,0,0,152,150,1,0,0,0,152,153,1,0,
0,0,153,155,1,0,0,0,154,152,1,0,0,0,155,156,5,40,0,0,156,157,5,41,0,0,157,
158,3,0,0,0,158,159,5,42,0,0,159,161,1,0,0,0,160,136,1,0,0,0,160,144,1,0,
0,0,161,27,1,0,0,0,162,163,5,44,0,0,163,29,1,0,0,0,164,165,6,15,-1,0,165,
177,5,44,0,0,166,177,5,43,0,0,167,177,5,24,0,0,168,177,3,32,16,0,169,170,
3,34,17,0,170,171,3,30,15,3,171,177,1,0,0,0,172,173,5,39,0,0,173,174,3,30,
15,0,174,175,5,40,0,0,175,177,1,0,0,0,176,164,1,0,0,0,176,166,1,0,0,0,176,
167,1,0,0,0,176,168,1,0,0,0,176,169,1,0,0,0,176,172,1,0,0,0,177,184,1,0,
0,0,178,179,10,2,0,0,179,180,3,36,18,0,180,181,3,30,15,3,181,183,1,0,0,0,
182,178,1,0,0,0,183,186,1,0,0,0,184,182,1,0,0,0,184,185,1,0,0,0,185,31,1,
0,0,0,186,184,1,0,0,0,187,188,3,28,14,0,188,189,5,39,0,0,189,194,3,30,15,
0,190,191,5,32,0,0,191,193,3,30,15,0,192,190,1,0,0,0,193,196,1,0,0,0,194,
192,1,0,0,0,194,195,1,0,0,0,195,197,1,0,0,0,196,194,1,0,0,0,197,198,5,40,
0,0,198,204,1,0,0,0,199,200,3,28,14,0,200,201,5,39,0,0,201,202,5,40,0,0,
202,204,1,0,0,0,203,187,1,0,0,0,203,199,1,0,0,0,204,33,1,0,0,0,205,206,7,
0,0,0,206,35,1,0,0,0,207,208,7,1,0,0,208,37,1,0,0,0,209,210,5,41,0,0,210,
211,3,0,0,0,211,212,5,42,0,0,212,39,1,0,0,0,213,214,7,2,0,0,214,41,1,0,0,
0,12,46,74,97,105,114,134,152,160,176,184,194,203];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CSubParser extends antlr4.Parser {

    static grammarFileName = "CSub.g4";
    static literalNames = [ null, "':'", "'for'", "'goto'", "'break'", "'continue'", 
                            "'return'", "'while'", "'if'", "'else'", "'++'", 
                            "'--'", "'&'", "'=='", "'<'", "'>'", "'>='", 
                            "'<='", "'void'", "'int'", "'char'", "'void*'", 
                            "'int*'", "'char*'", null, null, null, "'+'", 
                            "'-'", "'*'", "'/'", "'%'", "','", "'print'", 
                            "';'", "'='", "'&&'", "'||'", "'!'", "'('", 
                            "')'", "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "CHAR", "STRING", "WS", "ADD", "SUB", "MUL", 
                             "DIV", "MOD", "COMMA", "PRINT", "COLON", "EQ", 
                             "AND", "OR", "NOT", "LPAREN", "RPAREN", "LCURLY", 
                             "RCURLY", "INT", "ID" ];
    static ruleNames = [ "program", "stat", "forStat", "gotoStat", "labelStat", 
                         "breakStat", "continueStat", "return", "varDef", 
                         "assg", "whileStat", "ifStat", "def", "funDef", 
                         "funcName", "expr", "funCall", "unaryOp", "binaryOp", 
                         "block", "type" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CSubParser.ruleNames;
        this.literalNames = CSubParser.literalNames;
        this.symbolicNames = CSubParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 15:
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
	        this.state = 46;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.stat();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.stat();
	            this.state = 44;
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
	        this.state = 74;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.assg();
	            this.state = 49;
	            this.match(CSubParser.COLON);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.expr(0);
	            this.state = 52;
	            this.match(CSubParser.COLON);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 54;
	            this.ifStat();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 55;
	            this.def();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 56;
	            this.whileStat();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 57;
	            this.forStat();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 58;
	            this.block();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 59;
	            this.gotoStat();
	            this.state = 60;
	            this.match(CSubParser.COLON);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 62;
	            this.labelStat();
	            this.state = 63;
	            this.match(CSubParser.T__0);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 65;
	            this.breakStat();
	            this.state = 66;
	            this.match(CSubParser.COLON);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 68;
	            this.continueStat();
	            this.state = 69;
	            this.match(CSubParser.COLON);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 71;
	            this.return_();
	            this.state = 72;
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



	forStat() {
	    let localctx = new ForStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CSubParser.RULE_forStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(CSubParser.T__1);
	        this.state = 77;
	        this.match(CSubParser.LPAREN);
	        this.state = 78;
	        this.assg();
	        this.state = 79;
	        this.match(CSubParser.COLON);
	        this.state = 80;
	        this.expr(0);
	        this.state = 81;
	        this.match(CSubParser.COLON);
	        this.state = 82;
	        this.assg();
	        this.state = 83;
	        this.match(CSubParser.RPAREN);
	        this.state = 84;
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



	gotoStat() {
	    let localctx = new GotoStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CSubParser.RULE_gotoStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(CSubParser.T__2);
	        this.state = 87;
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



	labelStat() {
	    let localctx = new LabelStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CSubParser.RULE_labelStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
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



	breakStat() {
	    let localctx = new BreakStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CSubParser.RULE_breakStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(CSubParser.T__3);
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



	continueStat() {
	    let localctx = new ContinueStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CSubParser.RULE_continueStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(CSubParser.T__4);
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
	    this.enterRule(localctx, 14, CSubParser.RULE_return);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(CSubParser.T__5);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 956308480) !== 0) || ((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 99) !== 0)) {
	            this.state = 96;
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
	    this.enterRule(localctx, 16, CSubParser.RULE_varDef);
	    try {
	        this.state = 105;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 99;
	            this.type();
	            this.state = 100;
	            this.match(CSubParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 102;
	            this.type();
	            this.state = 103;
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
	    this.enterRule(localctx, 18, CSubParser.RULE_assg);
	    try {
	        this.state = 114;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 107;
	            this.match(CSubParser.ID);
	            this.state = 108;
	            this.match(CSubParser.EQ);
	            this.state = 109;
	            this.expr(0);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 110;
	            this.match(CSubParser.MUL);
	            this.state = 111;
	            this.match(CSubParser.ID);
	            this.state = 112;
	            this.match(CSubParser.EQ);
	            this.state = 113;
	            this.expr(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	whileStat() {
	    let localctx = new WhileStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CSubParser.RULE_whileStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(CSubParser.T__6);
	        this.state = 117;
	        this.match(CSubParser.LPAREN);
	        this.state = 118;
	        this.expr(0);
	        this.state = 119;
	        this.match(CSubParser.RPAREN);
	        this.state = 120;
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
	    this.enterRule(localctx, 22, CSubParser.RULE_ifStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(CSubParser.T__7);
	        this.state = 123;
	        this.match(CSubParser.LPAREN);
	        this.state = 124;
	        this.expr(0);
	        this.state = 125;
	        this.match(CSubParser.RPAREN);
	        this.state = 126;
	        this.block();
	        this.state = 127;
	        this.match(CSubParser.T__8);
	        this.state = 128;
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
	    this.enterRule(localctx, 24, CSubParser.RULE_def);
	    try {
	        this.state = 134;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 130;
	            this.varDef();
	            this.state = 131;
	            this.match(CSubParser.COLON);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
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
	    this.enterRule(localctx, 26, CSubParser.RULE_funDef);
	    var _la = 0;
	    try {
	        this.state = 160;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 136;
	            this.type();
	            this.state = 137;
	            this.funcName();
	            this.state = 138;
	            this.match(CSubParser.LPAREN);
	            this.state = 139;
	            this.match(CSubParser.RPAREN);
	            this.state = 140;
	            this.match(CSubParser.LCURLY);
	            this.state = 141;
	            this.program();
	            this.state = 142;
	            this.match(CSubParser.RCURLY);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 144;
	            this.type();
	            this.state = 145;
	            this.funcName();
	            this.state = 146;
	            this.match(CSubParser.LPAREN);

	            this.state = 147;
	            this.varDef();
	            this.state = 152;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===32) {
	                this.state = 148;
	                this.match(CSubParser.COMMA);
	                this.state = 149;
	                this.varDef();
	                this.state = 154;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 155;
	            this.match(CSubParser.RPAREN);
	            this.state = 156;
	            this.match(CSubParser.LCURLY);
	            this.state = 157;
	            this.program();
	            this.state = 158;
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
	    this.enterRule(localctx, 28, CSubParser.RULE_funcName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
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
	    const _startState = 30;
	    this.enterRecursionRule(localctx, 30, CSubParser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 165;
	            this.match(CSubParser.ID);
	            break;

	        case 2:
	            this.state = 166;
	            this.match(CSubParser.INT);
	            break;

	        case 3:
	            this.state = 167;
	            this.match(CSubParser.CHAR);
	            break;

	        case 4:
	            this.state = 168;
	            this.funCall();
	            break;

	        case 5:
	            this.state = 169;
	            this.unaryOp();
	            this.state = 170;
	            this.expr(3);
	            break;

	        case 6:
	            this.state = 172;
	            this.match(CSubParser.LPAREN);
	            this.state = 173;
	            this.expr(0);
	            this.state = 174;
	            this.match(CSubParser.RPAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 184;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, CSubParser.RULE_expr);
	                this.state = 178;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 179;
	                this.binaryOp();
	                this.state = 180;
	                this.expr(3); 
	            }
	            this.state = 186;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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
	    this.enterRule(localctx, 32, CSubParser.RULE_funCall);
	    var _la = 0;
	    try {
	        this.state = 203;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 187;
	            this.funcName();
	            this.state = 188;
	            this.match(CSubParser.LPAREN);
	            this.state = 189;
	            this.expr(0);
	            this.state = 194;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===32) {
	                this.state = 190;
	                this.match(CSubParser.COMMA);
	                this.state = 191;
	                this.expr(0);
	                this.state = 196;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 197;
	            this.match(CSubParser.RPAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 199;
	            this.funcName();
	            this.state = 200;
	            this.match(CSubParser.LPAREN);
	            this.state = 201;
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
	    this.enterRule(localctx, 34, CSubParser.RULE_unaryOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        _la = this._input.LA(1);
	        if(!(((((_la - 10)) & ~0x1f) === 0 && ((1 << (_la - 10)) & 269352967) !== 0))) {
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
	    this.enterRule(localctx, 36, CSubParser.RULE_binaryOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        _la = this._input.LA(1);
	        if(!(((((_la - 13)) & ~0x1f) === 0 && ((1 << (_la - 13)) & 25673759) !== 0))) {
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
	    this.enterRule(localctx, 38, CSubParser.RULE_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.match(CSubParser.LCURLY);
	        this.state = 210;
	        this.program();
	        this.state = 211;
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
	    this.enterRule(localctx, 40, CSubParser.RULE_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 16515072) !== 0))) {
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
CSubParser.T__16 = 17;
CSubParser.T__17 = 18;
CSubParser.T__18 = 19;
CSubParser.T__19 = 20;
CSubParser.T__20 = 21;
CSubParser.T__21 = 22;
CSubParser.T__22 = 23;
CSubParser.CHAR = 24;
CSubParser.STRING = 25;
CSubParser.WS = 26;
CSubParser.ADD = 27;
CSubParser.SUB = 28;
CSubParser.MUL = 29;
CSubParser.DIV = 30;
CSubParser.MOD = 31;
CSubParser.COMMA = 32;
CSubParser.PRINT = 33;
CSubParser.COLON = 34;
CSubParser.EQ = 35;
CSubParser.AND = 36;
CSubParser.OR = 37;
CSubParser.NOT = 38;
CSubParser.LPAREN = 39;
CSubParser.RPAREN = 40;
CSubParser.LCURLY = 41;
CSubParser.RCURLY = 42;
CSubParser.INT = 43;
CSubParser.ID = 44;

CSubParser.RULE_program = 0;
CSubParser.RULE_stat = 1;
CSubParser.RULE_forStat = 2;
CSubParser.RULE_gotoStat = 3;
CSubParser.RULE_labelStat = 4;
CSubParser.RULE_breakStat = 5;
CSubParser.RULE_continueStat = 6;
CSubParser.RULE_return = 7;
CSubParser.RULE_varDef = 8;
CSubParser.RULE_assg = 9;
CSubParser.RULE_whileStat = 10;
CSubParser.RULE_ifStat = 11;
CSubParser.RULE_def = 12;
CSubParser.RULE_funDef = 13;
CSubParser.RULE_funcName = 14;
CSubParser.RULE_expr = 15;
CSubParser.RULE_funCall = 16;
CSubParser.RULE_unaryOp = 17;
CSubParser.RULE_binaryOp = 18;
CSubParser.RULE_block = 19;
CSubParser.RULE_type = 20;

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

	forStat() {
	    return this.getTypedRuleContext(ForStatContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	gotoStat() {
	    return this.getTypedRuleContext(GotoStatContext,0);
	};

	labelStat() {
	    return this.getTypedRuleContext(LabelStatContext,0);
	};

	breakStat() {
	    return this.getTypedRuleContext(BreakStatContext,0);
	};

	continueStat() {
	    return this.getTypedRuleContext(ContinueStatContext,0);
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



class ForStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_forStat;
    }

	LPAREN() {
	    return this.getToken(CSubParser.LPAREN, 0);
	};

	assg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssgContext);
	    } else {
	        return this.getTypedRuleContext(AssgContext,i);
	    }
	};

	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CSubParser.COLON);
	    } else {
	        return this.getToken(CSubParser.COLON, i);
	    }
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
	        listener.enterForStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitForStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitForStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GotoStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_gotoStat;
    }

	ID() {
	    return this.getToken(CSubParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterGotoStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitGotoStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitGotoStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LabelStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_labelStat;
    }

	ID() {
	    return this.getToken(CSubParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterLabelStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitLabelStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitLabelStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BreakStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_breakStat;
    }


	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterBreakStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitBreakStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitBreakStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContinueStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSubParser.RULE_continueStat;
    }


	enterRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.enterContinueStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSubListener ) {
	        listener.exitContinueStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSubVisitor ) {
	        return visitor.visitContinueStat(this);
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

	MUL() {
	    return this.getToken(CSubParser.MUL, 0);
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
CSubParser.ForStatContext = ForStatContext; 
CSubParser.GotoStatContext = GotoStatContext; 
CSubParser.LabelStatContext = LabelStatContext; 
CSubParser.BreakStatContext = BreakStatContext; 
CSubParser.ContinueStatContext = ContinueStatContext; 
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
