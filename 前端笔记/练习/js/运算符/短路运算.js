// 与 遇到真值继续向后执行
const obj = {
    a() {
        console.log(1);
    },
}

// // 1. 逻辑与短路
// obj.b && obj.b();

// // 2. if else
// if (obj.b) {
//     obj.b();
// }

// // 3. 可选链运算符
// obj.b?.();
// console.log( obj.c?.d );


// 或 遇到真值不再向后执行
obj.a || obj.a();
