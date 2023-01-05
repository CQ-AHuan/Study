// 按照排位分数排序
const input = [
    {
        wxNickName: '张三',
        nickName: '寡人死一次就挂机',
        status: 'online',
        duration: 301241, // 正在游戏的游戏时长: 301241毫秒
        lastLoginTimestamp: 1642940476563, // 上次登录截止时
        rankScore: 1234, // 排位分数
    },
    {
        wxNickName: '李四',
        nickName: '苏州科技大学',
        status: 'offline',
        duration: 0,
        lastLoginTimestamp: 1642940126563,
        rankScore: 281,
    },
    {
        wxNickName: '王五',
        nickName: 'hide on bush',
        status: 'online',
        duration: 225382,
        lastLoginTimestamp: 1642940123000,
        rankScore: 9999,
    },
    {
        wxNickName: '刘六',
        nickName: 'Uz1',
        status: 'offline',
        duration: 0,
        lastLoginTimestamp: 1642940517000,
        rankScore: 128,
    },
];

const output = [
    {
        nickName: 'hide on bush(王五)',
        rankLevel: '最强王者',
    },
    {
        nickName: '寡人死一次就挂机(张三)',
        rankLevel: '不屈白银',
    },
    {
        nickName: '苏州科技大学(李四)',
        rankLevel: '傲娇废铁',
    },
    {
        nickName: 'Uz1(刘六)',
        rankLevel: '傲娇废铁',
    },
];

function getResult(input) {
    // 段位规则
    // 0~500分: 傲娇废铁
    // 500~1000分: 倔强青铜
    // 1000~1500分: 不屈白银
    // 1500~2000分: 荣耀黄金
    // 2000~2500分: 华贵铂金
    // 2500~3000分: 璀璨钻石
    // 3000+分: 最强王者

    // to do
    return xxx;
}
