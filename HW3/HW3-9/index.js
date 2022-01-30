// ####Задача 9

// Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями.
// Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько 
//элементов должно быть в массиве.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только число, строку, объект, массив
// - Второй параметр обязателен и может принимать только число

// ```javascript
// arrayFill('x',5); // [x,x,x,x,x]
// ```

function arrayFill(mean, elem) {
    if (typeof elem !== 'number' || elem <= 0) throw new Error('elem не является числом');
    if (typeof mean === 'object' || typeof mean === 'number' || typeof mean === 'string' || Array.isArray(arr) === true) {
        let arr = new Array();
        let i = 0;
        while (i < elem) {
            arr.push(mean);
            i++;
        }
        console.log(arr);
    }
    else { 
        throw new Error('Тип не объект, не число, не строка, не массив.')
    }
}

arrayFill('x', 5);