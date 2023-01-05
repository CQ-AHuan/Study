// 主线程
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        setTimeout(() => {
            console.log(i); // 3, 3, 3
        }, i * 1000); // 3, 3, 3
    }, i * 1000); // 0, 1, 2
}

// 什么时候 打印的什么结果
// 3s: 3
// 4s: 3
// 5s: 3
