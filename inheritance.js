class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    fullName(inputName = "Name"){
        return `${inputName} ${this.fatherName}`;
    }
}


const baby = new Child("John");
// const baby2 = new Child("Tom");

console.log(baby.fullName());
// console.log(baby2);