const errorRules= require("../data/errorRule");
const translateError = (req, res) => {
  const { errorMessage } = req.body;

  if (!errorMessage) {
    return res.status(400).json({
      message: "Error message is required",
    });
  }

  const message = errorMessage.toLowerCase(); 
  const matchedRule=errorRules.find((rule) =>
    rule.keywords.some((keyword) => message.includes(keyword))
  );  

  res.json({
    meaning:matchedRule.meaning,
    causes:matchedRule.causes,
    solution:matchedRule.solution,  
  })

};

module.exports = { translateError };
