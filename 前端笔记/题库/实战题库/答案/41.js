// 根据数据, 完成以下题目
const data = [
    {
        date: '2019-01-01', // 日期
        temperature: 10, // 温度
        unit: 'beijing', // 行政区域
        weather: 'sunny', // 天气
        pollution: 31, // 污染指数
        parentUnit: 'Beijing', // 父行政区域
    },
    {
        date: '2019-01-01',
        temperature: 11,
        unit: 'shanghai',
        weather: 'cloudy',
        pollution: 30,
        parentUnit: 'Shanghai',
    },
    {
        date: '2019-01-01',
        temperature: 12,
        unit: 'shenzhen',
        weather: 'sunny',
        pollution: 39,
        parentUnit: 'Guangdong',
    },
    {
        date: '2019-01-01',
        temperature: 13,
        unit: 'changping',
        weather: 'cloudy',
        pollution: 31,
        parentUnit: 'beijing',
    },
    {
        date: '2019-01-01',
        temperature: 14,
        unit: 'fengtai',
        weather: 'sunny',
        pollution: 12,
        parentUnit: 'beijing',
    },
    {
        date: '2019-01-01',
        temperature: 15,
        unit: 'haidian',
        weather: 'cloudy',
        pollution: 32,
        parentUnit: 'beijing',
    },
    // {
    //     date: '2019-01-01',
    //     temperature: 15,
    //     unit: '五道口',
    //     weather: 'cloudy',
    //     pollution: 32,
    //     parentUnit: 'haidian',
    // },
    // {
    //     date: '2019-01-01',
    //     temperature: 15,
    //     unit: '中关村',
    //     weather: 'cloudy',
    //     pollution: 32,
    //     parentUnit: 'haidian',
    // },
    {
        date: '2019-01-01',
        temperature: 16,
        unit: 'jingan',
        weather: 'sunny',
        pollution: 41,
        parentUnit: 'shanghai',
    },
    {
        date: '2019-01-01',
        temperature: 17,
        unit: 'xuhui',
        weather: 'cloudy',
        pollution: 66,
        parentUnit: 'shanghai',
    },
    {
        date: '2019-01-01',
        temperature: 18,
        unit: 'luohu',
        weather: 'sunny',
        pollution: 21,
        parentUnit: 'shenzhen',
    },
    {
        date: '2019-01-01',
        temperature: 19,
        unit: 'nanshan',
        weather: 'cloudy',
        pollution: 21,
        parentUnit: 'shenzhen',
    },
    {
        date: '2019-01-01',
        temperature: 20,
        unit: 'baoan',
        weather: 'sunny',
        pollution: 32,
        parentUnit: 'shenzhen',
    },
];

// 1.tiger
// 整理所有的行政区域
// 期望结果:
const expect1 = [
    {
        unit: 'Beijing',
        children: [
            {
                unit: 'beijing',
                children: [
                    {
                        unit: 'changping',
                        children: [],
                    },
                    {
                        unit: 'fengtai',
                        children: [],
                    },
                    {
                        unit: 'haidian',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        unit: 'Shanghai',
        children: [
            {
                unit: 'shanghai',
                children: [
                    {
                        unit: 'jingan',
                        children: [],
                    },
                    {
                        unit: 'xuhui',
                        children: [],
                    },
                ],
            }
        ],
    },
    {
        unit: 'Guangdong',
        children: [
            {
                unit: 'shenzhen',
                children: [
                    {
                        unit: 'luohu',
                        children: [],
                    },
                    {
                        unit: 'nanshan',
                        children: [],
                    },
                    {
                        unit: 'baoan',
                        children: [],
                    },
                ],
            },
        ]
    }
];

function getChildren(data, parentUnit) {
    return data
        .filter(item => item.parentUnit === parentUnit)
        .map(item => ({
            unit: item.unit,
            children: getChildren(data, item.unit),
        }));
}

function getTree(data) {
    //// 先找最上级
    // const res = [];
    // for (const d of data) {
    //     // 在整个data中找他爸
    //     if (!data.some(item => d.parentUnit === item.unit)) {
    //         // 如果没找到 说明他爸是最上级
    //         res.push({
    //             unit: d.parentUnit,
    //             // 当前的行政区域: Beijing, Shanghai, Shenzhen: d.parentUnit
    //             // 去data中查找所有parentUnit为当前行政区域的数组项
    //             children: getChildren(data, d.parentUnit),
    //         });
    //     }
    // }
    // return res;

    return data
        .filter(d => !data.some(item => d.parentUnit === item.unit))
        .map(d => ({
            unit: d.parentUnit,
            // 当前的行政区域: Beijing, Shanghai, Shenzhen: d.parentUnit
            // 去data中查找所有parentUnit为当前行政区域的数组项
            children: getChildren(data, d.parentUnit),
        }));
}

// console.log(getTree(data));

// 2. 统计beijing的所有子行政区域的天气信息, 并按空气质量指数从高到低排序
// 期望结果:
const expect2 = [
    {
        unit: 'haidian',
        weather: 'cloudy',
        pollution: 32,
    },
    {
        unit: 'changping',
        weather: 'cloudy',
        pollution: 31,
    },
    {
        unit: 'fengtai',
        weather: 'sunny',
        pollution: 12,
    },
];

const childrenOfBeijing = data
    .filter(d => d.parentUnit === 'beijing')
    .sort((a, b) => b.pollution - a.pollution)
    .map(d => ({
        unit: d.unit,
        weather: d.weather,
        pollution: d.pollution,
    }));

// 3. 统计shanghai的所有子行政区域, 并按温度从高到低排序
// 期望结果:
const expect3 = [
    'xuhui',
    'jingan',
];

const childrenOfShanghai = data
    .filter(d => d.parentUnit === 'shanghai')
    .sort((a, b) => b.temperature - a.temperature)
    .map(d => d.unit);

// 4.tiger
// 纠正beijing, shanghai, shenzhen的温度及空气质量指数, 数值应为所有子行政区域对应字段的平均值(修改原数组)
function fix(data) {
    for (const d of data) {
        if (
            d.unit === 'beijing'
            || d.unit === 'shanghai'
            || d.unit === 'shenzhen'
        ) {
            let tempSum = 0;
            let pollSum = 0;
            const children = data.filter(item => item.parentUnit === d.unit);
            for (const child of children) {
                tempSum += child.temperature;
                pollSum += child.pollution
            }
            d.temperature = tempSum / children.length;
            d.pollution = pollSum / children.length;
        }
    }
    return data;
}

console.log(fix(data));
