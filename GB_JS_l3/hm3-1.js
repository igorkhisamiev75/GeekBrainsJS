/*� ������� ����� while ������� ��� ������� ����� � ���������� �� 0 �� 100.*/

//������� ������ �� 100
var array = [];
var num = 2;

while (num <= 100) {    
    array.push(num);
    num++;
}

console.log(array);


//������� ������ �����

var a = 2;
var b = 2;
while (a <= 99) {
    a += b;
    array.splice(array.indexOf(a), 1);
}

console.log(array);


//������� ��� ����� ������� �������� �� �������� �� 10
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