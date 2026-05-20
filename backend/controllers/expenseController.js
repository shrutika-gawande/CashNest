import Expense from "../models/Expense.js"

// GET /api/expenses
const getAll = async (req, res) => { 
    try {
        const expenses = await Expense.find().sort({ createdAt: -1 });
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST /api/expenses
const create = async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).json(expense);
    } catch (err) { 
        res.status(500).json({ message: err.message });
    }
};

// PUT /api/expenses/:id
const update = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if (!expense) return res.status(404).json({ message: "Expense not found" });
        Object.assign(expense, req.body);
        await expense.save();
        res.json(expense);

    } catch (err) {
res.status(500).json({ message: err.message });
    }
};

// DELETE /api/expenses/:id
const remove = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);
    if (!expense) return res.status(404).json({ message: "Expense not found" });
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export { getAll, create, update, remove };