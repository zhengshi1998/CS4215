// Generated from c:\Projects\CS4215\CS4215\src\grammers\SubC\CSub.g4 by ANTLR 4.9.2
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
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, CHAR=24, STRING=25, 
		WS=26, ADD=27, SUB=28, MUL=29, DIV=30, MOD=31, COMMA=32, PRINT=33, COLON=34, 
		EQ=35, AND=36, OR=37, NOT=38, LPAREN=39, RPAREN=40, LCURLY=41, RCURLY=42, 
		INT=43, ID=44;
	public static final int
		RULE_program = 0, RULE_stat = 1, RULE_forStat = 2, RULE_gotoStat = 3, 
		RULE_labelStat = 4, RULE_breakStat = 5, RULE_continueStat = 6, RULE_return = 7, 
		RULE_varDef = 8, RULE_assg = 9, RULE_whileStat = 10, RULE_ifStat = 11, 
		RULE_def = 12, RULE_funDef = 13, RULE_funcName = 14, RULE_expr = 15, RULE_funCall = 16, 
		RULE_unaryOp = 17, RULE_binaryOp = 18, RULE_block = 19, RULE_type = 20;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "stat", "forStat", "gotoStat", "labelStat", "breakStat", "continueStat", 
			"return", "varDef", "assg", "whileStat", "ifStat", "def", "funDef", "funcName", 
			"expr", "funCall", "unaryOp", "binaryOp", "block", "type"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':'", "'for'", "'goto'", "'break'", "'continue'", "'return'", 
			"'while'", "'if'", "'else'", "'++'", "'--'", "'&'", "'=='", "'<'", "'>'", 
			"'>='", "'<='", "'void'", "'int'", "'char'", "'void*'", "'int*'", "'char*'", 
			null, null, null, "'+'", "'-'", "'*'", "'/'", "'%'", "','", "'print'", 
			"';'", "'='", "'&&'", "'||'", "'!'", "'('", "')'", "'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			"CHAR", "STRING", "WS", "ADD", "SUB", "MUL", "DIV", "MOD", "COMMA", "PRINT", 
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
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		try {
			setState(46);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(42);
				stat();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(43);
				stat();
				setState(44);
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
		public ForStatContext forStat() {
			return getRuleContext(ForStatContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public GotoStatContext gotoStat() {
			return getRuleContext(GotoStatContext.class,0);
		}
		public LabelStatContext labelStat() {
			return getRuleContext(LabelStatContext.class,0);
		}
		public BreakStatContext breakStat() {
			return getRuleContext(BreakStatContext.class,0);
		}
		public ContinueStatContext continueStat() {
			return getRuleContext(ContinueStatContext.class,0);
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
			setState(74);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(48);
				assg();
				setState(49);
				match(COLON);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(51);
				expr(0);
				setState(52);
				match(COLON);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(54);
				ifStat();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(55);
				def();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(56);
				whileStat();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(57);
				forStat();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(58);
				block();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(59);
				gotoStat();
				setState(60);
				match(COLON);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(62);
				labelStat();
				setState(63);
				match(T__0);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(65);
				breakStat();
				setState(66);
				match(COLON);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(68);
				continueStat();
				setState(69);
				match(COLON);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(71);
				return();
				setState(72);
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

	public static class ForStatContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(CSubParser.LPAREN, 0); }
		public List<AssgContext> assg() {
			return getRuleContexts(AssgContext.class);
		}
		public AssgContext assg(int i) {
			return getRuleContext(AssgContext.class,i);
		}
		public List<TerminalNode> COLON() { return getTokens(CSubParser.COLON); }
		public TerminalNode COLON(int i) {
			return getToken(CSubParser.COLON, i);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(CSubParser.RPAREN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ForStatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStat; }
	}

	public final ForStatContext forStat() throws RecognitionException {
		ForStatContext _localctx = new ForStatContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_forStat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			match(T__1);
			setState(77);
			match(LPAREN);
			setState(78);
			assg();
			setState(79);
			match(COLON);
			setState(80);
			expr(0);
			setState(81);
			match(COLON);
			setState(82);
			assg();
			setState(83);
			match(RPAREN);
			setState(84);
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

	public static class GotoStatContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CSubParser.ID, 0); }
		public GotoStatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gotoStat; }
	}

	public final GotoStatContext gotoStat() throws RecognitionException {
		GotoStatContext _localctx = new GotoStatContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_gotoStat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(86);
			match(T__2);
			setState(87);
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

	public static class LabelStatContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CSubParser.ID, 0); }
		public LabelStatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_labelStat; }
	}

	public final LabelStatContext labelStat() throws RecognitionException {
		LabelStatContext _localctx = new LabelStatContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_labelStat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
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

	public static class BreakStatContext extends ParserRuleContext {
		public BreakStatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_breakStat; }
	}

	public final BreakStatContext breakStat() throws RecognitionException {
		BreakStatContext _localctx = new BreakStatContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_breakStat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			match(T__3);
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

	public static class ContinueStatContext extends ParserRuleContext {
		public ContinueStatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_continueStat; }
	}

	public final ContinueStatContext continueStat() throws RecognitionException {
		ContinueStatContext _localctx = new ContinueStatContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_continueStat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			match(T__4);
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
		enterRule(_localctx, 14, RULE_return);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			match(T__5);
			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << CHAR) | (1L << ADD) | (1L << SUB) | (1L << MUL) | (1L << NOT) | (1L << LPAREN) | (1L << INT) | (1L << ID))) != 0)) {
				{
				setState(96);
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
		enterRule(_localctx, 16, RULE_varDef);
		try {
			setState(105);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(99);
				type();
				setState(100);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(102);
				type();
				setState(103);
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
		enterRule(_localctx, 18, RULE_assg);
		try {
			setState(114);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(107);
				match(ID);
				setState(108);
				match(EQ);
				setState(109);
				expr(0);
				}
				break;
			case MUL:
				enterOuterAlt(_localctx, 2);
				{
				setState(110);
				match(MUL);
				setState(111);
				match(ID);
				setState(112);
				match(EQ);
				setState(113);
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
		enterRule(_localctx, 20, RULE_whileStat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(116);
			match(T__6);
			setState(117);
			match(LPAREN);
			setState(118);
			expr(0);
			setState(119);
			match(RPAREN);
			setState(120);
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
		enterRule(_localctx, 22, RULE_ifStat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			match(T__7);
			setState(123);
			match(LPAREN);
			setState(124);
			expr(0);
			setState(125);
			match(RPAREN);
			setState(126);
			block();
			setState(127);
			match(T__8);
			setState(128);
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
		enterRule(_localctx, 24, RULE_def);
		try {
			setState(134);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(130);
				varDef();
				setState(131);
				match(COLON);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(133);
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
		enterRule(_localctx, 26, RULE_funDef);
		int _la;
		try {
			setState(160);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(136);
				type();
				setState(137);
				funcName();
				setState(138);
				match(LPAREN);
				setState(139);
				match(RPAREN);
				setState(140);
				match(LCURLY);
				setState(141);
				program();
				setState(142);
				match(RCURLY);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(144);
				type();
				setState(145);
				funcName();
				setState(146);
				match(LPAREN);
				{
				setState(147);
				varDef();
				}
				setState(152);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(148);
					match(COMMA);
					setState(149);
					varDef();
					}
					}
					setState(154);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(155);
				match(RPAREN);
				setState(156);
				match(LCURLY);
				setState(157);
				program();
				setState(158);
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
		enterRule(_localctx, 28, RULE_funcName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
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
		int _startState = 30;
		enterRecursionRule(_localctx, 30, RULE_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(165);
				match(ID);
				}
				break;
			case 2:
				{
				setState(166);
				match(INT);
				}
				break;
			case 3:
				{
				setState(167);
				match(CHAR);
				}
				break;
			case 4:
				{
				setState(168);
				funCall();
				}
				break;
			case 5:
				{
				setState(169);
				unaryOp();
				setState(170);
				expr(3);
				}
				break;
			case 6:
				{
				setState(172);
				match(LPAREN);
				setState(173);
				expr(0);
				setState(174);
				match(RPAREN);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(184);
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
					setState(178);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(179);
					binaryOp();
					setState(180);
					expr(3);
					}
					} 
				}
				setState(186);
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
		enterRule(_localctx, 32, RULE_funCall);
		int _la;
		try {
			setState(203);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(187);
				funcName();
				setState(188);
				match(LPAREN);
				setState(189);
				expr(0);
				setState(194);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(190);
					match(COMMA);
					setState(191);
					expr(0);
					}
					}
					setState(196);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(197);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(199);
				funcName();
				setState(200);
				match(LPAREN);
				setState(201);
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
		enterRule(_localctx, 34, RULE_unaryOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << ADD) | (1L << SUB) | (1L << MUL) | (1L << NOT))) != 0)) ) {
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
		enterRule(_localctx, 36, RULE_binaryOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(207);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__12) | (1L << T__13) | (1L << T__14) | (1L << T__15) | (1L << T__16) | (1L << ADD) | (1L << SUB) | (1L << MUL) | (1L << DIV) | (1L << MOD) | (1L << AND) | (1L << OR))) != 0)) ) {
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
		enterRule(_localctx, 38, RULE_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			match(LCURLY);
			setState(210);
			program();
			setState(211);
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
		enterRule(_localctx, 40, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__17) | (1L << T__18) | (1L << T__19) | (1L << T__20) | (1L << T__21) | (1L << T__22))) != 0)) ) {
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
		case 15:
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3.\u00da\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\3\2\3\2\3\2\3\2\5\2\61\n\2\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3M\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\5\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\5\td\n\t\3\n"+
		"\3\n\3\n\3\n\3\n\3\n\5\nl\n\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\5\13"+
		"u\n\13\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3"+
		"\16\3\16\3\16\5\16\u0089\n\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\17\3\17\7\17\u0099\n\17\f\17\16\17\u009c\13\17"+
		"\3\17\3\17\3\17\3\17\3\17\5\17\u00a3\n\17\3\20\3\20\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\5\21\u00b3\n\21\3\21\3\21\3\21"+
		"\3\21\7\21\u00b9\n\21\f\21\16\21\u00bc\13\21\3\22\3\22\3\22\3\22\3\22"+
		"\7\22\u00c3\n\22\f\22\16\22\u00c6\13\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\5\22\u00ce\n\22\3\23\3\23\3\24\3\24\3\25\3\25\3\25\3\25\3\26\3\26\3\26"+
		"\2\3 \27\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*\2\5\5\2\f\16\35"+
		"\37((\5\2\17\23\35!&\'\3\2\24\31\2\u00de\2\60\3\2\2\2\4L\3\2\2\2\6N\3"+
		"\2\2\2\bX\3\2\2\2\n[\3\2\2\2\f]\3\2\2\2\16_\3\2\2\2\20a\3\2\2\2\22k\3"+
		"\2\2\2\24t\3\2\2\2\26v\3\2\2\2\30|\3\2\2\2\32\u0088\3\2\2\2\34\u00a2\3"+
		"\2\2\2\36\u00a4\3\2\2\2 \u00b2\3\2\2\2\"\u00cd\3\2\2\2$\u00cf\3\2\2\2"+
		"&\u00d1\3\2\2\2(\u00d3\3\2\2\2*\u00d7\3\2\2\2,\61\5\4\3\2-.\5\4\3\2./"+
		"\5\2\2\2/\61\3\2\2\2\60,\3\2\2\2\60-\3\2\2\2\61\3\3\2\2\2\62\63\5\24\13"+
		"\2\63\64\7$\2\2\64M\3\2\2\2\65\66\5 \21\2\66\67\7$\2\2\67M\3\2\2\28M\5"+
		"\30\r\29M\5\32\16\2:M\5\26\f\2;M\5\6\4\2<M\5(\25\2=>\5\b\5\2>?\7$\2\2"+
		"?M\3\2\2\2@A\5\n\6\2AB\7\3\2\2BM\3\2\2\2CD\5\f\7\2DE\7$\2\2EM\3\2\2\2"+
		"FG\5\16\b\2GH\7$\2\2HM\3\2\2\2IJ\5\20\t\2JK\7$\2\2KM\3\2\2\2L\62\3\2\2"+
		"\2L\65\3\2\2\2L8\3\2\2\2L9\3\2\2\2L:\3\2\2\2L;\3\2\2\2L<\3\2\2\2L=\3\2"+
		"\2\2L@\3\2\2\2LC\3\2\2\2LF\3\2\2\2LI\3\2\2\2M\5\3\2\2\2NO\7\4\2\2OP\7"+
		")\2\2PQ\5\24\13\2QR\7$\2\2RS\5 \21\2ST\7$\2\2TU\5\24\13\2UV\7*\2\2VW\5"+
		"(\25\2W\7\3\2\2\2XY\7\5\2\2YZ\7.\2\2Z\t\3\2\2\2[\\\7.\2\2\\\13\3\2\2\2"+
		"]^\7\6\2\2^\r\3\2\2\2_`\7\7\2\2`\17\3\2\2\2ac\7\b\2\2bd\5 \21\2cb\3\2"+
		"\2\2cd\3\2\2\2d\21\3\2\2\2ef\5*\26\2fg\7.\2\2gl\3\2\2\2hi\5*\26\2ij\5"+
		"\24\13\2jl\3\2\2\2ke\3\2\2\2kh\3\2\2\2l\23\3\2\2\2mn\7.\2\2no\7%\2\2o"+
		"u\5 \21\2pq\7\37\2\2qr\7.\2\2rs\7%\2\2su\5 \21\2tm\3\2\2\2tp\3\2\2\2u"+
		"\25\3\2\2\2vw\7\t\2\2wx\7)\2\2xy\5 \21\2yz\7*\2\2z{\5(\25\2{\27\3\2\2"+
		"\2|}\7\n\2\2}~\7)\2\2~\177\5 \21\2\177\u0080\7*\2\2\u0080\u0081\5(\25"+
		"\2\u0081\u0082\7\13\2\2\u0082\u0083\5(\25\2\u0083\31\3\2\2\2\u0084\u0085"+
		"\5\22\n\2\u0085\u0086\7$\2\2\u0086\u0089\3\2\2\2\u0087\u0089\5\34\17\2"+
		"\u0088\u0084\3\2\2\2\u0088\u0087\3\2\2\2\u0089\33\3\2\2\2\u008a\u008b"+
		"\5*\26\2\u008b\u008c\5\36\20\2\u008c\u008d\7)\2\2\u008d\u008e\7*\2\2\u008e"+
		"\u008f\7+\2\2\u008f\u0090\5\2\2\2\u0090\u0091\7,\2\2\u0091\u00a3\3\2\2"+
		"\2\u0092\u0093\5*\26\2\u0093\u0094\5\36\20\2\u0094\u0095\7)\2\2\u0095"+
		"\u009a\5\22\n\2\u0096\u0097\7\"\2\2\u0097\u0099\5\22\n\2\u0098\u0096\3"+
		"\2\2\2\u0099\u009c\3\2\2\2\u009a\u0098\3\2\2\2\u009a\u009b\3\2\2\2\u009b"+
		"\u009d\3\2\2\2\u009c\u009a\3\2\2\2\u009d\u009e\7*\2\2\u009e\u009f\7+\2"+
		"\2\u009f\u00a0\5\2\2\2\u00a0\u00a1\7,\2\2\u00a1\u00a3\3\2\2\2\u00a2\u008a"+
		"\3\2\2\2\u00a2\u0092\3\2\2\2\u00a3\35\3\2\2\2\u00a4\u00a5\7.\2\2\u00a5"+
		"\37\3\2\2\2\u00a6\u00a7\b\21\1\2\u00a7\u00b3\7.\2\2\u00a8\u00b3\7-\2\2"+
		"\u00a9\u00b3\7\32\2\2\u00aa\u00b3\5\"\22\2\u00ab\u00ac\5$\23\2\u00ac\u00ad"+
		"\5 \21\5\u00ad\u00b3\3\2\2\2\u00ae\u00af\7)\2\2\u00af\u00b0\5 \21\2\u00b0"+
		"\u00b1\7*\2\2\u00b1\u00b3\3\2\2\2\u00b2\u00a6\3\2\2\2\u00b2\u00a8\3\2"+
		"\2\2\u00b2\u00a9\3\2\2\2\u00b2\u00aa\3\2\2\2\u00b2\u00ab\3\2\2\2\u00b2"+
		"\u00ae\3\2\2\2\u00b3\u00ba\3\2\2\2\u00b4\u00b5\f\4\2\2\u00b5\u00b6\5&"+
		"\24\2\u00b6\u00b7\5 \21\5\u00b7\u00b9\3\2\2\2\u00b8\u00b4\3\2\2\2\u00b9"+
		"\u00bc\3\2\2\2\u00ba\u00b8\3\2\2\2\u00ba\u00bb\3\2\2\2\u00bb!\3\2\2\2"+
		"\u00bc\u00ba\3\2\2\2\u00bd\u00be\5\36\20\2\u00be\u00bf\7)\2\2\u00bf\u00c4"+
		"\5 \21\2\u00c0\u00c1\7\"\2\2\u00c1\u00c3\5 \21\2\u00c2\u00c0\3\2\2\2\u00c3"+
		"\u00c6\3\2\2\2\u00c4\u00c2\3\2\2\2\u00c4\u00c5\3\2\2\2\u00c5\u00c7\3\2"+
		"\2\2\u00c6\u00c4\3\2\2\2\u00c7\u00c8\7*\2\2\u00c8\u00ce\3\2\2\2\u00c9"+
		"\u00ca\5\36\20\2\u00ca\u00cb\7)\2\2\u00cb\u00cc\7*\2\2\u00cc\u00ce\3\2"+
		"\2\2\u00cd\u00bd\3\2\2\2\u00cd\u00c9\3\2\2\2\u00ce#\3\2\2\2\u00cf\u00d0"+
		"\t\2\2\2\u00d0%\3\2\2\2\u00d1\u00d2\t\3\2\2\u00d2\'\3\2\2\2\u00d3\u00d4"+
		"\7+\2\2\u00d4\u00d5\5\2\2\2\u00d5\u00d6\7,\2\2\u00d6)\3\2\2\2\u00d7\u00d8"+
		"\t\4\2\2\u00d8+\3\2\2\2\16\60Lckt\u0088\u009a\u00a2\u00b2\u00ba\u00c4"+
		"\u00cd";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}