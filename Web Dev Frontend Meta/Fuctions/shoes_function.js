var shoes = 100;
var stateTax = 1.5;

function calculation(shoes, tax) {
  return shoes * tax;
}

var totalPay = calculation(shoes, stateTax);

console.log(totalPay);
