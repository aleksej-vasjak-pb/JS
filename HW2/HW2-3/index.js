/*
####Задача 3

Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье.
Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number
```
*/


function f(a, b, c) {
      if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
      let result = c !== 0 ? (a - b)/c: 'Делить на ноль нельзя!';
      console.log(result);
    }
    else {
      throw new Error('Error: all parameters type should be a Number');
    }
    }
      


f(10, 5, 0);
f(9,3,2,);
f(10,'sfd',3);
