//applicative functors for multiple arguments

const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => console.log(`Box(${x})`)
});


const result = Box(3)
  .map(x => x + 1)
  .map(x => x + 60)
  .fold(String.fromCharCode) //first class fuctio
//linear data flow
console.log(result)
//lets make a functor to be prmoted to applicative functor, by implementig ap method

//instread of box taking the value, it takes a function 
//and then we apply a value to the function


const ABox = x => ({
  x,
  map: f => ABox(f(x)),
  inspect: () => console.log(`ABox(${x})`),
  fold : f => f(x),
  ap: abox => abox.map(x),
});


const r = ABox(x => x + 3).ap(ABox(3)) //this should return Box(6)
const rr = ABox(x => y => x + y).ap(ABox(2)).ap(ABox(5)) //reture ABox(7)

//property of applicative functors is
// F(x).map(f) === F(f).ap(F(x))
//f -> function
//x -> value to the functor

//proof

const addOne = x => x + 1;

const a = ABox(3).map(addOne)
const b = ABox(addOne).ap(ABox(3))
console.log(a, b)

//lets write a lift helper that lifts the function

const add = x => y => x + y;

const lift2 = (f, b1, b2) =>
  b1.map(f).ap(b2) //from the above property

const re = lift2(add, ABox(3), ABox(5))
console.log(re)