/*–еализовать функцию с трем€ параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 Ч значени€ аргументов, operation Ч строка с названием операции.
¬ зависимости от переданного значени€ выполнить одну из арифметических операций(использовать функции из пункта 5)
и вернуть полученное значение(применить switch).*/

const sum = (a, b) => a + b;

const dif = (a, b) => a - b;

const mult = (a, b) =>a * b;

const div = (a, b) => a / b;


const mathOperation = (arg1, arg2, operation) => {
    switch (operation) {
        case sum:
            return sum(arg1, arg2);
            break;
        case dif:
            return dif(arg1, arg2);
            break;
        case mult:
            return mult(arg1, arg2);
            break;
        case div:
            return div(arg1, arg2);
            break;
        default:
            alert("ERROR");
    }
}

alert(mathOperation(2, 3, sum));
alert(mathOperation(2, 3, dif));
alert(mathOperation(2, 3, mult));
alert(mathOperation(2, 3, div));