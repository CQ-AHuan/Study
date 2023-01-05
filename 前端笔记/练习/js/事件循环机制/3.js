setTimeout(() => {
    console.log(1);

    new Promise((resolve) => {
        console.log(2);
        resolve();
    })
        .then(() => {
            // 微任务
            console.log(3);
        });
}, 0);

console.log(7);

setTimeout(() => {
    console.log(4);

    new Promise((resolve) => {
        console.log(5);
        resolve();
    })
        .then(() => {
            console.log(6);
        });
}, 0);

console.log(8);

// 第一组宏任务: 7, 8
// 第一组带的微任务: 无

// 第二组宏任务: 1, 2
// 第二组带的微任务: 3

// 第三组宏任务: 4, 5
// 第三组带的微任务: 6

// 7, 8, 1, 2, 3, 4, 5, 6
