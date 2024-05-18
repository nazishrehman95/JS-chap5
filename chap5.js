//Question#1
let num1 = 3;
let num2 = 5;
let sum = num1 + num2;
console.log("The sum of " + num1 + "and " + num2 + "is " + sum);

//Question#2
//SUBTRACTION:
let num3 = 3;
let num4 = 5;
let difference = num3 - num4;
console.log("The difference of " + num1 + "and " + num2 + "is " + difference);

//DIVISION:
let num5 = 3;
let num6 = 5;
let quotient = num5 / num6;
console.log("The quotient of " + num1 + "and " + num2 + "is " + quotient);

//MULTIPLICATION:
let num7 = 3;
let num8 = 5;
let product = num7 * num8;
console.log("The product of " + num1 + "and " + num2 + "is " + product);

//MODULUS:
let num9 = 3;
let num10 = 5;
let remainder = num9 % num10;
console.log("The remainder of " + num1 + "and " + num2 + "is " + remainder);


//Question#3
// a. Declare a variable
let myVariable;

// b. Show the value of variable in your browser
console.log("Value after variable declaration is: " + myVariable);

// c. Initialize the variable with some number
myVariable = 5;

// d. Show the value of variable in your browser
console.log("Initial value: " + myVariable);

// e. Increment the variable
myVariable++;

// f. Show the value of variable in your browser
console.log("Value after increment is: " + myVariable);

// g. Add 7 to the variable
myVariable += 7;

// h. Show the value of variable in your browser
console.log("Value after addition is: " + myVariable);

// i. Decrement the variable
myVariable--;

// j. Show the value of variable in your browser
console.log("Value after decrement is: " + myVariable);

// k. Show the remainder after dividing the variable's value by 3
let reminder = myVariable % 3;

// l. Output: "The remainder is: 0"
console.log("The reminder is: " + reminder);

//Question#4
// Store the ticket price in a variable
let ticketPrice = 600;

// Calculate the cost of buying 5 tickets
let totalCost = ticketPrice * 5;

// Output the result
console.log("The cost of buying 5 movie tickets is: " + totalCost + " PKR");


//Question#5
let num = 4; 
for(let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
  document.write(`${num} x ${i} = ${num * i}<br>`);
}

//Question#6
// a. Store a Celsius temperature into a variable
let celsius = 25;

// b. Convert it to Fahrenheit & output "NNoC is NNoF"
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C is ${fahrenheit}°F`);

// c. Now store a Fahrenheit temperature into a variable
let fahrenheit2 = 77;

// d. Convert it to Celsius & output "NNoF is NNoC"
let celsius2 = (fahrenheit2 - 32) * 5/9;
console.log(`${fahrenheit2}°F is ${celsius2}°C`);

//Question#7
let price1 = 650;
let quantity1 = 3;
let price2 = 100;
let quantity2 = 7;
let shippingCharges = 100;

// Compute the total cost
let subTotal = (price1 * quantity1) + (price2 * quantity2);
 totalCost = subTotal + shippingCharges;

// Show the output
console.log("Shopping Cart");
console.log("Price of 1 item is " + price1);
console.log("Quantity of item 1 is " + quantity1);
console.log("Price of item 2 is " + price2);
console.log("Quantity of item 2 is " + quantity2);
console.log("Shipping charges " + shippingCharges);
console.log("Total cost of your order is " + totalCost);

//Question#8
let totalMarks = 980;
let marksObtained = 804;

// Compute the percentage
let percentage = (marksObtained / totalMarks) * 100;

// Show the result in the console
console.log("Marks Sheet:");
console.log("Total marks: " + totalMarks);
console.log("Marks obtained: " + marksObtained);
console.log("Percentage: " + percentage.toFixed(3) + "%");

//Question#9
let totalPKR = (10 * 104.80) + (25 * 28);
console.log("Total currency in PKR: " + totalPKR);

//Question#10
let result = (x = 10, x + 5) * 10 / 2;
console.log(result);

//Question#11
let currentYear = 2016;
let birthYear = 1992;

let age = currentYear - birthYear;

console.log("Age calculator");
console.log("Current age: " + currentYear);
console.log("Birthyear: " + birthYear);
console.log("Your age is: " + age);

//Question#12
let radius = 20;
let pi = 3.142;

let circumference = 2 * pi * radius;
let area = pi * radius * radius;

console.log("The Geometrizer");
console.log("Radius of circle: " + radius);
console.log("The circumference is " + circumference.toFixed(2));
console.log("The area is " + area.toFixed(1));

//Question13
let favoriteSnack = "chocolate chips";
let currentAge = 15;
let maxAge = 65;
let snacksPerDay = 3;

let totalSnacksNeeded = (maxAge - currentAge) * 365 * snacksPerDay;

console.log("The Lifetime Supply Calculator");
console.log("Favourite snack: " + favoriteSnack);
console.log("Current age: " + currentAge);
console.log("Estimated maximum age: " + maxAge);
console.log("Amount of snacks per day: " + snacksPerDay);
console.log("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);




