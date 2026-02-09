// var x =10;
// console.log("Test",x);

(function tAbhi(){
  console.log("test IITs");
})();

function show(){
  console.log("hello");
}  

let show1 = function(){
  console.log("Anonymous Function ");
} 

let show2 = ()=>console.log("Arrow .... ");



let add = (num1,num2)=> num1+num2;  

let sum = (a, b=50) => {
  let result = 0;
  result = a + b;
  return result;
}
show ();
show1();
show2();
console.log(add(10,20));
console.log(sum(10,40));
console.log(sum(40));


class Student{
  constructor(name,marks){
    this.name = name; 
    this.marks = marks;
  }
}

const s1 = new Student("Anshuman",95);
const s2 = new Student("Raihan",85);
const s3 = new Student("Sourav",75);
const s4 = new Student("Aryan",65);
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);  
const students = [s1.marks,s2.marks,s3.marks,s4.marks];
students.sort((a, b) => b.marks - a.marks);
console.log("4th highest marks of the student is : ",students[3].marks);

// // Sloppy mode (no "use strict")
// function sloppyExample() {
//     // Assigning to an undeclared variable
//     x = 10;   // Allowed, creates a global variable
//     console.log("Sloppy mode x:", x);
    
//     // 'this' in a function defaults to the global object
//     function showThis() {
//         console.log("Sloppy mode this:", this);
//     }
//     showThis(); // Logs the global object (window in browsers)
// }

// sloppyExample();