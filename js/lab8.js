/*
Question No 1. Object literals and inheritance
 */

let student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrades: function (newGrades) {
        this.grades.push(newGrades)
    },
    computeAverageGrades: function () {
        return this.grades.reduce(function (accumulator, current) {
            return accumulator + current;
        }) / this.grades.length;
    }
}

let student1 = Object.create(student);
student1.firstName = 'Sauravi';
student1.lastName = 'thapa';
student1.grades = [];
student1.inputNewGrades(1);
student1.inputNewGrades(2);

console.log(student1);


let student2 = Object.create(student);
student2.firstName = 'Manju';
student2.lastName = 'Thapa';
student2.grades = [];
student2.inputNewGrades(3);
student2.inputNewGrades(4);

let student3 = Object.create(student);
student3.firstName = 'Rabin';
student3.lastName = 'Thapa';
student3.grades = [];
student3.inputNewGrades(5);
student3.inputNewGrades(6);

let students = [student1, student2, student3];

let total = 0;
for (let i = 0; i < students.length; i++) {
    total = total + students[i].computeAverageGrades();
}

console.log(total / students.length);

console.log(student1)


/*
Question no 2  Redo question no 1 using Constructor
 */

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.inputNewGrades = function (grades) {
    this.grades.push(grades);
}

Student.prototype.computeAverageGrades = function () {
    return this.grades.reduce(function (accumulator, current) {
        return accumulator + current;
    }) / this.grades.length;
}

let student4 = new Student("Suman", "Acharya");
student4.inputNewGrades(5)
student4.inputNewGrades(6)

console.log(student4);


let student5 = new Student("Mandevi", "Budathoki");
student5.inputNewGrades(3)
student5.inputNewGrades(4)

let student6 = new Student("Aishwarya", "Dhakal");
student6.inputNewGrades(1)
student6.inputNewGrades(2)


let stdArray = [student4, student5, student6];

let total1 = 0;
for (let i = 0; i < stdArray.length; i++) {
    total1 = total1 + stdArray[i].computeAverageGrades();
}

console.log(total1 / students.length);

/*
Question no 3
 */
let arr=[10,6,4,8,11,3,1,6]

Array.prototype.sort = function () {
    let arr = this;
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(arr.sort());


/*
Question no 4 with constructor
 */

function SinglyList(){
    this.list=[];
}

SinglyList.prototype.add=function (number){
    this.list.push(number);
}

SinglyList.prototype.remove=function (number){
    let test=[];
    for (let i=0;i<this.list.length;i++){
        if(this.list[i]!=number){
            test.push(this.list[i]);
        }
    }
    this.list=test;
}

let singlyList=new SinglyList();
singlyList.add(1);
singlyList.add(2);
singlyList.add(3);

console.log(singlyList.list);

singlyList.remove(2);

console.log(singlyList.list);

/*
Question no 4 with object literals
 */

let linkedList={
     list:[],
    add: function (number){
        this.list.push(number);
    },
    remove:function (number){
        let test=[];
        for (let i=0;i<this.list.length;i++){
            if(this.list[i]!=number){
                test.push(this.list[i]);
            }
        }
        this.list=test;
    }
}

let linkedListObj=Object.create(linkedList);
linkedListObj.list=[];
linkedListObj.add(1);
linkedListObj.add(2);
linkedListObj.add(3);

console.log(linkedListObj.list)
linkedListObj.remove(2);
console.log(linkedListObj.list)
