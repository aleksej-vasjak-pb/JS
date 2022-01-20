/*
####Задача 2

Напишите функцию `f` которая возвращает сумму всех параметров. 
Количество параметров может быть любым. Данная функция должна обязательно 
содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
```
*/


function f() {
    var result = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            result += arguments[i]; 
        }
        else {
      throw new Error('Error: all parameters type should be a Number');
    }
    }
    console.log(result);
  
}

f(3, 5, 8, 10);
f(34, 52)
f(2, 'sdkfjl')


