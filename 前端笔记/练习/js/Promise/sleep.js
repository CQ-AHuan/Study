function sleep(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

(async () => {
    console.log(1);
    await sleep(3000);
    console.log(2);
})();
