function addNum(num) {
  return num + 5;
}
//It will consider its type as "any" which is not good
addNum(10);

//
function add(num: number) {
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

function higher(val: string) {
  return val.toUpperCase();
}
//higher(5) Now when we pass number as input it will throw error

higher("Talkies");

//Having More parameters in function
function user(name: string, age: number, location: string) {
  return name + ", " + age + ", " + location;
}

user("Nitish", 23, "KPLYM");

//Using arrow function:

let arrow = (route: string, busNum: number, time: string) => {
  return `The Bus no ${busNum} going through ${route} wil arrive at ${time}`;
};

arrow("Chennai", 56, "11.45 PM");

//Time when we are not passing all values ts will throw error to over come this
let arrow1 = (route: string, busNum: number, time: string = "") => {
  return `The Bus no ${busNum} going through ${route} `;
};

arrow1("Chennai", 56, "dsjhf");

//handling return from function

function value(): string | number {
  //saying return type is Number
  return 23;
}

// let add2:number = 5+ value()

const gethello = (val: number): number => {
  return 56;
};

const heros = ["BatMan", "SuperMan", "Wolverine", "DeadPool"];
heros.map((hero) => {
  return `My favorite hero is ${hero} `;
}); //TS automatically finds it s string

const heros1 = [55, 3, 56, 5];
heros1.map((hero): string => {
  // If we  return 2 TS will throw error saying cant return number insted of string
  return `My ID is ${hero} `;
}); //It finds out the type coming

function consoleError(errorMsg: string): void {
  console.log(errorMsg);
} //saying that this function is not going to return any thing But just Void
//it is helpful when we want to console the error message for debug

function consoleHandleError(errorMsg: string): void {
  console.log(errorMsg);
}

//Example 2 case 2

//Handling more than one type

// Figure it out

function getValue(num: number) {
  if (num > 5) {
    return true;
  } else {
    return "Small";
  }
}

export {};
