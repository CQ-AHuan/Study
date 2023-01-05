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

// 3. 统计shanghai的所有子行政区域, 并按温度从高到低排序
// 期望结果:
const expect3 = [
    'xuhui',
    'jingan',
];

// 4.tiger
// 纠正beijing, shanghai, shenzhen的温度及空气质量指数, 数值应为所有子行政区域对应字段的平均值(修改原数组)
