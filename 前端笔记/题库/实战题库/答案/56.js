// 提取url中的信息
// 1.
function transform(input) {
    const [path, query] = input.split('?');
    // path: 'xxxx/xxx/xxx/13'
    // query: 'name=zhangsan&age=18'
    const res = {
        id: +path.split('/').at(-1), // 13
    };
    for (const keyValue of query.split('&')) {
        // keyvalue: 'name=zhangsan'
        const [key, value] = keyValue.split('=');
        // key: 'name'
        // value: 'zhangsan'
        res[key] = isNaN(value) ? value : +value;
    }
    return res;
}


// 2.
function transform(input) {
    const [path, query] = input.split('?');
    return query.split('&').reduce((res, item) => {
        const [key, value] = item.split('=');
        res[key] = isNaN(value) ? value : +value;
        return res;
    }, {
        id: +path.split('/').at(-1), // 13
    });
}

console.log(transform('xxxx/xxx/xxx/13?name=zhangsan&age=18')); // { name: 'zhangsan', id: 13, age: 18 }
console.log(transform('xxxx/xxx/xxx/xx/24?name=lisi&age=10')); // { name: 'lisi', id: 24, age: 10}
