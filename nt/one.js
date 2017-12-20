const Box = x => ({
  x,
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => console.log(`Box(${x})`),
});

const { List } = require('immutable-ext');

const Task = require('data.task');
const boxToTask = box =>
  box.fold(Task.of)

const t = boxToTask(Box(3))
  .map(x => x + 200)
  .fork(console.error, console.log)

Task.of(34)
  .map(x => Box(x))
  .fork(console.error, console.log)

const arrays = List(['hello', 'world'])
const results = arrays.map(x => x.split(''))
console.log(results);


