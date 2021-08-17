// load theme styles with webpack

// ES module

import React,{useState,useRef, useEffect } from 'react';
import Editor from 'react-medium-editor';
import MediumEditor from 'medium-editor';
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'



var HighlighterButton = MediumEditor.Extension.extend({
  name: 'highlighter',
  init: function () {
    this.button = this.document.createElement('button');
    this.button.classList.add('medium-editor-action');
    this.button.innerHTML = '<b>H</b>';
  },

  getButton: function () {
    return this.button;
  }
});

/**/

function App (){
     
  const [text,setText]=useState('Fusce dapibus, tellus ac cursus commodo');
  const elementRef = useRef();
  const divElement = elementRef.current;

 function  handleChange(text, medium) {
    setText(text);
  }


  useEffect(()=>{
    //this.init;
  },[]);


    return (
      <div className="app">
        <h1>react-medium-editor</h1>

        <Editor 
        ref={divElement}
        text={text}
        onChange={handleChange}
        options={{
          toolbar: { buttons: ['bold', 'italic', 'underline'] },
          extensions: {
            'highlighter': new HighlighterButton()
          },
          
        }}
        />
      </div>
    );
  



}

export default App;