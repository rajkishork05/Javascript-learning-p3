class CreatePencil{
    constructor(name, color, price){
        this.name = name;
        this.color = color;
        this.price = price;
    }

    //methods 
    write(text){
        const h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.append(h1)
    }

    erase(){
        const h1= document.querySelectorAll("h1");
        h1.forEach((elem)=>{
            if(elem.style.color == this.color){
                elem.remove();
            }
        })
    }
}

const p1 = new CreatePencil("Doms", "blue", 20)
const p2 = new CreatePencil("Apsara", "black", 10)
const p3 = new CreatePencil("Natraj", "red", 15)