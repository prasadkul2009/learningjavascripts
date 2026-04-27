let username= "testuser";
let password= "Test@123";
let email= "";
if ((username !== "" && password !=="") || email !=="") {
    console.log("✅ Sufficient login credentials");
}
else {
    console.log("❌ Insufficient credentials - provide username+password OR email ");
}

//Test Case `username="testuser"`, `password=""`, `email=""`

let username2= "testuser";
let password2= "";
let email2= "";
if ((username2 !== "" && password2 !=="") || email2 !=="") {
    console.log("✅ Sufficient login credentials");
}
else {
    console.log("❌ Insufficient credentials - provide username+password OR email ");
}

//Test Case `username=""`, `password=""`, `email="test@example.com"`
let username3= "testuser";
let password3= "";
let email3= "";
if ((username3 !== "" && password3 !=="") || email3 !=="") {
    console.log("✅ Sufficient login credentials");
}
else {
    console.log("❌ Insufficient credentials - provide username+password OR email ");
}

