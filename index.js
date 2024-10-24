//--------------- IMPORTANT!!! ---------------

const { time } = require("console");
const { getRandomValues } = require("crypto");
const { isDate } = require("util/types");

// IF YOU HAVE NOT READ THE README.md FILE YET, double click on that file in the "Files" panel to the left now and read it before you begin your assignment!

//---------- OVERVIEW AND INSTRUCTIONS ----------

//# JavaScript Basics
// This is the coding assigment for the first week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//   - The basic syntax of the JavaScript
//     programming language
//   - Basic programming concepts like variables,
//     data types, and conditional statements
//   - How to troubleshoot programming problems

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the README.md file, the first few questions have console logs provided. The third question you'll need to complete the console log that was started for you. Use console logs for all the remaining questions to check your code output.  To ensure you get comfortable with and learn the syntax well, be sure your AI code completion options are off!  You can find instructions on how to do this in your README.md file under "Instructions".

// ---------- QUESTION 1. ----------
// Declaring and giving string values to variables.
// Create three variables.  First let's make sure we're using "camel case" where all letters are lowercase except for the first letter of words that are in the middle.  So, your first variable should be titled "firstName" with the value of your first name as a string.  Your second variable should be titled "lastName" with the value of your last name as a string.  The last variable should be titled "country" with the value of the name of the country where you were born as a string.

//PUT YOUR CODE HERE
var firstName = "Rabiat";
var lastName = "Atanda";
var country = "Nigeria";

console.log(
  "Q1: My first name is: ",
  firstName,
  "My last name is: ",
  lastName,
  "I was born in the country: ",
  country
);

// ---------- QUESTION 2. ----------
// Declaring and giving numerical values to variables.
// Create four variables.  One titled "floatingPoint" with the value of any floating point number you choose.  One titled "integer" with the value of any integer number you choose.  One titled "negative" with the value of any negative number you choose.  One titled "notANumber" with the value of 4 multipled by a string of your choice.
//NOTE: Remember from your lessons that JavaScript can treat large numbers differently than you might expect.
//STRETCH GOAL: You'll see "Stretch Goal"s throughout the course. Stretch Goals are optional, but are encouraged as they help you try your hand at something a little more advanced for the week/assignment/question. Create a fifth variable titled "bigNumber" that is 16 or more numbers long. Then write your console.log and see what happens as you play and practice working with large numbers.

// PUT YOUR CODE HERE
var floatingPoint = 10.324;
var integer = 12;
var negative = -23;
var notANumber = 4 * "me";
var bigNumber = 12345678901123452987n;
// the big number got me suggestion to convert it to big int. so i clicked that option. Now I know that to convert a large number to big int I should add n but it is not logging on my console oh the big number is actually not called.

console.log(
  "Q2: This is a decimal, also called a floating point number: ",
  floatingPoint
);
console.log("Q2: This is a whole number, also called an integer: ", integer);
console.log("Q2: This is a negative number: ", negative);
console.log("Q2: You can't mulitply 4 by a word! ", notANumber);

// ---------- Question 3. ----------
// Declaring and giving boolean values to variables.
// Create two variables.  Name the first variable anything you want and give it the value of true.  Name the second variable a different name than the first and give it the value of false.

// PUT YOUR CODE HERE
var snowsToday = true;
var warmToday = false;

console.log("The variable I made true is: ", snowsToday);
//The output of the above should be true.
console.log("Q3: The variable I made false is: ", warmToday);
//The output of the above should be false.

// ---------- QUESTION 4. ----------
// String Concatenation
// Create a variable that makes a concatenated string out of the variables you made in Question 1. Be sure you're using your Q1 variables and not making new ones.
// Suggested text: Hello! My name is (your first name variable and last name variable concatenated here) and I was born in (your country variable here)
// You can also choose to make the text between the variables strings and concatenate all of them together.
// STRETCH GOAL: For this stretch goal, make a second variable that still concatenates your variable from Q1, but uses template literals.

// PUT YOUR CODE HERE
var myBio =
  "Hi, I am " + firstName + " " + lastName + "." + " I was born in " + country;
var priResi = "United States";
console.log("Q4: ", myBio, " but live in ", priResi);
// Don't forget your console.logs!

