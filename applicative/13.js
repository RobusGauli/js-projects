const Task = require('data.task');
const fs = require('fs');
const { List } = require('immutable-ext');


//fs.readFile('12.js', (err, data) => console.log(data.toString()))

const Futurize = Task =>
  func =>
    (...args) =>
      new Task((reject, resolve) =>
        func(...args, (err, data)  => err ? reject(err) : resolve(data)))

const FuturizeTask = Futurize(Task);
const readFile = FuturizeTask(fs.readFile);

const filesName = ['sample.json', 'sample.json']
const files = List(filesName)
  .traverse(Task.of, name => readFile(name))
  .map(x => x.toString())
  .fork(console.error, x => console.log(x))

//traverse expects you to return the applicative functor, so only works
//with the applciative functors



