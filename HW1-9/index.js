/*
#### Задача 9

Отсортировать массив по убыванию.

```javascript
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/

var arr = [1,2,3,4,5,6];
var long = arr.length;
for (let n = 0; n < long; n++) {
    for (let i = 0; i < long - 1 - n; i++) {
        if (arr[i] < arr[i + 1]) {
      const buff = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = buff
        } 
    }
}
console.log(arr);
