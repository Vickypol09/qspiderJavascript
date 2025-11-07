// cart object
let cart = {
  items: [],

  // function to add a product
  addProduct: function (product, price) {
    this.items.push({ product, price }); // ✅ actually add item to array
    console.log(`${product} is added`);
  },

  // function to get total
  getTotal: function () {
    if (this.items.length === 0) {
      console.log("Cart is empty!");
      return 0;
    }

    // ✅ fix reduce syntax and add initial value (0)
    let total = this.items.reduce((sum, ele) => sum + ele.price, 0);
    console.log(`Total is ₹${total}`);
    return total;
  }
};

// simulate adding products after some time
setTimeout(() => {
  cart.addProduct("Watch", 5000);
}, 2000);

setTimeout(() => {
  cart.addProduct("Mobile", 3000);
}, 2500);

setTimeout(() => {
  cart.addProduct("Shoes", 2000);
}, 3000);

setTimeout(() => {
  cart.getTotal();
}, 4000);
