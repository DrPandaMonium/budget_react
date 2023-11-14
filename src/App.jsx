import { useState } from 'react'
import './App.css'
import Select from './components/Select'
import Budget from './components/Budget'

function App() {

  const [result, setResult] = useState('budget');
  const [location, setLocation] = useState('AL');

  return (
    <>
      <Select setResult={setResult} setLocation={setLocation}/>
      <Budget />
    </>
  )
}

export default App
