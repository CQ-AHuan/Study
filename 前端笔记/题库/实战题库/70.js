// 解释下面代码的输出结果
setTimeout(() => {
    console.log(888);
}, 1000);

for (var i = 0; i < 3; i++) {
    setTimeout(((i) => {
        console.log(i);

        return () => {
            console.log(i + 100);
        };
    })(i), i * 1000);
}

console.log(999);
