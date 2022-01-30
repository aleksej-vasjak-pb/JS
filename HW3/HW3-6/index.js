// ####Задача 6

// Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

// ```javascript
// const arr = [1,2,3];
// const acc = 0;
// reduceRight(arr, function(acc, item, i, arr) {}, acc);
// ```

const arr = [1, 2, 3, 4, 5, 4];
const acc = 0;
function reduceRight(arr, func, acc) {
    if (Array.isArray(arr) !== true) throw new Error('Тип arr не является массивом!');
    if (typeof func !== 'function') throw new Error('Тип func не является функцией!');
    if (typeof acc !== 'string' && typeof acc !== 'number') throw new Error('Тип acc не строка и не число');
    
     let result = acc;
    
    for (let i = arr.length - 1; i >= 0; i--) {
         if (func(result, arr[i], i, arr)) result = func(result, arr[i], i, arr);
     }
     return result;
}   

let reduceRightNew = reduceRight(arr, function (acc, item, i, arr) { }, acc);
console.log(reduceRightNew);

function sum(acc, item, i, arr) {
    return (acc = acc + item);
}

let reduceRightSum = reduceRight(arr, sum, acc);
console.log(reduceRightSum);

