console.log("Count Test Results");
console.log("=================================================");
let testResults =[
    "PASSED", "PASSED", "FAILED", 
    "PASSED", "SKIPPED", "PASSED", 
    "FAILED", "PASSED"
];
let totalTests = 0;
let passedTest = 0;
let failedTest = 0;
let skippedTest = 0;


for (let i = 0; i < testResults.length; i++) {
    totalTests++;
    if (testResults [i] === "PASSED") {
        passedTest++;
    } else if (testResults [i] === "FAILED") {
        failedTest++;
    }else if (testResults [i] === "SKIPPED") {
        skippedTest++;
    }
}
let passRate = ( passedTest / totalTests) * 100;
let failRate = (failedTest / totalTests ) * 100;

console.log("Total Test: " + totalTests);
console.log("Total Passed Test: " + passedTest);
console.log("Total Failed Test: " + failedTest);
console.log("Total Skipped Test: " + skippedTest);
console.log("Pass Rate: " + passRate + "%");
console.log ("Fail Rate: " + failRate + "%");