// ---------- QUESTION 5. ----------
// Numerical "concatenation" also known as Addition
// Make two variables.  One will hold the addition of your your floating point and integer variables from Q2, the other should hold the addition of your integer and negative number from Q2.
//STRETCH GOAL Use an augmented assignment (also called compound assignment) operator to change the value of your floating point and integer numbers by the amount of your integer and/or negative number

// PUT YOUR CODE HERE
var addNum = floatingPoint + integer;
var sumDisguise = integer + negative;

// Don't forget your console.logs!
console.log("Q5:", (addNum -= sumDisguise));

/*/ ---------- QUESTION 6. ----------
// String Methods
// Create four variables named "length", "firstInitial",
// "lastInitial", and "capitalize".  Using string methods, assign 
the length of your first name (use your variable from Q1) to the 
"length" variable. Assign the first letter of your first name
(use your variable from Q1) to the "firstInitial" variable.
Assign the LAST letter of your first name (use your variable from Q1) to the "lastInitial"
// variable.  Change your first name to all capital letters and assign it to the 
//"capitalize" variable.
//STRETCH GOAL: Create a variable called "weirdInitials". Using string methods, have 
//weird Initials result in the value of the LAST letters of any first and last names 
//and should be capitalized.  Example: "Sally Smith"'s weird initials should be "YH" 
//and "Jose Rodriguez"'s inititals should be "EZ"
*/
// PUT YOUR CODE HERE

var firstInitial = firstName[0];
var lastInitial = firstName[firstName.length - 1];
var length = firstName.length;
var capitalize = firstName.toUpperCase();
var weirdInitials = firstInitial + lastInitial;
// Don't forget your console.logs!
console.log("Q6:", lastInitial);
console.log(
  "Q6: Rabiat's weird initials should be " + weirdInitials.toUpperCase()
);
//console.log("Rabiat's weird initials should be " + capitalize[capitalize.length-1])

/*// ---------- QUESTION 7. ----------
// Conditional Statements - part 1 of 3
// Declare a variable named "answer7".  Then create a conditional 
if else statement that will assign the value of true to the answer7 variable if your integer from Q2 is greater than 10 and assign it false if it is not.
// STRETCH GOAL: Make an if elseif else statement that assigns answer7 the value of "less than" if your integer from Q2 is less than 10, "equal to" if it's equal, and "greater than" if it's greater.
*/
// PUT YOUR CODE HERE
var answer7 = false;
if ((weirdInitials = "RT")) {
  var answer7 = true;
}
// Don't forget your console.logs!
console.log(
  "Q7:",
  "it is " + answer7 + " that " + firstName + " has weird initials"
);
/*/ ---------- QUESTION 8. ----------
// Conditional Statements - part 2 of 3
// Declare a variable called "age" and assign it that value of
 your age in years.  Create a conditional statement that will console.log the phrase "Age is just a number!" if your age is less than or equal to 30 and "Young at heart!" if your age is greater than 30.
//STRETCH GOAL: Combine your skills!  Use template literals to console.log your name in the phrase as in "Sally, age is just a number!" or "Jose, you're young at heart!"
*/
// PUT YOUR CODE HERE
var age = 33;
if ((firstName = "Rabiat")) {
  var message = age + " is just a number";
  console.log("Q8:", (firstName += "'s age, which is " + message));
}

// Don't forget your console.logs!

/*/ ---------- QUESTION 9. ----------
// Conditional Statements part 3 of 3
// Create a variable "randomNum" to be a random number 
generator that randomly returns either the number 1, 2, or 3 
(you can use this resource to help you solve how to do this 
part: https://www.w3schools.com/js/js_random.asp). Now let's
make a "Magic 8 Ball" using if elseif else that returns a 
different phrase for each of the three possible numbers.If your
 random number is 1, console.log the phrase "It is certain.".
// If it is 2, console.log "Perhaps.".
// If it is 3, console.log "Absolutely not.".
// STRETCH GOAL: Complete Q9 using a switch statement instead of if elseif else.
*/
// PUT YOUR CODE HERE
var randomNum = Math.floor(Math.random() * 3);
// Don't forget your console.logs!
if ((randomNum = 1)) {
  console.log("Q9: it is certain");
} else if ((randomNum = 2)) {
  console.log("Q9: Perhaps");
} else {
  console.log("Q9: certainly not");
}
/*/ ---------- QUESTION 10. ----------
// Math calculations part 1 of 5
// Declare a variable named "exampleNum".  Give it the value of
 a floating point number with 4 decimal places.  Using a Number
method round it to the nearest two decimal place. Example if the
number is 21.4572, exampleNum should become 21.46.
STRETCH GOAL: Achieve the same results as Q10 using Math 
methods instead of Number methods. HINT: you may need to alter
the variable over a series of calculations/method uses.*/

