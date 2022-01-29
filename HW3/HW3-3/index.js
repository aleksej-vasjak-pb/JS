/*
####Задача 3

Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
```
*/

const arr = [1, 2, 3, 4, 5, 4];

function every(arr, func) {
    if (Array.isArray(arr) !== true) throw new Error('Тип arr не является массивом!');
    if (typeof func !== 'function') throw new Error('Тип func не является функцией!');
    
     let result = [];
    
     for (let i = 0; i < arr.length; i++) {
          if (func(arr[i], i, arr)) {
              result.push(arr[i]);
         }
     }
     return result == arr.length ? true : false;
}   

let ever = every(arr, function (item, i, arr) {});
console.log(ever);

function ever1(item, i, arr) {
    return item >= 2 ? true : false;
}

let rezEver1 = every(arr, ever1);
console.log(rezEver1);
