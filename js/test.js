// // const students = [
// //     {name: 'Quincy', grade: 96, courses: ['cs301', 'cs303']},
// //     {name: 'Jason', grade: 84, courses: ['cs201', 'cs203']},
// //     {name: 'Alexis', grade: 100, courses: ['cs105', 'cs211']},
// //     {name: 'Sam', grade: 65, courses: ['cs445', 'cs303']},
// //     {name: 'Katie', grade: 90, courses: ['cs303', 'cs477']}
// // ];
// // let arr=[1,2,5,4,3];
// // let arr1=[7,9,8,6,10];
// //
// // console.log(arr.includes(33));
// // let s = students.filter((std) =>
// //     (std.courses.includes('cs303'))
// // )
// //
// //
// // console.log(s);
// //
// //
// // let s1 = s.reduce(function(acc, cur){
// //     acc + cur.grade}, 0)
// // console.log(s1 / s.length);
// //
// // let s3 = students.map((std) => {
// //     if (std.courses.includes('cs303')) {
// //         return std;
// //     }else {
// //         return "-";
// //     }
// // })
// //
// // console.log(s3);
// //
// //
// //
// //
// //
// //
// //
// let animal= {
//     run: true,
//     test: function()
//     {
//        console.log(this.run);
//     }
// }
//
// let rabbit=Object.create(animal);
// // console.log(rabbit);
// // console.log(rabbit.run);
// // rabbit.run=false;
// // rabbit.test();
//
// // console.log(rabbit.test().call(rabbit))
// rabbit.test.call(rabbit);
//
//
// console.log(rabbit.test.bind(rabbit))
// const user = {
//     salute: "",
//     greet: function() {
//         this.salute = "Hello";
//         console.log(this.salute); //Hello
//         const setFrench = function(newSalute) { //inner function
//             this.salute = newSalute; };
//         setFrench.call(this,"Bonjour");
//         console.log(this.salute); //Bonjour??
//     }
// };
// user.greet();

let test=function (){
    console.log(this);
}

test.call("Sauravi");