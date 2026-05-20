import React from 'react'
import { useFinance } from '../../context/FinanceContext';
import IncomeItem from './IncomeItem';

function IncomeList({ filteredItems }) {
    const { incomes } = useFinance();
    return (
        <div className="expenses-list">
            {filteredItems.length === 0 && (
                <div className="empty">
                    <div className="empty-icon">💵</div>
                    <div className="empty-text">No income records found.
                        <br />
                        Click "+ Add Income" to get started.
                    </div>
                </div>
            )}
            
            {filteredItems.map((income) => (
                <IncomeItem
                    key={income._id}
                    income={income}
                />
            ))}
        </div>
    )
}

export default IncomeList