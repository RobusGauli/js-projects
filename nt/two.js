const Task = require('data.task');
Task.of(34)
  .chain(x => Task.of(30)
    .map(y => x + y))
  .fork(console.error, console.log)


const { List } = require('immutable-ext');
const result = List(['here', 'ia'])
  .chain(x => List(x.split('')))
  .map(x => x.toUpperCase())
console.log(result.toJS())