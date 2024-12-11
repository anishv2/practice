// call method

function printName(name) {
  return `Hello ${name}, My name is ${this.name}`;
}

const person = {
  name: "David Paul",
  age: 30,
  greet: function(username){
    return `Hello ${username}, My name is ${this.name}`
  }
};

console.log(printName.call(person, "Rohit"));


// apply 

const numbers = [23, 34, 67];

function sum(...args){
    if(args.length > 1){
        return args.reduce((a, p)=> a + p, 0);
    }
    return `pass atleast two numbers in array`;
};

console.log(sum.apply(null, numbers));


// bind 

const fn = person.greet.bind(person, "Kevin");

console.log(fn());



