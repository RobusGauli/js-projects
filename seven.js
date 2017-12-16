//semigroup is a type that has a concat method on it
//Monoid is a special type of semigroup which has a special element
//that acts like a neutral identity


//therefore monoid is a type that has a concat method in it and
//has a element that has a neutral identity
//this will ensure that the values inside the box is failsafe
//will return the result even with the empty value
//has some sort of defaults to start with

const Add = x => ({
  x,
  concat: ({x :y }) => Add(x +y),
  inspect: () => console.log(`Add(${x})`),
});

Add.empty = () => Add(0);


const result = Add.empty().concat(Add(4)).concat(Add(23));
console.log(result);


//therefore Add is promoted to monoid from semigroup, 

//lets see if we can promote All to the monoid 

const All = x =>({
  x,
  concat: ({x:y }) => All(x && y),
  inspect: () => console.log(`All(${x})`),
});

//true && true = true
// ^^ netural idetity
//true && false = false
All.empty = () => All(true);


console.log(All(false).concat(All(true).concat(All.empty())))
//therefore all is the monoid


//can we prmote the First semigroup to the monoid,


//no since it does not have neutral identity


//can be proven by this simple example

const sum = xs =>
  xs.reduce(
    (acc, val) =>
      val + acc,
    0 //neutral elements 
  )


const all = xs => 
  xs.reduce(
    (acc, val) =>
      acc && val,
    true
  )

console.log(all([false]));
console.log(all([])); //failsafe


console.log(sum([3]))
console.log(sum([])); //has the neutral identiy so is failsafe



//for First semigroup

const First = xs => (
  xs.reduce(
    (acc, val) => acc //get the first element
  )
)

//


console.log(First([4, 5]))

//this will blow up though
//console.log(First([]));

//so we cannot prmote to monoid since there is no 

//lets write any monoid

const Any = x => ({
  x,
  concat: ({x: y}) => Any(x||y),
  inspect: () => console.log(`Any(${x})`)
})

Any.empty = () => Any(false);
