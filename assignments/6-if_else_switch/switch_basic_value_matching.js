console.log("Exercise 6: Switch — Basic Value Matching");
let testResult="h";
switch (testResult){
    case "Passed": 
    console.log("✓ Test passed successfully");
    break;
    case "Failed":
        console.log("✗ Test failed - check logs");
    break;
    case "Skipped":
        console.log("⊘ Test skipped");
    break;
    case "Pending":
    console.log("⏳ Test pending - not yet run");
    break;
    case "h":
    console.log("? Unknown test status");

}
console.log("==========================================================")