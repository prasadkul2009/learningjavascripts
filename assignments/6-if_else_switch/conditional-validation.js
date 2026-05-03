// Exercise 1: Email Validation:

let email ="testuser@example.com"
console.log("email: " + email);
if (email.includes ("@") && email.includes(",")) {
    console.log("✅ Valid email format")
} 
else {
    console.log ("❌ Invalid email format");
}
console.log ("====================================================")

//test cases
//1

let email2 ="testuser@example.com";
console.log("Email2: " + email2);
if (email2.includes ("testuser@example.com")) {
    console.log("✅ Valid email");
}
else {
    console.log("❌ Invalid email");
}
console.log ("====================================================")

//Test case 
//2 

let email3 ="testuser@example.com";
console.log("Email3: " + email3);
if (email3.includes ("testuser@example3.cog")) {
    console.log("✅ Valid email");
}
else {
    console.log("not an a email");
}
console.log ("====================================================")

//Test case
//4
let email4 ="testuser@example.com"
console.log("Email4: " + email4);
if (email4.includes ("missing@domain")) {
    console.log("valid");
}
else {
    console.log ("Invalid (no dot");

}