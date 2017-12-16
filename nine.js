//using the library
//to handle asyncronous task in js

//using the lazy box and chain and fork to delay the computation

const Task = require('data.task')
console.log(Task);

//sample example
const value = new Task((rej, res) =>
  res(1)
)

const task = value
             .map(x => x + 2)
task.fork(err => console.log('err'),
          result => console.log(result))
          
