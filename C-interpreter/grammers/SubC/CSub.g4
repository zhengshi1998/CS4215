grammar CSub;

program : stat | program stat;


stat: assg ';'
    | expr ';'
    | ifStat
    | def 
    | whileStat
    | block
    | return ';'
    ;


return : 'return' (expr)?;


varDef: type ID | type assg;


assg: ID '=' expr;


whileStat : 'while' '(' expr ')' block;


ifStat  : 'if' '(' expr ')' block 'else' block ;


def : varDef ';' | funDef;


funDef : type ID '(' (type ID)? (',' type ID)* ')' '{' stat* '}' ;


expr: ID
    | INT
    | funCall
    | unaryOp expr
    | expr binaryOp expr
    ;


funCall : ID '(' expr (',' expr)* ')';


unaryOp :   '++' 
          | '--' 
          | '!'
          | '*'
          | '&'
          | '+'
          | '-'
          ;
          


binaryOp : '*' 
         | '+' 
         | '-' 
         | '/' 
         | '%' 
         | '&&' 
         | '||' 
         | '==' 
         ;


block : '{' program '}';


type  : 'void'
      | 'int'
      | 'char' 
      | 'void*'
      ;







//==================================== Lexical components =========================================


STRING : '"' (' '..'~')* '"';
WS     : [ \t\n\r]+ -> skip ;
ADD    : '+' ;
SUB    : '-' ;
MUL    : '*' ;
DIV    : '/' ;
MOD    : '%' ;
COMMA  : ',';
PRINT  : 'print';
COLON  : ';';
EQ  : '=';

AND : '&&' ;
OR : '||' ;
NOT : '!' ;
LPAREN : '(' ;
RPAREN : ')' ;
LCURLY : '{' ;
RCURLY : '}' ;

INT : [0-9]+ ;




ID: [a-zA-Z_][a-zA-Z_0-9]* ;