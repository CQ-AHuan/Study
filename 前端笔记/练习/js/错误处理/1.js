function fn() {
    if (Math.random() > .5) {
        // 抛出异常
        throw new Error('哈哈哈哈哈');
    }
}

try {
    // 试着运行一下fn 成功了最好
    fn();
} catch (error) {
    // 不成功就拉倒
}

console.log(1);
