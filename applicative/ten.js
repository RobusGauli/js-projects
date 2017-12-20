//applicative functors
//a functors with the ap method on it;

const Box = x => ({
  x,
  map: f => Box(f(x)),
  fold: f => f(x),
  chain: f => f(x),
  inspect: () => console.log(`Box(${x})`),
  ap: f => f.map(x)
});

const result = Box(34)
  .map(x => x * x)
  .map(x  => x.toString())
  .map(x => x + x)
  .fold(console.log)


const { List } = require('immutable-ext');
const jj = List.of(1, 2, 3 ,4 )
  .map(x => x + 3)
console.log(j);

const newBox = Box(x => x + 1)
const appliedBox = Box(x => y => x + y)
  .ap(Box(2))
  .ap(Box(3))

console.log(appliedBox)

console.log(Box(4).map(x => x + 1), Box(x => x + 1).ap(Box(4))) //property of applicative functors

//xconst { List } = require('immutable-ext');
const helper = List.of(x => y => x + y)
  .ap(List([2,3,4,5]))
  .ap(List([4,5,6,7]))
  .toJS()

const hello = List.of(1,2,3,4)
  .map(x => y => x + y)
  .ap(List.of(2,3,4,5))

const h = [1,2,3,4]
  .map(x => y => x + y)
console.log(h)
console.log(hello);


const j = List.of(x => x + 1, x => x + 2).ap(List.of(1, 2, 3, 4));
console.log(j)


