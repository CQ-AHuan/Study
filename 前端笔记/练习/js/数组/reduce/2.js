const str = 'name=zhangsan&age=18&sex=nan&height=180';

// 2. 使用reduce生成对象

const expect = {
    name: 'zhangsan',
    age: '18', // 这里是字符串的18
    sex: 'nan',
    height: '180',
};

console.log( str.split('&').reduce((prev, current) => {
    // current: 'name=zhangsan'
    const [key, value] = current.split('=');
    // key: 'name'
    // value: 'zhangsan'
    prev[key] = value;
    return prev;
}, {}) );
