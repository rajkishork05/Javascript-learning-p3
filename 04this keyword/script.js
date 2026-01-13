// global scope this
console.log(this)   //window

//functional scope
function abcd(){
    console.log(this)
}
abcd();  //window

//method -> means a func. is inside an object;
let obj= {
    name:"raj",
    age: "55",
    hello: function(){
        console.log(this)
    }
}
obj.hello();   //it will give an object in which the function is

//events
let h1 = document.querySelector("h1")
h1.addEventListener("click", function(){
    console.log(this)  //it will print h1 because this is dedicating h1
    this.style.color = "red" //h1.style.color = "red"
})
  

//class
class Abcd{
    constructor(){
        console.log("this refers to a blank space of object name Abcd");
        this.a = 12;
        this.b = 24;
    }
}
let con = new Abcd();
console.log(con) // Abcd = {a: 12, b:24}