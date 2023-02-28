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
		T__9=10, T__10=11, T__11=12, STRING=13, WS=14, ADD=15, SUB=16, MUL=17, 
		DIV=18, MOD=19, COMMA=20, PRINT=21, COLON=22, EQ=23, AND=24, OR=25, NOT=26, 
		LPAREN=27, RPAREN=28, LCURLY=29, RCURLY=30, INT=31, ID=32;
	public static final int
		RULE_program = 0, RULE_stat = 1, RULE_return = 2, RULE_varDef = 3, RULE_assg = 4, 
		RULE_whileStat = 5, RULE_ifStat = 6, RULE_def = 7, RULE_funDef = 8, RULE_expr = 9, 
		RULE_funCall = 10, RULE_unaryOp = 11, RULE_binaryOp = 12, RULE_block = 13, 
		RULE_type = 14;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "stat", "return", "varDef", "assg", "whileStat", "ifStat", 
			"def", "funDef", "expr", "funCall", "unaryOp", "binaryOp", "block", "type"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'return'", "'while'", "'if'", "'else'", "'++'", "'--'", "'&'", 
			"'=='", "'void'", "'int'", "'char'", "'void*'", null, null, "'+'", "'-'", 
			"'*'", "'/'", "'%'", "','", "'print'", "';'", "'='", "'&&'", "'||'", 
			"'!'", "'('", "')'", "'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "STRING", "WS", "ADD", "SUB", "MUL", "DIV", "MOD", "COMMA", "PRINT", 
			"COLON", "EQ", "AND", "OR", "NOT", "LPAREN", "RPAREN", "LCURLY", "RCURLY", 
			"INT", "ID"
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
		return program(0);
	}

	private ProgramContext program(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ProgramContext _localctx = new ProgramContext(_ctx, _parentState);
		ProgramContext _prevctx = _localctx;
		int _startState = 0;
		enterRecursionRule(_localctx, 0, RULE_program, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(31);
			stat();
			}
			_ctx.stop = _input.LT(-1);
			setState(37);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ProgramContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_program);
					setState(33);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(34);
					stat();
					}
					} 
				}
				setState(39);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
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
			setState(53);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(40);
				assg();
				setState(41);
				match(COLON);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(43);
				expr(0);
				setState(44);
				match(COLON);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(46);
				ifStat();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(47);
				def();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(48);
				whileStat();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(49);
				block();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(50);
				return();
				setState(51);
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
			setState(55);
			match(T__0);
			setState(57);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << ADD) | (1L << SUB) | (1L << MUL) | (1L << NOT) | (1L << INT) | (1L << ID))) != 0)) {
				{
				setState(56);
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
			setState(65);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(59);
				type();
				setState(60);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(62);
				type();
				setState(63);
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
		public AssgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assg; }
	}

	public final AssgContext assg() throws RecognitionException {
		AssgContext _localctx = new AssgContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_assg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			match(ID);
			setState(68);
			match(EQ);
			setState(69);
			expr(0);
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
			setState(71);
			match(T__1);
			setState(72);
			match(LPAREN);
			setState(73);
			expr(0);
			setState(74);
			match(RPAREN);
			setState(75);
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
			setState(77);
			match(T__2);
			setState(78);
			match(LPAREN);
			setState(79);
			expr(0);
			setState(80);
			match(RPAREN);
			setState(81);
			block();
			setState(82);
			match(T__3);
			setState(83);
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
			setState(89);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(85);
				varDef();
				setState(86);
				match(COLON);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(88);
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
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public List<TerminalNode> ID() { return getTokens(CSubParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(CSubParser.ID, i);
		}
		public TerminalNode LPAREN() { return getToken(CSubParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CSubParser.RPAREN, 0); }
		public TerminalNode LCURLY() { return getToken(CSubParser.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(CSubParser.RCURLY, 0); }
		public List<TerminalNode> COMMA() { return getTokens(CSubParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CSubParser.COMMA, i);
		}
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
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
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			type();
			setState(92);
			match(ID);
			setState(93);
			match(LPAREN);
			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11))) != 0)) {
				{
				setState(94);
				type();
				setState(95);
				match(ID);
				}
			}

			setState(105);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(99);
				match(COMMA);
				setState(100);
				type();
				setState(101);
				match(ID);
				}
				}
				setState(107);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(108);
			match(RPAREN);
			setState(109);
			match(LCURLY);
			setState(113);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << ADD) | (1L << SUB) | (1L << MUL) | (1L << NOT) | (1L << LCURLY) | (1L << INT) | (1L << ID))) != 0)) {
				{
				{
				setState(110);
				stat();
				}
				}
				setState(115);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(116);
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

	public static class ExprContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CSubParser.ID, 0); }
		public TerminalNode INT() { return getToken(CSubParser.INT, 0); }
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
		int _startState = 18;
		enterRecursionRule(_localctx, 18, RULE_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(119);
				match(ID);
				}
				break;
			case 2:
				{
				setState(120);
				match(INT);
				}
				break;
			case 3:
				{
				setState(121);
				funCall();
				}
				break;
			case 4:
				{
				setState(122);
				unaryOp();
				setState(123);
				expr(2);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(133);
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
					setState(127);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(128);
					binaryOp();
					setState(129);
					expr(2);
					}
					} 
				}
				setState(135);
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
		public TerminalNode ID() { return getToken(CSubParser.ID, 0); }
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
		enterRule(_localctx, 20, RULE_funCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			match(ID);
			setState(137);
			match(LPAREN);
			setState(138);
			expr(0);
			setState(143);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(139);
				match(COMMA);
				setState(140);
				expr(0);
				}
				}
				setState(145);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(146);
			match(RPAREN);
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
		enterRule(_localctx, 22, RULE_unaryOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
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
		enterRule(_localctx, 24, RULE_binaryOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(150);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__7) | (1L << ADD) | (1L << SUB) | (1L << MUL) | (1L << DIV) | (1L << MOD) | (1L << AND) | (1L << OR))) != 0)) ) {
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
		enterRule(_localctx, 26, RULE_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
			match(LCURLY);
			setState(153);
			program(0);
			setState(154);
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
		enterRule(_localctx, 28, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(156);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11))) != 0)) ) {
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
		case 0:
			return program_sempred((ProgramContext)_localctx, predIndex);
		case 9:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean program_sempred(ProgramContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\"\u00a1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\3\2\3\2\3\2\3\2"+
		"\7\2&\n\2\f\2\16\2)\13\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\5\38\n\3\3\4\3\4\5\4<\n\4\3\5\3\5\3\5\3\5\3\5\3\5\5\5D\n\5\3\6"+
		"\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\t\3\t\3\t\3\t\5\t\\\n\t\3\n\3\n\3\n\3\n\3\n\3\n\5\nd\n\n\3\n\3\n\3\n"+
		"\3\n\7\nj\n\n\f\n\16\nm\13\n\3\n\3\n\3\n\7\nr\n\n\f\n\16\nu\13\n\3\n\3"+
		"\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\5\13\u0080\n\13\3\13\3\13\3\13\3"+
		"\13\7\13\u0086\n\13\f\13\16\13\u0089\13\13\3\f\3\f\3\f\3\f\3\f\7\f\u0090"+
		"\n\f\f\f\16\f\u0093\13\f\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\17\3\17"+
		"\3\20\3\20\3\20\2\4\2\24\21\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36\2\5"+
		"\5\2\7\t\21\23\34\34\5\2\n\n\21\25\32\33\3\2\13\16\2\u00a3\2 \3\2\2\2"+
		"\4\67\3\2\2\2\69\3\2\2\2\bC\3\2\2\2\nE\3\2\2\2\fI\3\2\2\2\16O\3\2\2\2"+
		"\20[\3\2\2\2\22]\3\2\2\2\24\177\3\2\2\2\26\u008a\3\2\2\2\30\u0096\3\2"+
		"\2\2\32\u0098\3\2\2\2\34\u009a\3\2\2\2\36\u009e\3\2\2\2 !\b\2\1\2!\"\5"+
		"\4\3\2\"\'\3\2\2\2#$\f\3\2\2$&\5\4\3\2%#\3\2\2\2&)\3\2\2\2\'%\3\2\2\2"+
		"\'(\3\2\2\2(\3\3\2\2\2)\'\3\2\2\2*+\5\n\6\2+,\7\30\2\2,8\3\2\2\2-.\5\24"+
		"\13\2./\7\30\2\2/8\3\2\2\2\608\5\16\b\2\618\5\20\t\2\628\5\f\7\2\638\5"+
		"\34\17\2\64\65\5\6\4\2\65\66\7\30\2\2\668\3\2\2\2\67*\3\2\2\2\67-\3\2"+
		"\2\2\67\60\3\2\2\2\67\61\3\2\2\2\67\62\3\2\2\2\67\63\3\2\2\2\67\64\3\2"+
		"\2\28\5\3\2\2\29;\7\3\2\2:<\5\24\13\2;:\3\2\2\2;<\3\2\2\2<\7\3\2\2\2="+
		">\5\36\20\2>?\7\"\2\2?D\3\2\2\2@A\5\36\20\2AB\5\n\6\2BD\3\2\2\2C=\3\2"+
		"\2\2C@\3\2\2\2D\t\3\2\2\2EF\7\"\2\2FG\7\31\2\2GH\5\24\13\2H\13\3\2\2\2"+
		"IJ\7\4\2\2JK\7\35\2\2KL\5\24\13\2LM\7\36\2\2MN\5\34\17\2N\r\3\2\2\2OP"+
		"\7\5\2\2PQ\7\35\2\2QR\5\24\13\2RS\7\36\2\2ST\5\34\17\2TU\7\6\2\2UV\5\34"+
		"\17\2V\17\3\2\2\2WX\5\b\5\2XY\7\30\2\2Y\\\3\2\2\2Z\\\5\22\n\2[W\3\2\2"+
		"\2[Z\3\2\2\2\\\21\3\2\2\2]^\5\36\20\2^_\7\"\2\2_c\7\35\2\2`a\5\36\20\2"+
		"ab\7\"\2\2bd\3\2\2\2c`\3\2\2\2cd\3\2\2\2dk\3\2\2\2ef\7\26\2\2fg\5\36\20"+
		"\2gh\7\"\2\2hj\3\2\2\2ie\3\2\2\2jm\3\2\2\2ki\3\2\2\2kl\3\2\2\2ln\3\2\2"+
		"\2mk\3\2\2\2no\7\36\2\2os\7\37\2\2pr\5\4\3\2qp\3\2\2\2ru\3\2\2\2sq\3\2"+
		"\2\2st\3\2\2\2tv\3\2\2\2us\3\2\2\2vw\7 \2\2w\23\3\2\2\2xy\b\13\1\2y\u0080"+
		"\7\"\2\2z\u0080\7!\2\2{\u0080\5\26\f\2|}\5\30\r\2}~\5\24\13\4~\u0080\3"+
		"\2\2\2\177x\3\2\2\2\177z\3\2\2\2\177{\3\2\2\2\177|\3\2\2\2\u0080\u0087"+
		"\3\2\2\2\u0081\u0082\f\3\2\2\u0082\u0083\5\32\16\2\u0083\u0084\5\24\13"+
		"\4\u0084\u0086\3\2\2\2\u0085\u0081\3\2\2\2\u0086\u0089\3\2\2\2\u0087\u0085"+
		"\3\2\2\2\u0087\u0088\3\2\2\2\u0088\25\3\2\2\2\u0089\u0087\3\2\2\2\u008a"+
		"\u008b\7\"\2\2\u008b\u008c\7\35\2\2\u008c\u0091\5\24\13\2\u008d\u008e"+
		"\7\26\2\2\u008e\u0090\5\24\13\2\u008f\u008d\3\2\2\2\u0090\u0093\3\2\2"+
		"\2\u0091\u008f\3\2\2\2\u0091\u0092\3\2\2\2\u0092\u0094\3\2\2\2\u0093\u0091"+
		"\3\2\2\2\u0094\u0095\7\36\2\2\u0095\27\3\2\2\2\u0096\u0097\t\2\2\2\u0097"+
		"\31\3\2\2\2\u0098\u0099\t\3\2\2\u0099\33\3\2\2\2\u009a\u009b\7\37\2\2"+
		"\u009b\u009c\5\2\2\2\u009c\u009d\7 \2\2\u009d\35\3\2\2\2\u009e\u009f\t"+
		"\4\2\2\u009f\37\3\2\2\2\r\'\67;C[cks\177\u0087\u0091";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}