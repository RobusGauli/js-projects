const applyDiscount = (price, discount) => {
  //lets parse first price to float
  let floatPrice = parseFloat(price.trim().replace(/\$/g, ''));
  //parse discount to float
  let floatDiscount = parseFloat(discount.trim().replace(/\%/g, ''));
  let savings = (floatDiscount / 100) * floatPrice;
  return floatPrice - savings;

}


//lets use the box container to build to simple pieces togetger


const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => console.log(`Box(${x})`),
});


const parsePriceToFloat = price => 
  Box(price)
  .map(price => price.trim())
  .map(price => price.replace(/\$/, ''))
  .map(price => parseFloat(price))


const parseDiscountToFloat = discount => 
  Box(discount)
  .map(d => d.trim())
  .map(d => d.replace(/\%/, ''))
  .map(d => parseFloat(d))



const applyDiscountTwo = (price, discount) =>
  parsePriceToFloat(price)
  .fold(price => 
    parseDiscountToFloat(discount)
    .fold(discount => 
      price - price * discount * 0.01))

console.log(applyDiscountTwo('$23', '50%'))


//console.log(applyDiscount('$234', '50%'));

//map is function that captures some value in the context so that we
//can compose over it using map, and fold and so on...
//helps in chaining
//Box is the context, and map captures value into the Box so that we can compose
//this fuctor is called identity functor
//it simply return the new value in the same context i.e the box object

