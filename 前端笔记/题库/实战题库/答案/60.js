// 实现lodash中unary函数
// https://www.lodashjs.com/docs/lodash.unary

// 装饰者模式
function unary(cb) {
    return function (a) {
        // 模拟cb的运行 并只传一个参数
        cb(a);
    };
}
const f1 = (a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
};

const f11 = unary(f1);

f1(1, 2, 3); // 1, 2, 3
f11(1, 2, 3); // 1, undefined, undefined


// 装饰者模式
// 史塔克 >>> 钢铁侠
// 函数 >>> 改装后的函数