// PUT YOUR CODE HERE
var exampleNum = 32.6743;
// Don't forget your console.logs!
console.log("Q10", exampleNum.toFixed(2));

/*/ ---------- QUESTION 11. ----------
// Math calculations part 2 of 5
// Declare two variables named "stringNum" and "mathNum". 
Assign stringNum a STRING of numbers and mathNUM numbers.  
Create a third variable named "answer11" and have it multiply 
stringNum and mathNum.  Remember to convert your string in 
order for it to properly calculate!
*/
// PUT YOUR CODE HERE
var stringNum = "332";
var mathNum = 332;
var answer11 = Number(stringNum) * mathNum;
// Don't forget your console.logs!
console.log("Q11", answer11);

/*/ ---------- QUESTION 12. ----------
// Math calculations part 3 of 5
// Declare a variable named "diameter" and assign it an integer
 value. Through a series of math calculations and variables, 
 calculate the "radius" (which is half the diameter), the 
 "circumference" (which is 2 multiplied by the Math value pi, 
 multiplied by the radius) and the "area" (which is the Math 
 value pi, multiplied by the radius squared).
*/
// PUT YOUR CODE HERE
var diameter = 15;
var radius = 15 / 2;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2);

// Don't forget your console.logs!
console.log("Q12: ", area.toFixed(3));
/*/ ---------- QUESTION 13. ----------
// Math calculations part 4 of 5
// Let's make a useful math problem - create a tip calculator!
 Declare two variables called "billTotal" and "tipPercentage". 
 Assign billTotal a floating point number with two decimal 
 places. Assign tipPercentage a floating point number between 0.1
  and 0.9. Create a third variable called "tip" that will 
  multiply tipPercentage and billTotal then use the addition 
  assignment operator to add that amount back to billTotal. 
  Example: if our bill 35.75 and we want to leave a 20% tip 
  (0.2) our new billTotal should come out to 42.90.
*/
// PUT YOUR CODE HERE
var billTotal = 32.11;
var tipPercentage = Math.random(0, 1);
var tip = billTotal * tipPercentage;

// Don't forget your console.logs!
console.log("Q13: ", (tip += billTotal));

/*/ ---------- QUESTION 14. ----------
// Math calculations part 5 of 5
// We don't always deal with measurements (like in question 12)
 or currency (like in the last question).  Let's work with time
  now.  Days are 24 hour increments, so we want to see how many
 hours beyond an even number of days it is until vacation!  
 Declare a variable called "totalHourstoWait" and assign it 
 any integer number greater than 24 that you want. Then declare
 a variable called "days" and divide totalHourstoWait by 24.
 Don't forget to round down or exclude any decimals from 
 this total.  Next, declare a variable "extraHours" and use
the modulo operator to find out how many hours beyond the
number of days you'll still need to wait until vacation.
Finally, console.log a template literal phrase that lets you
know how many days and hours you have to wait.  Example: if 
totalHourstoWait is 54, days should be 2, and extraHours should
 be 6 (because 2 days and 6 hours is 54 hours) so your console 
 log should result in something like "2 days and 6 hours until 
 vacation!".
*/
// PUT YOUR CODE HERE
var totalHourstoWait = 48;
var days = totalHourstoWait / 24;
var extraHours = totalHourstoWait % 24;
// Don't forget your console.logs!
console.log(
  `Q14: I have to wait  ${days}days and  ${extraHours}hours  for vacation to evetually come`
);

/*/ ---------- QUESTION 15. ----------
// Student's choice!
// Look back at the past 14 questions.  Which one did you have 
the hardest time with? Now create a question of your own based on
 the same principle. Include in your comments why you made this 
 question for yourself and how you solved it.
*/
// PUT YOUR CODE HERE
message = "no problem so far";
console.log("Q15:", message);
// Don't forget your console.logs!

