const obj = {
    a: 1,
    b: 2,
};

// 希望obj.a变化时 打印123
let a = obj.a;
Object.defineProperty(obj, 'a', {
    set(newValue) {
        // 拦截赋值动作
        console.log(123);
        a = newValue;
    },
    get() {
        // 拦截取值动作
        return a;
    },
});

// 使用obj.a时的代码
setInterval(() => {
    obj.a++;
}, 1000);
