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

/*let username= "testuser";
let password= "";
let email= "";
if ((username !== "" && password !=="") || email !=="") {
    console.log("✅ Sufficient login credentials");
}
else {
    console.log("❌ Insufficient credentials - provide username+password OR email ");
}*/


