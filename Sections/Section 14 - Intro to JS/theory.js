/*

    alert("Hello, World!"); - This line displays a pop-up alert with the message "Hello, World!" when the script is executed.
    typeof(...) - This operator is used to determine the type of a given variable or expression in JavaScript.
    promt(...) - This function displays a dialog box that prompts the user for input and returns the entered value as a string.

    slice(x,y) - This method extracts a section of a string and returns it as a new string, starting from index x to index y (not inclusive).
    Example: "Hello, World!".slice(0, 5) returns "Hello".

    toUpperCase() - This method converts all characters in a string to uppercase.
    Example: "hello".toUpperCase() returns "HELLO".

    Data types:
    1. Number - Represents both integer and floating-point numbers.
    2. String - Represents a sequence of characters, enclosed in single or double quotes.
    3. Boolean - Represents a logical entity that can have two values: true or false.

    Variables:
    A place to store data values. In JavaScript, variables can be declared using var, let, or const keywords.

    Example: var age = 25; // Declares a variable named 'age' and assigns it the value 25
             var name = prompt("Enter your name:"); // Prompts the user to enter their name and stores it in the variable 'name'

    Variable naming rules:
    1. Must start with a letter, underscore (_), or dollar sign ($).  
    2. Can contain letters, numbers, underscores, and dollar signs.
    3. Cannot use reserved keywords (like var, let, const, function, etc

    String concatenation:
    You can combine strings using the + operator.
    Example: var greeting = "Hello, " + name + "!"; // Combines "Hello, " with the value of 'name' and stores it in 'greeting'

    length property:
    The length property of a string returns the number of characters in that string.
    Example: var str = "Hello"; console.log(str.length); // Outputs: 5

    Arithmetic operations:
    JavaScript supports basic arithmetic operations like addition (+), subtraction (-), multiplication (*), and division (/).
    One speciasl case is the modulo operator (%) which returns the remainder of a division operation.
    Example:
    var sum = 5 + 3; // Addition
    var difference = 10 - 4; // Subtraction
    var product = 6 * 7; // Multiplication
    var quotient = 20 / 4; // Division
    var remainder = 10 % 3; // Modulo (remainder of division)

    Increment and Decrement:
    The increment (++) and decrement (--) operators are used to increase or decrease a variable's value by 1.
    Example:
    var count = 0;
    count++; // Increments count by 1 (count is now 1)
    count--; // Decrements count by 1 (count is now back to 0) 


    FUNCTIONS:

    Functions are reusable blocks of code that perform a specific task. They can take inputs (parameters) and return an output.
    Example:
    function greet(name) {
        return "Hello, " + name + "!";
    }
    
    Parameters and arguments:
    Parameters are variables listed as part of a function's definition, while arguments are the actual values passed to the function when it is called.
    Example:
    function add(a, b) {
        return a + b;
    }
    var result = add(5, 3); // Here, 5 and 3 are arguments passed to the function 'add', which has parameters 'a' and 'b'.

    Functions that give output:
    Functions can return a value using the return statement. If no return statement is provided, the function returns undefined.
    Example:
    function multiply(x, y) {
        return x * y;
    }
*/