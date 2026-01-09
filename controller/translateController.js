const translateError = (req, res) => {
  const { errorMessage } = req.body;

  if (!errorMessage) {
    return res.status(400).json({
      message: "Error message is required",
    });
  }

  res.json({
    meaning: "Temporary meaning (backend connected)",
    causes: ["Temporary cause"],
    solution: "Temporary solution",
  });
};

module.exports = { translateError };
