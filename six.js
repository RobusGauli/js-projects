//Semi groups
//Semi group is the type which has the concat method on it
// and follows the principle of Associativity principle
// f (g (x)) === g(f(x))
// (1 + (3 + 4)) === ((1 + 3) + 4)

//[] array is a semigroup but 

//Associativity
const a = [1, 2].concat([4, 5]).concat([6, 7])
const b = [1, 2].concat([4, 5].concat(6, 7))

console.log(a, b);

const x = 'a'.concat('b'.concat('c'));
const y = 'a'.concat('b').concat('c');
console.log(x, y);

// + is semigroup but there is no concat method on it
// + is a type that holds integer in the context of semigroup
// [] is a type that holds the values in the context of semigroup
// []  is a also a functor coz it holds the data in the context such that we can apply map
// and compose with the chain
// [] is called the monad , as it holds the value in the context
// + is monad , as it holds value in the context so that we can chain, i.e semigroup
//lets make the Add Semigroup 
//such that Add(1).concat(Add(2).concat(Add(3))) =  Add(6)

const Add = x => ({
  x,
  concat: ({x: y}) => Add(x + y),
  inspect: () => console.log(`Add(${x})`)
})

console.log(Add(4));
console.log(Add(4).concat(Add(3)));
const p = Add(4).concat(Add(3).concat(Add(5)))
//Associativity
const q = Add(4).concat(Add(3)).concat(Add(5))
console.log(p, q)


//let formalize the idea of semigroup in to boolreas value
// lets make the && as semiphors
//we call it All because every value must be true to be true

const All = x => ({
  x,
  concat: ({x : y}) => All(x && y),
  inspect: () => console.log(`All(${x})`),
})
console.log(All(true).concat(All(true)))
console.log(All(true).concat(All(false)));


//lets write another semigroup called First that always retains the first value

const First = x => ({
  x,
  concat: _ => First(x),
  inspect: () => console.log(`First(${x})`)
})


//always retains the first
console.log(First(45).concat(All('asd')))

//support we have a game , we have to combine two accounts
//when it comes to combining two things we always think about the semigroup

const robusAccountOne = {
  name: First('Robus'),
  points: Add(23),
  isPaid: All(false),
  friends: ['sital']
}

const robusAccountTwo = {
  name: First('Robus'), //we want the name tot eh first of the concat
  points: Add(45), // we want teh value to be summed while concating
  isPaid: All(true), // we want true if all is paid
  friends: ['mital', 'kital'] // we want the firends to be merged together //since [] is already semi group

}


//const robusAccount = robusAccountOne.concat(robusAccountTwo)
//since all the values inside the object are semigroups, the object itself becomes semigroup
//since objec does not have concat on it, lets make one

//helper function
const commonKeys = (a, b) => Object.keys(a).reduce((acc, val) => val in b ? [...acc, val]: acc, []);

const Map = x => ({
  x,
  concat: ({x: y}) => Map(commonKeys(x, y)
                      .reduce((acc, key) => ({[key]: x[key].concat(y[key]), ...acc }), {} )),
  inspect: () => console.log(`Map(${x})`),
  toObject: () => Object.keys(x)
                  .reduce(
                    (acc, key) =>
                      ({...acc, [key] : x[key].x})
                  , {})
})



const rAccountOne = Map(robusAccountOne)
const rAccountTwo = Map(robusAccountTwo)

const result = rAccountOne.concat(rAccountTwo);
console.log(result.toObject());
