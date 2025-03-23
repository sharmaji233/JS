const accountId = 29
let accountEmail = "sharma@google.com"
var accountPassword ="123654"
accountCity = "Shimla"
let accountState

// accountId = 2  // not allowed

accountEmail = "check@gmail.com"
accountPassword = "789456"
accountCity = "Chandigarh"

/*
Refer not to use var
becoz of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


