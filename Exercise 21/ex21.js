const numbers = [1, 2, 3, 4, 5];
const multipledNumbers = numbers.reduce((total,num) => total  * num, 1); 

console.log(multipledNumbers);
