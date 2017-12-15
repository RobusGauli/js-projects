//new functor that is called the EITHER functor
//this helps in branching the code in the functionnal programming
//without the use of if-else

//Either = Right || Left

const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: f => console.log(`Right(${x})`),
});


const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: f => console.log(`Left(${x})`),
});


const result = Right(3)
               .map(x => x + 1)
               .fold(error => console.log('error'), 
                     x => x);
const resultTwo = Left(3)
                  .map(x => x + 1)
                  .fold(() => console.log('Error'),
                        x => x)
console.log(result);
console.log(resultTwo);



