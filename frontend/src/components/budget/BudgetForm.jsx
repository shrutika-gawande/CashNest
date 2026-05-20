import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useFinance } from '../../context/FinanceContext'

function BudgetForm() {
    const { budget, saveBudget } = useFinance();
    const [error, setError] = useState('');
    const [inputValue, setInputValue] = useState(budget || '');

    const validate = (value) => {
        if (value === '' || value === null) return 'Budget cannot be empty';
        if (Number(value) <= 0) return 'Budget must be greater than 0';
        if (Number(value) > 10000000) return 'Budget cannot exceed ₹1,00,00,000';
        if (!Number.isInteger(Number(value))) return 'Budget must be a whole number';
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = validate(inputValue);
        if (err) {
            setError(err);
            return;
        }
        saveBudget(Number(inputValue));
        setError("");
        setInputValue("");
        toast.success('Budget set!')
    };

    return (
        <form className="card" onSubmit={handleSubmit}>
            <div className="card-header">
                <div className="card-title">💰 Set Monthly Budget</div>
            </div>
            <div className="field">
                <label>Monthly Budget (₹)</label>
                <input
                    type='number'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='e.g. 50000'
                    min='0'
                />
                {error && (
                    <div style={{ color: '#f03e3e', fontSize: '12px', marginTop: '-8px', marginBottom: '8px', fontFamily: 'var(--mono)' }}>
                        ⚠ {error}
                    </div>
                )}
            </div>
            <button type='submit' className='btn btn-primary'>Save Budget</button>
        </form>
    );
}

export default BudgetForm