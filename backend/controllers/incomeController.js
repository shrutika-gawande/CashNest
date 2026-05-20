import Income from "../models/Income.js";

// GET /api/income
const getAll = async (req, res) => {
  try {
    const incomes = await Income.find().sort({ createdAt: -1 });
    res.json(incomes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/income
const create = async (req, res) => {
  try {
    const { title, amount, source, date, note } = req.body;
    const income = await Income.create({ title, amount, source, date, note });
    res.status(201).json(income);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/income/:id
const update = async (req, res) => {
  try {
    const income = await Income.findById(req.params.id);
    if (!income) return res.status(404).json({ message: "Income not found" });
    const { title, amount, source, date, note } = req.body;
    Object.assign(income, { title, amount, source, date, note });
    await income.save();
    res.json(income);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE /api/income/:id
const remove = async (req, res) => {
  try {
    const income = await Income.findByIdAndDelete(req.params.id);
    if (!income) return res.status(404).json({ message: "Income not found" });
    res.json({ message: "Income deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getAll, create, update, remove };