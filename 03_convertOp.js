let score = "33"
console.log(typeof score);
console.log(typeof (score));       //will originaly show a String as datatype

let ChangeToNum = Number(score)    //Changes datattype of string to an integer value
console.log(typeof ChangeToNum);   //will show a Number as the datatype
console.log("#=================================#")
//=====================================================================================//
let score2 = "33abc"
console.log(typeof score2);
let ChangeAgain = Number(score2)
console.log(typeof ChangeAgain);
console.log(ChangeAgain);          //will give output as NaN
console.log("#=================================#")
//=====================================================================================//
let score3 = null
console.log(typeof score3);
let Change3 = Number(score3)
console.log(typeof Change3)
console.log(Change3);             //will show 0
console.log("#=================================#")
//=====================================================================================//
let score4 = undefined
console.log(typeof score4);
let Change4 = Number(score4)
console.log(typeof Change4);
console.log(Change4);
console.log("#=================================#")
//=====================================================================================//
/* 
similarly for a boolean value(TRUE) the typeof == Boolean
                           and the console.log(change5) will give output as 1
and for boolean value(FALSE) the typeof == Boolean
                           and the console.log(chnage5) will give ouput as 0
*/
//=====================================================================================//
/*
if score5 is a string (say "Abhi")
then typeof will be a string 
and the console.log(typeof Change6) = number
but the console.log(Change6) = NaN
*/
//====================================================================================//
/*
"33" ==> 33
"33abc" ==> NaN(Not a Number)
true ==> 1 ; false ==> 0 
*/
//===================================================================================//
let isLoggedIn = "w"
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof boolIsLoggedIn);
console.log(boolIsLoggedIn);
console.log("#=================================#")
/*
1 ==> true ; 0 ==> false
"" ==> false
"W" ==> true
*/
let someNumber = 22
let convStr = String(someNumber)
console.log(convStr);
console.log(typeof convStr);


