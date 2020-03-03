class Student{
    constructor(id,name){
        this.id = id;
        this.studentName = name;
    }
}

const student1 = new Student(3144,"Shrikanta");
const student2 = new Student();

console.log(student1,student2);