import { useCallback, useEffect, useState, useRef } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef=useRef(null);
  const genPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_{}~`[]-";
    }
    for (let i = 0; i < length; i++) {
      let x = Math.floor(Math.random() * str.length + 1);
      console.log(x);
      pass += str.charAt(x);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,40);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    genPassword()
  },[length,numAllowed,genPassword,charAllowed]);

  return (
    <>  
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="password" readOnly ref={passwordRef}/>
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" 
          onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1 mb-3">
            <input type="range" min="4" max="40" id="len" value={length} className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor="len">Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1 mb-3">
            <input type="checkbox" id="num" onChange={() => {setNumAllowed((prev) => !prev); }} defaultChecked={numAllowed} />
            <label htmlFor="num">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 mb-3">
            <input type="checkbox" id="character" defaultChecked={charAllowed} onChange={() => {setCharAllowed((prev) => !prev); }} />
            <label htmlFor="character">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
