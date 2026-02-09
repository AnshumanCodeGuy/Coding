// write a program in js to find the odd and even numbers 

function oddEven(x){
  if (x%2 ==0 ){
    console.log(x, "is even number");
  }
  else{
    console.log(x, "is odd number ");
  }
}
oddEven(7);


// write a program in js to find the odd and even numbers using anonymous function 

const OE = (a)=> (a%2==0)?"Even":"Odd";
console.log("The given number is ",OE(8))
