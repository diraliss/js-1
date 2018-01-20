window.onload = function () {
    var error = document.createElement('p');
    error.innerHTML = 'Товар временно отсутствует';
    var sum_price = 0;
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML === 'Купить')
            buttons[i].onclick = moveItem;
    }

    function moveItem(event) {
        var appDiv = document.getElementById('trash');

        var item_price = event.path[1].childNodes[5].innerHTML;
        var item_name = event.path[1].childNodes[3].innerHTML;

        var item = document.createElement('span');
        item.innerHTML = item_name + ' : ' + item_price + ' руб.; ';
        sum_price += parseInt(item_price);
        var sum = document.getElementById('sum');
        sum.innerHTML = sum_price;
        appDiv.appendChild(item);
    }
};