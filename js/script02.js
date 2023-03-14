// Task #2
/* Створити методи на прототайп для оновлення ключів обєкту юзер наприклад змінити імя , вік користувача.ІD не міняється
*/
function UserInfoConstructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.id = ++UserInfoConstructor.id;
}
UserInfoConstructor.id = 0

UserInfoConstructor.prototype.changeName = function (name) {
    this.name=name;
}
UserInfoConstructor.prototype.changeAge = function (age) {
    this.age = age;
}
const userMain = new UserInfoConstructor("Maria","Kravchenko",27);
userMain.changeAge(30)
console.log(userMain);

const userMain2 = new UserInfoConstructor("Katy","Pereshyvana",22);
userMain2.changeName("Anna")
console.log(userMain2);
