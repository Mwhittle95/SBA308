// I. Variables & Datatypes

// A. Q + A
// How do we assign a value to a variable?
let x = 130;
// How do we change the value of a variable?
let x = 58;
x = 23;
// How do we assign an existing variable to a new variable?
let x;
// Remind me, what are declare, assign, and define?
/* declare:  specifying a variables name (declaration without assignment)
       assign: giving a variable a value (declaration with assignment)
       define: interchangeable with declare (declaring and assigning a value)
       */
// What is pseudocoding and why should you do it?
/* simplified version of code
       jotting down thoughts into manageable parts
       easier to spot issues / errors
    */
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// 80% planning, wireframing and designing & 20% executing the code

// B. Strings
// Create a variable called firstVariable
let firstVariable;
// Assign it the value of the string "Hello World"
firstVariable = "Hello World";
// Change the value of this variable to some number
firstVariable = 67;
// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariableto any string.
secondVariable = "New String";
// What is the value of firstVariable?
console.log(firstVariable); // 67
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
let yourName = "Jean Valjean";
let greeting = "Hello, my name is " + yourName;
console.log(greeting);

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b); //<
console.log(c > d); // >
console.log("Name" === "Name"); // ===
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == "48");

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
let animal = cow;
// Write code that will print out "mooooo" if the it is equal to cow
if (animal === "cow") {
  console.log("mooooo");
}
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
else {
  console.log("Hey! You're not a cow.");
}
// Commit
/*  git add -A
    git commit -m "Print cow or you're not a cow"
    git push -u origin branch main
*/


// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
    let personAge = 16;
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
    let (personAge >= 16) {
        console.log("Here are the keys!");
    } else {
        console.log("Sorry, you're too young.");
    }



// II. Loops
// Remember: USE letwhen you initialize your for loops!   
// This is GOOD: for(let i = 0; i < 100; i++)   
// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
    for (let i = 0; i <= 10; i++){
        console.log(i);
    }
// Write a loop that will print out all the numbers from 10 up to and including 400
    for(let i = 10; i <= 400; i++){
        console.log(i);
    }
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
    for(let i = 12; i <= 4000; i +=3){
        console.log(i);
    }


// B. Get even
// Print out the numbers that are within the range of 1 - 100    
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 1; i <= 100; i++){
    if (i % 2 === 0) {
        console.log(i + " <-- is an even number");
    } else {
        console.log(i);
    }
}


// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:
    // I found a 5. High five!
    // I found a 10. High five!

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:
/*
    I found a 3. Three is a crowd
    I found a 5. High five!
    I found a 6. Three is a crowd
    I found a 9. Three is a crowd
    I found a 10. High five!
*/
// For numbers divisible by both three and five, be sure your code prints both messages

for (let i = 0; i <= 100; i++){
    if (i % 5 === 0 && i % 3 === 0) {
        console.log('I found a ${i}. High five! Three is a crowd');
    } else if (i % 5 === 0){
        console.log('I found a ${i}. High five!');
    } else if (i % 3 === 0){
        console.log('I found a ${i}. Three is a crowd')
    }  
}


// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

// Check your work! Your bank_account should have $10,100 in it.

let bank_account = 0;
for (let i = 1; i <= 10; i++){
    bank_account += i;
}
console.log(bank_account);

let bank_account_bonus = 0;
for (let i = 1; i <= 100; i++){
    bank_account_bonus += i * 2;
}
console.log(bank_account_bonus);



// III. Arrays & Control flow



// A. Talk about it:
// What are the things in an array called?

// Do Arrays guarantee those things will be in order?

// What real-life thing could you model with an array?




// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes



// C. Accessing elements

Given the following array const randomThings = [1, 10, "Hello", true]

How do you access the 1st element in the array?
Change the value of "Hello"to "World"
Check the value of the array to make sure it updated the array. How? Why, yes! console.log();



D. Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

What would you write to access the 3rd element of the array?
Change the value of "Github" to "Octocat"
Add a new element, "Cloud City" to the array



E. Mix It Up
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20]

Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
Remove the 5from the beginning of the array.
Add the string "Bob Marley"to the beginning of the array.
Remove the string of your choice from the end of the array.
Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?



F. Biggie Smalls
Create a variable that contains an integer.

Write an if ... elsestatement that:

console.log()s "little number" if the number is entered is less than 100
console.log()s big numberif the number is greater than or equal to 100.



G. Monkey in the Middle
Write an if ... else if ... elsestatement:

console.log()little numberif the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".



H. What's in Your Closet?
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
In the same way, access one item from Thom's pants array.
Access one item from Thom's accessories array.
Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
