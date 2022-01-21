/*
####Задача 4

Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке. 
Данная функция должна обязательно содержать проверку входного параметра,
 потому что принимать она может только числа от 1 до 7.

```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
```
*/

function f(a) {
    if (typeof a !== 'number')
        throw new Error('Error: parameter type is not a Number');
    if (a >= 1 && a <= 7) {
        switch (a) {
            case 1: b = "Воскресенье"; break;
            case 2: b = "Понедельник"; break;
            case 3: b = "Вторник"; break;
            case 4: b = "Среда"; break;
            case 5: b = "Четверг"; break;
            case 6: b = "Пятница"; break;
            case 7: b = "Суббота"; break;
             
        }
        console.log(b);
    }
    else {
        throw new Error('Error: parameter should be in the range of 1 to 7');
    }
}

f(1);
f(5);
f(7);
f("asldgf");
f(9);


