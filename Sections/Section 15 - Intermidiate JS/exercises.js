//Ex 1 - Love Calculator
name1 = prompt("Enter 1st name");
name2 = prompt("Enter 2nd name");
rand = Math.random();
rand = rand * 100;
rand = Math.floor(rand);
alert("The love between " + name1 + " and " + name2 + " is " + rand + "% strong!");

//Simplified + adding possibility of 100
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // Ensures loveScore is between 1 and 100
alert("Your love score is " + loveScore + "%!");

//Ex 2 - Advanced BMI Calculator
function bmiCalculator(weight, height) {
    let bmi = weight / (height * height);
    bmi = Math.round(bmi * 10) / 10;
  
    if (bmi < 18.5) {
      return "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi <= 24.9) {
      return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
      return "Your BMI is " + bmi + ", so you are overweight.";
    }
}

//Ex 3 - LeapYear Calculator
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
//Alternative
function isLeap(year) {
    if (year % 4 == 0) {
        if (year % 100 !== 0) {
            return("Leap year.");
        }
        else if (year %400 == 0) {
           return("Leap year.");
        }
        else {
           return("Not leap year."); 
        }
    }
    else {
      return("Not leap year.");   
    } 
}

//Ex 4 - Who;s buying lunch?
function whosPaying(names) {
    var index = Math.floor(Math.random() * names.length);
    return names[index] + " is going to buy lunch today!"
}

//Ex 5 - while loop practice
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

//Ex 6 - Fibonacci
function fibonacciGenerator (n) {
    var fiboNumbers = [];
    for (var i = 0; i < n; i++){
        if (fiboNumbers.length === 0) {
            fiboNumbers.push(0);
        }
        else if (fiboNumbers.length === 1) {
            fiboNumbers.push(1);
        }
        else {
            var nextNum = fiboNumbers[fiboNumbers.length - 1] + fiboNumbers[fiboNumbers.length - 2];
            fiboNumbers.push(nextNum);
        }
    }
    return fiboNumbers;
}