// // /* A for loop that will print out the numbers 1-10. */

// /* This is a for loop that will print out the numbers 1-10. */
for (let num = 1; num <= 10; num++) {
    console.log(num)
}

for (let numbers = 0; numbers <= 100; numbers+=2) {
    console.log(numbers)
}

let sumArr = [1,2,3,4,5,6,7,8,9,10];
let sumArry = [1,1,1,1,5,6,7,8,9,10];

// // /**
// //  * The function takes an array of numbers and returns the sum of all the numbers in the array.
// //  * @param sumArr - an array of numbers
// //  */
function sum (sumArr) {
    let total = 0;
    /* Looping through the array and adding the numbers together. */
    for (let num = 0; num < sumArr.length; num++) {
       /* Adding the number in the array to the total. */
        total += sumArr[num]
        // total = total + sumArr[num]
    }
console.log(total)
}

// // sum(sumArr)
// // /**
// //  * The function takes in a number of steps and prints out a staircase of that many steps.
// //  * @param steps - the number of steps in the staircase
// //  */

function stairs (steps) {
    let stairCase = ' ';
     for (let x = 0; x < steps; x++) {
        stairCase += "#"
        console.log(stairCase)
     }
    //  console.log(stairCase)
}

stairs(4)

let numsList = [1, -2, 3, -4, 5, 6, -7, 8, 9, 10];

//     /* Creating a function that will take in an array of numbers and return an array of only the
//     positive numbers. */
    function num (numsList) {
        let array = [];
        for (let pNum = 0; pNum < numsList.length; pNum++) {
            if (numsList[pNum] > 0) {
                array.push(numsList[pNum])
            }
        }
        console.log(array)
    }

num(numsList)

function number (numsList) {
    return numsList.filter(num => num > 0)
}
let result = number(numsList)
console.log(result)

// // let num = () => {
// //     for
// // }

function rev (numsList) {
    let nArray= [];
    for (let num = numsList.length -1; num >= 0; num-- ) {
        nArray.push(numsList[num])
    }
console.log(nArray)
}

rev(numsList)

let string = "hello world"

let revString = (string) => {
  let nString = "";
    for (let sentence = string.length -1; sentence >= 0; sentence--){
        nString += string[sentence]
    }
    console.log(nString)
};

// revString(string)

// let sumArr = [1,2,3,4,5,6,7,8,9,10]
// let sumArr2 = [11,12,13,14,15,16,17,18,19,20]

function combinedArr (a1,a2) {
    let newNumArr = [] 
   for (let ar = 0; ar < a1.length ; ar++){
    newNumArr.push(a1[ar])
    console.log(a1[ar])
   }
   for ( let ary = 0; ary < a2.length; ary++) {
    newNumArr.push(a2[ary])
    console.log(a2[ary])
   }
   console.log(newNumArr)
}

// combinedArr(sumArr,sumArr2)

// // /* Creating a new array called noDupe and then using the forEach method to loop through the sumArry
// // array. If the number is not already in the noDupe array, it will push it into the array. */
// let noDupe = [] 
// sumArry.forEach(nums => {
//     if(!noDupe.includes(nums)){
//         noDupe.push(nums)
//     }
// })

// console.log(noDupe)


// // /* Filtering out the duplicates from the array. */
// // let noDupe = sumArry.filter((value,index) => {
// //     return sumArry.indexOf(value) === index
// // })

// console.log(noDupe);

// // /* Creating a new set of the array and then spreading it into a new array. */
// // let noDupe = [...new Set(sumArry)]
// // console.log(noDupe)


// let Henry = 'henryaaeooooppppprrrrrr'

let countVowels = (Henry) => {
    let vowel = 0
    for(let index = 0; index < Henry.length; index++){
        if(Henry[index] == "a" || Henry[index] == "e" ||Henry[index] == "i" ||Henry[index] == "o" ||Henry[index] == "u"){
            vowel++
        }
    }
    console.log(vowel)
}

// countVowels(Henry)

// let fizzAr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// function fizzBuzz (fizzAr) {
//     if (fizzAr += 2)
//     return ('fizz')
//     console.log(fizzAr)
// }

// function fizzBuzz () {
//     for (let numbers = 0; numbers <= 100; numbers++) {
//             if (numbers +=3) 
//             return "fizz"
//         console.log(numbers)
//     }
    
// }

// function fizzBuzz () {
//     for (let numbers = 0; numbers <= 100; numbers++) {
//             if (numbers += 3) console.log("fizz");
//             else if (numbers += 5) console.log("buzz");
//             else if (numbers += 15) console.log("fizzbuzz");
//             else console.log(numbers);    
//     }
    
// }

// function fizzBuzz () {
//     for (let numbers = 0; numbers <= 100; numbers++) {
//     if (numbers % 15 == 0) console.log("fizzbuzz");
//     else if (numbers % 3 == 0) console.log("fizz");
//     else if (numbers % 5 == 0) console.log('buzz')
//     else console.log(numbers)
//     }
// }

// fizzBuzz()

let pal = "racecar"

// function palindrome (pal) {
//     for (let x = 0; x < pal.length/2; x++) {
//         if (pal[x] !== pal[pal.length-1-x]) {
//         return false
//         }
//     }
//     return true
// }


