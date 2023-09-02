// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const plane = (a, b) => a * b;
console.log(plane(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const planeCircle = (Pi, r) => Pi * r ** 2;
console.log(planeCircle(3.14, 10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinder = (Pi, r, h) => 2 * Pi * r * (h + r);
console.log(cylinder(3.14, 5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
const mas1 = (mac) => {
    for (const item of mac) {
        console.log(`item :`, item);
    }
}
mas1([123, `Ser`, `Nati`]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const paragraf1 = (tx) =>
    document.write(`<p>${tx}</p>`);

paragraf1(`Natali`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const fruits = (text1, text2, text3) => {
    document.write(
        `<div>
            <ul>
            <li>${text1}</li>
            <li>${text2}</li>
            <li>${text3}</li>
            </ul>

        </div>`
    )
}

fruits(`apple`, `banana`, `mango`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const foobar = (text, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

foobar(`Sergio`, 3);
foobar(`Nati`, 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
const prym = (arr) => {
    document.write(`<ul>`);
    for (let text of arr) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

prym([`one`, `two`, `thr`, 1984]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let peoples = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true},
];

const userspeoples = () => {
    for (let people of peoples) {
        document.write(`
        <div>
            <p>${people.id}</p>
            <p>${people.name}</p>
            <p>${people.age}</p>
            <p>${people.status}</p>
        </div>`);

    }
}

userspeoples(peoples);


//

// - створити функцію яка повертає найменьше число з масиву
const nam = (number) => {
    let min = number[0];
    for (let i = 1; i < number.length; i++) {
        if (number[i] < min) {
            min = number[i];
        }
    }
    return min;
}

console.log(`nam=`, nam([99, 34, 86., 92., 3355]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const namLi = (number1) => {
    let result = 0;
    for (let i = 0; i < number1.length; i++) {
        result = result + number1[i];
    }
    return result;
}

console.log(`namLi=`, namLi([1, 2, 3, 4, 5]));
//

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    let namIndex1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = namIndex1;
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sum, too, dollars) => {
    for (const cur of too) {
        if (cur.currency === dollars) {
            return sum / cur.value
        }
    }
}

const result = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD')
console.log(`result =`, result)