//----------------------------------------

//# JavaScript Functions
// This is the coding assigment for the second week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//   - Encapsulate code with Functions
//   - Pass Information Into Functions
//   - Arrow Functions

/*/ In this assignment you will write your own code. Your 
instructions are listed as "comments", meaning the instructions 
are grayed out and start with '//' at the beginning of the line 
of code. Put your answers immediately below the instructions for
 each question. As mentioned in the README.md file, you'll need 
 to use console logs for all the questions to check your code 
 output. You can output the return value of a function in a 
 similar way to how you output variable values last week.  To use
  a function in a console.log you invoke/call the function as 
  part of the console log like this:  */

//  console.log("Q#: ", functionName(anyInput))

// As always, click the green Run button at the top of the screen to see the output of your called functions in the Console tab to the right of this screen. Check to make sure that the output you get in your Console is the expected output.  To ensure you get comfortable with and learn the syntax well, be sure your AI code completion options are off!  You can find instructions on how to do this in your README.md file under "Instructions".

// ---------- QUESTION 16. ----------
/*/Create a function titled 'messageString'.  Inside the function,
  declare a variable named 'message' and assign it the string 
  "Welcome to Code the Dream".  Return the 'message' variable. */

// EXAMPLE LOG:
//    console.log("Q1: ", messageString());
// EXAMPLE OUTPUT:
//    Q1: Welcome to Code the Dream!

//PUT YOUR CODE HERE
function messageString(message) {
  var message = "Welcome to Code the Dream";
  return message;
}
console.log("Q16. " + messageString());

// ---------- QUESTION 17. ----------
/*/ Create a function called 'month'.  Inside the function, 
declare a variable named 'today' that uses the Date object. 
Your function should then return only the month of the 'today' 
variable.  You can return the month as a number or, if you'd like
to stretch your skills, convert it to the word form. */

// EXAMPLE LOG:
//    console.log("Q2: ", month());
// EXAMPLE OUTPUT: (Will be different for each class but should be the current month.  For example if you're doing this assignment in January...)
//    Q2: 01
//    stretch goal should result in:
//    Q2: January

//PUT YOUR CODE HERE
function month(today) {
  var today = new Date().getMonth();
  return today;
  //return String.fromCharCode(today);
}
console.log("Q17", month());
// ---------- QUESTION 18. ----------
/*/ Create a function called 'combineStrings'.  Inside the function,
declare two variables named 'string1' and 'string2'.  Assign them
the strings 'Good' and 'Evening' respecitvely.  Return the two 
strings concatenated with a space in between. */

// EXAMPLE LOG:
//    console.log("Q3: ", combineStrings());
// EXAMPLE OUTPUT:
//    Q3: Good Evening

//PUT YOUR CODE HERE
function combineStrings() {
  var string1 = "Good";
  var string2 = "Evening";
  return string1 + " " + string2;
}
console.log("Q18: ", combineStrings());

// ---------- QUESTION 19. ----------
/*/ Let's start working with parameters.  Create a function called 
'useParams' that takes one parameter and returns that parameter 
with the all letters capitalized. */

// EXAMPLE LOG:
//    console.log("Q4: ", useParams("hello"));
// EXAMPLE OUTPUT:
//    Q4: HELLO

//PUT YOUR CODE HERE
function useParams(name) {
  return name.toUpperCase();
}
console.log("Q19", useParams("rabiat"));

// ---------- QUESTION 20. ----------
/*/ Let's consider how variable can be changed by a function. 
Create a variable named 'string3' and assign it the string "What
I started with".  Create a function called 'changeWords' that takes
one parameter, change the parameter to the string value "I changed
this" and return the parameter.  This is NOT best practice 
(changing variable values inside functions).  This question 
demonstrates how console logging the same variable can give you 
two different values for that variable.  Be sure you discuss this
 concept with mentors! */

// EXAMPLE LOGS:
//    console.log("Q5: ", changeWords(string3));
//    console.log("Q5 variable alone: ", string3);
// EXAMPLE OUTPUTS:
//    Q5: I changed this
//    Q5 variable alone: What I started with

// PUT YOUR CODE HERE
var string3 = "what I started with";
function changeWords(string3 = "what I started with") {
  string3 = "I changed this";
  return string3;
}
console.log("Q20:", string3 + ", " + changeWords(string3));

