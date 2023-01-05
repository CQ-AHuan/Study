// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i); // 3
//     }, 0);
//     console.log(i); // 0, 1, 2
// }
// // i: 3

// // 0, 1, 2
// // 3, 3, 3

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i); // 0, 1, 2
//     }, 0);
//     console.log(i); // 0, 1, 2
// }

// // 小练习
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i); // 3
//     }, i * 1000); // 0, 1, 2
//     console.log(i); // 0, 1, 2
// }

// //
// for (var i = 0; i < 3; i++) {
//     (function (i) {
//         setTimeout(() => {
//             console.log(i); // 0, 1, 2
//         }, 0);
//     })(i); // 0, 1, 2
//     console.log(i); // 0, 1, 2
// }

for (var i = 0; i < 3; i++) {
    setTimeout((i) => {
        console.log(i); // 0, 1, 2
    }, 1000, i);
    console.log(i); // 0, 1, 2
}
