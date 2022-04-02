
alert("lab 5");

/**
 * question no 1
 * Create a function using function declaration named sum with one parameter of Array type,
 * the returned result is the sum of all elements which are greater than 20.
 */

function sumData(...more){
    let sum=0;
    for(let i=0;i<=more.length;i++){
        if(more[i]>20){
            sum=sum+ more[i];
        }
    }
    return sum;
}
console.log("Function declaration and use more to add number greater than 20");
console.log(sumData(1,2,10,20,30,40));
let sumArray=[1,2,10,20,30,40];
document.write("******************************************************************************************************")
document.write("<br/>")
document.write("1. Create a function using function declaration named sum with one parameter of Array type, " +
    "the returned result is the sum of all elements which are greater than 20."+ "<br/>");
document.write("<br/>");
document.write(sumArray+ "<br/>");

/* Use filter*/
document.write("<br/>");

document.write("Function declaration and use filter"+"<br/>");
console.log("Function declaration and use filter");
let filterResult=sumArray.filter(function (value){
    return value>20;
})
console.log(filterResult)
console.log(sumData(...filterResult));
document.write(filterResult+"<br/>")
document.write(sumData(...filterResult)+"</br>");
document.write("<br/>")

/* Use map*/

document.write("Function declaration and use map"+"<br/>");
console.log("Function declaration and use map");
let mapResult=sumArray.map(function (currentValue){
    if(currentValue>20){
        return currentValue;
    } else {
        return 0;
    }

})
console.log(mapResult)
console.log(sumData(...mapResult));
document.write(mapResult+"<br/>")
document.write(sumData(...mapResult)+"</br>");
document.write("<br/>")
/*
use reduce
 */
document.write("Function declaration and use reduce"+"<br/>");
console.log("Function declaration and use reduce");
let reduceResult=sumArray.reduce(function(total, currentValue){
    if(currentValue>20){
        return total+currentValue;
    }else {
        return 0;
    }
})
console.log(reduceResult)
document.write(reduceResult+"<br/>")
document.write("<br/>")

/**
 * question no 2Create a function using function expression named getNewArray with one parameter of String Array,
 * return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’.
 */
document.write("******************************************************************************************************")
document.write("<br/>")
document.write("2. Create a function using function expression named getNewArray with one parameter of String Array," +
    " return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’."+
    "<br/>");
document.write("<br/>");
let stringArray=["Sauravi","Sanu","Thapa","Maharishi","Master","usa","ThermoBottle"]
const myRe = new RegExp(".*a.*");

document.write(stringArray+
    "<br/>");
document.write("<br/>")
let result=function (stringList){
    let finalArray=[];
    for (let i=0;i<stringList.length;i++){
        if(stringList[i].length>5 && myRe.exec(stringList[i])){
            finalArray.push(stringList[i]);
        }
    }
    return finalArray;
};

console.log("Function Expression using function expression");
console.log("array with a and length more than 5: "+result(stringArray));
document.write("Function Expression using function expression"+"<br/>")
document.write(result(stringArray)+"<br/>");
document.write("<br/>")

let getNewArrayFilter=stringArray.filter(value=>{
    if(value.length>5 && myRe.exec(value)){
        return value
    }
});

console.log("Function Expression and use filter");
console.log("array with a and length more than 5: "+getNewArrayFilter);
document.write("Function Expression and use filter"+"<br/>")
document.write(getNewArrayFilter+"<br/>");
document.write("<br/>")
let getNewArrayMap=stringArray.map(value=>{
    if(value.length>5 && myRe.exec(value)){
        return value;
    }else{
        return "-";
    }
});

console.log("Function Expression and use map");
console.log("array with a and length more than 5: "+getNewArrayMap);
document.write("Function Expression and use map"+"<br/>")
document.write(getNewArrayMap+"<br/>");
document.write("<br/>")
document.write("******************************************************************************************************")

