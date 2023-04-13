// Generated from c:\Projects\CS4215\C-interpreter\grammers\SubC\CSub.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CSLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, STRING=6, WS=7, ADD=8, SUB=9, 
		MUL=10, DIV=11, MOD=12, COMMA=13, PRINT=14, COLON=15, EQ=16, AND=17, OR=18, 
		NOT=19, LPAREN=20, RPAREN=21, LCURLY=22, RCURLY=23, INT=24, ID=25;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "STRING", "WS", "ADD", "SUB", 
			"MUL", "DIV", "MOD", "COMMA", "PRINT", "COLON", "EQ", "AND", "OR", "NOT", 
			"LPAREN", "RPAREN", "LCURLY", "RCURLY", "INT", "ID"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'if'", "'else'", "'++'", "'--'", "'=='", null, null, "'+'", "'-'", 
			"'*'", "'/'", "'%'", "','", "'print'", "';'", "'='", "'&&'", "'||'", 
			"'!'", "'('", "')'", "'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, "STRING", "WS", "ADD", "SUB", "MUL", 
			"DIV", "MOD", "COMMA", "PRINT", "COLON", "EQ", "AND", "OR", "NOT", "LPAREN", 
			"RPAREN", "LCURLY", "RCURLY", "INT", "ID"
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


	public CSLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "CSub.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\33\u0088\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\5\3\5\3"+
		"\5\3\6\3\6\3\6\3\7\3\7\7\7I\n\7\f\7\16\7L\13\7\3\7\3\7\3\b\6\bQ\n\b\r"+
		"\b\16\bR\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3"+
		"\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22\3\22\3\23\3"+
		"\23\3\23\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\3\30\3\30\3\31\6\31~"+
		"\n\31\r\31\16\31\177\3\32\3\32\7\32\u0084\n\32\f\32\16\32\u0087\13\32"+
		"\2\2\33\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17"+
		"\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\3\2\6\5\2\13"+
		"\f\17\17\"\"\3\2\62;\5\2C\\aac|\6\2\62;C\\aac|\2\u008b\2\3\3\2\2\2\2\5"+
		"\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2"+
		"\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33"+
		"\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2"+
		"\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2"+
		"\63\3\2\2\2\3\65\3\2\2\2\58\3\2\2\2\7=\3\2\2\2\t@\3\2\2\2\13C\3\2\2\2"+
		"\rF\3\2\2\2\17P\3\2\2\2\21V\3\2\2\2\23X\3\2\2\2\25Z\3\2\2\2\27\\\3\2\2"+
		"\2\31^\3\2\2\2\33`\3\2\2\2\35b\3\2\2\2\37h\3\2\2\2!j\3\2\2\2#l\3\2\2\2"+
		"%o\3\2\2\2\'r\3\2\2\2)t\3\2\2\2+v\3\2\2\2-x\3\2\2\2/z\3\2\2\2\61}\3\2"+
		"\2\2\63\u0081\3\2\2\2\65\66\7k\2\2\66\67\7h\2\2\67\4\3\2\2\289\7g\2\2"+
		"9:\7n\2\2:;\7u\2\2;<\7g\2\2<\6\3\2\2\2=>\7-\2\2>?\7-\2\2?\b\3\2\2\2@A"+
		"\7/\2\2AB\7/\2\2B\n\3\2\2\2CD\7?\2\2DE\7?\2\2E\f\3\2\2\2FJ\7$\2\2GI\4"+
		"\"\u0080\2HG\3\2\2\2IL\3\2\2\2JH\3\2\2\2JK\3\2\2\2KM\3\2\2\2LJ\3\2\2\2"+
		"MN\7$\2\2N\16\3\2\2\2OQ\t\2\2\2PO\3\2\2\2QR\3\2\2\2RP\3\2\2\2RS\3\2\2"+
		"\2ST\3\2\2\2TU\b\b\2\2U\20\3\2\2\2VW\7-\2\2W\22\3\2\2\2XY\7/\2\2Y\24\3"+
		"\2\2\2Z[\7,\2\2[\26\3\2\2\2\\]\7\61\2\2]\30\3\2\2\2^_\7\'\2\2_\32\3\2"+
		"\2\2`a\7.\2\2a\34\3\2\2\2bc\7r\2\2cd\7t\2\2de\7k\2\2ef\7p\2\2fg\7v\2\2"+
		"g\36\3\2\2\2hi\7=\2\2i \3\2\2\2jk\7?\2\2k\"\3\2\2\2lm\7(\2\2mn\7(\2\2"+
		"n$\3\2\2\2op\7~\2\2pq\7~\2\2q&\3\2\2\2rs\7#\2\2s(\3\2\2\2tu\7*\2\2u*\3"+
		"\2\2\2vw\7+\2\2w,\3\2\2\2xy\7}\2\2y.\3\2\2\2z{\7\177\2\2{\60\3\2\2\2|"+
		"~\t\3\2\2}|\3\2\2\2~\177\3\2\2\2\177}\3\2\2\2\177\u0080\3\2\2\2\u0080"+
		"\62\3\2\2\2\u0081\u0085\t\4\2\2\u0082\u0084\t\5\2\2\u0083\u0082\3\2\2"+
		"\2\u0084\u0087\3\2\2\2\u0085\u0083\3\2\2\2\u0085\u0086\3\2\2\2\u0086\64"+
		"\3\2\2\2\u0087\u0085\3\2\2\2\7\2JR\177\u0085\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}