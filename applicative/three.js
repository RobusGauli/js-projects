//applicative functor as a list comprehension
const List = x => ({
  x,
  map: f => List(x.map(f)),
  //inspect: () => console.log(`List([${x.join(', ')}])`),
  ap: l => typeof x === 'function' ?  l.map(x) : x.map(f => List(f).ap(l)),
});

const alist = List([4,5,6,7,8]);
const result = alist
  .map(x => x * x)
  .fold(x => x * 100)


const adders = List(x => y => z => `${x} -  ${y} - ${z}`)
                .ap(List(['red','lie','white','green']))
                .ap(List(['loval', 'cheery']))
                .ap(List(['cute']))
                
                
                
 

                

console.log(adders);


