// let first = prompt("Whats your first name?")
// let last = prompt("Whats your last name?")
// var fullName =alert(first+last)
// var greet = alert("hello" +" "+ first+last)
// QUESTION:02
// var model =prompt("Whats your favourite phone model?");
// document.write(`<b>My favourite phone model is </b>`,model +"<br>")
// document.write(`<b>length:</b>`,model.length) 
//QUESTION:03
// var str ="Pakistani"
// document.write("String:"+str+"<br>")
// document.write("Index of n is "+str.indexOf("n"));
// QUESTION:04
// var str ="Hello world"
// document.write("String:"+str+"<br>")
// document.write("Last Index of l is "+str.lastIndexOf("l"));
//QUESTION:05
// var str ="Pakistani"
// document.write("String:"+str+"<br>")
// document.write("Character at index 3: "+str.charAt(3));
//QUESTION:06
// let first = prompt("What's your first name?");
// let last = prompt("What's your last name?");
// var fullName = first.concat(" ", last);
// document.write(fullName)  
// var greet = alert("Hello " + fullName); 
// QUESTION: 07
// var word = "Hyderabad"
// document.write("City:" ,word+"<br>")
// document.write("After replacement:"," ",word.replace("Hyder","Islam"))
//QUESTION:08
// var message = "Ali and Sami are best friends.They play cricket and football together.";
// document.write(message.replaceAll('and','&'))
// QUESTION:09
// var number ="472"
// console.log(number)
// console.log(typeof(number))
// var numbers = "472";
// numbers = Number(numbers);     
// console.log(numbers);           
// console.log(typeof(numbers));    
//QUESTION:10
// var str="peanuts";
// document.write(str+"<br>")
// document.write(str.toUpperCase())
//QUESTION:11
// var userInput = "javascript"
// var words = userInput.split(' ');
// for (var i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
// }
// var titleCase = words.join(' ');

// alert("Title Case: " + titleCase);


// QUESTION:12
// var Float ="35.36"
// var numString = Float.toString().replace('.', '');
// console.log(numString)
// console.log(typeof(numString))
// QUESTION:13
// var userName = prompt("Enter your name");
// var specialChar = ["@", "!", ",", "."];
// var isValid = true;  
// for (var i = 0; i < specialChar.length; i++) {
//     if (userName.includes(specialChar[i])) {
//         isValid = false;
//         break;  
//     }
// }
// if (isValid) {
//     alert("Valid Username");
// } else {
//     alert("Don't use special characters in your name");
// }
// Question:14
// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var Item = prompt("Enter the item you want to search for:");
// var lowerCaseItem = Item.toLowerCase();
// var found = false;
// for (var i = 0; i < bakery.length; i++) {
//     if (bakery[i].toLowerCase() === lowerCaseItem) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     alert(Item + " is available in the list.");
// } else {
//     alert(Item + " is not available in the list.");
// }
//QUESTION:15
// var password = prompt("Enter your password:");
// if (password.length < 6) {
//     alert("Password must be at least 6 characters long.");
// }
// else if (!isNaN(password.charAt(0))) {
//     alert("Password should not start with a number.");
// }
// else {
//     var containsLetter = false;
//     var containsNumber = false;
//     for (var i = 0; i < password.length; i++) {
//         var charCode = password.charCodeAt(i);
//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             containsLetter = true;
//         }
//         else if (charCode >= 48 && charCode <= 57) {
//             containsNumber = true;
//         }
//     }
//     if (containsLetter && containsNumber) {
//         alert("Password is valid.");
//     } else {
//         alert("Password must contain both alphabets and numbers.");
//     }
// }
//QUESTION:16
// var university = 'University of Karachi';
// var result = university.split(''); // Split by every character
// console.log(result);

//QUESTION:17
// var str = 'Pakistan'
// var result =str.charAt(str.length-1)
// console.log(result);
//QUESTION:18
// let str = "The quick brown fox jumps over the lazy dog ";
// let count = str.toLowerCase().split("the").length-1;
// console.log(count);






