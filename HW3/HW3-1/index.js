/*
####Задача 1

Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```
*/

const arr = [1, 2, 3, 4, 5, 4];

Array.prototype.forAech = function (back) {

 
    for (let i = 0; i < arr.length; i++) {
        back(arr[i], i, arr);
        
    }
}

arr.forAech((item, index, array) => {
    console.log({item, index, array});

})

