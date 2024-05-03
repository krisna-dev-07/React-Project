import { useState } from "react"
function App() {
  const [Color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-300"
        style={{ backgroundColor: Color }}>
        <div className="flex fixed flex-wrap justify-center bottom-10 inset-x-0 px-2" >
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-2 py-1">
            <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 shadow-lg rounded-3xl " style={{ backgroundColor: "red ", color: "white " }}>Red</button>
            <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 shadow-lg rounded-3xl " style={{ backgroundColor: "green ", color: "white " }}>green</button>
            <button onClick={()=>setColor("black")}  className="outline-none px-4 py-1 shadow-lg rounded-3xl " style={{ backgroundColor: "black ", color: "white " }}>black</button>
            <button onClick={()=>setColor("aqua")} className="outline-none px-4 py-1 shadow-lg rounded-3xl " style={{ backgroundColor: "aqua ", color: "white " }}>aqua</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
