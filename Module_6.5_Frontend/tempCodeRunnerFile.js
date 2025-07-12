// problem - 7 (unique numbers using built-in functions)
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const uniqueNum = [...new Set(numbers)];
console.log(uniqueNum);