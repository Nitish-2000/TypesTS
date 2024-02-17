//Tuples are only available in TS and not in JS
//Tuple is all about restricting you

let user:(string|number)[];
user=["nitish",23]  //There is no order here ie number can be come first . Any order it can be written

//to main the order in the values we use tuples


let user1:[string,number,boolean] //the values shoud in in the given order

// user1 = [23,false,"d"] this will throw error

user1 = ["MNT",23,false]


//We can alse define a type
type user = [number,string]

const newUser = [112,"MNT"]

//But in tuples array methods are working not following protocals
//EG
newUser.push("Hendry") //this takes 3rd value this is not said in tuples . So we cant sure all values are mention in tuples in order some js methods can override it

//Enums 

//this is limiting the choises and avoiding errors

enum seatchoise{
    AISLE,
    MIDDLE,
    WINDOW
}
 let p01seat = seatchoise.MIDDLE; //This avoids mistakes 

 enum seatchoises{
    AISLE = 45, //we are assigning value
    MIDDLE,
    WINDOW
}

let p02 = 45