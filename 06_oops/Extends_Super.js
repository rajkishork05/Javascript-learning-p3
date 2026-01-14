class CreateUser {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    write(text){
        let h = document.createElement("h2")
        h.textContent = `${this.name} : ${text} {${this.role}}`
        document.body.append(h)
    }
    checkRole(){
        console.log(this.role)
    }

}

//making another class that use all the functionality of user 
class Admin extends CreateUser {
    constructor(name, address, position){
        super(name, address);
        this.position = position;
    }

    erase(){
       let userRole =  document.querySelectorAll("h2");
       userRole.forEach(function(elem){
        elem.remove()
       })
    
    }

}

//making in built property
CreateUser.prototype.role = "User";
Admin.prototype.role = "Admin";

const u1 = new CreateUser("Raj", "delhi")
const u2 = new CreateUser("kulan", "noida")
const a1 = new Admin("Raghu", "UAE", "Senior Admin")