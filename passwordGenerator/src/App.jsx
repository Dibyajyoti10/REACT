import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')


  const passwordRef = React.useRef(null)

  const generatePassword = useCallback(()=>{
      let pass = ""
      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      
      if(numberAllowed) str += "0123456789"
      if(charAllowed) str += "!@#$%&*_+"

      for (let i = 0; i <=length; i++) {
          let char = Math.floor(Math.random() * str.length + 1)
          pass += str.charAt(char)
        
      }
      setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const passwordCopied = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    alert("Password copied to clipboard")
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-white text-black'>
      <h1 className='text-5xl text-center underline text-black py-4'>Password_Generator</h1>
      <div className='flex shadow-2xl rounded-lg overflow-hidden mb-5'>
          <input type="text" value={password}
          className='outline-none text-black w-full py-2 px-4'
          placeholder='Password'  readOnly ref={passwordRef}/>

          <button
          onClick={passwordCopied}
           className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>
            copy
          </button>

      </div>
           <div className='flex text-sm gap-x-2.5'>
               <div className='flex items-center gap-x-1'>
                  <input type="range" min={6} max={100}value={length}
                  className='cursor-pointer' 
                  onChange={ (e) => {setLength(e.target.value)}}/>

                  <label>Length: {length}</label>
               </div>
               <div className='flex items-center gap-x-1'>
                  <input type="checkbox" defaultChecked = {numberAllowed}
                  id='numberInput'
                  onChange={ () => {
                    setNumberAllowed((prev) => !prev)
                  }} />
                  <label htmlFor="numberInput">Numbers</label>
               </div>
               <div className='flex items-center gap-x-1'>
                  <input type="checkbox" defaultChecked = {charAllowed}
                  id='charInput'
                  onChange={ () => {
                    setCharAllowed((prev) => !prev)
                  }} />
                  <label htmlFor="charInput">Characters</label>

               </div>
           </div>
      </div>
    </>
  )
}

export default App
