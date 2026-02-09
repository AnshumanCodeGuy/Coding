// let MyObj = {
//   name : "Anshuman",
//   age: 20,
//   key: "XYX"
// }

// let duplicate = { ...MyObj,
//   key:"value"}; // Default values
// duplicate['Add'] = "GZB"

// console.log(MyObj)
// console.log(duplicate)

// let MyObj = {
//   name : "Anshuman",
//   age: 20,
//   key: "XYZ"
// }

// MyObj.name = "Anshuman Rai";
// let {name,age:CurrentAge} = MyObj; // Object Destructuring
// console.log("Name ",name);
// console.log("Age ",CurrentAge);


// let employee = {
//   name: "Anubhav",
//   age: 25,
//   salary: 6000000
// }

// let myEmployee = {...employee, salary: 7000}; // Object Spread Operator 
// console.log(myEmployee);

/* function show ({name,age}){
  console.log("Name ",name);
  console.log("Age ",age);

  console.log(`My name is ${name} and my age is ${age}`); // Template Literals

  console.log(`My name id ${name} and my age is ${age}`); // Template Literals

}

show(MyObj); */


// const[first,second,...rest] = [10,20,30,40,50];

// console.log("First ",first);
// console.log("Second ",second);
// console.log("Rest ",rest);  

// function sum( ...numbers){
//   return numbers.reduce((a,b) => a+b,0);
// }

// console.log(sum(10,20,30,40)); 
// function show(a,...b) // REST Parameters
// {
//   console.log("A ",a);
//   console.log("B ",b);
// }

 // Simple Asynchronous Call

 console.log("T1");
 console.log("T2");

setTimeout() => {
  console.log("T3");
}