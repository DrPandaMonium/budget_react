import { useState } from 'react';

const Income = () => {
    return (
        <div>
            <div>
                <h1>Needs: 50%<input type='number'></input></h1>
                <div>
                    <h2>Rent: 64%<input type='number'></input></h2>
                    <h2>Car Payment and Insurance: 22%<input type='number'></input></h2>
                    <h2>Groceries: 14%<input type='number'></input></h2>
                    <h2>Other:<input type='number'></input></h2>
                </div>
            </div>
            <div>
                <h1>Savings: 20%</h1>
                <div>
                    <h2>Student Debt: 44%<input type='number'></input></h2>
                    <h2>Credit Card Payment: 34%<input type='number'></input></h2>
                    <h2>Savings: 22%<input type='number'></input></h2>
                    <h2>Other:<input type='number'></input></h2>
                </div>
            </div>
            <div>
                <h1>Wants: 30%</h1>
                <div>
                    <h2>Cellphone Service: 12%<input type='number'></input></h2>
                    <h2>Streaming Services: 4%<input type='number'></input></h2>
                    <h2>Internet: 8%<input type='number'></input></h2>
                    <h2>Dining: 47%<input type='number'></input></h2>
                    <h2>Shopping: 29%<input type='number'></input></h2>
                    <h2>Other:<input type='number'></input></h2>
                </div>
            </div>
        </div>
    )
}

export default Income;