// function palindrome (pal) {
//     pal = pal.toLowerCase().split(' ').join('')
//     //alternatively you can do pal = pal.toLowercase() pal = pal.split('') pal = pal.join('')
//     for (let x = 0; x < pal.length/2; x++) {
//         if (pal[x] !== pal[pal.length-1-x]) {
//         return false
//         }
//     }
//     return true
// }

/**
 * It takes a string, converts it to lowercase, splits it into an array, reverses the array, joins the
 * array back into a string, and then compares the original string to the reversed string.
 * 
 * If the strings are the same, it returns true. If they're not, it returns false.
 * @param pal - the string to be checked
 * @returns The function isPalindrome is being returned.
 */
// function isPalindrome (pal) {
//     reversedPal = pal.toLowerCase().split('').reverse().join('')
//     if (reversedPal !== pal) {
//         return false
//     }
//      return true
// }
//will only work if theres no spaces


// let result = isPalindrome(pal)

// console.log(result)


const jsArrayMethods = {
    javascript_array_methods: {
      level: [
        {
          one: [
            {
              position: 0,
              question:
                "This method joins arrays and returns an array with the joined arrays",
              answer: "concat",
            },
            {
              position: 1,
              question: "This method checks whether an object is an array",
              answer: "isArray",
            },
            {
              position: 2,
              question:
                "This property sets or returns the number of elements in an array",
              answer: "length",
            },
            {
              position: 3,
              question:
                "This method joins all elements of an array into a string",
              answer: "join",
            },
            {
              position: 4,
              question:
                "This method removes the last element of an array, and returns that element",
              answer: "pop",
            },
            {
              position: 5,
              question:
                "This method adds new elements to the end of an array, and returns the new length",
              answer: "push",
            },
            {
              position: 6,
              question:
                "This method reverses the order of the elements in an array",
              answer: "reverse",
            },
            {
              position: 7,
              question: "This method sorts the elements of an array",
              answer: "sort",
            },
            {
              position: 8,
              question:
                "This method converts an array to a string, and returns the result",
              answer: "toString",
            },
          ],
        },
  
        {
          two: [
            {
              position: 0,
              question:
                "This method checks if every element in an array pass a test",
              answer: "every",
            },
            {
              position: 1,
              question:
                "This method creates a new array with every element in an array that pass a test",
              answer: "filter",
            },
            {
              position: 2,
              question:
                "This method check if an array contains the specified element",
              answer: "includes",
            },
            {
              position: 3,
              question: "This method calls a function for each array element",
              answer: "forEach",
            },
            {
              position: 4,
              question:
                "This method searches the array for an element and returns its position",
              answer: "indexOf",
            },
            {
              position: 5,
              question:
                "This method creates a new array with the result of calling a function for each array element",
              answer: "map",
            },
            {
              position: 6,
              question:
                "This method removes the first element of an array, and returns that element",
              answer: "shift",
            },
            {
              position: 7,
              question:
                "This method selects a part of an array, and returns the new array",
              answer: "slice",
            },
          ],
        },
  
        {
          three: [
            {
              position: 0,
              question: "This method returns the primitive value of an array",
              answer: "valueOf",
            },
            {
              position: 1,
              question:
                "This method adds new elements to the beginning of an array, and returns the new length",
              answer: "unshift",
            },
            {
              position: 2,
              question: "This method adds/removes elements from an array",
              answer: "splice",
            },
            {
              position: 3,
              question:
                "This method checks if any of the elements in an array pass a test",
              answer: "some",
            },
            {
              position: 4,
              question:
                "This method returns the index of the first element in an array that pass a test",
              answer: "findIndex",
            },
            {
              position: 5,
              question:
                "This method returns the value of the first element in an array that pass a test",
              answer: "find",
            },
            {
              position: 6,
              question:
                "This method fills the elements in an array with a static value",
              answer: "fill",
            },
          ],
        },
  
        {
          four: [
            {
              position: 0,
              question:
                "This method reduce the values of an array to a single value (going right-to-left)",
              answer: "reduceRight",
            },
            {
              position: 1,
              question:
                "This method reduce the values of an array to a single value (going left-to-right)",
              answer: "reduce",
            },
            {
              position: 2,
              question: "This method creates an array from an object",
              answer: "from",
            },
            {
              position: 3,
              question:
                "This method copies array elements within the array, to and from specified positions",
              answer: "copyWithin",
            },
            {
              position: 4,
              question:
                "This property returns the function that created the Array object's prototype",
              answer: "constructor",
            },
          ],
        },
        {
          five: [
            {
              position: 0,
              question:
                "This method returns a key/value pair Array Iteration Object",
              answer: "entries",
            },
            {
              position: 1,
              question:
                "This property allows you to add properties and methods to an Array object",
              answer: "prototype",
            },
            {
              position: 2,
              question:
                "This method returns a Array Iteration Object, containing the keys of the original array",
              answer: "keys",
            },
            {
              position: 3,
              question:
                "This method searches the array for an element, starting at the end, and returns its position",
              answer: "lastIndexOf",
            },
          ],
        },
      ],
    },
  };



  jsArrayMethods.javascript_array_methods.level[0].one.forEach(element => {
    let questions = element.question 
    // let answers = element.answer
    console.log(questions)
    }
    )

    jsArrayMethods.javascript_array_methods.level[0].one.map(element => {
    let answers = element.answer
    console.log(answers)
})


let test = 

jsArrayMethods.javascript_array_methods.level[0].one.filter(
    element => {
        let result = element.position < 3
        return result
        // console.log(result)
    }
)
console.log(test)