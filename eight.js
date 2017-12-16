//lazy evaluation 
//also called church encoding
//capture in side effect in the task
//delegating the task computation  to the caller of the task

const LazyBox = g => ({
  map: f => LazyBox(() => f(g())),
  fork: f => f(g()),
})


const charFromCode = someString =>
  LazyBox(() => someString)
  .map(s => s.trim())
  .map(s => parseInt(s))
  .map(n => n + 1)
  .map(n => String.fromCharCode(n))
  //.fork(result => result.toLowerCase());

//computation still doesn not happens until we call fork on it

const task = charFromCode('  65')
task.fork(result => console.log(result));
//hence lazy evaluation


