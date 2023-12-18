import { useState } from 'react'
import './App.css'
import Select from './components/Select'
import Budget from './components/Budget'
import Income from './components/Income'

function App() {

  const [result, setResult] = useState('budget');
  const [location, setLocation] = useState('AL');

  return (
    <div>
      <div>
        <Select setResult={setResult} setLocation={setLocation}/>
        {result == 'budget' ? 
          <Budget location={location} /> :
          <Income location={location}/>
        }
      </div>
    </div>
  )
}

export default App
