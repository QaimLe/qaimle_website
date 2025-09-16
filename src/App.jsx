import { useState } from 'react'
import viteLogo from '/Qaimle.jpg'
import './App.css'
import AuthButtons from './components/authComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Qaimle | SP Review Based Web app</h1>
      <AuthButtons />
    </>
  )
}

export default App
