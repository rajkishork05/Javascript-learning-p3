//constructor
function CreateUser(username, age, work, theme){
    this.name = username;
    this.age = age;
    this.profession = work;
    this.theme = theme;
    // this.display = function(){
    //     let h1 = document.querySelectorAll("h1");
    //     h1[0].textContent = `Name : ${this.name}`
    //     h1[1].textContent = `Name : ${age}`
    //     h1[2].textContent = `Name : ${work}`
    //     document.body.style.backgroundColor = theme
    // }
}

const user1 = new CreateUser("Raj", 22, "Software Engineer", "blue") //user 1 be an object
const user2 = new CreateUser("Asmit", 21, "Devops Enginner", "lime") //user 2 be an object

// prototype -> shared memory
// we want this function to not store every time in an object so it we will create a prototype so it will go o every object 
// this.display = function(){
//         let h1 = document.querySelectorAll("h1");
//         h1[0].textContent = `Name : ${this.name}`
//         h1[1].textContent = `Name : ${this.age}`
//         h1[2].textContent = `Name : ${this.profession}`
//         document.body.style.backgroundColor = theme
//     }

CreateUser.prototype.display  = function(){
        let h1 = document.querySelectorAll("h1");
        h1[0].textContent = `Name : ${this.name}`
        h1[1].textContent = `Name : ${this.age}`
        h1[2].textContent = `Name : ${this.profession}`
        document.body.style.backgroundColor = this.theme
    }          //so it will go in a shared memory we can user it in any object