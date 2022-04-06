const students = [
    {name: 'Quincy', grade: 96, courses: ['cs301', 'cs303']},
    {name: 'Jason', grade: 84, courses: ['cs201', 'cs203']},
    {name: 'Alexis', grade: 100, courses: ['cs105', 'cs211']},
    {name: 'Sam', grade: 65, courses: ['cs445', 'cs303']},
    {name: 'Katie', grade: 90, courses: ['cs303', 'cs477']}
];


let s = students.filter((std) =>
    (std.courses.includes('cs303'))
)

console.log(s);

let s1 = s.reduce((acc, cur) =>
    acc + cur.grade, 0)
console.log(s1 / s.length);

let s3 = students.map((std) => {
    if (std.courses.includes('cs303')) {
        return std;
    }
})

console.log(s3);







