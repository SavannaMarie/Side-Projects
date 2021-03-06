"use strict";

// ===== Exponentiation =====

// With ES6, we can now use calculate exponents with a double asterisk operator instead of having to rely on the Math object.

// var oldWay = Math.pow(4, 2);
// console.log(oldWay);
//
// var newWay = 2 ** 3;
// console.log(newWay);

// ===== var vs let vs const =====

// VAR
// Variables declared with var are function-scoped. This means that if a variable is declared anywhere else besides a function using var, it will always exist in the global scope.

// Ex:

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
//
// i = "hello!";
//
// console.log(i);
//
// if (i === "hello!") {
//     var bubbles = 'Bubububububbles';
//     console.log(bubbles)
// }
// bubbles = 'pop!'
// console.log(bubbles);
//
// function test() {
//     var logMe = 'Hello!'
//     bubbles = '*floating*';
//     return logMe;
// }

// console.log(test());
// console.log(logMe);

// CONST
// CONST is block-scoped. This means that the variable declared with const cannot be redeclared, or reassigned.

// const num = 4;
// console.log(num);
// num = 6;
// console.log(num)
//
// const name = 'Jay';
// const name = 'David';
// console.log(name += " Arredondo");
// console.log(name)


// We can use var to redeclare a variable, and to reassign, so this code will output 'David'
// var name = 'Jay';
// var name = 'David';

// console.log(name += ' Arredondo');

// Block-scope
// var number = 5;
// //
// if(number === 5) {
//     const cardNumber = 1234123412341234;
//     console.log(name)
// }
// console.log(cardNumber);

// LET
// The let keyword lets you define variables that are block-scoped. As with variables declared with const, the variables with let cannot be redeclared.

// Redeclaration
// let name = 'Jay';
// let name = 'Javier';

// Reassignment
// let name = 'Jay';
// name = 'Javier'
//
// console.log(name);

// function foo(n) {
//     if (n == 6) {
//         let num = 2;
//     }
//     console.log(num);
// }
// foo(6); // throws an error because our let variable is within our if statement scope.

// for (var i = 0; i < 3; i++) {
//     console.log(i)
// }
// console.log("i outsode of the loop", i);

// for (let i = 0; i < 3; i++) {
//     console.log(i) // this will log because it is within the block scope where i is declared.
// }
// console.log("i outsode of the loop", i);
// this code will throw an error as well because it is within the for loop scope.

// ===== TEMPLATE STRINGS =====

// Template strings allow for interpolation in strings. Variables and expressions can be read in template strings. Template strings use back ticks to recognize variables and expressions.

// let name = 'Jay';
// console.log(`My name is ${name}`);
//
// console.log('My name is ' + name);
//
// console.log(`My name is ${name.toUpperCase() + ' Arredondo'} in all caps!`);

let nationalParks = ['Grand Canyon National Park', 'Banff National Park', 'Joshua Tree National Park'];

let parksList = `<ul>
 <li>${nationalParks[0]}</li>
 <li>${nationalParks[1]}</li>
 <li>${nationalParks[2]}</li>
 </ul>`

document.write(parksList);

// ===== for ...of loop =====

// works with Node Lists!

// regular for loop
// for (let i = 0; i < nationalParks.length; i++) {
//     console.log(nationalParks[i]);
// }

// forEach loop
// nationalParks.forEach(function(park, index) {
//     console.log(index);
//     console.log(park);
//     console.log(park[index])
// });

// NEW ES6 For.. of loop
// Structure
// for(variable of iterable/collection) {
//     statement
// }

// for(let eachPark of nationalParks) {
//     console.log(eachPark);
// }

// let listItems = document.getElementsByTagName('li');
// console.log(listItems);
//
// // can use const or let!
// for(const listItem of listItems) {
//     listItem.innerHTML += ' is an awesome park!';
// }

// ===== ARROW FUNCTIONS =====

// function test() {
//     return 'Hello from the test function!';
// }
//
// console.log(test());
//
// var test2 = function() {
//     return 'Hello from test2 function!'
// }
//
// console.log(test2())
//
// // ES6 way
//
// const test3 = () => 'Hello from test3 function!';
//
// console.log(test3())

