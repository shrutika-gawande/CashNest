import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";

const FinanceContext = createContext();

export function FinanceProvider({ children }) {
  // STATES

  const [budget, setBudget] = useState(
    () => Number(localStorage.getItem("budget")) || 0,
  );

  const [incomes, setIncomes] = useState(() => {
    const saved = localStorage.getItem("incomes");
    return saved ? JSON.parse(saved) : [];
  });

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  // FETCH DATA FROM BACKEND

  useEffect(() => {
    fetchIncomes();
    fetchExpenses();
    fetchBudget();
  }, []);

  const fetchIncomes = async () => {
    try {
      const res = await api.get("/api/incomes");

      setIncomes(res.data);

      localStorage.setItem("incomes", JSON.stringify(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchExpenses = async () => {
    try {
      const res = await api.get("/api/expenses");

      setExpenses(res.data);

      localStorage.setItem("expenses", JSON.stringify(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBudget = async () => {
    try {
      const res = await api.get("/api/budget");
      if (res.data?.amount) {
        setBudget(res.data.amount);
        localStorage.setItem("budget", res.data.amount);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const saveBudget = async (amount) => {
    try {
      setBudget(amount); // update state immediately
      await api.post("/api/budget", { amount }); // persist to MongoDB
    } catch (err) {
      console.log(err);
    }
  };

  // LOCAL STORAGE SYNC

  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [incomes]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("budget", budget);
  }, [budget]);

  // ADD INCOME

  const addIncome = async (entry) => {
    try {
      const res = await api.post("/api/incomes", entry);

      setIncomes((prev) => [res.data, ...prev]);
    } catch (err) {
      console.log(err);
    }
  };

  // ADD EXPENSE

  const addExpense = async (entry) => {
    try {
      const res = await api.post("/api/expenses", entry);

      setExpenses((prev) => [res.data, ...prev]);
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE INCOME

  const deleteIncome = async (id) => {
    try {
      await api.delete(`/api/incomes/${id}`);

      setIncomes((prev) => prev.filter((i) => i._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE EXPENSE

  const deleteExpense = async (id) => {
    try {
      await api.delete(`/api/expenses/${id}`);

      setExpenses((prev) => prev.filter((e) => e._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT INCOME

  const editIncome = async (id, updatedEntry) => {
    try {
      const res = await api.put(`/api/incomes/${id}`, updatedEntry);

      setIncomes((prev) => prev.map((i) => (i._id === id ? res.data : i)));
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT EXPENSE

  const editExpense = async (id, updatedEntry) => {
    try {
      const res = await api.put(`/api/expenses/${id}`, updatedEntry);

      setExpenses((prev) => prev.map((e) => (e._id === id ? res.data : e)));
    } catch (err) {
      console.log(err);
    }
  };

  // CLEAR ALL

  const clearAll = async () => {
    try {
      // DELETE EVERYTHING FROM DATABASE
      await api.delete("/api/incomes");
      await api.delete("/api/expenses");
      await api.delete("/api/budget");

      // CLEAR FRONTEND STATES
      setIncomes([]);
      setExpenses([]);
      setBudget(0);

      // CLEAR LOCAL STORAGE
      localStorage.removeItem("incomes");
      localStorage.removeItem("expenses");
      localStorage.removeItem("budget");
    
    } catch (err) {
      console.log(err);
    }
  };

  // CALCULATIONS

  const totalIncome = incomes.reduce((sum, i) => sum + Number(i.amount), 0);

  const totalExpense = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  const balance = totalIncome - totalExpense;

  const remainingBudget = Number(budget) - totalExpense;

  const rawPercentage = budget > 0 ? (totalExpense / budget) * 100 : 0;

  const displayPercentage = Math.min(rawPercentage, 100).toFixed(1);

  // ALL TRANSACTIONS

  const allTransactions = [
    ...incomes.map((i) => ({
      ...i,
      type: "income",
    })),

    ...expenses.map((e) => ({
      ...e,
      type: "expense",
    })),
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  // PROVIDER

  return (
    <FinanceContext.Provider
      value={{
        // states
        budget,
        setBudget,
        saveBudget,
        incomes,
        expenses,

        // totals
        totalIncome,
        totalExpense,
        balance,
        remainingBudget,
        rawPercentage,
        displayPercentage,

        // transactions
        allTransactions,

        // actions
        addIncome,
        addExpense,
        deleteIncome,
        deleteExpense,
        editIncome,
        editExpense,
        clearAll,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}

export const useFinance = () => useContext(FinanceContext);
