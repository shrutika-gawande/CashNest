import React from 'react'
import { useFinance } from '../../context/FinanceContext'

function SummaryCards() {
  const { totalIncome, totalExpense, budget, remainingBudget, balance, incomes, expenses } = useFinance();
  const surplus = balance >= 0;

  return (
    <div className="summary-grid">
      <div className="summary-card" style={{ "--card-accent": "var(--green-bg)" }}>
        <div className='card-icon' style={{ background: "var(--green-bg)", color: "#38d9a9" }}>💵</div>
        <div className='card-label'>Total Income</div>
        <div className='card-value' style={{ color: "#38d9a9" }}>&#8377;{totalIncome}</div>
        <div className='card-sub'>{incomes.length} entries this month</div>
      </div>
      <div className="summary-card" style={{ "--card-accent": "var(--red-bg)" }}>
        <div className='card-icon' style={{ background: "var(--red-bg)", color: "#ff6b8a" }}>💳</div>
        <div className='card-label'>Total Expenses</div>
        <div className='card-value' style={{ color: "#ff6b8a" }}>&#8377;{totalExpense}</div>
        <div className='card-sub'>{expenses.length} transactions this month</div>
        <div className="card-bar">
          <div className="card-bar-fill" style={{ width: "60%", background: "#ff6b8a" }}></div>
        </div>
      </div>
      <div className="summary-card" style={{ "--card-accent": "var(--accent-glow)" }}>
        <div className='card-icon' style={{ background: "var(--accent-glow)", color: "var(--accent2)" }}>🎯</div>
        <div className='card-label'>Remaining Budget</div>
        <div className='card-value' style={{ color: "var(--accent2)" }}>&#8377;{remainingBudget< 0 ? 0 : remainingBudget}</div>
        <div className='card-sub'>of {budget} budget</div>
        <div className="card-bar">
          <div className="card-bar-fill" style={{ width: "40%", background: "var(--accent" }}></div>
        </div>
      </div>
      <div className="summary-card" style={{
        "--card-accent": surplus
          ? "var(--green-bg)"
          : "var(--red-bg)"
      }}>
        <div className='card-icon' style={{
          background: surplus ? "var(--green-bg)" : "var(--red-bg)",
          color: surplus ? "#38d9a9" : "#ff6b8a"
        }}>{surplus ? '📈' : '📉'}</div>
        <div className='card-label'>Net Savings</div>
        <div className='card-value' style={{ color: surplus ? "#38d9a9" : "#ff6b8a" }}>&#8377;{Math.abs(balance)}</div>
        <div className='card-sub'>{surplus ? "surplus" : "deficit"} this month</div>
      </div>
    </div>
  )
}

export default SummaryCards