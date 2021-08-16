/*Присвоить переменной а значение в промежутке[0..15].
С помощью оператора switch организовать вывод чисел от a до 15.*/

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

let a = randomInteger(0, 15);

alert("Переменная от 0 до 15 = "+`${a}`);
out(a);

function out(a) {
    switch (16 - a) {
        case 0:
            alert("Вывод не требуется, либо закончен");
            break;
        default:
            alert(a);
            a++;
            out(a);
    }
}
