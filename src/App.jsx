import { useState } from 'react'
import './App.css'
import Select from './components/Select'
import IncomeStart from './components/IncomeStart'
import BudgetStart from './components/BudgetStart'

function App() {
  const [resultType, setResultType] = useState('budget');
  const [homeState, setHomeState] = useState();

  return (
    <>
      <Select resultType={resultType} setResultType={setResultType} homeState={homeState} setHomeState={setHomeState}/>
      {
        resultType == 'budget' ? <IncomeStart homeState={homeState}/> : 
        resultType == 'income' ? <BudgetStart homeState={homeState}/> : 
        null
      }
    </>
  )
}

export default App
