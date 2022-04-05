/*
Question 1: Fix using wrapper, bind, call, apply.
 */

//using bind
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == 'rockstar') ok();
    else fail();

}

let user = {
    name: 'john',
    loginOk() {
        alert(`${this.name} logged in`)
    },
    loginFail() {
        alert(`${this.name} failed to log in`)
    },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//using call and apply

function askPassword1(ok, fail) {
    let password = prompt("Password?", '');
    if (password == 'rockstar') ok.apply(ok);
    else fail.call(fail);

}

let user1 = {
    name: 'john',
    loginOk1() {
        alert(`${this.name} logged in`)
    },
    loginFail1() {
        alert(`${this.name} failed to log in`)
    },
};

askPassword1(user1.loginOk1, user1.loginFail1);


/*
Question 2: Fix the code below using bind
 */

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        console.log(this)
        this.students.forEach((student) => {
            console.log(this.title + ": " + student);
        });
    }
};
group.showList();
