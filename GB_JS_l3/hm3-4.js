/* * ���������� �������� � 20 ������ � ������� console.log, ��� �������� �� �������:
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
    


