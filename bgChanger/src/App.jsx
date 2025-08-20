import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
function App() {
  const [color, setColor] = useState("blue")

  return (
    <>
      <h1 className='text-black text-center bg-amber-400 text-8xl'>hello world of react</h1>
      <h2 className='text-center w-full bg-amber-600 text-4xl'>Bg_Changer</h2>

      <div className='w-full h-screen duration-300' style={{background: color}}>
          <div className='fixed flex flex-wrap gap-4 w-full shadow-lg bg-white px-3 py-3 rounded-4xl bottom-4 left-1/2 -translate-x-1/2'>
              <button onClick={() => setColor("blue")} className='outline-none px-4 py-5 rounded-full text-white shadow-lg border-4 border-blue-500 transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/50' style={{backgroundColor: "blue"}}>BLUE</button>
              <button onClick={() => setColor("red")} className='outline-none px-4 py-5 rounded-full text-white shadow-lg border-4 border-red-400 transition-transform duration-200 hover:scale-110 hover:shadow-red-500/50' style={{backgroundColor: "red"}}>RED</button>
              <button onClick={() => setColor("lavender")} className='outline-none px-4 py-5 rounded-full text-black shadow-lg border-4 border-black-400 transition-transform duration-200 hover:scale-110 hover:shadow-black-500/50' style={{backgroundColor: "lavender"}}>LAVENDER</button>
              <button onClick={() => setColor("green")} className='outline-none px-4 py-5 rounded-full text-white shadow-lg border-4 border-green-400 transition-transform duration-200 hover:scale-110 hover:shadow-green-500/50' style={{backgroundColor: "green"}}>GREEN</button>
              <button onClick={() => setColor("pink")} className='outline-none px-4 py-5 rounded-full text-black shadow-lg border-4 border-pink-400 transition-transform duration-200 hover:scale-110 hover:shadow-pink-500/50' style={{backgroundColor: "pink"}}>PINK</button>
              <button onClick={() => setColor("indigo")} className='outline-none px-4 py-5 rounded-full text-white shadow-lg border-4 border-indigo-500 transition-transform duration-200 hover:scale-110 hover:shadow-indigo-500/50' style={{backgroundColor: "indigo"}}>INDIGO</button>
              <button onClick={() => setColor("yellow")} className='outline-none px-4 py-5 rounded-full text-black shadow-lg border-4 border-yellow-600 transition-transform duration-200 hover:scale-110 hover:shadow-yellow-500/50' style={{backgroundColor: "yellow"}}>YELLOW</button>
              <button onClick={() => setColor("orange")} className='outline-none px-4 py-5 rounded-full text-white shadow-lg border-4 border-orange-500 transition-transform duration-200 hover:scale-110 hover:shadow-orange-500/50' style={{backgroundColor: "orange"}}>ORANGE</button>
              <button onClick={() => setColor("brown")} className='outline-none px-4 py-5 rounded-full text-white shadow-lg border-4 border-brown-400 transition-transform duration-200 hover:scale-110 hover:shadow-brown-500/50' style={{backgroundColor: "brown"}}>BROWN</button>
              <button onClick={() => setColor("black")} className='outline-none px-4 py-5 rounded-full text-white shadow-lg border-4 border-white-400 transition-transform duration-200 hover:scale-110 hover:shadow-white-500/50' style={{backgroundColor: "black"}}>BLACK</button>
              <button onClick={() => setColor("olive")} className='outline-none px-4 py-5 rounded-full text-white shadow-lg' style={{backgroundColor: "olive"}}>OLIVE</button>
              <button onClick={() => setColor("teal")} className='outline-none px-4 py-5 rounded-full text-white shadow-lg' style={{backgroundColor: "teal"}}>TEAL</button>
              <button onClick={() => setColor("purple")} className='outline-none px-4 py-5 rounded-full text-white shadow-lg' style={{backgroundColor: "purple"}}>PURPLE</button>
              <button onClick={() => setColor("gray")} className='outline-none px-4 py-5 rounded-full text-white shadow-lg' style={{backgroundColor: "gray"}}>GRAY</button>
              <button onClick={() => setColor("gold")} className='outline-none px-4 py-5 rounded-full text-black shadow-lg' style={{backgroundColor: "gold"}}>GOLD</button>

          </div>
      </div>
    </>
  )
}

export default App
