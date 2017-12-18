//using task for assyncronous action
//es-lint
const fs = require('fs');
const Task = require('data.task');

//read from the two file and merge it

const readOne = new Task((rej, res) => 
  fs.readFile('config.json', (err, buffer) =>
    err ? rej(err) : res(buffer.toString())))

const readTwo = new Task((rej, res) =>
  fs.readFile('config.json', (err, buffer) =>
    err ? rej(err) : res(buffer.toString())))

//here is the chaining

const task = readOne.chain(data => 
  readTwo.map(dataTwo =>
    data + dataTwo))
//cooler litterle chain
task.fork(err => console.log(err),
          data => console.log(data));

