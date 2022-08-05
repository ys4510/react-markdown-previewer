import React, { useState } from "react";
import "./App.css";
import { marked } from "marked";

function App() {

  const initialState = 
    `# Welcome to my React Markdown Previewer!

  ## React (Hooks) x JavaScript
  [React](https://reactjs.org/)
  ### This is examples:
  
  I place all the **_JSX_** between \`<div></div>\`.
  
  \`\`\`
  // this is multi-line code:
  
  function App() {
    const initialState = "";
    const [editorText, setEditorText] = useState(initialState);

    return (
      <div className="App">
        <Editor />
        <Previewer />
      </div>
    );
  }

export default App;

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  


  > What resource do I use to learn coding skills?
  - freeCodeCamp
  - Udemy
  - YouTube
  - Mentoring

  
  ![My Logo](https://ys4510.github.io/Sunrise/img/favicon.ico)
  `;
  
  const initialStateMarked = marked(initialState);
  const [editorText, setEditorText] = useState(initialState);
  const [formatted, setFormatted] = useState(initialStateMarked);

  const handleTextChange = (e) => {
    const texts = e.target.value;
    const html = marked(texts);
    setEditorText(texts);
    setFormatted(html);
    console.log(marked(`# hello
    
    ## world  
    
    `, {gfm: true, breaks: true}));
  };
  
    function createMarkup() {
    return { __html: formatted };
  }

  return (
    <div className="App">
      <h2>Markdown Previewer</h2>
      <div className="container editor">
        <div className="topbar">Editor</div>
        <textarea id="editor" onChange={handleTextChange} value={editorText} />
      </div>
      <div className="container preview">
      <div className="topbar">Preview</div>
      <div id="preview" dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
}

export default App;
