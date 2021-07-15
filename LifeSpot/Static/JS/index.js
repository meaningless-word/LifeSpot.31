// объявление функции в стиле Function Declaration
function filterContent(userInput) {
    // Сохраняем текст пользовательского запроса
    // Теперь принимаем пользовательский ввод в качестве параметра.
    // let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');
    debugger

    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(userInput.toLowerCase())) {
            // Скрываем неподходящие
            elements[i].style.display = 'none';
        } else {
            // Показываем подходящие
            elements[i].style.display = 'inline-block';
        }
    }
}

// объявление функции в стиле Function Expression
let contentFilter = function filterContent() {
    let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

// объявление функции, принимающей аргументом другую функцию
function filterContentFCS(inputParseFunction) {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if (!videoText.toLowerCase().includes(inputParseFunction()/*Переданная функция вызвана*/.toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

// объявление функции, демонстрирующей эффект замыкания
// когда функция не принимает параметры, а получает необходимое из области видимости [[Environment]]
function filterContentClosure() {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if (!videoText.toLowerCase().includes(inputParseFunction()/*Захват переменной теперь происходит с помощью замыкания */.toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}






// объявление функции в стиле Function Declaration
function handleSessionFD() {
    // создадим объект Map для хранения сессии
    let session = new Map();
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent);

    // Запросим возраст пользователя и сохраним в переменную
    let age = prompt("Пожалуйста, введите ваш возраст");

    // Проверка на возраст и сохранение сессии
    if (age >= 18) {
        let startDate = new Date().toLocaleString();
        // Те, кто старше 18, увидят приветствие и будут направлены на сайт
        alert(`Приветствуем на LifeSpot!\nТекущее время: ${startDate}\nкстати, была вызвана функция, описанная в стиле Function Declration`);
        session.set("startDate", startDate);
    } else {
        // Выполним проверку. Если введенное число < 18, либо если введено не число -
        // пользователь будет перенаправлен
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
        //a = true + 20 + "name"
    }

    // Вывод в консоль
    for (let result of session) {
        console.log(result)
    }
}

// объявление функции в стиле Function Expression
let sessionHandler = function handleSessionFE() {
    let session = new Map();
    session.set("userAgent", window.navigator.userAgent);
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"));

    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();

        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate + '\n' + "для Вас работала функция в стиле Function Expression");
        session.set("startDate", startDate);
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }

    for (let result of session) {
        console.log(result);
    }
}

// немного изменим обработку сессии:
// 1. Пусть функция обработчик сессии — (handleSessionReturner) — будет объявлена через declaration и возвращает объект сессии.
// 2. Консольный вывод информации о сессии  - в отдельную функцию printSession.
// объявление через declaration, и вызов после handleSession
// printSession должна принимать объект сессии, который вернула handleSessionReturner.

// сначала вынесем консольный вывод в отдельную функцию с параметром, объявив её через Expression: 
// Логирование сессии
let sessionPrinter = function printSession(session) {
    // Вывод в консоль
    for (let result of session) {
        console.log(result);
    }
}

// объявление функции, возвращающей объект 
function handleSessionReturner() {
    // создадим объект Map для хранения сессии
    let session = new Map();
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent);

    // Запросим возраст пользователя и тоже сохраним
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"));

    // Проверка на возраст и сохранение сессии
    if (session.get("age")  >= 18) {
        let startDate = new Date().toLocaleString();
        // Те, кто старше 18, увидят приветствие и будут направлены на сайт
        alert(`Приветствуем на LifeSpot!\nТекущее время: ${startDate}\nи заметьте, функция возвращает объект`);
        session.set("startDate", startDate);
    } else {
        // Выполним проверку. Если введенное число < 18, либо если введено не число -
        // пользователь будет перенаправлен
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }

    // Теперь мы возвращаем объект сессии
    return session;
}


// теперь изменения функции handleSession для иллюстрации замыкания
// поскольку функция нарушает принцип единства ответственности, разделим её на две:
// 1) проверку и созранение возраста
// 2) сохранение в сессию времени посещения и строки userAgent
// а так же откажемся от использования параметров, вместо которых session будет захватываться извне
// для его сначала нужно будет создать сессию в общей области видимости
let session = new Map();
let startDate = new Date().toLocaleString();

// функция сохранения данных сессии при входепользователя на страницу
function handleSessionClosure() {
    // Сохраним время начала сессии
    session.set("startDate", startDate);
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent);
}

// функция проверки возраста
function checkAgeClosure() {
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"));

    if (session.get("age") >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString() + '\n' + "из специализированной функции проверки возраста");
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }
}

// функция логирования - вывод данных сессии в консоль
let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result);
    }
}


