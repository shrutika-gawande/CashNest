import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/sidebar.css";
import { useFinance } from "../../context/FinanceContext";

function Sidebar() {

const {incomes, expenses} = useFinance();

  return (
    <section className="sidebar">
      <div className="logo">
        <div className="logo-icon">💸</div>
        <div className="logo-text">
          Cash<span>Nest</span>
        </div>
      </div>

      <div className="sidebar-cat">
        <div className="nav-label">Overview</div>

        <NavLink to="/" end className="nav-item">
          <span className="icon">⚡</span>
          Dashboard
        </NavLink>
        <NavLink to="/expense" className="nav-item">
          <span className="icon">📋</span>
          Expenses
          <span className="badge">{expenses.length}</span>
        </NavLink>
        <NavLink to="/income" className="nav-item">
          <span className="icon">💵</span>
          Income
          <span className="badge">{incomes.length}</span>
        </NavLink>

        <div className="nav-label">Manage</div>
        <NavLink to="/budget" className="nav-item">
          <span className="icon">🎯</span> 
          Budget
        </NavLink>
        <NavLink to="/analytics" className="nav-item">
          <span className="icon">📊</span> 
          Analytics
        </NavLink>

        <div className="nav-label">System</div>
        <NavLink to="/settings" className="nav-item">
          <span className="icon">⚙️</span> 
          Settings
        </NavLink>
      </div>
    </section>
  );
}

export default Sidebar;
