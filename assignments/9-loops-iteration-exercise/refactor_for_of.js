console.log("Refactor_for_of Login Module Test Suite");
console.log("=================================================");

let testCases = ["Login with valid credentials", 
    "Login with invalid password",
     "Login with empty username", 
     "Logout functionality",
      "Remember me checkbox"];

      let testNumber =1;
      for ( let testCase of testCases) {
      console.log("Test " + testNumber + ": " + testCase);
      testNumber++;
      }

    console.log ("Total test cases: " + testCases.length);