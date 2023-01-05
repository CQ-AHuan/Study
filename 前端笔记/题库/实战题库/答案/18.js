// <对象(映射)&字符串练习>提取身份信息
const mapping = {
    110000: '北京市',
    120000: '天津市',
    130000: '河北省',
    140000: '山西省',
    150000: '内蒙古自治区',
};

const input = '张三:11000019980101001X';
const output = {
    name: '张三',
    province: '北京市',
    birthday: '1998.1.1',
};

function getUserInfo(input, mapping) {
    // // es5
    // const tmp = input.split(':'); // ['张三', '11000019980101001X']
    // const name = tmp[0];
    // const idCard = tmp[1];
    // es6
    const [name, idCard] = input.split(':'); // name: '张三'  idCard: '11000019980101001X'
    // 提取省份id
    const provinceId = idCard.substring(0, 6); // '110000' >>> 110000
    const province = mapping[provinceId]; // '北京市'
    // 提取生日
    const year = +idCard.substring(6, 10); // '1998' >>> 1998
    const month = +idCard.substring(10, 12); // '01' >>> 1
    const day = +idCard.substring(12, 14); // '01' >>> 1
    return {
        name,
        province,
        birthday: `${ year }.${ month }.${ day }`,
    };
}
