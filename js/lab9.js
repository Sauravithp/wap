/*
Question 1: Use class syntax to create LinkedList. Methods below: 1) add(value)
2) remove(value)
3) print()
You’re allowed to add other methods if it’s necessary.
After completion, we can call methods as below and see the results in console if call print().
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,2,3} linkedlist.remove(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,3}
 */

class LinkedList {
    constructor(array){
        if(array){
            array.forEach(arr => this.add(arr));
        }
    }
    addItem(item) {
        if (this.value === undefined) {
            this.value = item;
            this.next = null;
        } else {
            let current = this;
            while (current.next) {
                current = current.next;
            }
            current.next = { value: item, next: null };
        }
    }
    removeItem(item) {
        let current = this;
        let prev = null;
        while (current) {
            if (current.value === item) {
                if (prev == null) {
                    this.value = current.next.value;
                    this.next = current.next.next;
                } else {
                    prev.next = current.next;
                }
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }
    printHelper(arrayList, result) {
        if (arrayList.next == null) {
            result += arrayList.value;
            return result;
        }
        result += arrayList.value + ',';
        return this.printHelper(arrayList.next, result);
    }
    print() {
        let finalResult = 'LinkedList{';
        finalResult = this.printHelper(this, finalResult);
        finalResult += '}';
        console.log(finalResult);
    }
}
let linkedListObj = new LinkedList();
linkedListObj.addItem(1);
linkedListObj.addItem(2);
linkedListObj.addItem(3);
linkedListObj.addItem(3);
linkedListObj.addItem(4);
linkedListObj.addItem(5);

linkedListObj.print();
linkedListObj.removeItem(1);
linkedListObj.removeItem(0);

linkedListObj.print();

/*
Question 2:
This is a quiz system which allows students to take quiz, get each student's quiz score and compute average score of students.
You need to use constructor functions or class syntax to implement Student, Question and Quiz constructor function/class Student:

properties:
studentId: a unique student id
answers: holds an array that records the student's answers for the questions.
method: addAnswer(question) - add student's question(id, answer) to answers array.
constructor function/class Question:

properties:
qid: unique quesiton id
answer: hold quiz correct answer or student's answer
method: checkAnswer(answer) - used to check if student's answer is correct
constructor function/class Quiz: properties:

questions: It's a Map which holds question id and correct answers.
The key is question id, the value is the correct answer for this question
students: an array holds all students methods:
• scoreStudent(sid), computes the quiz score for this student
• getAverageScore(), computes the average score over all students

After you complete the Question, Student and Quiz constructor functions, we may use the system as below:
Your system should return the correct result for getAverageScore() and scoreStudent(sid) as the expected result.

 */

function Question(qid, answer) {
    this.qid = qid;
    this.answer = answer;
}

Question.prototype.checkAnswer = function(answer) {
    return this.answer === answer;
}

function Student(studentId) {
    this.studentId = studentId;
    this.answers = [];
}
Student.prototype.addAnswer = function(question) {
    this.answers.push(question);
}

function QuizWithConstructorFunction(questions, students) {
    this.questions = new Map();
    questions.forEach(q => this.questions.set(q.qid, q.answer));
    this.students = students;
}
QuizWithConstructorFunction.prototype.scoreStudentBySid = function(studentId) {
    const student = this.students.filter(stu => stu.studentId === studentId)[0];
    return student.answers.reduce((sum, currentQuestion) => {
        if (currentQuestion.checkAnswer(this.questions.get(currentQuestion.qid))) {
            sum = sum + 1;
        }
        return sum;
    }, 0);
}
QuizWithConstructorFunction.prototype.getAverageScore = function() {
    return this.students.reduce((acc, student, index, array) => {
        return acc + this.scoreStudentBySid(student.studentId) / array.length
    }, 0);
}
const questions = [
    new Question(1, 'b'),
    new Question(2, 'a'),
    new Question(3, 'b ')
];

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];

const quiz = new QuizWithConstructorFunction(questions, students);

let scoreForStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreForStudent10);

let scoreForStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreForStudent11);

let average = quiz.getAverageScore();
console.log(average);