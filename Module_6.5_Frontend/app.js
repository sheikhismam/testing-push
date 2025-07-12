// Problem - 1
var  marks = 80;

if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
}else if (marks >= 0 && marks < 40) {
    console.log ("Failed");
}else if (marks >= 40 && marks < 60) {
    console.log("D grade");
}else if (marks >= 60 && marks < 70) {
    console.log("C");
}else if (marks >= 70 && marks < 80) {
    console.log("B");
}else if (marks >= 80 && marks <= 100){
    console.log("Perfect grade! You got an A!")
}



// problem - 2
num = 10;
if (num %2 == 0)
    console.log("You entered an even number!");
else
    console.log("It's an odd number");



// problem - 3
const array = [3,4,8,10,9,15,14,12,13,1,20,18,5,17,19,6,7,11,2,16];
array.sort((a,b) => a - b);
console.log(array);



// problem - 4
let num = 2100;
if (num % 4 == 0) {
    if (num % 100 == 0) {
        if (num % 400 == 0) {
            console.log('Leap year');
        }
        else {
            console.log("Not leap year");
        }
    }
    else {
        console.log('Leap year');
    }
}
else {
    console.log("Not leap year");
}
    



// problem - 5: 
console.log("List of numbers that are divisible by both 3 and 5:");
for (let i = 1; i<=50; i++) {
    if (i % 3 == 0 && i%5 == 0)
        console.log(i);
}




// problem - 6:
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let longestLength = 0;
let longestName = "";
for (let i = 0; i<friends.length; i++) {
    const element = friends[i];
    if (element.length > longestLength) {
        longestLength = element.length;
        longestName = element;
    }
}
console.log(longestName);




// problem - 7 (the numbers that have not been repeated)
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let largestNum = numbers[0];
for (let i = 0; i< numbers.length; i++){
    if (numbers[i] > largestNum) {
        largestNum = numbers[i];
    }
}
let freq_array = new Array(largestNum + 1).fill(0);
for (let i =0; i< numbers.length; i++) {
    freq_array[numbers[i]] += 1;
}
for (let i =0; i<freq_array.length; i++) {
    if (freq_array[i] == 1){
        console.log(i);
    }
}




// problem - 7 (unique numbers)
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let largestNum = numbers[0];
for (let i = 0; i< numbers.length; i++){
    if (numbers[i] > largestNum) {
        largestNum = numbers[i];
    }
}
let freq_array = new Array(largestNum + 1).fill(0);
for (let i =0; i< numbers.length; i++) {
    freq_array[numbers[i]] += 1;
}
for (let i =0; i<freq_array.length; i++) {
    if (freq_array[i] >= 1){
        console.log(i);
    }
}



// problem - 7 (unique numbers using built-in functions)
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const uniqueNum = [...new Set(numbers)];
console.log(uniqueNum);



// problem - 8
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let biggestNum = numbers[0];
for ( let i = 0; i<numbers.length; i++) {
    if ( numbers[i] > biggestNum) {
        biggestNum = numbers[i];
    }
}
console.log(biggestNum);




// problem - last one
function monthlySavings(allPayments, livingCost) {
    if (allPayments.length < 1 || typeof livingCost != `number`)
        return 'invalid input'
    let monthlyIncome=0, payment, savings;
    for (let i = 0; i < allPayments.length; i++) {
        payment = allPayments[i];
        if (payment >= 3000) {
            afterTaxPayment = payment - (payment * 0.20);
            monthlyIncome += afterTaxPayment;
        } else {
            monthlyIncome += payment;
        }
    }
    savings = monthlyIncome - livingCost;
    if (savings < 0)
        return "earn more";
    return savings;
}

const result = monthlySavings([900, 2700, 3400], 10000);
console.log(result);