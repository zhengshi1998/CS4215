import antlr4 from 'antlr4';
import CLexer from '../grammers/CLexer.js';
import CParser from '../grammers/CParser.js';
import { getAST } from '../grammers/CWrapper.js';

const input = "int main(){return 1;}"

class Visitor {
    visitChildren(ctx) {
        console.log(ctx);

      if (!ctx) {
        return;
      }
  
      if (ctx.children) {
        return ctx.children.map(child => {
          if (child.children && child.children.length != 0) {
            return child.accept(this);
          } else {
            return child.getText();
          }
        });
      }
    }
  }


const tree = getAST(input);
tree.accept(new Visitor());
// console.log(tree);