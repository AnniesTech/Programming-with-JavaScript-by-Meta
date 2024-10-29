var purchase1 = {
  shoes: 100,
  stateTax: 1.5,
  totalPrice: function () {
    var calculation = purchase1.shoes * purchase1.stateTax;
    console.log("Total Price", calculation);
  },
};
purchase1.totalPrice();

var purchase2 = {
  shoes: 50,
  stateTax: 1.5,
  totalPrice: function () {
    var calculation = purchase2.shoes * purchase2.stateTax;
    console.log("Total Price", calculation);
  },
};
purchase2.totalPrice();

// Now let's optimaze the code with using a more standard code using THIS

var purchase1 = {
  shoes: 100,
  stateTax: 1.5,
  totalPrice: function () {
    var calculation = this.shoes * this.stateTax;
    console.log("Total Price", calculation);
  },
};
purchase1.totalPrice();

var purchase2 = {
  shoes: 50,
  stateTax: 1.5,
  totalPrice: function () {
    var calculation = this.shoes * this.stateTax;
    console.log("Total Price", calculation);
  },
};
purchase2.totalPrice();
