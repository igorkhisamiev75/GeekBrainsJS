/*��������� ���������� � �������� � ����������[0..15].
� ������� ��������� switch ������������ ����� ����� �� a �� 15.*/

function randomInteger(min, max) {
    // �������� ��������� ����� �� (min-0.5) �� (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

let a = randomInteger(0, 15);

alert("���������� �� 0 �� 15 = "+`${a}`);
out(a);

function out(a) {
    switch (16 - a) {
        case 0:
            alert("����� �� ���������, ���� ��������");
            break;
        default:
            alert(a);
            a++;
            out(a);
    }
}
