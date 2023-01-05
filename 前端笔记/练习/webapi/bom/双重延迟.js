// 主线程
// setTimeout(() => {
//     setTimeout(() => {
//         console.log(1);
//     }, 1000);
// }, 1000);

// setTimeout(() => {
//     console.log(2);
// }, 2000);

// setTimeout(() => {
//     console.log(1);
// }, 1000);


// 等待区
// 1. 1000ms进入主线程


// 2. 2000ms进入主线程
console.log(2);

// 3. 2000ms进入主线程
console.log(1);
