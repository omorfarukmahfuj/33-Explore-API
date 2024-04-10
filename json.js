const user = {
  id: 1,
  name: 'Omor Faruk',
  job: 'Developer'
}

// JavaScript Object Notation (JSON)

const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

// { id: 1, name: 'Omor Faruk', job: 'Developer' }
// { "id": 1, "name": "Omor Faruk", "job": "Developer" }

const shop = {
  owner: 'Mahfuj',
  address: {
    street: 'Dhanmondi 32',
    city: 'Dhaka',
    country: 'Bangladesh',
  },

  products: ['laptop', 'keyboard', 'mouse'],
  isOpen: true,
  revenue: 455000,
  isNew: false
}

const shopJSON = JSON.stringify(shop);
const shopObj = JSON.parse(shopJSON);
console.log(shop);
console.log(shopJSON);
console.log(shopObj);