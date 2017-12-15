//creating linear data flow with
//container style styles
//also called as identity functors

const nextCharFromNumberString = string => {
  
  const trimmedValue = string.trim();
  const integerFromString = parseInt(trimmedValue);
  const integerValue = integerFromString + 1;
  const result = String.fromCharCode(integerValue);
  return result;

}
//this is so much of assignments 

const nextCharFromNumberStringTwo = string => {
  //this is hard to reasong about even though it has no assignemets anywhere
  return String.fromCharCode(parseInt(string.trim()) + 1)
}

//lets use the Array -> a kind of a functor as it implements map function
//this lets us create linedar data flow 

const nextCharThree = string => (
  [string]
  .map(val => val.trim())
  .map(val => parseInt(val))
  .map(val => val + 1)
  .map(val => String.fromCharCode(val))
) 
  
//lets make our own Box container

const Box = x => ({
  //so that we can chain stuffs
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => console.log(`Box(${x})`)  
});


const nextCharFour = string => (
  Box(string)
  .map(val => val.trim())
  .map(val => parseInt(val))
  .map(val => val + 1)
  .fold(val => String.fromCharCode(val))
)

//map -> does the operation and put it back to the Box for chaining`
//fold -> does the operation and returns the value of the operation


console.log(nextCharFour('  64'))