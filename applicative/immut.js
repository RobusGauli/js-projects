const { Map, List } = require('immutable');

const map = Map({
  name : 'robus',
  age: '34',

})

const result = map.map((val, key) => val.toUpperCase()).join()

console.log(result);
const a = Map({
  name : 'robus',
  friends : List([2,3,4,5,6])
})
const ab = a.toJS();

const { fromJS } = require('immutable');
const hero = fromJS(ab);
const reuse = hero
  .map((v, k) => v.toString())
console.log(reuse);


const names = List(['robs', 'gogs', 'hogs'])
const re = ['home', ...names]
console.log(re);


const h1 = List.of(1, 2, 3)
const h2 = List.of(1, 2, 3)
console.log(h1, h2);
console.log(h1.toArray().length)
console.log(h1.size);
console.log(h1.constructor.name)
console.log(h2.constructor.name);
const h3 = List(['robs'])
const h4 = List(['robs'])
console.log(h1.equals(h2));
console.log(h3.equals(h4));
console.log(h1)


