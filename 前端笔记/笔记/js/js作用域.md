# js作用域

> 描述的是变量在哪可用
>
> 父作用域无权调用子作用域中的变量
>
> 子作用域可以调用父作用域中的变量

## 全局 / 函数作用域

```js
// 1. 全局作用域
var a = 1;

console.log(a); // 1

function fn() {
    // 2. 函数作用域
    var b = 2;
	console.log(a); // 1
    
    function f1() {
		console.log(a); // 1
		console.log(b); // 2
    }
    f1();
}

fn();

// 父作用域无权调用子作用域中的变量
console.log(b); // Error: b is not defined (b没有被定义)
```

## 局部作用域

> var声明的变量没有局部作用域

```js
if (true) {
    var a = 1;
}

// 非函数的代码块外 可以访问var声明的变量
console.log(a); // 1

for (var i = 0; i < 5; i++) {
    var b = 123;
}
console.log(i);
console.log(b);
```

