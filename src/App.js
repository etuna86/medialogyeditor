// load theme styles with webpack
//require('medium-editor/dist/css/medium-editor.css');
//require('medium-editor/dist/css/themes/default.css');

// ES module

import React,{useState} from 'react';
import Editor from 'react-medium-editor';
// CommonJS enviroment
// var Editor = require('react-medium-editor').default;

function App (){
     
  const [text,setText]=useState('Fusce dapibus, tellus ac cursus commodo');

 function  handleChange(text, medium) {
    setText(text);
  }


    return (
      <div className="app">
        <h1>react-medium-editor</h1>
        <h3>Html content</h3>
        <div>{text}</div>

        <h3>Editor #1 (&lt;pre&gt; tag)</h3>
        <Editor
          tag="pre"
          text={text}
          onChange={handleChange}
          options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] },disableEditing: true }}
        />
        <h3>Editor #2</h3>
        <Editor text={text} onChange={handleChange} />
      </div>
    );
  



}

export default App;