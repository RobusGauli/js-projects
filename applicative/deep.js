class Evaluator {
  constructor(obj) {
    
    // this.evaluate = this.evaluate.bind(this);
    // this.evaluateArray = this.evaluateArray.bind(this);
    // this.evaluateObject = this.evaluateObject.bind(this);
    // this.evaluateString = this.evaluateString.bind(this);
    this.result = this.evaluate(obj)
  }

  evaluate(obj) {
    return this[`evaluate${obj.constructor.name}`].call(this, obj)
  }

  evaluateArray(obj) {
    return obj.map(this.evaluate.bind(this));
  }

  evaluateString(obj) {
    return obj;
  }
  evaluateNumber(obj) {
    return obj
  }


  evaluateBoolean(obj) {
    return obj
  }
  check() {
    console.log(this);
  }

  evaluateObject(obj) {
    return Object.entries(obj).reduce((acc, [key, val]) => ({...acc, [key] : this.evaluate.call(this, val)}), {})
  }
}

const deepCopy = obj => {
  const evaluator = new Evaluator(obj);
  return evaluator.result;
}

let a = {person: {name: 'robus'}, just: 'just a value'}
const result = deepCopy(a)
result.person.name = 'new name';
console.log(result.person.name === a.person.name);


let b = Object.assign({}, a);
b.person.name = 'joker';
console.log(b.person.name === a.person.name);


