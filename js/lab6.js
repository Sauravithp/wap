/*
Write a function printNumbers(from,to) that outputs a number every second,starting from and ending with to
 */

function printNumbers(from, to) {
    var current = from;
    let timerId = setInterval(function () {
        console.log("test")
        if (current <= to) {
            console.log(current);
            current++;
        }else{
            clearInterval(timerId)
        }
    }, 1000)


}

printNumbers(1, 3);

/*
question no 1
 */
function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 2) {
        let shooter = function () {
            alert(i)
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}

let army = makeArmy();
let fn = army[0]
fn();

