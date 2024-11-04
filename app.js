document.write("Results: "+"<br>")
var a = 10;
document.write("The value of a is:",a +"<br>");
++a;
document.write("The value of ++a is:",a+"<br>");
document.write("Now the value of a is:",a +"<br>" );
a++;
document.write("The value of a++ is:",a +"<br>");
document.write("Now the value of a is:",a +"<br>");
--a;
document.write("The value of --a is:",a +"<br>");
document.write("Now the value of a is:",a +"<br>");
a--;
document.write("The value of a-- is:",a+"<br>" );
document.write("Now the value of a is:",a +"<br>");


var a = 2, b = 1;
var result = --a - --b + ++b + b--; 

document.write("a is:", a+"<br>");      
document.write("b is:", b+"<br>");      
document.write("result is:", result+"<br>"); 
// var greet= "Hello"; 
// var userInput = prompt("Enter your Name :")
// alert(greet +" "+ userInput)



// let inputNumber=prompt("enter number:");
// if (inputNumber === "") {
//         number = 5; // Default value
//     } else {
//         number = inputNumber; // Use the input directly
//     }
// for(let i=1;i<=10;i++){
// console.log(inputNumber ,"x", i ,"=" , inputNumber*i);
// }


// Get subject names and marks from user input
const subject1 = prompt("Enter the name of Subject 1:");
const subject2 = prompt("Enter the name of Subject 2:");
const subject3 = prompt("Enter the name of Subject 3:");

const totalMarksPerSubject = 100;

const marks1 = parseInt(prompt(`Enter obtained marks for ${subject1} (out of ${totalMarksPerSubject}):`));
const marks2 = parseInt(prompt(`Enter obtained marks for ${subject2} (out of ${totalMarksPerSubject}):`));
const marks3 = parseInt(prompt(`Enter obtained marks for ${subject3} (out of ${totalMarksPerSubject}):`));

// Calculate total obtained marks and percentage
const totalObtained = marks1 + marks2 + marks3;
const totalMarks = totalMarksPerSubject * 3;
const percentage = (totalObtained / totalMarks) * 100;

// Display results in a formatted table-like structure
console.log(`
    Subject  Total Marks  Obtained Marks  Percentage
    ${subject1}  ${totalMarksPerSubject}  ${marks1}        ${(marks1 / totalMarksPerSubject * 100)}%
    ${subject2}  ${totalMarksPerSubject}  ${marks2}        ${(marks2 / totalMarksPerSubject * 100)}%
    ${subject3}  ${totalMarksPerSubject}  ${marks3}        ${(marks3 / totalMarksPerSubject * 100)}%
    Total     ${totalMarks}             ${totalObtained}   ${percentage.toFixed(2)}%
    `);