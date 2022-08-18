import React from 'react';
import './App.css';
import {sendTestGet, sendTestPost} from "./kotlin/sharedClient";

function App() {
  return (
    <div className="App">
     <button
     onClick={()=>{
       sendTestGet()
     }}>
       Get
     </button>
      <button
          onClick={()=>{
            sendTestPost()
          }}>
        Post
      </button>
    </div>
  );
}

export default App;
