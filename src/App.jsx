import { useState } from 'react'
import './App.css'
import Select from './components/Select'

function App() {

  const [input, setInput] = useState('');
  const [location, setLocation] = useState('');


  return (
    <>
      <Select setInput={setInput} setLocation={setLocation}/>
    </>
  )
}

export default App
