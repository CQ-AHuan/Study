console.log(1);

setTimeout(() => {
    console.log(2); // 宏任务
}, 0);

new Promise((resolve) => {
    console.log(3); // 宏任务
    resolve();
})
    .then(() => {
        // 微任务
        console.log(4);
    });

console.log(5);

// 第一组宏任务: 1, 3, 5
// 第一组带的微任务: 4

// 第二组宏任务: 2

// 1, 3, 5, 4, 2
