# BOM 5*

## 延迟执行 setTimeout 5

```js
// 延迟1s 打印123
setTimeout(() => {
    console.log(123);
}, 1000);

function fn(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

// 有参数的函数 使用setTimeout调用
// 1.
setTimeout(() => {
    fn(1, 2, 3); // 打印1, 2, 3 
}, 1000);

// 2. 1000ms后执行了fn(1, 2, 3);
setTimeout(fn, 1000, 1, 2, 3); // 打印123
```

## 间隔执行 setInterval 5

> 语法和setTimeout一致

```js
// 每隔1s 打印123
setInterval(() => {
    console.log(123);
}, 1000);
```

## navigator 0

> 客户端的信息

```js
console.log(navigator);
```

## location 3

```js
console.log(location);

location.href = 'https://baidu.com'; // 跳转至百度
```

## history 2

```js
console.log(history);

history.back(); // 回到上一页
```

## localStorage / sessionStorage 5* (面试<20%)

> 本地存储

```js
// 增 / 改
localStorage.setItem('属性名', 属性值); // 重点: 只能记字符串
sessionStorage.setItem('属性名', 属性值); // 重点: 只能记字符串

// 删
localStorage.removeItem('属性名');
sessionStorage.removeItem('属性名');

// 查
console.log( localStorage.getItem('属性名') );
console.log( sessionStorage.getItem('属性名') );
```

