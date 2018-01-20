document.writeln('<h3>Задание 1</h3>');

var a = 1, b = 1, c, d;
document.writeln('c = ++a;<br>');
c = ++a; // 2
document.writeln('c = ' + c + '<br>');
document.writeln('Так как единица добавилась к переменной a до того как c было присвоено новое значение<br>');

document.writeln('d = b++;<br>');
d = b++; // 1
document.writeln('d = ' + d + '<br>');
document.writeln('Так как единица добавилась к переменной b после того как d было присвоено новое значение<br>');

document.writeln('c = (2+ ++a);<br>');
c = (2 + ++a); // 5
document.writeln('c = ' + c + '<br>');
document.writeln('Так как единица добавилась к переменной a до суммирования и до того как c было присвоено новое значение<br>');

document.writeln('d = (2+ b++);<br>');
d = (2 + b++); // 4
document.writeln('d = ' + d + '<br>');
document.writeln('Так как единица добавилась к переменной b после суммирования и присвения d нового значения<br>');
document.writeln('В целом, постфиксный инкремент сначала возвращает переменную, а потом прибавляет к ней единицу, а префиксный сначала добавляет, а потом возвращает<br>');

document.writeln('<h3>Задание 2</h3>');

var a1 = 2;
var x1 = 1 + (a1 *= 2);

document.writeln('x = ' + x1 + '<br>');
document.writeln('Так как оператор присваивания имеет более высокий приоритет чем сложение<br>');

document.writeln('<h3>Задание 3</h3>');

var a2 = Math.round(Math.random() * 100), b2 = Math.round(Math.random() * 100);

document.writeln('Результат = ' + strangeFunc(a2, b2) + '<br>');

function strangeFunc(a, b) {
    if (a >= 0 && b >= 0) {
        return (a - b);
    } else if (a < 0 && b < 0) {
        return (a * b);
    } else {
        return (a + b);
    }
}

document.writeln('<h3>Задание 4</h3>');

var a3 = Math.round(Math.random() * 15);

switch (a3) {
    case 0 :
        document.writeln('0<br>');
    case 1 :
        document.writeln('1<br>');
    case 2 :
        document.writeln('2<br>');
    case 3 :
        document.writeln('3<br>');
    case 4 :
        document.writeln('4<br>');
    case 5 :
        document.writeln('5<br>');
    case 6 :
        document.writeln('6<br>');
    case 7 :
        document.writeln('7<br>');
    case 8 :
        document.writeln('8<br>');
    case 9 :
        document.writeln('9<br>');
    case 10 :
        document.writeln('10<br>');
    case 11 :
        document.writeln('11<br>');
    case 12 :
        document.writeln('12<br>');
    case 13 :
        document.writeln('13<br>');
    case 14 :
        document.writeln('14<br>');
    case 15 :
        document.writeln('15<br>');
        break;
}

document.writeln('<h3>Задание 5</h3>');

document.writeln('operationFunc(' + a2 + ', ' + b2 + ', "+") = ' + operationFunc(a2, b2, '+') + '<br>');
document.writeln('operationFunc(' + a2 + ', ' + b2 + ', "-") = ' + operationFunc(a2, b2, '-') + '<br>');
document.writeln('operationFunc(' + a2 + ', ' + b2 + ', "*") = ' + operationFunc(a2, b2, '*') + '<br>');
document.writeln('operationFunc(' + a2 + ', ' + b2 + ', "/") = ' + operationFunc(a2, b2, '/') + '<br>');

function operationFunc(a, b, operation) {
    switch (operation) {
        case '+' :
            return sumFunc(a, b);
            break;
        case '-' :
            return subFunc(a, b);
            break;
        case '/' :
            return divFunc(a, b);
            break;
        case '*' :
            return multFunc(a, b);
            break;
    }
}

function sumFunc(a, b) {
    return (a + b);
}

function subFunc(a, b) {
    return (a - b);
}

function divFunc(a, b) {
    return (a / b).toFixed(2);
}

function multFunc(a, b) {
    return (a * b);
}