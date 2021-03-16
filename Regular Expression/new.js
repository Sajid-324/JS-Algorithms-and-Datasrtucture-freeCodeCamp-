/*let ohStr = "Ohhhhhno";
let ohRegex = /Oh{3,6}\sno/i; // Change this line
let result = ohRegex.test(ohStr);
*/

/*let haStr = "Haz"+"z".repeat(3);
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
console.log(result)*/


// IF YOU WANT WRITE IT DOWN, WRITE FROM HERE


/*//POSITIVE LOOKAHEAD
let quRegex1= /q(?=t)/; //if "t" is not there after q return NULL
let quRegex2= /q(?=u)/;	//if "u" is there after q return [q]
let result1 = "qu".match(quRegex1); // Returns NULL
let result1 = "qu".match(quRegex2); // Returns [q]
console.log(result1)

//NEGATIVE LOOKAHEAD
let qRegex1 = /q(?!t)/;	//if "t" is not there after q return [q]
let qRegex2 = /q(?!u)/;	//if "u" is not there after q return [q]
let result2 = "qu".match(qRegex2); // Returns NULL
let result2 = "qu".match(qRegex1); // Returns [q]
//console.log(result2)
*/

/*
//PASSWORD CHECKER
let password = "asd124";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
let result = checkPass.test(password); // Returns true
*/
/*
let sampleWord = "astron41aut";
let pwRegex = /(^\D)(?=\w{5,})(?=.*\d{2,}.*?$)?=\s/;// Change this line 
let result = pwRegex.test(sampleWord);*/

/*let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
*/
/*
let str = "one two three";
let fixRegex = /(one)\s(two)\s(three)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

*/
let hello = "   Hello, World!  ";
let wsRegex = /(\s+)(Hello, World!)(\s+)/; // Change this line
let result = hello.replace(wsRegex,'$2'); // Change this line

console.log(result);