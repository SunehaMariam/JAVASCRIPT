// question#1
// var studentNames =[];

// question#2
// var studentNames =new Array();

// question#3
// var studentNames =["sana","dua","ayesha","hadiya"];

// quetsion#4
// var numbers =[10,20,30,40,50];

// question#5
// var boolValues =[true,false,true]

// question#6
// var allDTypes =[1,"Aima",false] 

// question#7
// document.write("<h2>Qualifications</h2>");
// let qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// for(let i=0; i<qualifications.length;i++){
//         document.write(`${i+1})${qualifications[i]}`);
//         document.write("<br>")
// }


// question#8
// var studentNames =["Ayesha","Sana","Amna"];
// var stdScore =[320,230,480]
// let total = 500;
// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (stdScore[i] / total) * 100;
//     document.write("Score of " + studentNames[i]+ " ");
//     document.write("is" + stdScore[i])+" ";
//     document.write("Percentage: " + percentage.toFixed(2) + "%" +"<br>");
// }

// QUESTION#9
// var colors =["Red","Yellow","Blue","Green"]
// console.log(colors);
// var userInput =prompt("What color you want to add to the begining?")
// colors.unshift(userInput);
// console.log(colors)
// var userInput =prompt("What color you want to add to the end?")
// colors.push(userInput);
// console.log(colors);
// colors.unshift("skyblue","violet");
// console.log(colors);
// colors.shift(userInput)
// console.log(colors);
// colors.pop(userInput)
// console.log(colors);
// let user=prompt("at which index do you want to add color?");
// let newcolor=prompt("now tell me new color of your choice!")
// colors.splice(user,0,newcolor);
// console.log(colors);
// let user1=prompt("at which index do you want to delete?");
// let deletecolor=prompt("which color you want to delete?");
// colors.splice(0,3);
// console.log(colors);

// question#10
// var studentScore =[120,234,567,123]
// document.write("Scores of students: ",studentScore+"<br>")
// document.write("Ordered scores of Students : ",studentScore.sort());
 

// QUESTION#11
// var cities = ["Karachi","Islamabad","Lahore","Quetta","Peshawar"];
// document.write("Cities list: "+"<br>",cities +"<br>")
// document.write("selected cities: "+"<br>")
// document.write(cities.slice(0,2))

// QUESTION#12
// var string = ["This","is","my","cat."];
// document.write("Array: "+"<br>",string +"<br>")
// document.write("String: "+"<br>")
// document.write(string.join(' '))


// QUSETION#13
// FIFO
// let array=["keyboard","mouse","printer","monitor"];
// document.write("Deveices: "+"<br>",array+"<br>")
// document.write("Out: "+"<br>")
// document.write(array.shift()+"<br>")
// document.write("Out: "+"<br>")
// document.write(array.shift()+"<br>")
// document.write("Out: "+"<br>")
// document.write(array.shift()+"<br>")
// document.write("Out: "+"<br>")
// document.write(array.shift()+"<br>")


// QUETSION#14
// LIFO 
// let array=["keyboard","mouse","printer","monitor"];
// document.write("Deveices: "+"<br>",array+"<br>")
// document.write("Out: "+"<br>")
// document.write(array.pop()+"<br>")
// document.write("Out: "+"<br>")
// document.write(array.pop()+"<br>")
// document.write("Out: "+"<br>")
// document.write(array.pop()+"<br>")
// document.write("Out: "+"<br>")
// document.write(array.pop()+"<br>")



// QUSETION#15
//  let phone =["APPLE","SAMSUNG","MOTOROLA","NOKIA","SONY","HAIER"];
// document.write('<select>');

// for(let i=0;i<phone.length;i++){
//     document.write("<option>"+ phone[i] +"</option>")
// }   
//     document.write("</select")

