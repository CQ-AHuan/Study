// 普通写法
// function getArea(w, h) {
//     return w * h;
// }

// console.log( getArea(3, 5) ); // 15
// console.log( getArea(3, 4) ); // 12
// console.log( getArea(3, 3) ); // 9
// console.log( getArea(3, 2) ); // 6
// console.log( getArea(3, 10) ); // 30

// 闭包
function setWidth(w) {
    return function (h) {
        return w * h;
    }
}

const getArea = setWidth(3);

console.log( getArea(5) );
console.log( getArea(4) );
console.log( getArea(3) );
console.log( getArea(2) );
console.log( getArea(10) );
