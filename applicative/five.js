const { Seq }  = require('immutable');
let times = 0;
const xs = Seq([1,2,3,4,5,6]);
const filter = (x, ...args) => {
  times += 1;
  console.log(args);
  return  x % 2 === 0;
}
const mapper = (x, ...args) => {
  times += 1;
  console.log(args);
  return  x * x * x;
}

const result = xs
  .filter(filter)
  .map(mapper);

const oddSquares = Seq([ 1, 2, 3, 4, 5, 6, 7, 8 ])
  .filter(x => {times += 1; return x % 2 !== 0})
  .map(x => {times += 1; return x * x;})

  console.log(oddSquares.toJS());
  console.log(times);



const { List } = require('immutable');
const a = List.of([4,5,6,7,8,9])
const b = a.push('new vlaue');
console.log(b);

const { Map } = require('immutable');
const Immutable = require('immutable');


const map1 = Map({name: 'robus', age: '24'});
console.log(map1.get('name'));
const map2 = map1.set('age', 30)
console.log(map2 === map1);

const map3 = map1.set('age', 30);
console.log(map3.equals(map2))
console.log(Immutable.is(map3, map2));


const map4 = map3;
console.log(map4 === map3);

const map5

