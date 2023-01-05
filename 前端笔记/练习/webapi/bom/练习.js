
for (var i = 3; i > -1; i--) {
    setTimeout(() => {
        console.log(i); // -1
    }, i * 1000);
    console.log(i);
}

console.log('a');

setTimeout(() => {
    console.log('b');
});

console.log('c');

// 3, 2, 1, 0, 'a', 'c', -1, 'b', -1, -1, -1
