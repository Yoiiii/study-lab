import React, { useState } from "react"

import Child from "./Child"

function App() {
  const [name,setName] =useState("dlx")
  return (
    <div className="App">
      <Child 
        name={name}
        setName={setName}
      />
      <button>卸载</button>
    </div>
  );
}

export default App;
