
/*// Only change code below this line

function urlSlug(title) {

let newArray = title.trim().slice().split(/\s+/).join("-").toLowerCase();
console.log(newArray);

}
urlSlug(" Winter Is  Coming")
// Only change code above this line
*/

function checkPositive(arr) {
  // Only change code below this line
 let x = arr.every(function(num){
    return (num>0);
  });
 console.log(x);
  // Only change code above this line
}
checkPositive([1, 2, 3, 4, 5]);
