// const user ={
//   name:"Anshuman",
//   age:20,
//   welcome:function(){
//     console.log(`&{this.name},welcome to ES6`);
//     console.log(this)
//   }
// }
// user.welcome()
// user.name="test"
// user.welcome

// const employee ={
//   name:"Anshuman Rai",
//   age:20,
//   salary:50000,
//   welcome:function(){
//     console.log(`&{this.name},Employee of KIET`);
//     console.log(this)
//   }
// }

// employee.welcome()

// function outer(){
//   let x=10;
//   function inner(){
//     let y=20;
//     console.log("inner ",x);
//   }
// }

// outer()


// let a = 5;
// function outer(){
//   let b = 10; 
//   function inner(){ 
//     let c =12;
//     console.log(a,b,c);
//   }
//   inner();
// }
// outer();

// let abc = {
//   name: "Anshuman",
//   outer:function()
// }

// let numbers = [10,20,30];

// let [a,b,c] = numbers;
// console.log("A ",a)
// console.log("B ",b)
// console.log("C ",c)


// let values = [1,2,3]
// let [x,y]= values;
// console.log("X ",x)
// console.log("Y ",y)


const arr = [1,2,3,4];
const[a,b,...rest] = arr;
const[x,y,,,z] = arr;
console.log("A ",a)
console.log("B ",b)
console.log("Rest ",rest)
console.log("X ",x)
console.log("Y ",y)
console.log("Z ",z)