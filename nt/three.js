//Either

const Either = side =>
  x => ({
    x,
    map: f => Either(side)(side === 'Right' ? f(x): x),
    fold: (f, g) => side === 'Right' ? g(x) : f(x),
    inspect: () => console.log(`${side}(${x})`)
  })

const Right = Either('Right');
const Left = Either('Left');

//const result = Right(4)
  //.map(x => 4 + x)
  //.fold(console.error, console.log)

//const anotherResult = Left(null)
  //.map(x => x +3) //this would no blow on us
  //.fold(console.error, console.log)

const Task = require('data.task')

const eitherToTask = either => 
  either.fold(Task.rejected, Task.of)

const mock = id => ({
  id: id,
  name: `User${id}`,
  best_friend_id : id + 1,
});


const DB = ({
  find: id =>
    new Task((rej, res) => 
    res(id > 3 ? Right(mock(id)) : Left('not found')))
})

//lets find the id of the person and and id and best friend id and and print the result

const result = DB.find(34) //these would return me the Right or the Left
  .chain(eitherToTask) //Task(chain --> * Task({}))
  .chain(user => DB.find(user.best_friend_id))
  .chain(eitherToTask)
  .fork(console.error, console.log)
console.log(result);

