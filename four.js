//practical application of either functor

//getting the hex color from the colors object key being the name and the value being the hex

//Either = Right | Left

const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
});

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
});

const colors = {
  green: '#2s3s43',
  red: '#efefef',
};

//imperative code
const getColorHexFromName = name => {
  const hexVal = colors[name];
  if (hexVal) {
    return hexVal.slice(1).toUpperCase();
  } else {
    return 'color not defined';
  }
}

//in functional style
const getColor = name =>
  colors[name] ? Right(colors[name]) : Left('Error')

const getColorHexFromNameTwo = name => 
  getColor(name)
  .map(colorCode => colorCode.trim())
  .map(color => color.slice(1))
  .map(color => color.toUpperCase())
  .fold(error => console.log(error),
        color => color)
//when there is no color map then, it short circuit all the other function
//and error out to the console

console.log(getColorHexFromNameTwo('greeen'));
console.log(getColorHexFromName('green'));
