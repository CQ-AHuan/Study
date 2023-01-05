// 实现lodash中unary函数
// https://www.lodashjs.com/docs/lodash.unary

function unary(cb) {

}

const fn = unary((a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
});

fn(1, 2, 3); // 1, undefined, undefined
