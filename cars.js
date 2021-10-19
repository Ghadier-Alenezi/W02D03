class Cars {
  constructor(make, model, color, image, registrationNumber, price) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.image = image;
    this.registrationNumber = registrationNumber;
    this.price = price;
  }
  editPrice(newPrice) {
    this.price = newPrice;
  }
  showAll() {
    console.log(this);
  }
};

const car1 = new Cars("Tuyota", "2021", "black", "image", "12345", "100000");
const car2 = new Cars("Ford", "2019", "red", "image", "67891", "150000");
const car3 = new Cars("Nissan", "2017", "blue", "image", "23456", "90000");
const car4 = new Cars("Lexus", "2008", "gray", "image", "78912", "140000");
const car5 = new Cars("Mercedes", "2016", "white", "image", "34567", "160000");

car1.editPrice(120000);
console.log(car1);

car2.showAll();