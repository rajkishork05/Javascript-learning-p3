//closures
function a(){
    let b = 10;                  //private variable
    return function c(){
        console.log(b);
    }
}

const d = a();
// d();

//counter function with private variable

function count(){
    let c = 0;
    return function ok(){
        c++;
        console.log(c)
    } 
}

count()//it will not work because it has a function inside it 
let g = count();
g(); //1
g(); //2
g(); //3
g();//4

//what if we make a new variable 
let h = count();
h() //1
h() //2