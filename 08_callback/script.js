//callback
// one function taking another function as a parameter known as callback function

function call(fnc){
    setTimeout(fnc, Math.floor(Math.random()*10) * 1000);
}

function greet(){
    console.log("hello bro")  
}

call(greet)  // greet is a callback function



// callback hell

setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");

        setTimeout(() => {
            console.log("Step 3");

            setTimeout(() => {
                console.log("Step 4");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);

// Callback Hell happens when callbacks are nested inside other callbacks many times, making the code:

// Hard to read 

// Hard to debug

// Hard to maintain

// It looks like a pyramid / triangle shape, so it’s also called “Pyramid of Doom”.




