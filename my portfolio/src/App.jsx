import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='p-5 bg-amber-900 rounded-b-xl'>
        <h1 className="text-amber-200">Hello</h1>
        <button 
          onClick={() => setCount(count + 1)} 
          className="mt-4 bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-400"
        >
          Increment
        </button>
      </div>
    </>
  )
}

export default App
