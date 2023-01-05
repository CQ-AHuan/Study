const arr = [
    { k: 'a', v: 1 },
    { k: 'b', v: 2 },
    { k: 'c', v: 3 },
    { k: 'd', v: 4 },
];

// 3. 使用reduce生成对象

const expect = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};

console.log( arr.reduce((prev, current, i, arr) => {
    // current: { k: 'a', v: 1 }
    // const k = current.k;
    // const v = current.v;
    const { k, v } = current;
    // k: 'a'
    // v: 1
    prev[k] = v;
    return prev;
}, {}) );