// one parameter does not need parenthesis

// const sayHello = (name) => {
//     let nameInCaps = name.toUpperCase();
//     return nameInCaps
// }

// function sayHello(name) {
//     let nameInCaps = name.toUpperCase();
//     return nameInCaps;
// }

// multiple parameters will need to be in parenthesis
// const sayHello = (firstName, lastName) => {
//     let fullName = firstName.toUpperCase() + lastName.toUpperCase();
//     return fullName;
// }

// console.log(sayHello('Jay', 'Arredondo'))

// using an anonymous function expression
// nationalParks.forEach(park => {
//     let capsParks = park.toUpperCase();
//     console.log(capsParks);
// });

// ==== Default Function Parameter Values ====

// ES5 Syntax

// function add(num1, num2) {
//     if(num1 === undefined) {
//         num1 = 2;
//     }
//     if(num2 === undefined) {
//         num2 = 2;
//     }
//     return num1+ num2;
// }
//
// console.log(add());
// console.log(add(5))
// console.log(add(5,5))

// ES6 (better) way

// const add = (num1 = 2, num2 = 4) => {
//     return num1 + num2;
// }
//
// console.log(add());
// console.log(add(5));
// console.log(add(5,5));

// ===== Object Property Variable Assignment (shorthand) =====

// ES5 syntax

// var name = 'Loopy Trail';
// var distance = 4.6
// var difficulty = 'moderate';
// var isPaved = true

// var trail = {
//     name: name,
//     distance: distance,
//     difficulty: difficulty,
//     isPaved: isPaved
// }

// console.log(trail);

// ES6 (BETTER) Way

let name = 'Loopy Trail';
let distance = 4.6
let difficulty = 'moderate';
let isPaved = true

let trail = {
    name,
    distance,
    difficulty,
    isPaved
};
console.log(trail);

// ====== Object Destructuring ======

// ES5 Way

// let nameOfTrail = trail.name;
// let distanceOfLoopTrail = trail.distance;
//
// console.log(nameOfTrail);
// console.log(distanceOfLoopTrail);

// ES6 Way

// let myObject = {
//     movieName: 'The Incredibles',
//     length: '1hr 43min'
// }
//
// let {movieName, length} = myObject;
//
// console.log(movieName, length);

// ES5 function for object destructuring

// function describeTrail(trailObj) {
//     var name = trailObj.name;
//     var distance = trailObj.distance;
//
//     return name + " " + "is " + distance + "mi long";
// }

// console.log(describeTrail(trail))

// let describeTrail = trailObj => {
//     var {name, distance} = trailObj;
//     return name + " " + "is " + distance + "mi long";
//
// }
// console.log(describeTrail(trail));

let movies = [
    {
        title: 'Lord of the Rings: The Fellowship of the Ring',
        description: 'A group of travelers venture to a volcano to destroy a powerful object.'
    },
    {
        title: "The Bee Movie",
        description: 'A movie about bees.'
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        description: 'A young boy goes to wizarding school where a big snake starts attacking people. Who is it??'
    }]

// function getMovieInfo(listOfMovies) {
//     for (let movie of listOfMovies) {
//         let {title, description} = movie;
//         console.log(`The movie you selected is ${title}. A short description would be: ${description}`);
//     }
// cannot log due to blocked scope of let.
// console.log(title)
// }
// cannot log with var due to function scope
// console.log(title);

// Example from weather app project.
// let {daily, current} = myWeatherRequest;
//
// let {temp, clouds} = daily;
//
// getMovieInfo(movies);

// ====== Array Destructuring ======

// Old way

// var lotr = movies[0];
// var beeMovie = movies[1];
// var hp = movies[2];
//
// console.log(lotr, beeMovie, hp);

// New ES6 Way
// can use VAR as well to assign the variable.
// Always starts at the 0 index.
// let [firstMovie] = movies;
//
// console.log(firstMovie);
//
// // can further destructure the object through this variable.
// let {title} = firstMovie;
//
// console.log(title);


// let [firstMovie, ...restOfMovies] = movies;
//
// console.log(firstMovie);
//




// console.log(restOfMovies);