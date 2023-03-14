// Task #5
/*Створити функцію яка отримує стрінг, обрізає пробіли спочатку і кінця стрінгу, якщо стрінг маж довжину більше 10
то відрізає все після 10 і додає 3 крапки
*/
let stringText="   Have a nice day   "
function textTrim(value) {
    value = value.trim();

    if (value.length>10){
        value = value.substring(0, 10) + '...'
    }
    return value
}

console.log(textTrim(stringText));