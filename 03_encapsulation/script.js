function encapsulate(){
    let a = 0;
    return function b(){            //encapsulate this logic and variable to the user
        if(a<5){
            a++;
            console.log(`clicked : ${a} times`)          
        }else{
            console.error("limit exceeded")
        }
    }
}

let b = encapsulate();
b();
b();
b();
b();
b();
b();
b();