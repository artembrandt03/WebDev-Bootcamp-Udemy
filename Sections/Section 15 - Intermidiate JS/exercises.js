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