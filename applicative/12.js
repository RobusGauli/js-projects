const Task = require('data.task');
// const result = Task.of(2)
//   .map(x => x + 63)
//   .map(x => x.toString())
//   .map(x => x.toUpperCase())
//   .map(x => String.fromCharCode(x))


//   //.fork(console.error, console.log)
// result
//   .fork(console.error, console.log);

const showReport = (marka, markb) => 
  `MarkA ${marka} compareed to markB ${markb}`

const DB = ({
  get: id =>
    new Task((rej, res) => 
      setTimeout(() => 
        res(id), 1000)),
  
  set: id =>
    new Task((rej, res) =>
      setTimeout(() =>
        res(id), 100))
})

//here is the linear approach, where we first take the mark a and then mark b

const result = DB.get(12)
.chain(value => DB.get(3)
  .map(valueTwo => showReport(value, valueTwo)))

//result
  //.fork(console.error, console.log)

//since the two values does not depend on the previous values we
//can go ahead and launch botht the operation at the same time
//this can be done using the applicative functors by apply

const niceResult = Task.of(markA => markB => showReport(markA, markB))
  .ap(DB.get(2))
  .ap(DB.get(4))

niceResult
  .fork(console.err, console.log)
