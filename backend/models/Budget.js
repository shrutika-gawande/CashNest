export const save = async (req, res) => {
  try {
    const now   = new Date();
    const { amount } = req.body;
    const month = parseInt(req.body.month) || now.getMonth() + 1;
    const year  = parseInt(req.body.year)  || now.getFullYear();

    const budget = await Budget.findOneAndUpdate(
      { month, year },
      { amount },
      { upsert: true, new: true }   // ← creates if doesn't exist, updates if it does
    );

    res.json(budget);
  } catch (err) {
    console.log("❌ ERROR:", err.message);
    res.status(500).json({ message: err.message });
  }
};