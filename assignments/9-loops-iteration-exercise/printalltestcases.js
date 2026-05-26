console.log("Login Module Test Suite");
console.log("=================================================");
let testCases = ["Login with valid credentials", 
    "Login with invalid password",
     "Login with empty username", 
     "Logout functionality",
      "Remember me checkbox"];

      for ( let i = 0; i < testCases.length; i++) {
      console.log("Test " + ( i + 1) + ": " + testCases[i]);
      }

    console.log ("Total test cases: " + testCases.length);