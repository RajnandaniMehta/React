import { useState } from "react";
function App() {
  let [counter,setCounter]=useState(10);
  const addMe=()=>{
   if(counter>=20){
      setCounter(20);
      alert("You hav reached max limit");
    }else{
      setCounter(counter+1);
    }
  }
  const removeMe=()=>{
    if(counter<=0){
      setCounter(0);
      alert("You have reached minimum limit");
    }else{
      setCounter(counter-1);
    }
    
  }
  return (
    <>
      <h1>Hello Nandani</h1>
      <h2> Counter sets : {counter}</h2>
      <br />
      <button onClick={addMe}>Add me</button>
      <br />
      <button onClick={removeMe}>Remove me</button>
    </>
  )
}

export default App;
