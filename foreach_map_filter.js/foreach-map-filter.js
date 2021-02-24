

let Values = [1, 2, 3];
function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(val) {
        newArr.push(val * 2);
    });
    return newArr;
}


let Values = [1,2,3,4,5,6,7,8,9,10];
function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(val) {
        if (val % 2 === 0) {
            newArr.push(val);
    
        }
     });   
    return newArr;
}


let words = ['colt', 'matt', 'tim', 'test'];
function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
}


let person = 'addKeyAndValue'; [
    { name: "Elie", title: "instructor" },
    { name: "Tim", title: "instructor" },
    { name: "Matt", title: "instructor" },
    { name: "Colt", title: "instructor" }
  ];
function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}


let keyVowels = ['elie', 'tim', 'matt', 'hmmm', 'i am awesome and so are you'];
function vowelCount(str){
   let splitArray = str.split("");
   let obj = {};
   const vowels = "aeiou";

   splitArr.forEach(function(letter){
    let lowerCasedLetter = letter.toLowerCase();
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if(obj[lowerCasedLetter]) {

        } else {
            obj[lowerCasedLetter] = 1;
        }
    }
   });
   return obj;
}


let values = [1,2,3];
function doubleValuesWithMap(arr) {
    return arr.map(function(val){
        return val * 2;
    });
}


let index = [1,2,3,-2,-3];
function valTimesIndex(arr){
    return arr.map(function(val, idx){
        return val * idx;
    });
}


let keyNames = ['Elie', 'Tim', 'Matt', 'Colt'];
function extractKey(arr, key){
    return arr.map(function(val){
        return val[key];
        
    });
    
    }



let fullNames = [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia" },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele" }
  ];
function extractFullName(arr){ 
    return arr.map(function(val){
    return val.first + " " + val.last;
        });
    
}


 let fullName = [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia" },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele" }
  ];
function filterByValue(arr, key) {
    return arr.filter(function(val){
        return val[key] !== undefined;
    });
}


let num = [1,2,3,4,5];
function find(arr, searchValue) {
    return arr.filter(function(val){
        return val === searchValue;
    })[0];
}



let fullName = [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia" },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele" }
  ];
function findInObj(arr, key, searchValue) {
    return arr.filter(function(val){
        return val[key] === searchValue;
    })[0];
}

let words = ['Elie', 'TIM', 'ZZZZ'];
function removeVowels(str) {
    const vowels = "aeiou"
    return str
    .toLowerCase()
    .split("")
    .filter(function(val){
        return vowels.indexOf(val) === -1;
    })
    .join("");
}

let num = [1,2, 3,4,5,6,7,8,9,10];
function doubleOddNumbers(arr) {
    return arr
    .filter(function(val) {
        return val % 2 !== 0;
    })
    .map(function(val){
        return val * 2;
    });
}
