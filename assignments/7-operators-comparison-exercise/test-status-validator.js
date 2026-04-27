console.log("                                                       ");
console.log("====================================================== ");
console.log("              TEST STATUS VALIDATOR                    ");
console.log("====================================================== ");
console.log("                                                       ");
let errorCount = 0;
function showTestResults(status, errorcount) {
    if (status=="Passed" && errorCount== 0) 
        {
        console.log("✅ Test Passed");
        }
    else { console.log("❌Test Failed");    
    }
}
showTestResults("Passed", 0);
showTestResults("Failed", 0);
showTestResults("Passed", 1);
showTestResults("Failed", 3);
