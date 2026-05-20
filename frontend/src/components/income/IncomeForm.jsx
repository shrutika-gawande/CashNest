import React, { useState } from "react";
import toast from "react-hot-toast";
import "../../styles/form.css";
import { useFinance } from "../../context/FinanceContext";
import { useModal } from "../../context/ModalContext";

function IncomeForm() {
  const { addIncome, editIncome } = useFinance();
  const { closeModal, editItem } = useModal();

  const [formData, setFormData] = useState(editItem || {
    title: "",
    amount: "",
    date: "",
    source: "Salary",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editItem) {
      editIncome(editItem._id, formData);
      toast.success("Income updated!");
    } else {
      addIncome(formData);
      toast.success("Income added!");
    }

    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <div className="field form-full">
        <label>title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          type="text"
          placeholder="e.g. Monthly Salary"
        />
      </div>
      <div className="field">
        <label>amount (&#8377;)</label>
        <input
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          type="number"
          placeholder="0.00"
        />
      </div>
      <div className="field">
        <label>date</label>
        <input
          name="date"
          value={formData.date}
          onChange={handleChange}
          type="date"
          placeholder="e.g. Lunch at cafe"
        />
      </div>
      <div className="field form-full">
        <label>source</label>
        <select
          name="source"
          value={formData.source}
          onChange={handleChange}
        >
          <option value="Salary">💼 Salary</option>
          <option value="Freelance">💻 Freelance</option>
          <option value="Business">🏢 Business</option>
          <option value="Investment">📈 Investment</option>
          <option value="Rental">🏠 Rental</option>
          <option value="Gift">🎁 Gift</option>
          <option value="Other">💰 Other</option>
        </select>
      </div>
      <div className="field form-full">
        <label>note (optional)</label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          placeholder="Any additional note..."
        />
      </div>
      <button
        className="btn btn-success"
        style={{
          display: "block",
          width: "100%",
          marginTop: "10px",
        }}
      >
        {editItem ? "Update Income" : "Add Income"}
      </button>
    </form>
  );
}

export default IncomeForm;
