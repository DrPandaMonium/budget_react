import { useState } from 'react';

import { calculateTax, taxes, calculateResults, timePeriod } from '../../backend/Taxes';

const Budget = ({ location }) => {

    const [budgetInput, setBudgetInput] = useState('');
    const [period, setPeriod] = useState('yearly');

    const federalTax = calculateTax(budgetInput, taxes.federal);
    const fica = budgetInput * 0.0765;
    const stateTax = calculateTax(budgetInput, taxes[location]);

    const result = budgetInput - (federalTax + fica + stateTax);

    const needs = (result * 0.5);
    const savings = (result * 0.2);
    const wants = (result * 0.3);


    return (
        <div>
            <input type='number' onChange={(e) => {setBudgetInput(e.target.value)}} value={budgetInput} placeholder='Enter Income'></input>
            <select name='period' id='period' onChange={(e) => setPeriod(e.target.value)}>
                <option value='yearly'>Yearly</option>
                <option value='monthly'>Monthly</option>
                <option value='weekly'>Weekly</option>
                <option value='daily'>Daily</option>
            </select>
            <div>
                <h1>Needs: ${(needs / timePeriod[period]).toFixed(2)}</h1>
                <div>
                    <h2>Rent: ${calculateResults(needs, 0.64, timePeriod[period])}</h2>
                    <h2>Car Payment and Insurance: ${calculateResults(needs, 0.22, timePeriod[period])}</h2>
                    <h2>Groceries: ${calculateResults(needs, 0.14, timePeriod[period])}</h2>
                </div>
            </div>
            <div>
                <h1>Savings: ${(savings / timePeriod[period]).toFixed(2)}</h1>
                <div>
                    <h2>Student Debt: ${calculateResults(savings, 0.44, timePeriod[period])}</h2>
                    <h2>Credit Card Payment: ${calculateResults(savings, 0.34, timePeriod[period])}</h2>
                    <h2>Savings: ${calculateResults(savings, 0.22, timePeriod[period])}</h2>
                </div>
            </div>
            <div>
                <h1>Wants: ${(wants / timePeriod[period]).toFixed(2)}</h1>
                <div>
                    <h2>Cellphone Service: ${calculateResults(wants, 0.12, timePeriod[period])}</h2>
                    <h2>Streaming Services: ${calculateResults(wants, 0.04, timePeriod[period])}</h2>
                    <h2>Internet: ${calculateResults(wants, 0.08, timePeriod[period])}</h2>
                    <h2>Dining: ${calculateResults(wants, 0.47, timePeriod[period])}</h2>
                    <h2>Shopping: ${calculateResults(wants, 0.29, timePeriod[period])}</h2>
                </div>
            </div>
        </div>
    )
}

export default Budget;