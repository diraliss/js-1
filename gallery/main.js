window.onload = function () {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }

    /**
     * Функция для вставки большой картинки
     * @param event
     */
    function changeBigPicture(event) {
        var error = document.createElement('p');
        error.innerHTML = 'Изображение временно отсутствует';
        var appDiv = document.getElementById('big_picture'); // Область под большую картинку
        appDiv.innerHTML = '';
        var eventElement = event.target; // Выбирает элемент, на который кликнули
        var imageNamePart = eventElement.id.split('_')[1];
        var src = 'img/big/' + imageNamePart + '.jpg'; // Путь к большой картинке
        var imgElement = document.createElement('img'); // Будущая большая картинка
        imgElement.src = src;
        imgElement.onload = function () {
            appDiv.appendChild(imgElement);
        };
        imgElement.onerror = function () {
            appDiv.appendChild(error);
        }
    }
};