import Budget from "../models/Budget.js";

// GET /api/budget
const get = async (req, res) => {
  try {
    const now   = new Date();
    const month = parseInt(req.query.month) || now.getMonth() + 1;
    const year  = parseInt(req.query.year)  || now.getFullYear();
    const budget = await Budget.findOne({ month, year });
    res.json(budget || { amount: 0, month, year });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/budget
const save = async (req, res) => {
  try {
    const now   = new Date();
    const { amount } = req.body;
    const month = parseInt(req.body.month) || now.getMonth() + 1;
    const year  = parseInt(req.body.year)  || now.getFullYear();
    const budget = await Budget.findOneAndUpdate(
      { month, year },
      { amount },
      { upsert: true, new: true }
    );
    res.json(budget);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { get, save };