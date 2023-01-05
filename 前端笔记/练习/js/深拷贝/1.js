const obj = {
    a: 1,
    b: {
        c: 2,
    },
    d: [1, 2, { e: 3 }],
};

function deepClone(obj) {
    // 利用obj的构造函数 生成仿制品
    const res = new obj.constructor(); // [] / {}
    // 生成仿制品
    for (const key in obj) {
        // 对象中key: 键
        // 数组中key: 索引
        const value = obj[key];
        // 如果value是引用数据类型 就递归
        if ((typeof value === 'object') && value !== null) {
            res[key] = deepClone(value);
        } else {
            res[key] = value;
        }
    }
    return res;
}

const obj1 = deepClone(obj);
// console.log(obj);
// console.log(obj1);

obj1.b.c++;
console.log(obj.b.c); // 2
