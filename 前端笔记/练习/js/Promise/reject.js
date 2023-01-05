function fn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > .5) {
                resolve(1);
            } else {
                reject('嘿嘿嘿');
            }
        }, 1000);
    });
}

fn()
    .then(res => {
        console.log(res); // 1
    })
    .catch(err => {
        console.error(err); // '嘿嘿嘿'
    });
