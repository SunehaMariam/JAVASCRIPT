// QUESTION:1
// var date =new Date();
// document.write(date +"<br>")
// QUESTION:02
// var months =["January","february","March","April","May","June","July","August","September","October","November","december"]
// var date = new Date().getMonth()
// console.log(date)
// console.log(months[date]);
// QUSETION:03
// var date = new Date();
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var todayDay =date.getDay() ;
// alert(days[todayDay]);
// QUESTION:04
// var currentDay = new Date().getDay();
// if (currentDay === 0 || currentDay === 6) {
//     alert("It's Fun day");
// }
// else{
//     alert("Its not a specified day")
// }
// Question:05
// var currentDate = new Date().getDate();
// if (currentDate < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }
// question:06
// var currentDate = new Date();
// var millisecondsSinceEpoch = currentDate.getTime();
// var minutesSinceEpoch = millisecondsSinceEpoch / 1000 / 60;
// alert("Milliseconds since Jan 1,1979:"+millisecondsSinceEpoch)
// alert("Minutes since Jan 1, 1970: " + minutesSinceEpoch);
// Question:07
// Get the current hour (0-23)
// var Hour = new Date().getHours();

// // Check if the time is before noon (12:00)
// if (Hour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// Question:08
// var laterDate = new Date(2020, 11, 31);
// alert(laterDate);
// Question:09
// var ramadanStartDate = new Date(2015, 5, 18); 
// var currentDate = new Date();
// var timeDifference = currentDate - ramadanStartDate;
// var daysPast = timeDifference / (1000 * 60 * 60 * 24);
// alert("Number of days since 1st Ramadan: " + Math.floor(daysPast));
// Question:10
// var startDate = new Date(2015, 0, 1); 
// var currentDate = new Date();
// var timeDifference = currentDate - startDate;
// var second = timeDifference / 1000;
// document.write("Seconds elapsed since January 1, 2015: " + Math.floor(second));

// Question:11
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// currentDate.setHours(currentHour + 1);
// document.write("Updated date and time: " + currentDate);
// Question:12
// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("The date 100 years ago was: " + currentDate.toDateString());
// Question:13
// var age = prompt("Please enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// alert("You were born in the year: " + birthYear);
// Question:14
// var customerName = prompt("Enter your name:");
// var numberOfUnits = parseFloat(prompt("Enter the number of units consumed:"));
// var chargesPerUnit = parseFloat(prompt("Enter the charges per unit:"));
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = monthNames[new Date().getMonth()];
// var netAmount = (numberOfUnits * chargesPerUnit).toFixed(2);
// var latePaymentSurcharge = 100;
// var grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);
// alert("K-Electric Bill\n" +
//       "Customer Name: " + customerName + "\n" +
//       "Current Month: " + currentMonth + "\n" +
//       "Number of Units: " + numberOfUnits + "\n" +
//       "Charges per Unit: " + chargesPerUnit.toFixed(2) + "\n" +
//       "Net Amount Payable (within Due Date): " + netAmount + "\n" +
//       "Late Payment Surcharge: " + latePaymentSurcharge + "\n" +
//       "Gross Amount Payable (after Due Date): " + grossAmount);
