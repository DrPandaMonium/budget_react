import { useState } from 'react';

import { calculateTax, taxes } from '../../backend/Taxes';

const Budget = ({ location }) => {

    const [budgetInput, setBudgetInput] = useState('');

    const federalTax = calculateTax(budgetInput, taxes.federal);
    const fica = budgetInput * 0.0765;
    const stateTax = calculateTax(budgetInput, taxes[location]);

    // const result = budgetInput - ((budgetInput * federalTax) + fica + (budgetInput * stateTax));
    const result = budgetInput - ((budgetInput * federalTax) + fica);


    return (
        <div>
            <input type='number' onChange={(e) => {setBudgetInput(e.target.value)}} value={budgetInput} placeholder='Enter Income'></input>
            <h1>Needs: {(result * 0.5).toFixed(2)}</h1>
            <h1>Wants: {(result * 0.3).toFixed(2)}</h1>
            <h1>Savings: {(result * 0.2).toFixed(2)}</h1>
        </div>
    )
}

export default Budget;