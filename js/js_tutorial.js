// variable options
// var (apparently you don't use this anymore), let, const
// tip: always use const, unless you know you'll re-assign a value, like a score in a game

// data types
// Strings, Numbers, Boolean, null, undefined, Symbol
/*
const name = 'John';
const age = 34;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined
*/

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

// testing begin
/* const fruits = ['apples','oranges','pears'];

fruits[3] = 'grapes';
fruits.unshift('strawberries');
fruits.push('mangos');
fruits.pop('mangos');

console.log(fruits);
console.log(fruits.indexOf('oranges')); */
// testing end

// Objects

/* START CODE

const person = {
    firstName: 'Kelly',
    lastName: 'Wehbi',
    age: 34,
    friends: ['Elizabeth', 'Rizzo'],
    address: {
        street: '1651 North Dayton',
        city: 'Chicago',
        state: 'IL'
    }
}

console.log(person.firstName, person.friends);
console.log(person.address.city);

// destructuring
// const { firstName, lastName } = person;
// console.log(firstName);

person.email = 'kwehbi@gmail.com';
console.log(person.email);

// arrays of objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Learn new things',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Be expert programmer',
        isCompleted: false
    }
]

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

END CODE */

// Loops

/* START CODE - Loops

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Learn new things',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Be expert programmer',
        isCompleted: false
    }
]

// For Loops

for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// While Loops

let i=0;
while(i <= 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

// Loop through arrays

//not the best option
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

// for of (better)

for(let todoVariable of todos) {
    console.log(todoVariable.text);
}

// high order array methods (best)
// forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText); // returns an array

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
   return todo.text; 
})

console.log(todoCompleted);

END CODE - Loops */


// Conditionals

/* START CODE - Conditionals

const x = 10;
const y = 4;

const color = x > 10 ? 'red' : 'blue';

if(x = 10) {
    console.log(`x is ${x}`);
} else if(x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

if(x > 5 || y > 3) {
    console.log('x is more than 5 or y is more than 3');
}

console.log(color);

// Switches

switch(color) {
    case 'red':
        console.log('the color is red');
        break;
    case 'blue':
        console.log('the color is blue');
        break;
    default:
        console.log('the color is not red or blue');
}

END CODE - Conditionals */

// Functions

/* START CODE - Functions

function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5, 5)); 

//const addNumsArrow = (num1 = 1, num2 = 1) => console.log(num1 + num2);
//addNumsArrow(3, 2);

const addNumsArrow = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNumsArrow);

// Object oriented programming

//Constructor function

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

// Prototypes
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Kelly', 'Wehbi', '2-11-1987');

console.log(person1, person2);

console.log(person2.getBirthYear()); 
console.log(person2.getFullName()); 


// Classes and methods
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();  
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Kelly', 'Wehbi', '2-11-1987');

console.log(person1, person2);

END CODE - Functions */

// The DOM

// START CODE - DOM
/*
// Single element selectors
console.log(document.getElementById('my-form'));

console.log(document.querySelector('h1')); // only will select the first h1

// Multiple element selectors

console.log(document.querySelectorAll('.item'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Poop';
// ul.children[1].innerText = 'Kelly';
// ul.lastElementChild.innerHTML = '<h1>Big Text</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';
*/


// Events

const btn = document.querySelector('.btn');

/* btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
});
*/

/*  btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    console.log('click');
    console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}