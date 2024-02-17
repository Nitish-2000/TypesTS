//Tuples are only available in TS and not in JS
//Tuple is all about restricting you
var user;
user = ["nitish", 23]; //There is no order here ie number can be come first . Any order it can be written
//to main the order in the values we use tuples
var user1; //the values shoud in in the given order
// user1 = [23,false,"d"] this will throw error
user1 = ["MNT", 23, false];
var newUser = [112, "MNT"];
//But in tuples array methods are working not following protocals
//EG
newUser.push("Hendry"); //this takes 3rd value this is not said in tuples . So we cant sure all values are mention in tuples in order some js methods can override it
//Enums 
//this is limiting the choises and avoiding errors
var seatchoise;
(function (seatchoise) {
    seatchoise[seatchoise["AISLE"] = 0] = "AISLE";
    seatchoise[seatchoise["MIDDLE"] = 1] = "MIDDLE";
    seatchoise[seatchoise["WINDOW"] = 2] = "WINDOW";
})(seatchoise || (seatchoise = {}));
var p01seat = seatchoise.MIDDLE; //This avoids mistakes 
var seatchoises;
(function (seatchoises) {
    seatchoises[seatchoises["AISLE"] = 45] = "AISLE";
    seatchoises[seatchoises["MIDDLE"] = 46] = "MIDDLE";
    seatchoises[seatchoises["WINDOW"] = 47] = "WINDOW";
})(seatchoises || (seatchoises = {}));
var p02 = 45;
