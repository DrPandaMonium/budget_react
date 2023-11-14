import { useState } from 'react';

const Budget = () => {

    const [budgetInput, setBudgetInput] = useState('');

    console.log(budgetInput);

    return (
        <div>
            <input type='number' onChange={(e) => {setBudgetInput(e.target.value)}} value={budgetInput} placeholder='Input Income'></input>
            <h1>Needs: {(budgetInput * 0.5).toFixed(2)}</h1>
            <h1>Wants: {(budgetInput * 0.3).toFixed(2)}</h1>
            <h1>Savings: {(budgetInput * 0.2).toFixed(2)}</h1>
        </div>
    )
}

export default Budget;