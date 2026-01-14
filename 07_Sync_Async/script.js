// sync 
// code working line by line 
console.log("Sync............................")

console.log("hello 1")
console.log("hello 2")
console.log("hello 3")
console.log("hello 4")



console.log("Async............................")

//Async 
//code working as we want to execute 
setTimeout(() => {
    console.log("hello 1")
}, 2000);
setTimeout(() => {
    console.log("hello 2")
}, 1000);
setTimeout(() => {
    console.log("hello 3")
}, 3000);
console.log("hello 4")