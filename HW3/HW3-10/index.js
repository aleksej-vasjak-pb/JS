// ####Задача 10

// Создать имплементацию функции `reverse`, которая принимает массив в качестве
//параметра, а возвращает массив только в обратном порядке.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если был передан пустой массив

// ```javascript
// const arr = [3,2,1];
// reverse(arr); // [1,2,3]
// ```

const arr = [1, 2, 3, 4, 5, 4];  
function reverse(mas) {
    if (Array.isArray(mas) != true) throw new Error('Тип не массив');
    if (mas.length == 0) throw new Error('Массив пустой');
    
    let result = new Array();
    var i = 0;
    var elem = mas.lenght;
    while (i < elem) {
        result.push(mas[elem - 1]);
        elem--;
    }
    console.log(result);
}
  
reverse(arr);

