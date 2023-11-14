import { useState } from 'react'
import './App.css'
import Select from './components/Select'
import IncomeStart from './components/IncomeStart'
import BudgetStart from './components/BudgetStart'

function App() {

  const [input, setInput] = useState('');
  const [location, setLocation] = useState('');


  return (
    <>
      <Select />
    </>
  )
}

export default App
