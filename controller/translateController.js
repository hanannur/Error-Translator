const translateError = (req, res) => {
  const { errorMessage } = req.body;

  if (!errorMessage) {
    return res.status(400).json({
      message: "Error message is required",
    });
  }

  res.json({
    meaning: "Backend connected successfully",
    causes: ["Test cause"],
    solution: "Test solution",
  });
};

module.exports = { translateError };
