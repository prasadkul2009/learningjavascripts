console.log("Ex 4: Test Score Grading")
let score= 95;
console.log("Score: " + score);
if (score >=90) {
    console.log("Grade: A (Excellent)");
}
else if (score >= 80 && score <= 89) {
    console.log("Grade: B (Good)");
}
else if (score >= 70 && score <=79 ) {
    console.log ("Grade: C (Average)");

}
else if (score >= 60 &&  score <=69 ) {
    console.log("Grade: D (Pass)");
}
else {
    console.log ("Grade: F (Fail)");
}