// async function getData() {
//     setTimeout(function(){
//     console.log("I am inside set Timeout block")
// },3000);
// }

// getData();

// await - ?

//fetch api
async function getData() {
    let response = fetch('https://api.github.com/users/bhattiaman')
    console.log(response);  
}

// Scenario:
// prepare url / api endpoint -> sync
// await // fetch data -> network call -> async
// process.data -> sync

