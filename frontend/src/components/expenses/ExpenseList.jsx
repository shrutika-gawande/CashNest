import React from 'react'
import ExpenseItem from './ExpenseItem'
import { useFinance } from '../../context/FinanceContext'

function ExpenseList({ filteredItems }) {
    const { expenses } = useFinance();
    return (
        <div className="expenses-list">
            {filteredItems.length === 0 && (
                <div className="empty">
                    <div className="empty-icon">💸</div>
                    <div className="empty-text">No expense records found.
                        <br />
                        Click "+ Add Expense" to get started.
                    </div>
                </div>
            )}

            {filteredItems.map((expense) => (
                <ExpenseItem
                    key={expense._id}
                    expense={expense}
                />
            ))}
        </div>
    )
}

export default ExpenseList