function bakeCake(myCallBack) {
  console.log("1. Cake is in Oven. ");
  setTimeout(() => {
    console.log("2. Cake is baked");
    myCallBack();
  }, 2000);
}

bakeCake(() => {
  console.log("3. Cake is served!");
});



function bakeCake() {  
  return new Promise((resolve, reject) => { // These names must match what you call below
    console.log("1. Baking cake...");
    setTimeout(() => {
      let flag = true;
      if (flag)
        resolve("2. Cake is ready."); // Use the parameter name 'resolve'
      else 
        reject("2. Cake is burnt.");  // Use the parameter name 'reject'
    }, 2000);
  });
}

bakeCake()
  .then(msg => {
    console.log(msg);
    console.log("3. Let's eat the cake.");
  })
  .catch(err => {
    console.log(err);
    console.log("3. No cake today.");
  });
