/* * Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
x
xx
xxx
xxxx
xxxxx*/

const hPir = 20;
let char = 'x';
const char2 = 'x';
let i=1;

do {
    console.log(char);
    i++;
    char = char + char2;
}
while (i <= hPir);
    


