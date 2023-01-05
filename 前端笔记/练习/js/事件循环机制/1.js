console.log(1); // 宏任务

setTimeout(() => {
    console.log(2);
}, 0);

setTimeout(() => {
    console.log(3);
}, 0);

console.log(4);

// 1423
