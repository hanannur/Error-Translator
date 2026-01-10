const errorRules = [
  {
    keywords: ["403", "forbidden"],
    meaning: "You do not have permission to access this resource.",
    causes: [
      "User is not authenticated",
      "User does not have the required permissions",
    ],
    solution: "Check login status and access rights.",
  },
  {
    keywords: ["404", "not found"],
    meaning: "The requested resource could not be found.",
    causes: [
      "Incorrect URL",
      "The resource was deleted or moved",
    ],
    solution: "Verify the URL or check if the resource exists.",
  },
  {
    keywords: ["500", "internal server error"],
    meaning: "The server encountered an unexpected condition.",
    causes: [
      "Bug in server code",
      "Unhandled exception",
    ],
    solution: "Check server logs and fix the issue.",
  },
  {
    keywords: ["undefined", "is not defined"],
    meaning: "A variable is used before it is defined.",
    causes: [
      "Misspelled variable name",
      "Variable not declared",
    ],
    solution: "Declare the variable or fix the spelling.",
  },
];

module.exports = errorRules;
