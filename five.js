//lets look at another example for error handling using the Either 

const Right = x => ({
  map: f => Right(f(x)),
  inspect: () => console.log(`Right(${x})`),
  fold: (f, g) => g(x),
  chain: f => f(x),
});

const Left = x => ({
  map: f => Left(x),
  inspect: () => console.log(`Left(${x})`),
  fold: (f, g) => f(x),
  chain: f => Left(x), //we dont do anyoperation if there is a Leftalready no matter what
});

//Either = Left || Right

// const value = Left(3)
//               .map(x => x * x)
//               .fold(() => console.log('error'),
//                     x => x)


const fs = require('fs');
// afunction to print the port from the json file
//imperative
const getPort = () => {
  try {
    const config = fs.readFileSync('confg.json');
    const json = JSON.parse(config);
    return json.port;
  } catch(error) {
    return 0;
  }
}

//in functional we will make the Either monad for any operation that can throw error
//either Monad tryCatch == Right || left
const tryCatch = f => {
  try {
    return Right(f());
  }catch (er){
    return Left(er)
  }
}

const getPortTwo = () =>
  tryCatch(() => fs.readFileSync('config.json'))
  //chain remove the pushes up from the Right(Left(x)) -> Left(x)
  .chain(buffer => tryCatch(() => JSON.parse(buffer))) // Right(Left(x)) but we want just Left(x) so we use chain 
  //chain simply extract the value on deep down
  .fold(() => console.log('Error'),
        parsedJson => console.log(parsedJson['port']))

console.log(getPortTwo());