import { useState } from "react"

function App() {
  let [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg" >
          <button className="outline-none px-4 py-1 rounded-lg text-white shadow-lg" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
          <button className="outline-none px-4 py-1 rounded-lg text-white shadow-lg" style={{backgroundColor:"green"}} onClick={() => setColor("green")}>Green</button>
          <button className="outline-none px-4 py-1 rounded-lg text-white shadow-lg" style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-lg text-white shadow-lg" style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>
          <button className="outline-none px-4 py-1 rounded-lg text-white shadow-lg" style={{ backgroundColor: "black" }} onClick={() => setColor("black")}>Black</button>
          <button className="outline-none px-4 py-1 rounded-lg shadow-lg" style={{ backgroundColor: "white" }} onClick={() => setColor("white")}>White</button>
          <button className="outline-none px-4 py-1 rounded-lg text-white shadow-lg" style={{ backgroundColor: "magenta" }} onClick={() => setColor("magenta")}>Margenta</button>
          <button className="outline-none px-4 py-1 rounded-lg text-white shadow-lg" style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}>Olive</button>
        </div>


      </div>

    </div>
  )
}

export default App
