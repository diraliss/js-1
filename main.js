var i;
document.writeln('<h3>Задание 1</h3>');

document.writeln('<h3>Задание 2</h3>');
for (i = 0; i <= 10; i++) {
    if (i === 0) document.write('0 – это ноль<br>');
    else if (i % 2) document.write(i + ' – нечетное число<br>');
    else document.write(i + ' – четное число<br>');
}

document.writeln('<h3>Задание 3</h3>');
for (i = 0; i < 10; document.write(i++ + '<br>')) {}

document.writeln('<h3>Задание 4</h3>В консоли.');
for (i = 0; i <= 20; i++) {
    var k = 0, str = '';
    while (k < i) {
        str += 'x';
        k++;
    }
    console.log(str);
}
