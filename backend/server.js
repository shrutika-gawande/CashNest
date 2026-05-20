import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import incomeRoutes from "./routes/incomeRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import budgetRoutes from "./routes/budgetRoutes.js";
import seedData from "./seed.js";
import Income from "./models/Income.js";
import Expense from "./models/Expense.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const seedDatabase = async () => {
  const incomeCount = await Income.countDocuments();
  const expenseCount = await Expense.countDocuments();

  if (incomeCount === 0) {
    await Income.insertMany(seedData.incomes);
    console.log("Seed incomes added");
  }

  if (expenseCount === 0) {
    await Expense.insertMany(seedData.expenses);
    console.log("Seed expenses added");
  }
};

seedDatabase();

app.use("/api/incomes", incomeRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/budget", budgetRoutes);

app.get("/", (req, res) => {
  res.send("Finance API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
