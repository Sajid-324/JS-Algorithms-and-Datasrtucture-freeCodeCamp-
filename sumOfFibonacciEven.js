// function sumFibs(num) {
//     if(num === 1){
//          num );
//     }else{
//     /*
//      *  all fibonacci numbers will be here in th x array 
//      */
//     var x = [1,1];
//     for(var i=2; i<num ; i++){
//         var y = x[xlength-1] + x[xlength-2];
//         xpush(y);
//     }
// x);
// /*
// * All odd fibonacci numbers will be here in newX array 
// */
// var newX = [];
// for(var j=0; j<xlength; j++){
//     if( (x[j]%2) != 0){
//         newXpush(x[j]);
//     }
// }
// newX);
// }
//     newXreduce((a, b) => a + b, 0));
//   }


function sumFibs(num) {
  let prev = 0;
  let curntNumber = 1;
  let result = 0;
  while (curntNumber <= num) {
    if (curntNumber % 2 !== 0) {
      result += curntNumber;
    }
    curntNumber += prev;
    prev = curntNumber - prev;
  }

  return result;
}
sumFibs(20);