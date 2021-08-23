/*Реализовать четыре основные арифметические операции в виде функций
с двумя параметрами.Обязательно использовать оператор return.*/

function sum(a, b) {
    return a+b;
}

function dif(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

let a = 5;
let b = 6;

alert(sum(a, b));
alert(dif(a, b));
alert(mult(a, b));
alert(div(a, b));