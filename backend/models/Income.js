import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema(
  {
    title:  { type: String, required: true, trim: true },
    amount: { type: Number, required: true },
    source: { type: String, required: true },
    date:   { type: String, required: true },
    note:   { type: String, default: "" },
  },
  { timestamps: true }
);

const Income = mongoose.models.Income || mongoose.model("Income", incomeSchema);

export default Income;