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
public class CSubLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, CHAR=17, 
		STRING=18, WS=19, ADD=20, SUB=21, MUL=22, DIV=23, MOD=24, COMMA=25, PRINT=26, 
		COLON=27, EQ=28, AND=29, OR=30, NOT=31, LPAREN=32, RPAREN=33, LCURLY=34, 
		RCURLY=35, INT=36, ID=37;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "CHAR", 
			"STRING", "WS", "ADD", "SUB", "MUL", "DIV", "MOD", "COMMA", "PRINT", 
			"COLON", "EQ", "AND", "OR", "NOT", "LPAREN", "RPAREN", "LCURLY", "RCURLY", 
			"INT", "ID"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'return'", "'while'", "'if'", "'else'", "'++'", "'--'", "'&'", 
			"'=='", "'<'", "'>'", "'>='", "'<='", "'void'", "'int'", "'char'", "'void*'", 
			null, null, null, "'+'", "'-'", "'*'", "'/'", "'%'", "','", "'print'", 
			"';'", "'='", "'&&'", "'||'", "'!'", "'('", "')'", "'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, "CHAR", "STRING", "WS", "ADD", "SUB", "MUL", 
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\'\u00d6\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\7\3\7"+
		"\3\7\3\b\3\b\3\t\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\f\3\r\3\r\3\r\3\16"+
		"\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\22\3\22\7\22\u008e\n\22\f\22\16\22\u0091\13"+
		"\22\3\22\3\22\3\23\3\23\7\23\u0097\n\23\f\23\16\23\u009a\13\23\3\23\3"+
		"\23\3\24\6\24\u009f\n\24\r\24\16\24\u00a0\3\24\3\24\3\25\3\25\3\26\3\26"+
		"\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33"+
		"\3\34\3\34\3\35\3\35\3\36\3\36\3\36\3\37\3\37\3\37\3 \3 \3!\3!\3\"\3\""+
		"\3#\3#\3$\3$\3%\6%\u00cc\n%\r%\16%\u00cd\3&\3&\7&\u00d2\n&\f&\16&\u00d5"+
		"\13&\3\u008f\2\'\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31"+
		"\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65"+
		"\34\67\359\36;\37= ?!A\"C#E$G%I&K\'\3\2\6\5\2\13\f\17\17\"\"\3\2\62;\5"+
		"\2C\\aac|\6\2\62;C\\aac|\2\u00da\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2"+
		"\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2"+
		"\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2"+
		"\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2"+
		"\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2"+
		"\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2"+
		"\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\3M\3\2\2\2\5T"+
		"\3\2\2\2\7Z\3\2\2\2\t]\3\2\2\2\13b\3\2\2\2\re\3\2\2\2\17h\3\2\2\2\21j"+
		"\3\2\2\2\23m\3\2\2\2\25o\3\2\2\2\27q\3\2\2\2\31t\3\2\2\2\33w\3\2\2\2\35"+
		"|\3\2\2\2\37\u0080\3\2\2\2!\u0085\3\2\2\2#\u008b\3\2\2\2%\u0094\3\2\2"+
		"\2\'\u009e\3\2\2\2)\u00a4\3\2\2\2+\u00a6\3\2\2\2-\u00a8\3\2\2\2/\u00aa"+
		"\3\2\2\2\61\u00ac\3\2\2\2\63\u00ae\3\2\2\2\65\u00b0\3\2\2\2\67\u00b6\3"+
		"\2\2\29\u00b8\3\2\2\2;\u00ba\3\2\2\2=\u00bd\3\2\2\2?\u00c0\3\2\2\2A\u00c2"+
		"\3\2\2\2C\u00c4\3\2\2\2E\u00c6\3\2\2\2G\u00c8\3\2\2\2I\u00cb\3\2\2\2K"+
		"\u00cf\3\2\2\2MN\7t\2\2NO\7g\2\2OP\7v\2\2PQ\7w\2\2QR\7t\2\2RS\7p\2\2S"+
		"\4\3\2\2\2TU\7y\2\2UV\7j\2\2VW\7k\2\2WX\7n\2\2XY\7g\2\2Y\6\3\2\2\2Z[\7"+
		"k\2\2[\\\7h\2\2\\\b\3\2\2\2]^\7g\2\2^_\7n\2\2_`\7u\2\2`a\7g\2\2a\n\3\2"+
		"\2\2bc\7-\2\2cd\7-\2\2d\f\3\2\2\2ef\7/\2\2fg\7/\2\2g\16\3\2\2\2hi\7(\2"+
		"\2i\20\3\2\2\2jk\7?\2\2kl\7?\2\2l\22\3\2\2\2mn\7>\2\2n\24\3\2\2\2op\7"+
		"@\2\2p\26\3\2\2\2qr\7@\2\2rs\7?\2\2s\30\3\2\2\2tu\7>\2\2uv\7?\2\2v\32"+
		"\3\2\2\2wx\7x\2\2xy\7q\2\2yz\7k\2\2z{\7f\2\2{\34\3\2\2\2|}\7k\2\2}~\7"+
		"p\2\2~\177\7v\2\2\177\36\3\2\2\2\u0080\u0081\7e\2\2\u0081\u0082\7j\2\2"+
		"\u0082\u0083\7c\2\2\u0083\u0084\7t\2\2\u0084 \3\2\2\2\u0085\u0086\7x\2"+
		"\2\u0086\u0087\7q\2\2\u0087\u0088\7k\2\2\u0088\u0089\7f\2\2\u0089\u008a"+
		"\7,\2\2\u008a\"\3\2\2\2\u008b\u008f\7)\2\2\u008c\u008e\13\2\2\2\u008d"+
		"\u008c\3\2\2\2\u008e\u0091\3\2\2\2\u008f\u0090\3\2\2\2\u008f\u008d\3\2"+
		"\2\2\u0090\u0092\3\2\2\2\u0091\u008f\3\2\2\2\u0092\u0093\7)\2\2\u0093"+
		"$\3\2\2\2\u0094\u0098\7$\2\2\u0095\u0097\4\"\u0080\2\u0096\u0095\3\2\2"+
		"\2\u0097\u009a\3\2\2\2\u0098\u0096\3\2\2\2\u0098\u0099\3\2\2\2\u0099\u009b"+
		"\3\2\2\2\u009a\u0098\3\2\2\2\u009b\u009c\7$\2\2\u009c&\3\2\2\2\u009d\u009f"+
		"\t\2\2\2\u009e\u009d\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0\u009e\3\2\2\2\u00a0"+
		"\u00a1\3\2\2\2\u00a1\u00a2\3\2\2\2\u00a2\u00a3\b\24\2\2\u00a3(\3\2\2\2"+
		"\u00a4\u00a5\7-\2\2\u00a5*\3\2\2\2\u00a6\u00a7\7/\2\2\u00a7,\3\2\2\2\u00a8"+
		"\u00a9\7,\2\2\u00a9.\3\2\2\2\u00aa\u00ab\7\61\2\2\u00ab\60\3\2\2\2\u00ac"+
		"\u00ad\7\'\2\2\u00ad\62\3\2\2\2\u00ae\u00af\7.\2\2\u00af\64\3\2\2\2\u00b0"+
		"\u00b1\7r\2\2\u00b1\u00b2\7t\2\2\u00b2\u00b3\7k\2\2\u00b3\u00b4\7p\2\2"+
		"\u00b4\u00b5\7v\2\2\u00b5\66\3\2\2\2\u00b6\u00b7\7=\2\2\u00b78\3\2\2\2"+
		"\u00b8\u00b9\7?\2\2\u00b9:\3\2\2\2\u00ba\u00bb\7(\2\2\u00bb\u00bc\7(\2"+
		"\2\u00bc<\3\2\2\2\u00bd\u00be\7~\2\2\u00be\u00bf\7~\2\2\u00bf>\3\2\2\2"+
		"\u00c0\u00c1\7#\2\2\u00c1@\3\2\2\2\u00c2\u00c3\7*\2\2\u00c3B\3\2\2\2\u00c4"+
		"\u00c5\7+\2\2\u00c5D\3\2\2\2\u00c6\u00c7\7}\2\2\u00c7F\3\2\2\2\u00c8\u00c9"+
		"\7\177\2\2\u00c9H\3\2\2\2\u00ca\u00cc\t\3\2\2\u00cb\u00ca\3\2\2\2\u00cc"+
		"\u00cd\3\2\2\2\u00cd\u00cb\3\2\2\2\u00cd\u00ce\3\2\2\2\u00ceJ\3\2\2\2"+
		"\u00cf\u00d3\t\4\2\2\u00d0\u00d2\t\5\2\2\u00d1\u00d0\3\2\2\2\u00d2\u00d5"+
		"\3\2\2\2\u00d3\u00d1\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4L\3\2\2\2\u00d5"+
		"\u00d3\3\2\2\2\b\2\u008f\u0098\u00a0\u00cd\u00d3\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}