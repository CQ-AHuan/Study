// 封装一个函数，输入一个数组，返回children长度最大的那一项的name，如果有children长度相同的，返回平均年龄最大的那一项的name
function getName(arr) {

    // 记录最长的children的长度
    var maxChildrenLength = 0;
    for (var item of arr) {
        // item: { name: 'zs', age: 50, children: [...] }
        if (item.children.length > maxChildrenLength) {
            maxChildrenLength = item.children.length;
        }
    }

    // longestItem: { name: 'zs', age: 50, children: [...] }
    var longestItemList = [];
    for (var item of arr) {
        if (item.children.length === maxChildrenLength) { // 3
            longestItemList.push(item);
        }
    }

    // 期待: 比对年龄之和
    // 找到年龄和最大那一项
    var maxAgeItem = {};
    var max = -Infinity;
    for (var item of longestItemList) {
        var sum = getSum(item.children);
        if (sum > max) {
            max = sum;
            maxAgeItem = item;
        }
    }
    return maxAgeItem.name;
}

function getSum(arr) {
    var sum = 0;
    for (var item of arr) {
        sum += item.age;
    }
    return sum;
}

var arr = [
  {
    name: 'zs',
    age: 50,
    children: [
      { name: 'zs1', age: 19 },
      { name: 'zs2', age: 20 },
      { name: 'zs3', age: 21 },
    ],
  },
  {
    name: 'ls',
    age: 40,
    children: [
      { name: 'ls1', age: 19 },
    ],
  },
  {
    name: 'ww',
    age: 60,
    children: [
      { name: 'ww1', age: 22 },
      { name: 'ww2', age: 23 },
    //   { name: 'ww3', age: 24 },
    ],
  },
];
console.log( getName(arr) ); // 'ww'
