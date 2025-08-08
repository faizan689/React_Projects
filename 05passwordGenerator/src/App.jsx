import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
import './index.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [specialAllowed, setSpecialAllowed] = useState(true)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let password = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numberAllowed) {
      str += "0123456789"
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?`~"
    }

    if (specialAllowed) {
      str += "\\/-=<>"
    }

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length)
      password += str.charAt(index)
    }

    setPassword(password)
    setCopied(false)
  }, [length, numberAllowed, charAllowed, specialAllowed])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      })
  }

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-4 text-xl font-bold'>Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className='outline-none w-full px-3 py-2'
            placeholder="password"
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className='bg-blue-500 text-white px-4 hover:bg-blue-600'
          >
            Copy
          </button>
        </div>

        {copied && <p className='text-green-400 text-sm mb-2 text-center'>Copied to clipboard!</p>}

        <div className='flex gap-4 mb-4 text-white items-center'>
          <label>Length: {length}</label>
          <input
            type="range"
            min={4}
            max={32}
            value={length}
            onChange={(e) => setLength(e.target.valueAsNumber)}
          />
        </div>

        <div className='flex gap-4 text-white mb-4 items-center'>
          <label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
            />
            Numbers
          </label>

          <label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(!charAllowed)}
            />
            Symbols
          </label>

          <label>
            <input
              type="checkbox"
              checked={specialAllowed}
              onChange={() => setSpecialAllowed(!specialAllowed)}
            />
            Special
          </label>
        </div>

        <button
          onClick={passwordGenerator}
          className='w-full bg-orange-500 text-white py-2  rounded hover:bg-orange-600'
        >
          Generate Password
        </button>
      </div>
    </>
  )
}

export default App
