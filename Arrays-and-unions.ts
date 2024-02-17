var heros = []; //This will cnsider as never type
var heros01: [] = []; //This will consider as never empty array

// creating Array

var heros02: string[] = [];

heros02.push("Bat"); //only strings are allowed

//The above array type can be also declared as

var heros03: Array<number> = [];
heros03.unshift(56); //will allow only number

//using type in array
type Heros = {
  name: string;
  age: number;
  active?: boolean;
};

var heros04: Heros[] = [];

heros04.push({ name: "", age: 25 });
console.log(heros04);

//Having arra of arrays

const MLarray: number[][] = [
  [4, 5, 45, 1],
  [8, 6, 8, 2],
];
console.log(MLarray);

//--------------------------------------------------------------------------------

//Unions
//Unions is a combination of types like string , number etc

let score = 33; //If you are not sure this is always going to be number may be somecases it may change to string or boolean we can use boolean

//using Boolean;
let scores: number | string | boolean = false; //canbe string or number or boolean

//creating types and using as union

type User = {
  name: string;
  value: number;
};

type Admin = {
  name: string;
  value: string;
};

let p1: User | Admin = { name: "MNT", value: "123" }; //value can be both number and string
//this is because type User and Admin are both provided as type for p1

//Unions for functions

function getDBID(id: number | string) {
  console.log(`DB id is :${id}`);
}

getDBID(3);
getDBID("3");

//For working with union types in function we use conditional operation

function getId(id: number | string) {
  if (typeof id === "string") {
    id.toUpperCase();
    console.log(id);
  } else if (typeof id === "number") console.log(id + 2);
}

getId(2);
getId("2"); //Both operation is valid

// unions in arrays

const data: number[] | string[] = []; //This is not a valid one
//We are saying this can be either a number array only or string array only not combination of both

// Corretct syntax is

let data2: (number | string)[] = [2, 5, "fdgskj"]; //this is a valid one
//this array can get both number and array

//limiting value

let seats: "aisle" | "middle" | "window"; //Allocation any value apart from this three will throw error
seats = "aisle";

export {};
