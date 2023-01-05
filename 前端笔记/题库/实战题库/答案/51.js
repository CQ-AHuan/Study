// 整理在线玩家和下线玩家(按照上次登录时间排序)
const input = [
    {
        wxNickName: '张三',
        nickName: '寡人死一次就挂机',
        status: 'online',
        duration: 301241, // 正在游戏的游戏时长: 301241毫秒
        lastLoginTimestamp: 1642940476563, // 上次登录截止时间
    },
    {
        wxNickName: '李四',
        nickName: '苏州科技大学',
        status: 'offline',
        duration: 0,
        lastLoginTimestamp: 1642940126563,
    },
    {
        wxNickName: '王五',
        nickName: 'hide on bush',
        status: 'online',
        duration: 225382,
        lastLoginTimestamp: 1642940123000,
    },
    {
        wxNickName: '刘六',
        nickName: 'Uz1',
        status: 'offline',
        duration: 0,
        lastLoginTimestamp: 1642940517000,
    },
];

const output = {
    online: ['张三', '王五'],
    offline: ['刘六', '李四'],
};

// 1.
function getNamesByStatus(status) {
    return input
        .filter(item => item.status === status)
        .sort((a, b) => b.lastLoginTimestamp - a.lastLoginTimestamp)
        .map(item => item.wxNickName);
}

function getResult(input) {
    return {
        online: getNamesByStatus('online'),
        offline: getNamesByStatus('offline'),
    };
}

// 2.
function getResult(input) {
    input.sort((a, b) => b.lastLoginTimestamp - a.lastLoginTimestamp);
    const res = {
        online: [],
        offline: [],
    };
    for (const item of input) {
        // item.status: 'online'
        res[item.status].push(item.wxNickName);
    }

    return res;
}

// 3.
function getResult(input) {
    return input
        .sort((a, b) => b.lastLoginTimestamp - a.lastLoginTimestamp)
        .reduce((res, item) => {
            res[item.status].push(item.wxNickName);
            return res;
        }, {
            online: [],
            offline: [],
        });
}