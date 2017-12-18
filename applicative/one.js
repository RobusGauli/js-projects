//use of the curried function here is the sample exapmle

// const add = (x, y) => x + y;
// const inc = y => add(1, y);
// console.log(inc(3));

//we use curryiing instead

const add = x => y => x + y;
const inc = add(1);//inc one holds the function (y => 1 + y)
console.log(inc(3));

//lets write another usefule function

const modulo = b => a => a % b;
const isOdd = modulo(2);

console.log(isOdd(2), isOdd(3));

//we can extends this futrther applying it tol the list of data
//helper fucrio
const filter = predicate => xs => xs.filter(predicate);

//lets write our filterodd functino
const filterOdds = filter(isOdd);

console.log(filterOdds([1,2,3,4,5,6,7]));

//lets write a curried function that repaclace som value in the string;

const replace = regex => value => string =>
  string.replace(regex, value)

const censor = replace(/[aeiou]/gi)('*')
console.log(censor('hi there'));
console.log('censor all the sit');

//this fucntiob that workds in single arguments can then be mapped to arrays of string
const map = predicate => xs =>
  xs.map(predicate)
const censorAll = map(censor)

const inputs = ['thisd', 'is', 'me']

console.log(censorAll(inputs));

