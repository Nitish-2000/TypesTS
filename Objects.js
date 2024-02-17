"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Nitish",
    age: 33,
    isActive: true
}; //creating object is same as JS
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    //Perform your operation
} //Passing Object into the function
createUser({ name: "Nitish", isPaid: true }); //calling function by passing object
//Example for Function returning Object
function course() {
    return {};
}
function course1() {
    return { name: "Talkies", price: 50000 }; //It returns an object with name in string type and price in number
}
course(); // caling functions
course1();
//Example
function userCreation(user) {
    //Here parameter we going to pass is user and its type is predefined in "User"
}
//calling Function
userCreation({ name: "MNT", email: "T@gmail.com", isActive: false });
var myPerson = {
    _id: "123456",
    name: "MNT",
    email: "M@mm.com",
    mobile: 1234567890,
    isActive: true
};
myPerson.mobile = 9876543210; //Ths value can be change 
