/*— помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/

//создаем массив до 100
var array = [];
var num = 2;

while (num <= 100) {    
    array.push(num);
    num++;
}

console.log(array);


//удал€ем четные числа

var a = 2;
var b = 2;
while (a <= 99) {
    a += b;
    array.splice(array.indexOf(a), 1);
}

console.log(array);


//удал€ет все цифры которые дел€тьс€ на нечетные до 10
a = 4;
b = 3;
while (a < 100) {
    if (a % b === 0 && array.indexOf(a) !== -1) {
        array.splice(array.indexOf(a), 1);
    } else {
        a++;
    }
}

console.log(array);


a = 6;
b = 5;
while (a < 100) {
    if (a % b === 0 && array.indexOf(a) !== -1) {
        array.splice(array.indexOf(a), 1);
    } else {
        a++;
    }
}

console.log(array);

a = 8;
b = 7;
while (a < 100) {
    if (a % b === 0 && array.indexOf(a) !== -1) {
        array.splice(array.indexOf(a), 1);
    } else {
        a++;
    }
}


console.log(array);