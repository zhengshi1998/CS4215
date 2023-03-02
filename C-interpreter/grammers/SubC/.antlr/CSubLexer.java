// Generated from d:\Courses\CS4215-PL_Impl\project\C-interpreter\grammers\SubC\CSub.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CSubLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, STRING=13, WS=14, ADD=15, SUB=16, MUL=17, 
		DIV=18, MOD=19, COMMA=20, PRINT=21, COLON=22, EQ=23, AND=24, OR=25, NOT=26, 
		LPAREN=27, RPAREN=28, LCURLY=29, RCURLY=30, INT=31, ID=32;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "STRING", "WS", "ADD", "SUB", "MUL", "DIV", 
			"MOD", "COMMA", "PRINT", "COLON", "EQ", "AND", "OR", "NOT", "LPAREN", 
			"RPAREN", "LCURLY", "RCURLY", "INT", "ID"
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


	public CSubLexer(CharStream input) {
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\"\u00b9\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3"+
		"\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\7\3\7\3\7\3\b\3\b\3\t\3\t\3\t\3\n\3\n"+
		"\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3"+
		"\r\3\r\3\16\3\16\7\16z\n\16\f\16\16\16}\13\16\3\16\3\16\3\17\6\17\u0082"+
		"\n\17\r\17\16\17\u0083\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22\3\23\3"+
		"\23\3\24\3\24\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\30\3"+
		"\30\3\31\3\31\3\31\3\32\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\36\3"+
		"\36\3\37\3\37\3 \6 \u00af\n \r \16 \u00b0\3!\3!\7!\u00b5\n!\f!\16!\u00b8"+
		"\13!\2\2\"\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33"+
		"\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67"+
		"\359\36;\37= ?!A\"\3\2\6\5\2\13\f\17\17\"\"\3\2\62;\5\2C\\aac|\6\2\62"+
		";C\\aac|\2\u00bc\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13"+
		"\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2"+
		"\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2"+
		"!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3"+
		"\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2"+
		"\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\3C\3\2\2\2\5J"+
		"\3\2\2\2\7P\3\2\2\2\tS\3\2\2\2\13X\3\2\2\2\r[\3\2\2\2\17^\3\2\2\2\21`"+
		"\3\2\2\2\23c\3\2\2\2\25h\3\2\2\2\27l\3\2\2\2\31q\3\2\2\2\33w\3\2\2\2\35"+
		"\u0081\3\2\2\2\37\u0087\3\2\2\2!\u0089\3\2\2\2#\u008b\3\2\2\2%\u008d\3"+
		"\2\2\2\'\u008f\3\2\2\2)\u0091\3\2\2\2+\u0093\3\2\2\2-\u0099\3\2\2\2/\u009b"+
		"\3\2\2\2\61\u009d\3\2\2\2\63\u00a0\3\2\2\2\65\u00a3\3\2\2\2\67\u00a5\3"+
		"\2\2\29\u00a7\3\2\2\2;\u00a9\3\2\2\2=\u00ab\3\2\2\2?\u00ae\3\2\2\2A\u00b2"+
		"\3\2\2\2CD\7t\2\2DE\7g\2\2EF\7v\2\2FG\7w\2\2GH\7t\2\2HI\7p\2\2I\4\3\2"+
		"\2\2JK\7y\2\2KL\7j\2\2LM\7k\2\2MN\7n\2\2NO\7g\2\2O\6\3\2\2\2PQ\7k\2\2"+
		"QR\7h\2\2R\b\3\2\2\2ST\7g\2\2TU\7n\2\2UV\7u\2\2VW\7g\2\2W\n\3\2\2\2XY"+
		"\7-\2\2YZ\7-\2\2Z\f\3\2\2\2[\\\7/\2\2\\]\7/\2\2]\16\3\2\2\2^_\7(\2\2_"+
		"\20\3\2\2\2`a\7?\2\2ab\7?\2\2b\22\3\2\2\2cd\7x\2\2de\7q\2\2ef\7k\2\2f"+
		"g\7f\2\2g\24\3\2\2\2hi\7k\2\2ij\7p\2\2jk\7v\2\2k\26\3\2\2\2lm\7e\2\2m"+
		"n\7j\2\2no\7c\2\2op\7t\2\2p\30\3\2\2\2qr\7x\2\2rs\7q\2\2st\7k\2\2tu\7"+
		"f\2\2uv\7,\2\2v\32\3\2\2\2w{\7$\2\2xz\4\"\u0080\2yx\3\2\2\2z}\3\2\2\2"+
		"{y\3\2\2\2{|\3\2\2\2|~\3\2\2\2}{\3\2\2\2~\177\7$\2\2\177\34\3\2\2\2\u0080"+
		"\u0082\t\2\2\2\u0081\u0080\3\2\2\2\u0082\u0083\3\2\2\2\u0083\u0081\3\2"+
		"\2\2\u0083\u0084\3\2\2\2\u0084\u0085\3\2\2\2\u0085\u0086\b\17\2\2\u0086"+
		"\36\3\2\2\2\u0087\u0088\7-\2\2\u0088 \3\2\2\2\u0089\u008a\7/\2\2\u008a"+
		"\"\3\2\2\2\u008b\u008c\7,\2\2\u008c$\3\2\2\2\u008d\u008e\7\61\2\2\u008e"+
		"&\3\2\2\2\u008f\u0090\7\'\2\2\u0090(\3\2\2\2\u0091\u0092\7.\2\2\u0092"+
		"*\3\2\2\2\u0093\u0094\7r\2\2\u0094\u0095\7t\2\2\u0095\u0096\7k\2\2\u0096"+
		"\u0097\7p\2\2\u0097\u0098\7v\2\2\u0098,\3\2\2\2\u0099\u009a\7=\2\2\u009a"+
		".\3\2\2\2\u009b\u009c\7?\2\2\u009c\60\3\2\2\2\u009d\u009e\7(\2\2\u009e"+
		"\u009f\7(\2\2\u009f\62\3\2\2\2\u00a0\u00a1\7~\2\2\u00a1\u00a2\7~\2\2\u00a2"+
		"\64\3\2\2\2\u00a3\u00a4\7#\2\2\u00a4\66\3\2\2\2\u00a5\u00a6\7*\2\2\u00a6"+
		"8\3\2\2\2\u00a7\u00a8\7+\2\2\u00a8:\3\2\2\2\u00a9\u00aa\7}\2\2\u00aa<"+
		"\3\2\2\2\u00ab\u00ac\7\177\2\2\u00ac>\3\2\2\2\u00ad\u00af\t\3\2\2\u00ae"+
		"\u00ad\3\2\2\2\u00af\u00b0\3\2\2\2\u00b0\u00ae\3\2\2\2\u00b0\u00b1\3\2"+
		"\2\2\u00b1@\3\2\2\2\u00b2\u00b6\t\4\2\2\u00b3\u00b5\t\5\2\2\u00b4\u00b3"+
		"\3\2\2\2\u00b5\u00b8\3\2\2\2\u00b6\u00b4\3\2\2\2\u00b6\u00b7\3\2\2\2\u00b7"+
		"B\3\2\2\2\u00b8\u00b6\3\2\2\2\7\2{\u0083\u00b0\u00b6\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}