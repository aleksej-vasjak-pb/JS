// ####Задача 4

// Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// some(arr, function(item, i, arr) {});
// ```

const arr = [1, 2, 3, 4, 5, 4];

function some(arr, func) {
    if (Array.isArray(arr) !== true) throw new Error('Тип arr не является массивом!');
    if (typeof func !== 'function') throw new Error('Тип func не является функцией!');
    
     let result = [];
    
     for (let i = 0; i < arr.length; i++) {
          if (func(arr[i], i, arr)) {
              result.push(arr[i]);
         }
     }
     return result.length >= 2 ? true : false;
}   

let som = some(arr, function (item, i, arr) {});
console.log(som);

function some1(item, i, arr) {
    return item >= 2 ? true : false;
}

let rezSome1 = some(arr, some1);
console.log(rezSome1);