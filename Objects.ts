let user = {
  name: "Nitish",
  age: 33,
  isActive: true,
}; //creating object is same as JS

function createUser({ name: string, isPaid: boolean }) {
  //Perform your operation
} //Passing Object into the function

createUser({ name: "Nitish", isPaid: true }); //calling function by passing object

//Example for Function returning Object

function course(): {} {
  //Saying return type is Object
  return {};
}

function course1(): { name: string; price: number } {
  //Saying what object return type should be
  return { name: "Talkies", price: 50000 }; //It returns an object with name in string type and price in number
}

course(); // caling functions
course1();

//Alias Type
type User = {
  //Pre determining the type and can be called when ever we want
  name: string;
  email: string;
  isActive: boolean;
}; //type keyword can be also replaced by "interface"

//Example
function userCreation(user: User) {
  //Here parameter we going to pass is user and its type is predefined in "User"
}

//calling Function
userCreation({ name: "MNT", email: "T@gmail.com", isActive: false });

type Person = {
  readonly _id: string; //this value is set to read Only
  name: string;
  email: string;
  mobile: number;
  isActive: boolean;
  cardDetails?: number; //Question Mark means this value is optional. even not passed will not throe error
};

let myPerson: Person = {
  _id: "123456",
  name: "MNT",
  email: "M@mm.com",
  mobile: 1234567890,
  isActive: true,
};

myPerson.mobile = 9876543210; //Ths value can be change
// myPerson._id = "864531" //This will throw eror since _id is set to read only

//Creating Multiple types

type cardNumber = {
    cardNumber:number
}

type cardDate = {
    date:string
}

type cardDetails = cardNumber & cardDate &{ //Merging existing type and forming single type
    ccv:number
}

//In a large scale this type is very helpful






export {};
