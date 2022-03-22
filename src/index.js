import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Children } from 'react/cjs/react.production.min';
import './index.css';

const Button = (props) => {
  // your code here
  return (
    <button>
      {props.children}
    </button>
  );
};

const Application = () => {
  const [name, setName] = useState("");
  // your code here

  const reset = () => {
    setName("");
    console.log("reset");
    // your code here
  };

    return (
      <main>
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Type your name"></input>
        <button onClick={reset}>reset</button>
        <div>
          {name
          ? <h1>Hello {name}</h1>
          : ""
          }
        </div>
        
      </main>
    );
};

ReactDOM.render(<Application />, document.getElementById("root"));
