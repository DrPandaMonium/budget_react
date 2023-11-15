import { useState } from 'react';

import { calculateTax, taxes, calculateResults } from '../../backend/Taxes';

const Budget = ({ location }) => {

    const [budgetInput, setBudgetInput] = useState('');

    const federalTax = calculateTax(budgetInput, taxes.federal);
    const fica = budgetInput * 0.0765;
    const stateTax = calculateTax(budgetInput, taxes[location]);

    const result = budgetInput - (federalTax + fica + stateTax);

    const needs = (result * 0.5).toFixed(2);
    const savings = (result * 0.2).toFixed(2);
    const wants = (result * 0.3).toFixed(2);


    return (
        <div>
            <input type='number' onChange={(e) => {setBudgetInput(e.target.value)}} value={budgetInput} placeholder='Enter Income'></input>
            <div>
                <h1>Needs: ${needs}</h1>
                <div>
                    <h2>Rent: ${calculateResults(needs, 0.64)}</h2>
                    <h2>Car payment and insurance: ${calculateResults(needs, 0.22)}</h2>
                    <h2>Groceries: ${calculateResults(needs, 0.14)}</h2>
                </div>
            </div>
            <div>
                <h1>Savings: ${savings}</h1>
                <div>
                    <h2>Studen debt: ${calculateResults(savings, 0.44)}</h2>
                    <h2>credit card payment: ${calculateResults(savings, 0.34)}</h2>
                    <h2>savings: ${calculateResults(savings, 0.22)}</h2>
                </div>
            </div>
            <div>
                <h1>Wants: ${wants}</h1>
                <div>
                    <h2>Cellphone service: ${calculateResults(wants, 0.12)}</h2>
                    <h2>Streaming Services: ${calculateResults(wants, 0.04)}</h2>
                    <h2>Internet: ${calculateResults(wants, 0.08)}</h2>
                    <h2>Dining: ${calculateResults(wants, 0.47)}</h2>
                    <h2>Shopping: ${calculateResults(wants, 0.29)}</h2>
                </div>
            </div>
        </div>
    )
}

export default Budget;