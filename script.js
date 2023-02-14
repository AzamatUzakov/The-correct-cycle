



let password = + prompt('Введиите пароль');
let i = 10;

let nba = 7777;
do {

    if (password !== nba) {
        password = +prompt(` Ещё ${i} попытки`);
    }
    else if (password === nba, i === 10) {
        alert('Всё ок правельный пароль');

    }
    else if (0)
        console.log("Ошибка");
    i--;


}while (i > 0);
