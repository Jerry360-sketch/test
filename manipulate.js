let numbers = [1,2,3,7,4,5,6];
let index = numbers.indexOf(7)
if (index !== -1) {
    numbers.splice(index, 1);
    numbers.push(7);
}
console.log(index)
console.log(numbers)