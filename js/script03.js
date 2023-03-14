// Task #3
/* Створити функцію конструктор створення (прямокутника, квадрата ) в прототип винести методи обчислення
Площі, периметра, та визначення діагоналі https://ua.onlinemschool.com/math/formula/rectangle/
*/
function RectangleConstructor(height, width) {
    this.height=height;
    this.width=width;
}

RectangleConstructor.prototype.rectangleSquare=function () {
    return this.height * this.width;
}
RectangleConstructor.prototype.rectanglePerimeter=function () {
    return (this.height*2) + (this.width*2);
}
RectangleConstructor.prototype.rectangleDiagonal=function () {
    return Math.sqrt((Math.pow(this.height,2))+(Math.pow(this.width,2)));
}
const infoRectangle=new RectangleConstructor(3,6)
console.log(infoRectangle);
console.log("Square:", infoRectangle.rectangleSquare());;
console.log("Perimeter:",infoRectangle.rectanglePerimeter());;
console.log("Diagonal:",infoRectangle.rectangleDiagonal());;