// call

let obj = {
    name: "sandy",
    age: 22
}

function ab(a, b){
    console.log(this)
    console.log(a, b)
}
//call set a value window to obj we can also paas variables
// ab.call(obj, 1, 2); 


//apply
// it is same as call but send only 2 argument 
// first -> this || second -> array
// ab.apply(obj, [1,2]);



//bind
//it will create a new function which has "this" value changed
let fnc = ab.bind(obj, 1,2)
fnc();


