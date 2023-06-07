// 27

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, licensePlate, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    this.owner = null;

    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log("The owner must be at least 18 years old.");
    }
  }

  getInfo() {
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`License Plate: ${this.licensePlate}`);

    if (this.owner) {
      console.log("Owner:");
      this.owner.getInfo();
    }
  }
}

const person1 = new Human("John Doe", 25);
const person2 = new Human("Jane Smith", 17);

const car1 = new Car("Toyota", "Corolla", 2020, "AB123CD", person1);
const car2 = new Car("Honda", "Civic", 2018, "EF456GH", person2);

car1.getInfo();
console.log("-----------------------");
car2.getInfo();


// 28

function Product(category, type, price) {
  this.category = category;
  this.type = type;
  this.price = price;
}

Product.prototype.render = function () {
  const priceString = Array.isArray(this.price) ? `${this.price[0]} - ${this.price[1]} USD` : `${this.price} USD`;

  return `<tr>
    <td>${this.type}</td>
    <td>${priceString}</td>
  </tr>`;
};

let kitchenProducts = [
  new Product('kitchen', 'grater', 10),
  new Product('kitchen', 'pastry-bag', 25),
  new Product('kitchen', 'scale', 5),
  new Product('kitchen', 'whisk', 15)
];

let devicesProducts = [
  new Product('devices', 'desktop', [100, 1000]),
  new Product('devices', 'laptop', [50, 1500]),
  new Product('devices', 'smartphone', [80, 2000]),
  new Product('devices', 'tablet', [20, 1300])
];

let cosmeticsProducts = [
  new Product('cosmetics', 'blush', 100),
  new Product('cosmetics', 'eyeshadow', 50),
  new Product('cosmetics', 'lipstick', 80),
  new Product('cosmetics', 'nail-polish', 200),
  new Product('cosmetics', 'perfume', 300)
];

function renderTable(products) {
  let tableHTML = '<table>';
  tableHTML += '<tr><th>Image</th><th>Type</th><th>Price</th></tr>';

  for (const product of products) {
    tableHTML += product.render();
  }

  tableHTML += '</table>';

  return tableHTML;
}

const kitchenTableHTML = renderTable(kitchenProducts);
console.log(kitchenTableHTML); 

const devicesTableHTML = renderTable(devicesProducts);
console.log(devicesTableHTML); 

const cosmeticsTableHTML = renderTable(cosmeticsProducts);
console.log(cosmeticsTableHTML); 
