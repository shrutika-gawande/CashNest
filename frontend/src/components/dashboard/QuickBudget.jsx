import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
import BudgetMeter from "../budget/BudgetMeter"
import { useFinance } from '../../context/FinanceContext';

function QuickBudget() {
  const navigate = useNavigate();
  const { totalExpense, budget, remainingBudget, displayPercentage, rawPercentage } = useFinance();
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">🎯 Budget Overview</div>
        <span className="btn btn-ghost btn-sm" onClick={() => navigate('/budget')}>Manage →</span>
      </div>
      <div>
        <div className='quick-label'>
          <span className='card-sub'>Spent</span>
          <span className='quick-amt'>&#8377;{budget && totalExpense} / &#8377;{budget}</span>
        </div>
        <BudgetMeter percentage={rawPercentage} />
        <div className="budget-labels">
          <span>{displayPercentage}% used</span>
          <span>&#8377;{remainingBudget < 0 ? 0 : remainingBudget} left</span>
        </div>
        <div className="status-container">
          <div className="card-sub">Status</div>
          <div className="status" style={{
            color:
              rawPercentage > 80 ? '#ff6b8a' :
                rawPercentage >= 70 ? 'var(--amber)' :
                  'var(--green)'
          }}>
            {rawPercentage > 80 ? '🔴 Critical ' :
              rawPercentage >= 70 ? '🟡 Watch Out' :
                '🟢 On Track'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickBudget