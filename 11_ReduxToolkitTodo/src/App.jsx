import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
     <h1 className='text-white bg-indigo-600 flex justify-center max-w-md mx-80 rounded-md py-6 text-3xl'>Todo with Redux Toolkit</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
