var a =4;
b = 7;
 var sum = a+b;
 document.write("The sum is: ", sum +"<br>")
 var sub = a-b;
 document.write("The subtraction is: ", sub +"<br>")
  var multiply = a*b;
  document.write("The multiplication is: ", multiply +"<br>")
   var divide = a/b;
   document.write("The division is: ", divide +"<br>")
   var mod = a%b;
   document.write("The modulus is: ", mod +"<br>")
        var number; 
        document.write("Value after variable declaration is: " + number + "<br>"); 
        number = 5; 
        document.write("Initial value: " + number + "<br>"); 
        number++;
        document.write("Value after increment is: " + number + "<br>"); 

    
        number += 7;

    
        document.write("Value after addition is: " + number + "<br>"); 

        number--; 

       
        document.write("Value after decrement is: " + number + "<br>"); 

    
        var remainder = number % 3; 


        // document.write("The remainder is: " + remainder + "<br>"); 

var ticketPrice = 600;

var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
console.log("Total cost of buy", numberOfTickets +" "+ "to a movie is:" ,totalCost+""+"PKR");


var number = 4; 

document.write(`Multiplication Table of`+" "+ number +"<br>");
for (var i = 1; i <= 10; i++) {
    document.write(`${number} x ${i} = ${number * i}<br>`);
}
 var celsius = 25;
 var fahrenheit = (celsius * 9/5)+32;
 document.write(celsius,"°C" +" "+"is" ,fahrenheit,"°F" +"<br>");
  var fahrenheit = 70;
  var celsius = (fahrenheit - 32)* 5/9;
  document.write(fahrenheit,"°F" +" "+"is" ,celsius,"°C");

  var priceItem1 = 650;
  var priceItem2 = 100;
  quantityItem1= 3 
  quantityItem2= 7;
  var shippingCharges = 100;
  const totalCostItem1 = priceItem1 * quantityItem1;
        const totalCostItem2 = priceItem2 * quantityItem2;
        const totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;
document.write("Price of item 1 is"+" "+ priceItem1 +"<br>");

document.write("Quantity of item 1 is"+" "+ quantityItem1 +"<br>")
document.write("Price of item 2 is"+" "+ priceItem2 +"<br>");
document.write("Quantity of item 2 is"+" "+ quantityItem2 +"<br>")
document.write("Shipping charges"+" "+ shippingCharges +"<br>")
document.write("Total cost of your order is"+" "+ totalCost +"<br>")

var totalMarks = 980;
var marks = 804;
var percentage =( marks/totalMarks)*100;
document.write("Total marks: ",totalMarks+ "<br>")
document.write("Marks obtained: ",marks+"<br>")
document.write("Percentage: ",percentage +"<br>")

var usDollars = 10;
        var saudiRiyals = 25;

        // Exchange rates
        var usdToPkr = 104.80; 
        var sarToPkr = 28;     

        var totalInPkr = (usDollars * usdToPkr) + (saudiRiyals * sarToPkr);

        document.write(`<h2>Currency in PKR</h2>`);
        document.write("Total currency in PKR:",totalInPkr);

var number = 20;
console.log(number);
number =+5;
console.log(number);
number*10;
console.log(number);
number/2;
console.log(number);

 var ageYear = 2024;
var birthYear = 2005;
var age = ageYear-birthYear;
document.write('<h2>Age Calculator</h2> <br>')
document.write("Current age: ",ageYear +"<br>")
document.write("Birth Year: ",birthYear +"<br>")
document.write("Your age: ",age+"<br>")

var radius = 20;
var pi = 3.142;
var circumference = 2*pi*radius;
var area = pi*radius*radius;

document.write('<h2>The Geometrizer</h2> <br>')
document.write("The radius is: ",radius +"<br>")
document.write("The circumfernce is: ",circumference +"<br>")
document.write("The area is: ",area +"<br>")



var snack = "wavy";
var age = 19;
 var maxAge = 65;
 var estimatedAmountPerDay = 2;
 var yearsLeft = maxAge - age;
        var totalAmountNeeded = yearsLeft * 365 * estimatedAmountPerDay; 

        // Output the result
        document.write("You will need"+" "+ totalAmountNeeded +" "+ snack +" "+"to last you until the ripe old age of" +" "+maxAge);
    













