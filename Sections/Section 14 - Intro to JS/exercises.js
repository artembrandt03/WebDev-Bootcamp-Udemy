//Ex-0.1
var name = "Artem";
alert(name);

//Ex-0.2
var myname = "Artem";
var yourname = prompt("What's your name?");
alert("My name: " + myname + ", your name: " + yourname)

//Ex-1
function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
    var c = a;
    a = b;
    b = c;

    
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}

//Ex-1.1
var greeting = "Hello ";
var name = "Artem";
alert(greeting + name);

//Ex-1.2
var maxLength = 140;
var message = prompt("Enter your message down below: ");
var messageLength = message.length;
var charsLeft = messageLength - maxLength;
alert("Your message is " + messageLength + " characters long and you had " + charsLeft + " remaining!");

//Ex-2
var name = promt("What's your name?")
alert("Hello, " + name.slice(0, 1).toUpperCase() + name.slice(1) + "!")

//Ex-3
function lifeInWeeks(age) {
    
    /************Don't change the code above************/
    var yearsLeft = 90 - age;
    console.log("You have " + yearsLeft * 365 + " days, " + yearsLeft * 52 + " weeks, and " + yearsLeft * 12 + " months left in a year.");    
    /*************Don't change the code below**********/
}

//Ex-4
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight, height) {
    bmi = weight / (height * height);
    return Math.round(bmi);
}
/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8); 
bmi should equal 20 when it's rounded to the nearest whole number.
*/