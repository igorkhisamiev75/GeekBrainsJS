/** — помощью рекурсии организовать функцию возведени€ числа в степень.
    ‘ормат: function power(val, pow), где val Ч заданное число, pow ЦЧ степень.*/

function power(val, pow) {
    if (pow == 0) {
        return 1;
    }
    if (pow == 1) {
        return val;
    }
    if (pow > 1) {
        val = val * power(val, pow - 1);
        return val;
    }
}

alert(power(2, 10));
