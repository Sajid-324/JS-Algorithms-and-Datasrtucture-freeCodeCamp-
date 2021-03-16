/*function sumAll(arr) {
  let x = arr.sort(function(a,b){
  	return a-b;
  }).slice();

  let y = 0;	//2
  for (var i = x[0]; i <= x[1]; i++) {
  		y += i;
  }

  console.log(y);
}

sumAll([5,10]);
*/

/*function diffArray(arr1, arr2) {
  var newArr = [];
  function pass(first,second){
  	for (var i = 0; i < second.length; i++) {
  	if(first.indexOf(second[i]) == -1){
  		newArr.push(second[i])
  	}
  	}	
  }
  
  pass(arr1,arr2);
  pass(arr2,arr1);
  console.log(newArr);
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);*/

/*function destroyer(arr,...theArgs) {

	function run(){
		for(let i = 0; i < theArgs.length; i++) {
			for (let j = 0; j < arr.length; j++) {
				if(theArgs[i] == arr[j]){
				arr.splice(j,1)
	}}}}

	for(let i = 0; i < theArgs.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr.indexOf(theArgs[i] > -1)) {
				run();
			}}}
	//most efficient one
			let x = arr.filter(function(el){
				return !theArgs.includes(el)
			})
	console.log(x)
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
*/

function whatIsInAName(collection, source) {
  var arr = [];
  
  collection.map()

   // Only change code above this line
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }],
 { "apple": 1, "bat": 2 });