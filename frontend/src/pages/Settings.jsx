import React from "react";
import "../styles/settings.css"
import toast from 'react-hot-toast';
import { CSVLink } from 'react-csv'
import { incomeHeaders, expenseHeaders, allTransactionHeaders } from "../utils/csvHeaders";
import { useFinance } from "../context/FinanceContext";

function Settings() {
  const { clearAll, allTransactions } = useFinance();

  const handleClick = () => {
    clearAll(),
      toast.success("Data cleared!");
  }

  return (
    <div className="main">
      <div className="page-header">
        <div>
          <div className="page-title">Settings</div>
          <div className="page-subtitle">Customize your FinFlow experience</div>
        </div>
      </div>

      <div className="card">

        <div className="settings-section">
          <div className="settings-title">Appearance</div>
          <div className="settings-item">
            <div>
              <div className="settings-label">Theme</div>
              <div className="settings-desc">Switch between dark and light mode</div>
            </div>
            <button className="btn btn-ghost btn-sm">Toggle</button>
          </div>
        </div>

        <div className="settings-section">
          <div className="settings-title">Data Management</div>
          <div className="settings-item">
            <div>
              <div className="settings-label">Export to CSV</div>
              <div className="settings-desc">Download all expenses as a CSV file</div>
            </div>
            <CSVLink data={allTransactions} headers={allTransactionHeaders} filename="All-transactions.csv">
              <button className="btn btn-ghost btn-sm">Export</button>
            </CSVLink>
          </div>
          <div className="settings-item">
            <div>
              <div className="settings-label">Clear All Data</div>
              <div className="settings-desc">Permanently delete all expenses and budget</div>
            </div>
            <button className="btn btn-danger btn-sm" onClick={handleClick}>Clear</button>
          </div>
        </div>

        <div className="settings-section">
          <div className="settings-title">About</div>
          <div className="settings-item">
            <div>
              <div className="settings-label">CashNest v1.0</div>
              <div className="settings-desc">Personal Finance Tracker — CashNest</div>
            </div>
            <span style={{ color: 'var(--text3)', fontSize: '12px', fontFamily: 'var(--mono)' }}>{new Date().getFullYear()}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Settings;
