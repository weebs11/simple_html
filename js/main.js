alert("Help Me!");

// Constructor pattern
function myFruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function(){
        return 'A ' + this.name + ' is the color ' + this.color + ' and is the shape ' + this.shape;
    }
}

var apple = new myFruit('apple','red','round');

console.log(apple);

var users = [
    {
        name: 'John Doe',
        age: 30
    },
    {
        name: 'Mark Wahlberg',
        age: 48
    },
    {
        name: 'Kelly Wehbi',
        age: 34
    }
]

console.log(users[0].name);

// Events

<button onclick="doClick()">Click Me</button>

function doClick() {
    alert('You Clicked!');
}

<button onclick="changeText(this)">Change This Text</button>

function changeText(id) {
    id.innerHTML = 'You Clicked!';
}

function changeById() {
    var heading = document.getElementById('heading');
    heading.innerHTML = 'You Clicked!';
}