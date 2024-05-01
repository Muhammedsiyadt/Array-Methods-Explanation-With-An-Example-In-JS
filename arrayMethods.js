
// INBUILT LOOPING METHODS ===================
// MAP , FILTER , REDUCE , SOME , EVERY , FIND , SPREAD , REST , CONCAT , SLICE , SPLICE

const nums = [1,2,3,4,5,6,7,8,9,10]

// (1)  MAP 
// map() is a method of the Array object. It creates a new array
// by calling a function on every element of the original array
// and storing the results in a new array. map() returns the new array,
// and the original array is unchanged.
nums.map((num) => num * 2) 
// Output [2,  4,  6,  8, 10,12, 14, 16, 18, 20]

// (2) FILTER
// The filter() method creates a new array filled with elements
// that pass a test provided by a function. The filter() method
// does not execute the function for empty elements.
nums.filter((num) => num % 2 == 0) 
// Output [ 2, 4, 6, 8, 10 ]

// (3) REDUCE
// JavaScript reduce() is a higher order function used in data manipulation
// that reduces an array to a single value. It takes two parameters: an accumulator
// and the current element of an array.
nums.reduce((num,total) => num + total)  
// Output 55

// (4) SOME
// some() JavaScript Method. The some() method is an Array. propotype (built-in) method
// which takes in a callback function and will test that function on each iteration 
// against the current item
nums.some((item) => item > 3) // Output true

// (5) EVERY 
/// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
nums.every((item) => item <= 10) 
// Output true

// (6) FIND
// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
nums.find((item) => item > 3) 
// Output 4
// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// SPRED AND REST Operators

const nums1 = [1,2,3,4,5]
const nums2 = [6,7,8,9,10]

// (7) Spread Operator
// The Spread Operator is used to 'spread' an iterable into its elements
const fullNums = [...nums1,...nums2] 
// console.log(fullNums); 
// Output [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// (7) Rest Operator
// Rest Operator 'collects' multiple elements into an array
function rest(...arr) {
    return arr
}
// console.log(rest(nums1,nums2)) 
// Output [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ] ]


// OTHER ARRAY METHODS

// Concat 
// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
nums1.concat(nums2) 
// Output [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Slice
// The slice() method returns selected elements in an array, as a new array.
//  The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.
nums1.slice(1,3) 
// Output [ 2, 3 ]

// Splice
// splice() is a JavaScript Array method that is used to remove, replace or insert items starting at a chosen index.
//  It is also an effective tool for adding items to the end of an array.
const str = ['orange' , 'banana' , 'apple']
str.splice(1,2)
 // Output [ 2, 3, 4 ]