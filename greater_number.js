// Write a prgram to find the greater number between two numbers  
function greaterNumber(a, b){
  if (a>b){
    console.log(a,"a is the greatest number");
  }
  else {
    console.log(b,"is the greatest number ");
  }
}
greaterNumber(20,10);



// greater number between two number using anonymous function 
let greater = (num1,num2)=> ((num1>num2) ? num1:num2);
console.log("Greater number is : ", greater(20, 10));