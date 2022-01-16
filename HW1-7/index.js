/*
####Задача 7

Написать код который посчитает сумму всех четных элементов в массиве.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/

var arr = [1, 2, 3, 4];
var sumchet = 0;
var long = arr.length;
for (var i = 0; i < long; i++){
    if (arr[i] % 2 == 0) {
        sumchet = sumchet + arr[i];
    }
}
console.log(sumchet);