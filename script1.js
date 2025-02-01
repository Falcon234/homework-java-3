let numbers = [5, 7, 9];
numbers[1] = 10;
console.log("Оновлений масив:", numbers);
let strings = ["яблуко", "банан", "вишня"];
strings.push("груша");
console.log("Масив рядків:", strings);
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log("Сума чисел у масиві:", sumArray(numbers));
let fiveNumbers = [2, 4, 6, 8, 10];
console.log("Масив з 5-ти чисел:");
for (let num of fiveNumbers) {
    console.log(num);
}
let fiveStrings = ["сонце", "місяць", "зірка", "галактика", "всесвіт"];
console.log("Рядки з більше ніж 5 символів:");
for (let str of fiveStrings) {
    if (str.length > 5) {
        console.log(str);
    }
}
let tenNumbers = [3, 45, 12, 78, 23, 56, 89, 11, 34, 67];
let maxNumber = Math.max(...tenNumbers);
console.log("Максимальне число в масиві:", maxNumber);
console.log("Парні числа в масиві:");
for (let num of tenNumbers) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
