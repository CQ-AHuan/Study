const email = 'zs:yuzelin@itcast.cn'; // 'zs:*************'
console.log( email.replace(/\w+\@\w+\.[a-z]{2,}/, (matched) => {
    return matched.split('').fill('*').join('');
}) );