// <对象&字符串练习>对象转字符串
const input = {
    name: 'zhangsan',
    age: 18,
    sex: 'nan',
};
const output = 'name=zhangsan&age=18&sex=nan';

function obj2str(input) {
    // 'name=zhangsan'
    // ['name', 'age', 'sex']
    // ['name=zhangsan', 'age=18', 'sex=nan']
    return Object.keys(input).map(k => `${ k }=${ input[k] }`).join('&');
}
