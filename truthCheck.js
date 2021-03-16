/**Simplest code from FCC
 * function truthCheck(collection, pre) {
  // Is everyone being true?
  return collectionevery(obj => obj[pre]);
}
 */


// function truthCheck(collection, pre) {
//   var x = [];
//   for (var i = 0; i < collectionlength; i++) {
//     if (collection[i]hasOwnProperty(pre)) {
//       xpush(collection[i]);
//       if (xlength == collectionlength) { //objects with the given pre property only 
//         var truthCounter = 0;
//         for (let j = 0; j < xlength; j++) {
//           if (!(Boolean(x[j][pre]))) {
//             return false
//           } else {
//             truthCounter += 1;
//           }
//         }
//         if (truthCounter == xlength) {
//           return true
//         } else {
//           return false
//         }
//       }
//     } else {
//       return false
//     }
//   }
// }
function truthCheck(collection, pre) {
  // Is everyone being true?
}
truthCheck([
  { "user": "Tinky-Winky", "sex": "male" },
  { "user": "Dipsy", "sex": "male" },
  { "user": "Laa-Laa", "sex": "female" },
  { "user": "Po", "sex": "female" }],
  "sex"); //true

truthCheck([
  { "user": "Tinky-Winky", "sex": "male" },
  { "user": "Dipsy" },
  { "user": "Laa-Laa", "sex": "female" },
  { "user": "Po", "sex": "female" }],
  "sex"); //false

truthCheck([
  { "user": "Tinky-Winky", "sex": "male", "age": 0 }, //set1
  { "user": "Dipsy", "sex": "male", "age": 3 },       //set2
  { "user": "Laa-Laa", "sex": "female", "age": 5 },   //set3
  { "user": "Po", "sex": "female", "age": 4 }],       //set4
  "age"); //false

truthCheck([
  { "name": "Pete", "onBoat": true },
  { "name": "Repeat", "onBoat": true },
  { "name": "FastForward", "onBoat": null }],
  "onBoat");  //false 

truthCheck([
  { "name": "Pete", "onBoat": true },
  { "name": "Repeat", "onBoat": true, "alias": "Repete" },
  { "name": "FastForward", "onBoat": true }],
  "onBoat");  //true

truthCheck([{ "single": "yes" }], "single");    //true

truthCheck([{ "single": "" }, { "single": "double" }], "single");   //false

truthCheck([{ "single": "double" }, { "single": undefined }], "single");    //false

truthCheck([{ "single": "double" }, { "single": NaN }], "single")   //false