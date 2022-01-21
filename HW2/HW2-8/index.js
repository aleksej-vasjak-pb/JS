/*
####Задача 8

Дан массив с числами `[1, 2, 3]`. Создайте функцию `f`, которая принимает данный массив в качестве параметров,
 а затем последовательно выводит на экран его элементы. Обязательно нужно использовать рекурсию. 
 Использовать цикл запрещено. Данная функция должна обязательно содержать проверку входного параметра, 
 потому что принимать она может только не пустой массив.

*Возможно вам понадобится метод [splice](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).*

```js
f([1,2,3]);
// 1
// 2
// 3
f(1,2,3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty
```
*/

var i = 0; 
function f(mas) {
  if (typeof mas !== "object") throw new Error("Error: parameter type should be an array");
  if (mas.length === 0) throw new Error("Error: parameter can't be an empty"); 
  if (1 < mas.length){
  console.log(mas[0]);
  mas.splice(0, 1);
  f(mas);
  }
  else console.log(mas[0]);
}

f([1, 2, 3]);
f(1, 2, 3); 
f([]);
f('sldfjgk');