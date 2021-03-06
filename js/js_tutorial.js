// variable options
// var (apparently you don't use this anymore), let, const
// tip: always use const, unless you know you'll re-assign a value, like a score in a game

// data types
// Strings, Numbers, Boolean, null, undefined, Symbol

const name = 'John';
const age = 34;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined

// Concatenation (old)
// console.log('My name is ' + name + ' and I am ' + age);

// Template String (new)
// console.log(`My name is ${name} and I am ${age}`);

// testing begin
/* const s = 'technology, computers, it, code';
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(', ')); */
// testing end

// Arrays - variables that hold multiple values

const fruits = ['apples','oranges','pears'];

fruits[3] = 'grapes';
fruits.unshift('strawberries');
fruits.push('mangos');
fruits.pop('mangos');


console.log(fruits);
console.log(fruits.indexOf('oranges'));