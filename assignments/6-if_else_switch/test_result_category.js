console.log("Exercise 2: Test Result Categorizer");

let testResult= "";
if (testResult === "Passed") {
    console.log("✓ Test passed successfully");
}
else if (testResult === "Failed") {
    console.log("✗ Test failed - check logs");
}
else if( testResult === "Skipped") {

console.log("⊘ Test skipped");
}
else {
    console.log("? Unknown test status")
}