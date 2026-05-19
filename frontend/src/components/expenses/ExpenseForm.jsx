import React, { useState } from 'react'
import "../../styles/form.css"
import toast from 'react-hot-toast';
import { useFinance } from '../../context/FinanceContext';
import { useModal } from '../../context/ModalContext';

function ExpenseForm() {
const {addExpense, editExpense} = useFinance();
const { closeModal, editItem } = useModal();

  const [formData, setFormData] = useState(editItem || {
    title: "",
    amount: "",
    date: "",
    category: "Food & Dining",
    note: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editItem) {
      editExpense(editItem.id, formData);
      toast.success("Expense updated!");
    } else {
      addExpense(formData);
      toast.success("Expense added!");
    }

    closeModal();
  };

  return (

    <form className='form-grid' onSubmit={handleSubmit}>

      <div className="field form-full">
        <label>Title</label>

        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
          placeholder='e.g. Lunch at cafe'
        />
      </div>

      <div className="field">
        <label>Amount (&#8377;)</label>

        <input
          type='number'
          name='amount'
          value={formData.amount}
          onChange={handleChange}
          placeholder='0.00'
        />
      </div>

      <div className="field">
        <label>Date</label>

        <input
          type='date'
          name='date'
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div className="field form-full">
        <label>Category</label>

        <select
          name='category'
          value={formData.category}
          onChange={handleChange}
        >

          <option value="">Select Category</option>

          <option value="Food & Dining">
            🍔 Food & Dining
          </option>

          <option value="Shopping">
            🛍️ Shopping
          </option>

          <option value="Travel">
            ✈️ Travel
          </option>

          <option value="Entertainment">
            🎮 Entertainment
          </option>

          <option value="Health">
            💊 Health
          </option>

          <option value="Utilities">
            ⚡ Utilities
          </option>

          <option value="Education">
            📚 Education
          </option>

          <option value="Other">
            📦 Other
          </option>

        </select>
      </div>

      <div className="field form-full">
        <label>Note (Optional)</label>

        <textarea
          name='note'
          value={formData.note}
          onChange={handleChange}
          placeholder='Any additional note...'
          rows="4"
        />
      </div>

      <button
        type='submit'
        className='btn btn-primary'
        style={{
          display: 'block',
          width: '100%',
          marginTop: '10px'
        }}
      >
         {editItem ? "Update Expense" : "Add Expense"}
      </button>

    </form>
  )
}

export default ExpenseForm