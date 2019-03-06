// OBJECT DESTRUCTURING
// - we can rename local variable
// - we can set defaults

const person = {
  //   name: "Andrew",
  age: 26,
  location: {
    city: "Philadelphia",
    temp: 92
  }
};

const { name: firstName = "Anonymous", age } = person;
console.log(`${firstName} is ${age}`);

const { temp: temperature, city } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

// Challenge

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);

//////////////////////////
// ARRAY DESTRUCTURING
// - we can set defaults
const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"];

// const [street, city, state, zip] = address;
const [, , state = "New York"] = address;

console.log(`You are in ${state}.`);

// Challenge
const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [drink, , cost] = item;

console.log(`A medium ${drink} costs ${cost}.`);

//we can destructure objects and function arguments

// 1 - no destructuring
const add = data => {
  return data.a + data.b;
};
add({ a: 1, b: 12 }); // 13

// 2 - no destructuring with default in case no argument was provided
const add = (data = {}) => {
  return data.a;
};
add({ a: 1 }); // 1

const add = data => {
  return data.a;
};
add(); // undefined

const add = (data = {}) => {
  return data.a;
};
add(); //

//
const add = ({ a, b }, c) => {
  return a + b + c; //113
};

add({ a: 1, b: 12 }, 100);

const user = {
  name: "Jen",
  age: 24
};

console.log({
  ...user,
  name: Lucy
});
