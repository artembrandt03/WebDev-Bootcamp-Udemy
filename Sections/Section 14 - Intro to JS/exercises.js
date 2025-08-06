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