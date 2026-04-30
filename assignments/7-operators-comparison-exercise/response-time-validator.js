console.log("                                                       ");
console.log("====================================================== ");
console.log("              TEST RESPONSE VALIDATOR                  ");
console.log("====================================================== ");
console.log("                                                       ");
let responseTime = 3;
function showResults(responseTime , status) {

if ((responseTime < 3) status== "PASSED" && responseTime == 3 );    
    {
    console.log("✅ Test Passed");
    }
    }   
    
    else {(status== "FAILED" || (responseTime == 3 ))
    console.log("❌ Test Failed");
    }  
}
showResults(3, "PASSED");

