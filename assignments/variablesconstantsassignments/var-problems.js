//**Step 1 — Hoisting (read a variable before its declaration)**
console.log("Status before declaration: " + testStatus); // if we comment this line and run the code then after declaration code work 
let testStatus = "PASSED";
console.log("Status after declaration: " + testStatus); // if we comment this line and run the code then Cannot access 'testStatus' before initialization error message.

//Step 2 — `var` leaks out of if-blocks**
if (true)  
{
  let tempUser = "admin@test.com";
  console.log("Inside block: " + tempUser); //if we comment this code then out of block code shows i is not defined
}
console.log("Outside block: " + tempUser); //if we comment this line code then block code works


//Step 3 — `var` allows redeclaration**
for (let i = 0; i < 3; i++) {
console.log("Running test step " + i); // if we comment this code then out of block code shows i is not defined
}
console.log("After loop, i = " + i); // if we comment this line code then block code works 