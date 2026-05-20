import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    month:  { type: Number, required: true },
    year:   { type: Number, required: true },
  },
  { timestamps: true }
);

budgetSchema.index({ month: 1, year: 1 }, { unique: true });

const Budget = mongoose.models.Budget || mongoose.model("Budget", budgetSchema);

export default Budget; 