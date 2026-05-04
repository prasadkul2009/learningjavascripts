let statusCode = 400;
console.log("HTTP STatus Code: " + statusCode);
switch (statusCode) {
case 200:
console.log("✅ 200 OK — request successful");
break
case 201:
console.log("✅ 201 Created — resource created");
break
case 400:
case 401:
case 403:
console.log("❌ Client error — check your request");
break
case 404:
console.log("❌ 404 Not Found — endpoint does not exist");
break
case 500:
case 502:
case 503:
console.log("🔥 Server error — backend issue");
break
default:
console.log("? Unknown status " + statusCode);

}
