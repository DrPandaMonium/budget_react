import { useState } from 'react';

import { calculateTax, taxes, timePeriod } from '../../backend/Taxes';

const Budget = ({ location }) => {

    const [budgetInput, setBudgetInput] = useState('');
    const [period, setPeriod] = useState('yearly');

    const federalTax = calculateTax(budgetInput, taxes.federal) / timePeriod[period];
    const fica = budgetInput * 0.0765 / timePeriod[period];
    const stateTax = calculateTax(budgetInput, taxes[location]) / timePeriod[period];

    const result = (budgetInput / timePeriod[period]) - (federalTax + fica + stateTax).toFixed(2);

    const needs = (result * 0.5);
    const savings = (result * 0.2);
    const wants = (result * 0.3);


    return (
        <div>
            <label>Enter Yearly Gross Income</label>
            <input type='number' onChange={(e) => {setBudgetInput(e.target.value)}} value={budgetInput} placeholder='Enter Income'></input>
            <label>Budget Timeframe:</label>
            <select name='period' id='period' onChange={(e) => setPeriod(e.target.value)}>
                <option value='yearly'>Yearly</option>
                <option value='monthly'>Monthly</option>
                <option value='weekly'>Weekly</option>
                <option value='daily'>Daily</option>
            </select>
            <div>
                <h1>Needs: ${needs.toFixed(2)}</h1>
                <div>
                    <h2>Rent: ${(needs * 0.64).toFixed(2)}</h2>
                    <h2>Car Payment and Insurance: ${(needs * 0.22).toFixed(2)}</h2>
                    <h2>Groceries: ${(needs * 0.14).toFixed(2)}</h2>
                </div>
            </div>
            <div>
                <h1>Savings: ${savings.toFixed(2)}</h1>
                <div>
                    <h2>Student Debt: ${(savings * 0.44).toFixed(2)}</h2>
                    <h2>Credit Card Payment: ${(savings * 0.34).toFixed(2)}</h2>
                    <h2>Savings: ${(savings * 0.22).toFixed(2)}</h2>
                </div>
            </div>
            <div>
                <h1>Wants: ${wants.toFixed(2)}</h1>
                <div>
                    <h2>Cellphone Service: ${(wants * 0.12).toFixed(2)}</h2>
                    <h2>Streaming Services: ${(wants * 0.04).toFixed(2)}</h2>
                    <h2>Internet: ${(wants * 0.08).toFixed(2)}</h2>
                    <h2>Dining: ${(wants * 0.47).toFixed(2)}</h2>
                    <h2>Shopping: ${(wants * 0.29).toFixed(2)}</h2>
                </div>
            </div>
        </div>
    )
}

export default Budget;