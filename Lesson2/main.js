// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let users = [
    "Vasa",
    "Olia",
    "Igor",
    "Stepan",
    "Vira",
    "Ser",
    "Slavik",
    "Kola",
    "Oleg",
    "lesia",
]
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users[4]);
console.log(users[5]);
console.log(users[6]);
console.log(users[7]);
console.log(users[8]);
console.log(users[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let first_book = {
    title: 'Harry Potter',
    pageCount: '248',
    genre: 'fantasy',
};
console.log(first_book);

let two_book = {
    title: 'The Divine Comedy',
    pageCount: '607',
    genre: 'comedy',
};
console.log(two_book);
let three_book = {
    title: 'Rich Dead',
    pageCount: '352',
    genre: 'philosophical social',
}
console.log(three_book);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
        title: 'Harry Potter',
        pageCount: '248',
        genre: 'fantasy',
        authors: [name = 'Joanne Kathleen Rowling', age = '58'],
    }
;
console.log(book1);

let book2 = {
    title: 'The Divine Comedy',
    pageCount: '607',
    genre: 'comedy',
    authors: [name = 'Dante Alighieri', age = '758'],
};
console.log(book2);

let book3 = {
    title: 'Rich Dead',
    pageCount: '352',
    genre: 'philosophical social',
    authors: [name = 'Kiyosaki Robert T', age = '76'],
}
console.log(book3);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let userss = [
    {name: 'Vasa', username: 'Va', password: '123'},
    {name: 'Olia', username: 'Ol', password: '234'},
    {name: 'Igor', username: 'Ig', password: '345'},
    {name: 'Stepan', username: 'St', password: '456'},
    {name: 'Vira', username: 'Vi', password: '567'},
    {name: 'Ser', username: 'Se', password: '678'},
    {name: 'Slavik', username: 'Sl', password: '789'},
    {name: 'Kolia', username: 'Ko', password: '890'},
    {name: 'Oleg', username: 'Ol', password: '987'},
    {name: 'Lesia', username: 'Le', password: '876'},
]
let Vasa = userss[1];
console.log(userss[0].password)
console.log(userss[1].password)
console.log(userss[2].password)
console.log(userss[3].password)
console.log(userss[4].password)
console.log(userss[5].password)
console.log(userss[6].password)
console.log(userss[7].password)
console.log(userss[8].password)
console.log(userss[9].password)
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt('enter your x');
if (x !== 0) {
    console.log('true');
} else {
    console.log('false');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt("How a o'clock")
if (time < 0 || time > 59) {
    console.log('Іди спати');
} else if (time <= 15 && time > 0) {
    console.log('Перша чверть години');
} else if (time <= 30 && time >= 16) {
    console.log('Друга чверть години');
} else if (time <= 45 && time >= 31) {
    console.log('Третя чверть години');
} else if (time <= 59 && time >= 46) {
    console.log('Четверта чверть години');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('What decade of the month')
if (day < 1 || day > 31) {
    console.log(false);
} else if (day === 1 && day <= 10) {
    console.log('1decade')
} else if (day >= 11 && day <= 20) {
    console.log('2decade')
} else if (day >= 21 && day === 31) {
    console.log('3decade')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let days = +prompt('What day');
switch (days) {
    case 1:
        console.log('Manday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.error(Error);
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 5;
let b = 5;
if (a > b) {
    console.log(a)
} else if (a < b) {
    console.log(b)
} else if (a === b) {
    console.log('Ok!!!')
}
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x2 = '';
let result = x2 || 'default';
console.log(result)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super!');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super!');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super!');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super!');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super!');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super!');
}