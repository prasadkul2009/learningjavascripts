console.log ("Exercise 3: Password Strength Checker");

let password ="Test@";
console.log("Password: " + password);
console.log("Length: " + password.length + " character\n");
if (password.length < 6) {
    console.log ("❌ Weak password - too short");
}
else if (password.length < 10) {
    console.log("⚠️ Medium password strength");

}
else {
console.log("✅ Strong password");
}