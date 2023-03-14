// Task #1
/* Створити функцію конструктор яка створює обєкт юзер (з даними імя, прізвище, вік, також в юзера повинен бути
унікальний іd номер від 1 до 10) в функції конструкторі повиний бути метод виводу інформації про юзера.
Метод повинен бути винесений в прототип.
*/
function UserInfoConstructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.id = ++UserInfoConstructor.id;
}

UserInfoConstructor.prototype.info = function () {
    console.log(`Our user ${this.name} ${this.lastname} is ${this.age} years old and the id ${this.id}`)
}
UserInfoConstructor.id = 0

const userMain = new UserInfoConstructor("Maria","Kravchenko",27);
console.log(userMain);
userMain.info()

const userMain2 = new UserInfoConstructor("Katy","Pereshyvana",22);
console.log(userMain2);
userMain2.info()