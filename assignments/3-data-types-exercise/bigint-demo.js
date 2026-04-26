// What does this print?
let max = Number.MAX_SAFE_INTEGER;
console.log(max + 1);  // ? 9007199254740992 16 digits number get prints
console.log(max + 2);  // ? 9007199254740992 this is incorrect
console.log(max + 3);  // ? 9007199254740994 this is incorrect

// Fix with BigInt
let bigMax = 9007199254740991n;
console.log(bigMax + 1n);  // ? 9007199254740992n
console.log(bigMax + 2n);  // ? 9007199254740993n
console.log(bigMax + 3n);  // ? 9007199254740994n
