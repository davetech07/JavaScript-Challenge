const bankName = "VTech Bank";

const customerRecords = [];

const Transactions = [];

const WelcomeMessage = (CustomerName) => {
  return `Hello, ${CustomerName}! Welcome to ${bankName}.\n We hope you Enjoy banking with us`;
};

console.log(WelcomeMessage("John"));
