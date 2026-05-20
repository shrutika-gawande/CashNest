import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    title:    { type: String, required: true, trim: true },
    amount:   { type: Number, required: true },
    category: { type: String, required: true },
    date:     { type: String, required: true },
    note:     { type: String, default: "" },
  },
  { timestamps: true }
);

// ✅ This prevents "Cannot overwrite model" error in ESM/dev with hot reload
const Expense = mongoose.models.Expense || mongoose.model("Expense", expenseSchema);

export default Expense;