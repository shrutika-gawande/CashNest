import React from 'react'
import { useFinance } from '../../context/FinanceContext'

function RecentActivity() {
  const { allTransactions } = useFinance();

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">⚡ Recent Activity</div>
      </div>
      <div>
        {allTransactions.slice(0, 4).map((item) => (
          <div className="activity-item" key={item._id}>
            <div className="activity-dot" style={{background: item.type === 'income' ? 'var(--green)' : '#ff6b8a'}}></div>
            <div className="activity-text">{item.title}</div>
            <div className="activity-info">
              <span
                className="activity-amount"
                style={{ color: item.type === 'income' ? 'var(--green)' : '#ff6b8a' }}
              >
                {item.type === 'income' ? '+' : '−'}₹{Number(item.amount).toLocaleString()}
              </span>
              <div className="activity-date">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity