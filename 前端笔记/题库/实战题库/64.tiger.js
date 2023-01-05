// 实现lodash的findKey方法
// https://www.lodashjs.com/docs/lodash.findKey

function findKey(obj, props) {
    // to do
    return xxx;
}

const o = { a: 1, b: '2', c: 3 };
console.log( findKey(o, 1) ); // 'a'
console.log( findKey(o, 2) ); // undefined
console.log( findKey(o, '2') ); // 'b'
console.log( findKey(o, (value) => value % 2 === 1) ); // 'a'
