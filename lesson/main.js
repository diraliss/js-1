var objectNumber = {},
    number;

while (true) {
    number = getNumber(prompt('Введите число для преобразования в объект или exit для выхода'));
    if (number === 1111) break;
    if (number) {
        if (number >= 0) {
            objectNumber['знак'] = 'положительное';
        } else {
            objectNumber['знак'] = 'отрицательное';
        }
        number = Math.abs(number).toString();
        switch (number.length) {
            case 3:
                objectNumber['сотни'] = number[0];
                objectNumber['десятки'] = number[1];
                objectNumber['единицы'] = number[2];
                break;
            case 2:
                objectNumber['сотни'] = 0;
                objectNumber['десятки'] = number[0];
                objectNumber['единицы'] = number[1];
                break;
            default:
                objectNumber['сотни'] = 0;
                objectNumber['десятки'] = 0;
                objectNumber['единицы'] = number[0];
                break;
        }
        console.log(objectNumber);
    }
}

/**
 * Функция проверки ответа
 * @param number
 * @returns {boolean||int}
 */
function getNumber(number) {
    if (number == 'exit')
        return 1111;
    number = parseInt(number);
    if (isNaN(number) || !isFinite(number)) {
        console.log('Вы ввели недопустимый символ', {});
        return false;
    }
    else if (number < -999 || number > 999) {
        console.log('Ваше число выходит из допустимого диапозона', {});
        return false
    }
    else {
        return number;
    }
}