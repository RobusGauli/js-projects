

const List = x => ({
  x,
  map: f => List([...x.reduce((acc, val) => [...acc, f(val)], [])]),
  fold: f => x.reduce((acc, val) => [...acc, f(val)], []),
  inspect: () => {
    return `List([${x.join(',')}])`
  },
  ap: (other)  => other.map(x) 
})

List.of = (...args) => List([...args]);



const here = List([1,2,3,4,5])
  .map(x => x + 1)
  .map(x => x.toString().toUpperCase() + ' ' + x.toString().toLowerCase())
  .map(x => [x.split(' ')])

const solo = List.of(x => x + 1).ap(List.of(3, 4, 5))
console.log(solo)
  

console.log(here)

// const choices = List.of(x => y => z => `${x} - ${y} - ${z}`)
//   .ap(List.of('red', 'white', 'green'))
//   .ap(List.of('Tshirt', 'Sweater'))
//   .ap(List.of('hulk', 'spider man'))
// console.log(choices);

// const k = List.of('a a', 'b b')
//   .map(x => x.split(' '))
// console.log(k)

