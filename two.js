const applyDiscount = (price, discount) => {
  //lets parse first price to float
  let floatPrice = parseFloat(price.trim().replace(/\$/g, ''));
  let floatDiscount = parseFloat(discount.trim().replace(/\%/g, ''));
  let savings = (floatDiscount / 100) * floatPrice;
  return floatPrice - savings;

}

console.log(applyDiscount('$234', '50%'));