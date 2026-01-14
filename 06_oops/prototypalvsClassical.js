//Prototypal inheritance
//taking one object props/methods in another object in a prototype 

let hotCoffee={
    taste : "good",
    drink: function(){
        console.log(`gut gut gut "${this.taste}"`)
    }
}

let cappechino = Object.create(hotCoffee);
cappechino.taste = "eww bad"

let coldcoffee = Object.create(cappechino);
coldcoffee.taste = "very nice";

//classical inheritance 
// like we use Extends & Super