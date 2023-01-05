# this专题 5*(面试<10%)

## 普通函数 5

> 指向调用者

## 箭头函数 5

> 指向声明时的上下文的this（全局 / 函数 / class实例） 
>
> 不管在哪运行 也不管绑定了谁

## 换绑this 5*(面试<10%)

```js
function fn(a, b, c) {
    console.log(this, a, b, c);
}

// bind
// 返回换绑之后的函数
const f1 = fn.bind(null);
f1(1, 2, 3); // null, 1, 2, 3

// call
// 即换绑 又执行
fn.call(null, 1, 2, 3); // null, 1, 2, 3

// apply
// 即换绑 又执行
fn.apply(null, [1, 2, 3]); // null, 1, 2, 3
```



