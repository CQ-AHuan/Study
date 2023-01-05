const obj = {
    a: 1,
    b: 2,
};

// 接了一个obj  返回了一个可以被拦截的obj
// 装饰者模式
const o1 = new Proxy(obj, {
    set(obj, key, newValue) {
        // 拦截赋值动作
        obj[key] = newValue;
    },
    get(obj, key) {
        // 拦截取值动作
        return obj[key];
    },
});

o1.a++;
