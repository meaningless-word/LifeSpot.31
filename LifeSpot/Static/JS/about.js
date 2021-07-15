
// функция запроса пользовательского мнения
function getReview() {
    // Создадим объект
    let review = {}

    // Сохраним свойство имени
    review["userName"] = prompt("Как вас зовут ?");
    if (review["userName"] == null) {
        return;
    }

    // Сохраним текст отзыва
    review["comment"] = prompt("Напишите свой отзыв");
    if (review["comment"] == null) {
        return;
    }

    // Сохраним текущее время
    review["date"] = new Date().toLocaleString();

    // Добавим на страницу
    writeReview(review);
}

// функция размещения отзыва на странице
const writeReview = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>` +
        '</div>';
}

function nextSlide(k) {
    const probablyImg = document.getElementsByClassName("slided-img");
    for (let i = 0; i < probablyImg.length; i++) {
        if (!probablyImg[i].classList.contains("hided")) {
            probablyImg[i].classList.add("hided");
            probablyImg[(probablyImg.length + i + k) % probablyImg.length].classList.remove("hided");
            break;
        } 
    }
}

setInterval(nextSlide, 3000, 1);