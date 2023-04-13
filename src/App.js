import './App.css';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import React, { useRef } from 'react';
import { Interpreter } from './Interpreter/Interpreter.js';

const intpt = new Interpreter();

function App() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    editorRef.current.setValue(`int x = 288;\nwhile(x > 30){\n\tx = x - 30;\n}\nx;`)
  }

  function showValue() {
    var ret = intpt.execute(editorRef.current.getValue()).value;
    if(ret != undefined && ret != null){
      alert(ret);
    }
  }

  function handleEditorChange(value, event) {
    editorRef.current.value = value;
    
    // console.log('here is the current model value:', value);
  }

  return (
    <div className="App">
      <Editor
        theme="vs-dark"
        height="90vh"
        defaultLanguage="c"
        defaultValue= "int main(){ \n int x = 199; int* y = &x; *y; } main();"
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
      <button onClick={showValue}>Run!</button>
    </div>
  );

}

export default App;
