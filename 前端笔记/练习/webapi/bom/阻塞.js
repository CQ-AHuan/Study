// sleep
function sleep(n) {
    const tmp = Date.now();
    while (Date.now() - tmp < n) {}
}

console.log(1);
setTimeout(() => {
    console.log(2);
}, 1000);
sleep(2000);
console.log(3);
