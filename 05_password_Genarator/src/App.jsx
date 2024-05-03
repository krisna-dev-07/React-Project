import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState("false");
  const [character, setCharacter] = useState("true");
  const [password, setPassword] = useState("");
  // useRef hook
  const passwordRef = useRef(null)

  //funtion for password generator
  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFIJHKLMNOPQURSTVWXYZabcdefghijklmnopqurstvwxyz"
    if (number) str += "0123456789"
    if (character) str += "!@~$%^&*()`"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)

    }
    setPassword(pass)
  }, [length, character, number, setPassword])

  //funtion for copy password
  const copytoclipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8)
    window.navigator.clipboard.writeText(password)
  })

  // function to run the passwordgenerator
  useEffect(() => {
    passwordgenerator()
  }, [length, number, character, passwordgenerator])

  return (
    <>
      <div className='text-orange-500 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-900  '>
        <h1 className='text-white text-center py-4 my-4'>Password Generator</h1>
        <div className='flex shadow  overflow-hidden mb-4 py-4 gap-2'>
          <input type="text"
            value={password}
            className='outline-none rounded-2xl w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copytoclipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-2xl'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 py-3'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label> Length:{length}</label>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                defaultChecked={number}
                id="numberInput"
                onChange={() => {
                  setNumber((prev) => !prev)
                }}
              />
              <label htmlFor="NumberInput">Numbers</label>
              <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                  defaultChecked={character}
                  id="characterInput"
                  onChange={() => {
                    setCharacter((prev) => !prev)
                  }}
                />
                <label htmlFor="characterInput">Character</label>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
