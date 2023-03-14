// Task #4
/* Отримати від користувача значення name  вивести в консоль, першу і останню літеру з name в ерхньому регістрі.
*/
let name= prompt("What is your name?", "Kateryna")
let newName=name.slice(0,1) + name.slice(name.length-1);

console.log(newName.toUpperCase());