/*/ ---------- QUESTION 21. ----------
// Let's use two parameters now and work with both. Create two 
variables named 'num1' and 'num2' and assign them integer values.
Create a function called 'multiplyThese' that takes 2 parameters 
and returns the product  of the two parameters (as a reminder, a 
product is the resulting number when two numbers are multiplied 
together).  */

// EXAMPLE LOG:
//    console.log("Q6: ", multiplyThese(num1, num2));
// EXAMPLE OUTPUT: (if num1 and num2 are 2 and 5 respectively))
//    Q6: 10

// PUT YOUR CODE HERE

function multiplyThese(num1, num2) {
  return num1 * num2;
}
console.log("Q21:", multiplyThese(23, 42));

// ---------- QUESTION 22. ----------
// Building on the last question, create a function called 'getAverage' that takes 2 parameters and returns their average (hint: there is no built-in average operator in JavaScript).  Use the variables (num1 and num2) you created in Question 6 to test your function.  NOTE: In some programming languages, the types of numbers you use in equations can effect what type of number (integer/floating point) you get as a result.  We suggest using 2.0 instead of 2 as you're calculating the average.

// EXAMPLE LOG:
//    console.log("Q7: ", getAverage(num1, num2));
// EXAMPLE OUTPUT: (based on num1 and num2 above)
//    Q7: 3.5

// PUT YOUR CODE HERE
function getAverage(num1, num2) {
  var mean = (num1 + num2) / 2;
  return mean.toFixed(3);
}
console.log("Q22:", getAverage(35, 10));
// ---------- QUESTION 23. ----------
/*/ Create a function called 'absDiff' that takes 2 parameters and returns the absolute difference between them. For example, if the first parameter is smaller than the second, the first parameter will be subtracted from the second. If the first parameter is larger than the second, the second parameter will be subtracted from the first. If they are both equal, return the first parameter subtracted by the second.  It's important to consider boundary cases - situations that may change how you expect your code to behave.  For this reason, work with same numbers and negative numbers as well to see if you get your absDiff function to calculate the absolute difference regardless of number type.*/

// EXAMPLE LOG 1:
//    console.log("Q8 first larger: ", absDiff(29, 5));
// EXAMPLE OUTPUT: (if using the numbers 29 and 5 as in the example log)
//    Q8 first larger: 24
// EXAMPLE LOG 2:
//    console.log("Q8 second larger: ", absDiff(3, 16));
// EXAMPLE OUTPUT: (if using the numbers 3 and 16 as in the example log)
//    Q8 second larger: 13
// EXAMPLE LOG 3:
//    console.log("Q8 same nums: ", absDiff(5, 5));
// EXAMPLE OUTPUT 3: (if using the numbers 5 and 5 as in the example log)
//    Q8 same nums: 0
// EXAMPLE LOG 4:
//    console.log("Q8 neg num: ", absDiff(-6, 5));
// EXAMPLE OUTPUT 4: (if using the numbers -6 and 5 as in the example log)
//    Q8 neg num: 11

// PUT YOUR CODE HERE
// EXAMPLE LOG:
//    console.log("Q9: ", biggestStringLength(word1, word2));
// EXAMPLE OUTPUT: (if your word1 was 'Code' and word2 was 'Dream')
//    Q9: 5

// PUT YOUR CODE HERE
function absDiff(n1, n2) {
  return Math.abs(n1 - n2);
}
console.log("Q23:", absDiff(15, 70));

// ---------- QUESTION 24. ----------
// That was a lot of math! Now let's work with strings... Create two variables named 'word1' and 'word2' and assign them any strings you want.  Then create a function called 'biggestStringLength' that takes word1 and word2 as parameters and returns the length of the longer string. If they are of equal length, just return that length.  Stretch your skills by making an empty string and seeing what happens in that situation.
var word1 = "ayelabegan";
var word2 = "ilelabola";
function biggestStringLength(word1, word2) {
  if (word1.length > word2.length) {
    return word1.length;
  } else if (word1.length < word2.length) {
    return word2.length;
  } else {
    return word1.length || word2.length;
  }
}

