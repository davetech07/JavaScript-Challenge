const customers = [];

const addCustomer = (id, name, balance) => {
  const customer = { id, name, balance };
  customers.push(customer);
  return customer;
};

const listCustomers = () => {
  customers.forEach((customers) => {
    console.log(customers.name);
  });
};

addCustomer(1, "Vcoder", 1009200);
addCustomer(2, "Ademi", 500000);
addCustomer(3, "Akam", 750000);
// console.log(addCustomer(1, "Vcoder", 1009200));

listCustomers();
