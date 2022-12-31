const accountId="2132"
let accountEmail="tuntun@gmail.com"
var accountPassword="0909"
accountCity="delhi"
let accountState;

// console.log(accountId,accountEmail);

// Prefer not to be use var
// because of issue in block scope and functional scope
// accountId="11111"  //not allowed
accountEmail="ravi@gmail.com"
accountPassword="5555555"
accountCity="bihar"

// console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])