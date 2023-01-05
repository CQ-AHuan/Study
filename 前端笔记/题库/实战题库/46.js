// 以下是一些游戏信息，现在需要对这些数据进行处理，要求如下：
const data = [
    {
        id: '0fa1c8d2', // id
        name: 'league of legends', // 名称
        type: 'moba', // 类型
        players: 31298741, // 玩家数量
        price: 0, // 价格
        release: 1256572800000, // 发布日期
    },
    {
        id: '0fa1c8d3',
        name: 'dota2',
        type: 'moba',
        players: 24712371,
        price: 0,
        release: 1373299200000,
    },
    {
        id: '0fa1c810',
        name: '王者农药',
        type: 'moba',
        players: 123123,
        price: 0,
        release: 1373299200000,
    },
    {
        id: '0fa1c8d4',
        name: 'overwatch',
        type: 'fps',
        players: 3124312,
        price: 0,
        release: 1464019200000,
    },
    {
        id: '0fa1c8d5',
        name: 'counter-strike',
        type: 'fps',
        players: 4167412,
        price: 0,
        release: 934387200000,
    },
    {
        id: '0fa1c8d6',
        name: 'minecraft',
        type: 'sandbox',
        players: 3127634,
        price: 0,
        release: 1262304000000,
    },
    {
        id: '0fa1c8d7',
        name: 'genshin impact',
        type: 'rpg',
        players: 45128974,
        price: 0,
        release: 1609459200000,
    },
];

// 1. 请将上述数据按照发布日期从早到晚排序
// console.log( data.sort((a, b) => a.release - b.release) );

// 2. 请将上述数据按照玩家数量从多到少排序
// console.log( data.sort((a, b) => b.players - a.players) );

// 3. 请将上述数据按照类型进行分组，分组后的数据结构如下：
// {
//     moba: [
//         'league of legends',
//         'dota2',
//         '王者农药',
//     ],
//     fps: [
//         'overwatch',
//         'counter-strike',
//     ],
//     sandbox: [
//         'minecraft',
//     ],
//     rpg: [
//         'genshin impact',
//     ],
// }
// 3.1.
const res = {};
for (const d of data) {
    // 'moba': d.type
    // 'league of legends': d.name
    if (!(d.type in res)) {
        res[d.type] = [];
    }
    res[d.type].push(d.name);
}
// console.log(res);

// 4.tiger. 封装一个函数，该函数输入一个游戏名称，返回同类型的推荐游戏，推荐顺序由玩家数量决定，如果没有其他同类型的游戏，则返回空数组
function getSuggestion(data, name) {
    const type = data.find(d => d.name === name)?.type;
    if (!type) {
        console.log('输入了不存在的游戏名')
        return;
    }

    // 筛选同类型的 非输入的游戏
    return data
        .filter(d => d.type === type && d.name !== name)
        .sort((a, b) => b.players - a.players)
        .map(d => d.name);
}

console.log( getSuggestion(data, 'league of legends') ); // ['dota2', '王者农药']
console.log( getSuggestion(data, '地下城') ); // undefined
console.log( getSuggestion(data, 'overwatch') ); // ['counter-strike']
console.log( getSuggestion(data, 'minecraft') ); // []
