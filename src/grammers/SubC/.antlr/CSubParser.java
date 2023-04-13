// Generated from d:\Projects\CS4215\C-interpreter\grammers\SubC\CSub.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CSubParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, CHAR=19, STRING=20, WS=21, ADD=22, SUB=23, MUL=24, DIV=25, MOD=26, 
		COMMA=27, PRINT=28, COLON=29, EQ=30, AND=31, OR=32, NOT=33, LPAREN=34, 
		RPAREN=35, LCURLY=36, RCURLY=37, INT=38, ID=39;
	public static final int
		RULE_program = 0, RULE_stat = 1, RULE_return = 2, RULE_varDef = 3, RULE_assg = 4, 
		RULE_whileStat = 5, RULE_ifStat = 6, RULE_def = 7, RULE_funDef = 8, RULE_funcName = 9, 
		RULE_expr = 10, RULE_funCall = 11, RULE_unaryOp = 12, RULE_binaryOp = 13, 
		RULE_block = 14, RULE_type = 15;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "stat", "return", "varDef", "assg", "whileStat", "ifStat", 
			"def", "funDef", "funcName", "expr", "funCall", "unaryOp", "binaryOp", 
			"block", "type"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'return'", "'while'", "'if'", "'else'", "'++'", "'--'", "'&'", 
			"'=='", "'<'", "'>'", "'>='", "'<='", "'void'", "'int'", "'char'", "'void*'", 
			"'int*'", "'char*'", null, null, null, "'+'", "'-'", "'*'", "'/'", "'%'", 
			"','", "'print'", "';'", "'='", "'&&'", "'||'", "'!'", "'('", "')'", 
			"'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, "CHAR", "STRING", "WS", "ADD", 
			"SUB", "MUL", "DIV", "MOD", "COMMA", "PRINT", "COLON", "EQ", "AND", "OR", 
			"NOT", "LPAREN", "RPAREN", "LCURLY", "RCURLY", "INT", "ID"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "CSub.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CSubParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public StatContext stat() {
			return getRuleContext(StatContext.class,0);
		}
		public ProgramContext program() {
			return getRuleContext(ProgramContext.class,0);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		try {
			setState(36);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(32);
				stat();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(33);
				stat();
				setState(34);
				program();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatContext extends ParserRuleContext {
		public AssgContext assg() {
			return getRuleContext(AssgContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CSubParser.COLON, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public IfStatContext ifStat() {
			return getRuleContext(IfStatContext.class,0);
		}
		public DefContext def() {
			return getRuleContext(DefContext.class,0);
		}
		public WhileStatContext whileStat() {
			return getRuleContext(WhileStatContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ReturnContext return() {
			return getRuleContext(ReturnContext.class,0);
		}
		public StatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stat; }
	}

	public final StatContext stat() throws RecognitionException {
		StatContext _localctx = new StatContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_stat);
		try {
			setState(51);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(38);
				assg();
				setState(39);
				match(COLON);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(41);
				expr(0);
				setState(42);
				match(COLON);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(44);
				ifStat();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(45);
				def();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(46);
				whileStat();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(47);
				block();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(48);
				return();
				setState(49);
				match(COLON);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReturnContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ReturnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_return; }
	}

	public final ReturnContext return() throws RecognitionException {
		ReturnContext _localctx = new ReturnContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_return);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			match(T__0);
			setState(55);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << CHAR) | (1L << ADD) | (1L << SUB) | (1L << MUL) | (1L << NOT) | (1L << LPAREN) | (1L << INT) | (1L << ID))) != 0)) {
				{
				setState(54);
				expr(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarDefContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode ID() { return getToken(CSubParser.ID, 0); }
		public AssgContext assg() {
			return getRuleContext(AssgContext.class,0);
		}
		public VarDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varDef; }
	}

	public final VarDefContext varDef() throws RecognitionException {
		VarDefContext _localctx = new VarDefContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_varDef);
		try {
			setState(63);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(57);
				type();
				setState(58);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(60);
				type();
				setState(61);
				assg();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssgContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CSubParser.ID, 0); }
		public TerminalNode EQ() { return getToken(CSubParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode MUL() { return getToken(CSubParser.MUL, 0); }
		public AssgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assg; }
	}

	public final AssgContext assg() throws RecognitionException {
		AssgContext _localctx = new AssgContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_assg);
		try {
			setState(72);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(65);
				match(ID);
				setState(66);
				match(EQ);
				setState(67);
				expr(0);
				}
				break;
			case MUL:
				enterOuterAlt(_localctx, 2);
				{
				setState(68);
				match(MUL);
				setState(69);
				match(ID);
				setState(70);
				match(EQ);
				setState(71);
				expr(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhileStatContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(CSubParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(CSubParser.RPAREN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public WhileStatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStat; }
	}

	public final WhileStatContext whileStat() throws RecognitionException {
		WhileStatContext _localctx = new WhileStatContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_whileStat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			match(T__1);
			setState(75);
			match(LPAREN);
			setState(76);
			expr(0);
			setState(77);
			match(RPAREN);
			setState(78);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfStatContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(CSubParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(CSubParser.RPAREN, 0); }
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public IfStatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStat; }
	}

	public final IfStatContext ifStat() throws RecognitionException {
		IfStatContext _localctx = new IfStatContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_ifStat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			match(T__2);
			setState(81);
			match(LPAREN);
			setState(82);
			expr(0);
			setState(83);
			match(RPAREN);
			setState(84);
			block();
			setState(85);
			match(T__3);
			setState(86);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefContext extends ParserRuleContext {
		public VarDefContext varDef() {
			return getRuleContext(VarDefContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CSubParser.COLON, 0); }
		public FunDefContext funDef() {
			return getRuleContext(FunDefContext.class,0);
		}
		public DefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_def; }
	}

	public final DefContext def() throws RecognitionException {
		DefContext _localctx = new DefContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_def);
		try {
			setState(92);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(88);
				varDef();
				setState(89);
				match(COLON);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(91);
				funDef();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunDefContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public FuncNameContext funcName() {
			return getRuleContext(FuncNameContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(CSubParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CSubParser.RPAREN, 0); }
		public TerminalNode LCURLY() { return getToken(CSubParser.LCURLY, 0); }
		public ProgramContext program() {
			return getRuleContext(ProgramContext.class,0);
		}
		public TerminalNode RCURLY() { return getToken(CSubParser.RCURLY, 0); }
		public List<VarDefContext> varDef() {
			return getRuleContexts(VarDefContext.class);
		}
		public VarDefContext varDef(int i) {
			return getRuleContext(VarDefContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CSubParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CSubParser.COMMA, i);
		}
		public FunDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funDef; }
	}

	public final FunDefContext funDef() throws RecognitionException {
		FunDefContext _localctx = new FunDefContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_funDef);
		int _la;
		try {
			setState(118);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(94);
				type();
				setState(95);
				funcName();
				setState(96);
				match(LPAREN);
				setState(97);
				match(RPAREN);
				setState(98);
				match(LCURLY);
				setState(99);
				program();
				setState(100);
				match(RCURLY);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(102);
				type();
				setState(103);
				funcName();
				setState(104);
				match(LPAREN);
				{
				setState(105);
				varDef();
				}
				setState(110);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(106);
					match(COMMA);
					setState(107);
					varDef();
					}
					}
					setState(112);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(113);
				match(RPAREN);
				setState(114);
				match(LCURLY);
				setState(115);
				program();
				setState(116);
				match(RCURLY);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FuncNameContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CSubParser.ID, 0); }
		public FuncNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcName; }
	}

	public final FuncNameContext funcName() throws RecognitionException {
		FuncNameContext _localctx = new FuncNameContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_funcName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CSubParser.ID, 0); }
		public TerminalNode INT() { return getToken(CSubParser.INT, 0); }
		public TerminalNode CHAR() { return getToken(CSubParser.CHAR, 0); }
		public FunCallContext funCall() {
			return getRuleContext(FunCallContext.class,0);
		}
		public UnaryOpContext unaryOp() {
			return getRuleContext(UnaryOpContext.class,0);
		}
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode LPAREN() { return getToken(CSubParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CSubParser.RPAREN, 0); }
		public BinaryOpContext binaryOp() {
			return getRuleContext(BinaryOpContext.class,0);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 20;
		enterRecursionRule(_localctx, 20, RULE_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(134);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(123);
				match(ID);
				}
				break;
			case 2:
				{
				setState(124);
				match(INT);
				}
				break;
			case 3:
				{
				setState(125);
				match(CHAR);
				}
				break;
			case 4:
				{
				setState(126);
				funCall();
				}
				break;
			case 5:
				{
				setState(127);
				unaryOp();
				setState(128);
				expr(3);
				}
				break;
			case 6:
				{
				setState(130);
				match(LPAREN);
				setState(131);
				expr(0);
				setState(132);
				match(RPAREN);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(142);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ExprContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_expr);
					setState(136);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(137);
					binaryOp();
					setState(138);
					expr(3);
					}
					} 
				}
				setState(144);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class FunCallContext extends ParserRuleContext {
		public FuncNameContext funcName() {
			return getRuleContext(FuncNameContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(CSubParser.LPAREN, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(CSubParser.RPAREN, 0); }
		public List<TerminalNode> COMMA() { return getTokens(CSubParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CSubParser.COMMA, i);
		}
		public FunCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funCall; }
	}

	public final FunCallContext funCall() throws RecognitionException {
		FunCallContext _localctx = new FunCallContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_funCall);
		int _la;
		try {
			setState(161);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(145);
				funcName();
				setState(146);
				match(LPAREN);
				setState(147);
				expr(0);
				setState(152);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(148);
					match(COMMA);
					setState(149);
					expr(0);
					}
					}
					setState(154);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(155);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(157);
				funcName();
				setState(158);
				match(LPAREN);
				setState(159);
				match(RPAREN);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnaryOpContext extends ParserRuleContext {
		public TerminalNode NOT() { return getToken(CSubParser.NOT, 0); }
		public TerminalNode MUL() { return getToken(CSubParser.MUL, 0); }
		public TerminalNode ADD() { return getToken(CSubParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(CSubParser.SUB, 0); }
		public UnaryOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryOp; }
	}

	public final UnaryOpContext unaryOp() throws RecognitionException {
		UnaryOpContext _localctx = new UnaryOpContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_unaryOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << ADD) | (1L << SUB) | (1L << MUL) | (1L << NOT))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BinaryOpContext extends ParserRuleContext {
		public TerminalNode MUL() { return getToken(CSubParser.MUL, 0); }
		public TerminalNode ADD() { return getToken(CSubParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(CSubParser.SUB, 0); }
		public TerminalNode DIV() { return getToken(CSubParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(CSubParser.MOD, 0); }
		public TerminalNode AND() { return getToken(CSubParser.AND, 0); }
		public TerminalNode OR() { return getToken(CSubParser.OR, 0); }
		public BinaryOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_binaryOp; }
	}

	public final BinaryOpContext binaryOp() throws RecognitionException {
		BinaryOpContext _localctx = new BinaryOpContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_binaryOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << ADD) | (1L << SUB) | (1L << MUL) | (1L << DIV) | (1L << MOD) | (1L << AND) | (1L << OR))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public TerminalNode LCURLY() { return getToken(CSubParser.LCURLY, 0); }
		public ProgramContext program() {
			return getRuleContext(ProgramContext.class,0);
		}
		public TerminalNode RCURLY() { return getToken(CSubParser.RCURLY, 0); }
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			match(LCURLY);
			setState(168);
			program();
			setState(169);
			match(RCURLY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__12) | (1L << T__13) | (1L << T__14) | (1L << T__15) | (1L << T__16) | (1L << T__17))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 10:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3)\u00b0\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\3\2\3\2\3"+
		"\2\3\2\5\2\'\n\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5"+
		"\3\66\n\3\3\4\3\4\5\4:\n\4\3\5\3\5\3\5\3\5\3\5\3\5\5\5B\n\5\3\6\3\6\3"+
		"\6\3\6\3\6\3\6\3\6\5\6K\n\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\5\t_\n\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\n\3\n\7\no\n\n\f\n\16\nr\13\n\3\n\3\n\3\n\3\n\3\n"+
		"\5\ny\n\n\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\5"+
		"\f\u0089\n\f\3\f\3\f\3\f\3\f\7\f\u008f\n\f\f\f\16\f\u0092\13\f\3\r\3\r"+
		"\3\r\3\r\3\r\7\r\u0099\n\r\f\r\16\r\u009c\13\r\3\r\3\r\3\r\3\r\3\r\3\r"+
		"\5\r\u00a4\n\r\3\16\3\16\3\17\3\17\3\20\3\20\3\20\3\20\3\21\3\21\3\21"+
		"\2\3\26\22\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \2\5\5\2\7\t\30\32#"+
		"#\5\2\n\16\30\34!\"\3\2\17\24\2\u00b4\2&\3\2\2\2\4\65\3\2\2\2\6\67\3\2"+
		"\2\2\bA\3\2\2\2\nJ\3\2\2\2\fL\3\2\2\2\16R\3\2\2\2\20^\3\2\2\2\22x\3\2"+
		"\2\2\24z\3\2\2\2\26\u0088\3\2\2\2\30\u00a3\3\2\2\2\32\u00a5\3\2\2\2\34"+
		"\u00a7\3\2\2\2\36\u00a9\3\2\2\2 \u00ad\3\2\2\2\"\'\5\4\3\2#$\5\4\3\2$"+
		"%\5\2\2\2%\'\3\2\2\2&\"\3\2\2\2&#\3\2\2\2\'\3\3\2\2\2()\5\n\6\2)*\7\37"+
		"\2\2*\66\3\2\2\2+,\5\26\f\2,-\7\37\2\2-\66\3\2\2\2.\66\5\16\b\2/\66\5"+
		"\20\t\2\60\66\5\f\7\2\61\66\5\36\20\2\62\63\5\6\4\2\63\64\7\37\2\2\64"+
		"\66\3\2\2\2\65(\3\2\2\2\65+\3\2\2\2\65.\3\2\2\2\65/\3\2\2\2\65\60\3\2"+
		"\2\2\65\61\3\2\2\2\65\62\3\2\2\2\66\5\3\2\2\2\679\7\3\2\28:\5\26\f\29"+
		"8\3\2\2\29:\3\2\2\2:\7\3\2\2\2;<\5 \21\2<=\7)\2\2=B\3\2\2\2>?\5 \21\2"+
		"?@\5\n\6\2@B\3\2\2\2A;\3\2\2\2A>\3\2\2\2B\t\3\2\2\2CD\7)\2\2DE\7 \2\2"+
		"EK\5\26\f\2FG\7\32\2\2GH\7)\2\2HI\7 \2\2IK\5\26\f\2JC\3\2\2\2JF\3\2\2"+
		"\2K\13\3\2\2\2LM\7\4\2\2MN\7$\2\2NO\5\26\f\2OP\7%\2\2PQ\5\36\20\2Q\r\3"+
		"\2\2\2RS\7\5\2\2ST\7$\2\2TU\5\26\f\2UV\7%\2\2VW\5\36\20\2WX\7\6\2\2XY"+
		"\5\36\20\2Y\17\3\2\2\2Z[\5\b\5\2[\\\7\37\2\2\\_\3\2\2\2]_\5\22\n\2^Z\3"+
		"\2\2\2^]\3\2\2\2_\21\3\2\2\2`a\5 \21\2ab\5\24\13\2bc\7$\2\2cd\7%\2\2d"+
		"e\7&\2\2ef\5\2\2\2fg\7\'\2\2gy\3\2\2\2hi\5 \21\2ij\5\24\13\2jk\7$\2\2"+
		"kp\5\b\5\2lm\7\35\2\2mo\5\b\5\2nl\3\2\2\2or\3\2\2\2pn\3\2\2\2pq\3\2\2"+
		"\2qs\3\2\2\2rp\3\2\2\2st\7%\2\2tu\7&\2\2uv\5\2\2\2vw\7\'\2\2wy\3\2\2\2"+
		"x`\3\2\2\2xh\3\2\2\2y\23\3\2\2\2z{\7)\2\2{\25\3\2\2\2|}\b\f\1\2}\u0089"+
		"\7)\2\2~\u0089\7(\2\2\177\u0089\7\25\2\2\u0080\u0089\5\30\r\2\u0081\u0082"+
		"\5\32\16\2\u0082\u0083\5\26\f\5\u0083\u0089\3\2\2\2\u0084\u0085\7$\2\2"+
		"\u0085\u0086\5\26\f\2\u0086\u0087\7%\2\2\u0087\u0089\3\2\2\2\u0088|\3"+
		"\2\2\2\u0088~\3\2\2\2\u0088\177\3\2\2\2\u0088\u0080\3\2\2\2\u0088\u0081"+
		"\3\2\2\2\u0088\u0084\3\2\2\2\u0089\u0090\3\2\2\2\u008a\u008b\f\4\2\2\u008b"+
		"\u008c\5\34\17\2\u008c\u008d\5\26\f\5\u008d\u008f\3\2\2\2\u008e\u008a"+
		"\3\2\2\2\u008f\u0092\3\2\2\2\u0090\u008e\3\2\2\2\u0090\u0091\3\2\2\2\u0091"+
		"\27\3\2\2\2\u0092\u0090\3\2\2\2\u0093\u0094\5\24\13\2\u0094\u0095\7$\2"+
		"\2\u0095\u009a\5\26\f\2\u0096\u0097\7\35\2\2\u0097\u0099\5\26\f\2\u0098"+
		"\u0096\3\2\2\2\u0099\u009c\3\2\2\2\u009a\u0098\3\2\2\2\u009a\u009b\3\2"+
		"\2\2\u009b\u009d\3\2\2\2\u009c\u009a\3\2\2\2\u009d\u009e\7%\2\2\u009e"+
		"\u00a4\3\2\2\2\u009f\u00a0\5\24\13\2\u00a0\u00a1\7$\2\2\u00a1\u00a2\7"+
		"%\2\2\u00a2\u00a4\3\2\2\2\u00a3\u0093\3\2\2\2\u00a3\u009f\3\2\2\2\u00a4"+
		"\31\3\2\2\2\u00a5\u00a6\t\2\2\2\u00a6\33\3\2\2\2\u00a7\u00a8\t\3\2\2\u00a8"+
		"\35\3\2\2\2\u00a9\u00aa\7&\2\2\u00aa\u00ab\5\2\2\2\u00ab\u00ac\7\'\2\2"+
		"\u00ac\37\3\2\2\2\u00ad\u00ae\t\4\2\2\u00ae!\3\2\2\2\16&\659AJ^px\u0088"+
		"\u0090\u009a\u00a3";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}