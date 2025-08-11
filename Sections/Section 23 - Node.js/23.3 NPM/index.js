//var generateName = require("sillyname");

import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}`);

import superheroes from "superheroes";
const mySuperheroName = superheroes.random();
console.log(`My superhero name is ${mySuperheroName}`);