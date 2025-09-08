const bankName = "VTech Bank";

const customerRecords = [];

const Transactions = [];

// function to return greeting with customer name
const WelcomeMessage = (CustomerName) => {
  return `Hello, ${CustomerName}! Welcome to ${bankName}.\nWe hope you Enjoy banking with us😊`;
};

// function to add two numbers
function addNumber(x, y) {
  return x + y;
}

//function to subtract two numbers
function subtractNumber(x, y) {
  return x - y;
}

// Logging the outputs
console.log(WelcomeMessage("John"));
console.log(addNumber(5000, 30));
console.log(subtractNumber(1000, -4));
