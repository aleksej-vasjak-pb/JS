// ####Задача 5

// Создать имплементацию функции `reduce`, логика работы такая же как и у
// родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

// ```javascript
// const arr = [1,2,3];
// const acc = 0;
// reduce(arr, function(acc, item, i, arr) {}, acc);
// ```

const arr = [1, 2, 3, 4, 5, 4];
const acc = 0;
function reduce(arr, func, acc) {
    if (Array.isArray(arr) !== true) throw new Error('Тип arr не является массивом!');
    if (typeof func !== 'function') throw new Error('Тип func не является функцией!');
    if (typeof acc !== 'string' && typeof acc !== 'number') throw new Error('Тип acc не строка и не число');
    
     let result = acc;
    
     for (let i = 0; i < arr.length; i++) {
         if (func(result, arr[i], i, arr)) result = func(result, arr[i], i, arr);
     }
     return result;
}   

function functionNew(acc, item, i, arr) {
    return (acc = acc + item);
}

let reduceNew = reduce(arr, functionNew, acc);
console.log(reduceNew);

