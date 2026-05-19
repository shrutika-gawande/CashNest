import React from 'react'
import { useFinance } from '../../context/FinanceContext';
import { useModal } from '../../context/ModalContext';

function IncomeItem({ income }) {
const {deleteIncome} = useFinance();
const { openModal } = useModal();

    const sourceIcons = {
        Salary: "💼",
        Freelance: "💻",
        Business: "🏢",
        Investment: "📈",
        Rental: "🏠",
        Gift: "🎁",
        Other: "💰"
    };

    return (
        <div className="expense-item">
            <div className="expense-icon" style={{ background: '#a0aec022', color: '#a0aec0' }}>{sourceIcons[income.source]}</div>
            <div className="expense-info">
                <div className="expense-title">{income.title}</div>
                <div className="expense-meta">{income.source} • {income.date}</div>
            </div>
            <div className="expense-amount" style={{ color: 'var(--green)' }}>&#8377;{income.amount}</div>
            <div className="expense-actions">
                <div className="icon-btn edit" onClick={() => openModal("income", income)}>✏️</div>
                <div className="icon-btn del" onClick={()=>deleteIncome(income.id)}>🗑️</div>
            </div>
        </div>
    )
}

export default IncomeItem