import { useState } from 'react';
import { sumValues } from '../../backend/Taxes';

const Income = () => {
    const [inputs, setInputs] = useState({
        rent: 0,
        car: 0,
        groceries: 0,
        nOther: 0,
        student: 0,
        credit: 0,
        saving: 0,
        sOther: 0,
        phone: 0,
        stream: 0,
        internet: 0,
        dine: 0,
        shop: 0,
        wOther: 0
    });

    return (
        <div>
            <div>
                <h1>Needs: 50%</h1>
                <div>
                    <h2>Rent: 64%<input type='number' value={inputs.rent} onChange={(e) => {setInputs({...inputs, rent: e.target.value})}}></input></h2>
                    <h2>Car Payment and Insurance: 22%<input type='number' value={inputs.car} onChange={(e) => {setInputs({...inputs, car: e.target.value})}}></input></h2>
                    <h2>Groceries: 14%<input type='number' value={inputs.groceries} onChange={(e) => {setInputs({...inputs, groceries: e.target.value})}}></input></h2>
                    <h2>Other:<input type='number' value={inputs.nOther} onChange={(e) => {setInputs({...inputs, nOther: e.target.value})}}></input></h2>
                </div>
            </div>
            <div>
                <h1>Savings: 20%</h1>
                <div>
                    <h2>Student Debt: 44%<input type='number' value={inputs.student} onChange={(e) => {setInputs({...inputs, student: e.target.value})}}></input></h2>
                    <h2>Credit Card Payment: 34%<input type='number' value={inputs.credit} onChange={(e) => {setInputs({...inputs, credit: e.target.value})}}></input></h2>
                    <h2>Savings: 22%<input type='number' value={inputs.saving} onChange={(e) => {setInputs({...inputs, saving: e.target.value})}}></input></h2>
                    <h2>Other:<input type='number' value={inputs.sOther} onChange={(e) => {setInputs({...inputs, sOther: e.target.value})}}></input></h2>
                </div>
            </div>
            <div>
                <h1>Wants: 30%</h1>
                <div>
                    <h2>Cellphone Service: 12%<input type='number' value={inputs.phone} onChange={(e) => {setInputs({...inputs, phone: e.target.value})}}></input></h2>
                    <h2>Streaming Services: 4%<input type='number' value={inputs.stream} onChange={(e) => {setInputs({...inputs, stream: e.target.value})}}></input></h2>
                    <h2>Internet: 8%<input type='number' value={inputs.internet} onChange={(e) => {setInputs({...inputs, internet: e.target.value})}}></input></h2>
                    <h2>Dining: 47%<input type='number' value={inputs.dine} onChange={(e) => {setInputs({...inputs, dine: e.target.value})}}></input></h2>
                    <h2>Shopping: 29%<input type='number' value={inputs.shop} onChange={(e) => {setInputs({...inputs, shop: e.target.value})}}></input></h2>
                    <h2>Other:<input type='number' value={inputs.wOther} onChange={(e) => {setInputs({...inputs, wOther: e.target.value})}}></input></h2>
                </div>
            </div>
        </div>
    )
}

export default Income;