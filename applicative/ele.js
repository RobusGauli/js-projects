
//right implemenetaion of List
const List = x => ({
  x,
  map: f => List.of(...x.reduce((acc, val) => [...acc, f(val)], [])),
  fold: f => x.reduce((acc, val) => [...acc, f(val)], []),
  inspect: () => {
    return `List([${x.join(',')}])`
  },
  ap: other => List(x.reduce((acc, val) => [...acc, ...other.fold(val)], [])),
})

List.of = (...args) => List([...args]);


const Str = x => ({
  x,
  map: f => x ? Str(f(x)) : Failed(x),
  fold: (e, f) => f(x)
})

const Failed = x => ({
  x,
  map: f => Failed(x),
  fold: (e, f) => e(x)
})


const here = List([1,2,3,4,5])
  .map(x => x + 1)
  .map(x => x.toString().toUpperCase() + ' ' + x.toString().toLowerCase())
  .map(x => [x.split(' ')])

const solo = List.of(1, 2, 3)
  .map(x => x + 2)
console.log(solo)
  

console.log(here)



const g = List.of(x => y => z => `${x} - ${y} - ${z}`)
  .ap(List.of('red', 'green', 'white'))
  .ap(List.of('wet', 'hot'))
  .ap(List.of('love', 'hate'))
  .map(x => x.split('-'))
  .map(x => x.map(el => Str(el)
                        .map(x => x.trim())
                        .map(x => x.slice(0, 1))
                        .map(x => x.toUpperCase())
                        .fold(
                          err => console.log('err'),
                          x => x)
                  ))
  .fold(x => x.join(''))

//i think this is cool
console.log(g)
//
const h1 = List.of(x => x + 1).ap(List.of(1, 2, 3))
const h2 = List.of(1, 2, 3).map(x => x + 1)
console.log(h1, h2);


const another = value => Str(value)
                  .map(x => x.trim())
                  .map(x => x.toUpperCase())
                  .fold(e => console.log('errr'),
                        x => x)
console.log(another(null))
console.log(another('some value'));