console.log(`Q24: Length of the first word is 
${word1.length}, while the length of the second word is ${
  word2.length
}. the length of the longest word is therefore ${biggestStringLength(
  word1,
  word2
)}`);

console.log("24b:", biggestStringLength("Adedolapo", "anjuwonosewilejo"));
console.log("24c:", biggestStringLength("Sholagberu", "Bolakale"));

// NOTE: ONCE YOU START WORKING ON THE NEXT TWO QUESTIONS, WHEN YOU HIT RUN, YOU'LL HAVE SEVERAL POP-UP BOXES THAT APPEAR BEFORE ALL YOUR CODE WILL COMPLETE RUNNING IN THE CONSOLE.  IF YOU HAVE POP UP BLOCKERS YOU MAY RUN INTO ISSUES.

// ---------- QUESTION 25. ----------
// Let's explore dates now.  Create a variable named 'birthday' and assign it the date of your next birthday.  Then create a function called 'birthdayCountdown' that takes birthday as a parameter and returns the number of days until your next birthday.  Add a comment before your function specifying the format which must be used for birthday so you can properly convert the data to something you can use in the function.  For example 'dates must be of the form YYYY-MM-DD'. It's important to document your assumptions.  If this was an interactive program, you would specify the format for the user.  CAUTION: 2024 is a leap year!  STRETCH GOAL: As we mentioned in Question 8, you should consider boundary cases. What if the user didn't follow your instructions and put in invalid data? Include in your function a way to verify the data is valid, and handle it (ex. through an error or Alert, etc) if it is invlaid.

// EXAMPLE LOG:
//    birthday = '2024-03-15';
//    console.log("Q10: ", birthdayCountdown(birthday));
// EXAMPLE OUTPUT: (if your next birthday was March 15, 2024 and today was February 3, 2024)
//    Q10: 41
//
// Make sure to add another test and log for an invalid case!

// PUT YOUR CODE HERE
birthday = new Date("2025-01-08").getSeconds(); // date is in format "yyyy-mm-dd"
function birthdayCountdown(birthday) {
  //we first have to get the time in millisecond sincethat is  the time available in js
  if ((birthday = new Date("2025-11-12"))) {
    var birthday = new Date("2025-11-12").getTime();
    var now = new Date().getTime();
    var diff = birthday - now;
    var days = Math.round(diff / (1000 * 60 * 60 * 24));
    return days;
  } else {
    return "write date in 'yyyy-mm-dd' format";
  }
}

console.log("Q25:", birthdayCountdown(new Date("2023-11-12")));
//

// ---------- QUESTION 26. ----------
// If we work with dates, we should work with time also.  Decide on a format for times and document it in a comment, for example: HH:MM(am|pm), where 12:37pm is a valid example.  Create variables named 'startTime' and 'endTime' and assign them times in the appropriate format.  Then create a function called 'timeDifference' that takes startTime and endTime as parameters and returns the number of hours and minutes between the start and end times.  STRETCH GOAL: As we mentioned in Question 8 and 10, you should consider boundary cases. What if the user didn't follow your instructions and put in invalid data? Include in your function a way to verify the data is valid, and handle it (ex. through an error or alert, etc) if it is invlaid.

var startTime = new Date().getTime();
var endTime = new Date("2025-03-10").getTime();
function timeDifference(startTime, endTime) {
  var seconds = Math.abs((startTime - endTime) / 1000);
  var minutes = Math.round(seconds / 60);
  var hours = Math.round(minutes / 60);
  var days = Math.round(hours / 24);
  return `${days.toString()}:${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
console.log("Q26:", timeDifference(startTime, endTime));
// EXAMPLE LOG:
//    console.log("Q11: ", timeDifference(startTime, endTime));
// EXAMPLE OUTPUT: (if startTime was 12:37pm and endTime was 3:19pm)
//    Q11: 2 hours and 42 minutes

// PUT YOUR CODE HERE

// ---------- QUESTION 27. ----------
// Student's choice!
// Look back at the past 11 questions.  Which one did you have the hardest time with? Now create a question of your own based on the same principle. Include in your comments why you made this question for yourself and how you solved it.

// PUT YOUR CODE HERE
var hardest = "25 and 26";
// Don't forget your console.logs!
console.log(
  `Q27: I still have problem with ${hardest} right now. This is the best time to see my assignment grader and mentor`
);
