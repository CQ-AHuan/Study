// <对象&字符串练习>字符串转对象
const input = 'name=zhangsan&age=18&sex=nan&height=180';
const output = {
    name: 'zhangsan',
    age: '18', // 这里是字符串的18
    sex: 'nan',
    height: '180',
};

function str2obj(input) {

    // 1. ['name=zhangsan', 'age=18', 'sex=nan', 'height=180']
    const res = {};
    for (const item of input.split('&')) {
        // item: 'name=zhangsan'
        // es5
        // const tmp = item.split('=');
        // const key = tmp[0];
        // const value = tmp[1];

        // es6
        const [key, value] = item.split('=');
        res[key] = value;
    }
    return res;
}
