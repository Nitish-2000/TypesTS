"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNum(num) {
    return num + 5;
}
//It will consider its type as "any" which is not good
addNum(10);
// 
function add(num) {
    return num + 10;
}
console.log(add(15));
//Function with Strings
function getUpper(val) {
    return val.toUpperCase();
}
getUpper(5);
//since we have not declared the type TS consider as any 
//and it even acceps 2 and it wi; not throw any error for converting a number toUpperCase
//The alternate is:
function higher(val) {
    return val.toUpperCase();
}
//higher(5) Now when we pass number as input it will throw error
higher("Talkies");
//Having More parameters in function
function user(name, age, location) {
    return name + ", " + age + ", " + location;
}
user("Nitish", 23, "KPLYM");
//Using arrow function:
var arrow = function (route, busNum, time) {
    return "The Bus no ".concat(busNum, " going through ").concat(route, " wil arrive at ").concat(time);
};
arrow("Chennai", 56, "11.45 PM");
//Time when we are not passing all values ts will throw error to over come this
var arrow1 = function (route, busNum, time) {
    if (time === void 0) { time = ""; }
    return "The Bus no ".concat(busNum, " going through ").concat(route, " ");
};
arrow1("Chennai", 56, "dsjhf");
//handling return from function
function value() {
    return 23;
}
// let add2:number = 5+ value()
var gethello = function (val) {
    return 56;
};
var heros = ["BatMan", "SuperMan", "Wolverine", "DeadPool"];
heros.map(function (hero) {
    return "My favorite hero is ".concat(hero, " ");
}); //TS automatically finds it s string 
var heros1 = [55, 3, 56, 5];
heros1.map(function (hero) {
    return "My ID is ".concat(hero, " ");
}); //It finds out the type coming 
function consoleError(errorMsg) {
    console.log(errorMsg);
} //saying that this function is not going to return any thing But just Void
//it is helpful when we want to console the error message for debug
function consoleHandleError(errorMsg) {
    console.log(errorMsg);
}
//Example 2 case 2
//Handling more than one type  
// Figure it out
function getValue(num) {
    if (num > 5) {
        return true;
    }
    else {
        return "Small";
    }
}
