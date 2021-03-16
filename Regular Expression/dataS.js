
/*function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) 
  	 if (arr[i].indexOf(elem) == -1) {
  	   newArr.push(arr[i]);
	}
  
  // Only change code above this line
  return newArr;
}
console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));
*/

/*let nestedArray = [ // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
    [
      ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
    ],
      [
        [
          ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
        ],
        [
          [
            ['deepest-est?'] // an array nested 5 levels deep
          ]
        ]
      ]
];
nestedArray[2][1][0][0][0] = "Am I instead of deepest-est? ";
console.log(nestedArray[2][1][0][0][0]);*/

/*let myNestedArray = [
  // Only change code below this line
  ["2nd level"],
  [["2nd level 10"],["2nd level 11 deep"]],
  [[["2nd level 200"],["3rd level 201 deeper"]],[[["5th level deepest"]]]]
  // Only change code above this line
];

      //The level of a array can be found by how many digits we need to see the index of an array
      //Ex: indexOf(5th level deepest) is 21000
      //console.log(myNestedArray[2][1][0][0][0])
*/

/*const tekkenCharacter = {
  player: 'Hwoarang',
  'fighting style': 'Tae Kwon Doe',
  human: true
};
tekkenCharacter.character = "Lazy";
console.log(tekkenCharacter['fighting style']);
*/

/*
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};

nestedObject.data.onlineStatus.busy=10;
console.log(nestedObject)*/

/*
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
}; 

function isEveryoneHere(obj) {
  // Only change code below this line
  let x = ['Alan','Jeff','Sarah','Ryan'];
  let y = [];
  for (var i = 0; i < x.length; i++) {
   if(x[i] in obj){
     y.push(i);
   }
   else{
     y.push(i);
   }
  }
  if(Object.keys(obj).length==y.length){
    return true;
  }else{
    return false;
  }
  // Only change code above this line
}

console.log(isEveryoneHere(users));*/
/*
let users={
      Alan: {
        online: true
        },
      Jeff: {
        online: true
      },
      Sarah: {
        online: false
      }
    }

function countOnline(usersObj) {
  // Only change code below this line
  //METHHOD 1
  let x = 0;
  for(let usr in usersObj){
    if((usersObj[usr].online])==true){
      x += 1;
    }
  }
  return x;

  //METHHOD 2
  let x = [];
  let y = 0;
  for(let user in usersObj){
    x.push(user);
  }
  for(let i = 0; i<Object.keys(usersObj).length;i++){
    if (usersObj[x[i]]['online']==true) {
      y += 1;
    }
  }
  return y;
  // Only change code above this line

}
console.log(countOnline(users));
*/

/*let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
let x = (Object.keys(obj));
return x;
  // Only change code above this line
}

console.log(getArrayOfUsers(users));
*/

/*function reverseString(str) {
  let x = str.split('');
  let y = [];
  for(let i=x.length-1;i>=0;i--){
    y.push(x[i]);
  }
  return y.join('');
}
*/

/*reverseString = (str) =>{





  for (var reversedStr = "",i = str.length-1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}*/
/*reverseString = (str) =>{
 return str.split("").reverse().join("");
  }
console.log(reverseString("hello"));*/

function factorialize(num) {
  let x = 0;
  let y = 1;
  for(let i=1;i<num;i++){
    x = i * (i+1);
    y *= x;
  }
  console.log(x);
  console.log(y);
}

console.log(factorialize(5));


//1*2*3*4*5 = 120
