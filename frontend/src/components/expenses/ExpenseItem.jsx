import React from 'react'
import { useFinance } from '../../context/FinanceContext';
import { useModal } from '../../context/ModalContext';

function ExpenseItem({expense}) {
const {deleteExpense} = useFinance();
const { openModal } = useModal();

    const categoryIcons = {
    "Food & Dining": "🍔",
    Shopping: "🛍️",
    Travel: "✈️",
    Entertainment: "🎮",
    Health: "💊",
    Utilities: "⚡",
    Education: "📚",
    Other: "📦"
  };

  return (
    <div className="expense-item">
        <div className="expense-icon" style={{background:'#a0aec022',color:'#a0aec0'}}>{categoryIcons[expense.category]}</div>
        <div className="expense-info">
            <div className="expense-title">{expense.title}</div>
            <div className="expense-meta">{expense.category} • {expense.date}</div>
        </div>
        <div className="expense-amount" style={{color:'var(--red)'}}>&#8377;{expense.amount}</div>
        <div className="expense-actions">
          <div className="icon-btn edit" onClick={() => openModal("expense", expense)}>✏️</div>
          <div className="icon-btn del" onClick={()=>deleteExpense(expense.id)}>🗑️</div>
        </div>
    </div>
  )
}

export default ExpenseItem