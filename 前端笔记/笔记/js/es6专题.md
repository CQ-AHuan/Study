# ES6 5*

> ECMAScript 2015
>
> es6 >>> es2015
>
> es2016 / es2017 / ...
>
> es6+ / es next
>
> js的新语法

## const / let / var 5* (面试题)

### var的问题

1. 变量提升

   ```js
   // 实际写法
   console.log(msg); // undefined
   var msg = 'hello world';
   
   // 背后的真相
   var msg;
   console.log(msg); // undefined
   msg = 'hello world';
   
   // es6
   console.log(msg1); // Error: msg1 is not defined (打印时msg1这个变量并没有被声明)
   const msg1 = 'hello world';
   ```

2. 异步问题

   ```js
   // to do
   ```

3. 污染全局

   ```js
   console.log(window);
   var a = 1;
   console.log(window.a); // 1
   
   // es6
   const b = 2;
   console.log(window.b); // undefined
   ```

4. 可以重复声明

   ```js
   var a = 1;
   var a = 2;
   
   // es6
   const b = 1;
   const b = 2; // 报错 已经被声明
   ```

5. 只有两个作用域

   ```js
   // 1. 全局作用域
   // 2. 函数作用域
   
   // es6
   if (true) {
       const a = 1;
   }
   console.log(a); // Error: a is not defined
   
   for (const item of [1, 2, 3]) {}
   console.log(item); // Error: item is not defined
   
   for (let i = 0; i < 5; i++) {}
   console.log(i); // Error: i is not defined
   ```

### const / let

> const声明的变量不能变
>
> 能用const声明的变量  不要用let

```js
const a = 1;
a++; // Error

const arr = []; // 1栋2单元301
arr.push(123); // 不报错
arr = []; // Error: const声明的引用类型不能变地址

const obj = {}; // 1栋2单元302
obj.a = 1; // 不报错

let b = 1;
b++; // 没问题
```

## 箭头函数 5

```js
// 普通函数(执行型)
function f1(str) {
    console.log(str + ' world!');
}
f1('hello');

// 箭头函数(执行型)
const f2 = (str) => {
    console.log(str + ' world!');
};
f2('hello');

// 普通函数(取值型)
function getSum1(n1, n2) {
    return n1 + n2;
}
console.log( getSum1(1, 2) ); // 3

// 箭头函数(取值型)
const getSum2 = (n1, n2) => n1 + n2;
const getSum3 = (n1, n2) => {
    return n1 + n2;
};
// 返回对象
const getRes = () => ({
   a: 1,
   b: 2,
});
console.log( getSum2(1, 2) ); // 3
console.log( getSum3(1, 2) ); // 3
```

## 解构 5

### 对象

```js
const o1 = { a: 1, b: 2 };
const o2 = { b: 3, c: 4 };

// 解构
const o = { ...o1, ...o2 }; // { a: 1, b: 3, c: 4 }
const o1copy = { ...o1 }; // { a: 1, b: 2 }

console.log( o1 === o1copy ); // false

// 解构赋值
const { a, b } = o1;
// 等同于
// const a = o1.a;
// const b = o1.b;

// 解构赋值(重命名)
const c = 99;
const { b, c: c1 } = o2;
// 等同于
// const b = o2.b;
// const c1 = o2.c;
console.log(b, c, c1); // 3, 99, 4

// 解构赋值(默认值)
function fn(params) {
    const {
        username,
        password = '123456',
    } = params;
    console.log(username, password);
}

fn({
    username: 'zs',
    // password: '123456',
});

// 多重解构
const multi = {
    a: 1,
    b: {
      	c: 2,
        d: 4,
    },
};

const {
    a, // 1
    b: {
    	c,
    	d,
    },
} = multi;

console.log(c, d); // 2, 4
console.log(multi.b); // { c: 2, d: 4 }
```

### 数组

```js
const arr = [-1, -2, -3, -4];

// 解构(打散)
console.log( Math.max(...arr) );
console.log( [...arr] );

// 解构赋值(适合元组)
const [a, b] = arr;
// 相当于
// const a = arr[0];
// const b = arr[1];

// 解构赋值(默认值)(基本没用)
const [c = 123, d] = [undefined, 1];
console.log(c); // 123
```



## 类 class 5(进阶) 0(基础)

> 类：手机   实例：我昨天下单的id为adaw7312831的iphone7
>
> 类：奔驰   实例：车牌号为渝A88888的大G
>
> 类：媳妇   实例：我媳妇
>
> 类：培训班  实例：重庆黑马前端10期
>

```js
class 大驼峰类名 {
    
	constructor(...args) {
		this.a = 1;
		this.b = 2;
	}
    
    c = 3;

	sayHi() {
        console.log('hi');
    }
    
}

const 实例 = new 大驼峰类名(参数1, 参数2, ...);
```

### 继承

```js
class Animal {
    constructor(name) {
        this.name = name;
    }

    move() {
        console.log('正在移动');
    }
}

class Dog extends Animal {
    constructor(...args) {
        // 调用父类的constructor构造函数
        super(...args);
    }

    wangwang() {
        console.log('旺旺');
        console.log(this.name);
    }
}

const dog = new Dog('wangcai');
dog.move();
dog.wangwang();

class Fish extends Animal {
    constructor(...args) {
        // 调用父类的constructor构造函数
        super(...args);
    }

    breathInWater() {
        console.log('水下呼吸');
    }
}

const fish = new Fish('lele');
fish.move();
fish.breathInWater();
```

### 静态方法

```js
class Animal {
    constructor(name) {
        this.name = name;
    }

    move() {
        console.log('正在移动');
    }

    // 添加一个工具方法
    // 打印名字的长度
    // 如果必须依赖实例 就浪费了资源 使用也不方便
    static logNameLength(name) {
        console.log(name.length);
    }
}

Animal.logNameLength('旺财'); // 2
```

## 映射 Map 1

> 对象：key值只能是字符串
>
> Map实例：key值可以任意值

```js
// 使用Map
const mapping = new Map([
    ['zhangsan', 1],
    ['lisi', 2],
]);

// 使用对象
const mapping1 = {
    zhangsan: 1,
    lisi: 2,
};
```

```js
const obj = {};

const mapping = new Map([
    [false, 123],
    [{}, true],
    [null, undefined],
    [obj, 789],
]);

// 增 / 改
mapping.set(1, 2);

// 删
mapping.delete(null);

// 查
console.log( mapping.get(false) ); // 123
console.log( mapping.get(123) ); // undefined
console.log( mapping.get({}) ); // undefined
console.log( mapping.get(obj) ); // 789
```

## 集合 Set 0 

> 数组：有顺序 可以重复
>
> 集合：无顺序 不能重复

```js
const s = new Set([1, 1, 1, 2, 3]);
console.log(s); // Set实例 / 数组

// 去重使用技巧(基础数据类型)
function unique(arr) {
    return Array.from(new Set(arr));
}

// 增
s.add(4);

// 删
s.delete(1);

// 不能改

// 查
console.log( s.size ); // 相当于arr.length

// 遍历
for (const item of s) {
    // item: 集合项
}
```

## 代理 Proxy (vue3原理) 5*

> 拦截器

```js
// es5
const obj = {
    a: 1,
    b: 2,
};

// 希望obj.a变化时 打印123
let a = obj.a;
Object.defineProperty(obj, 'a', {
    set(newValue) {
        // 拦截赋值动作
        console.log(123);
        a = newValue;
    },
    get() {
        // 拦截取值动作
        return a;
    },
});

// 使用obj.a时的代码
setInterval(() => {
    obj.a++;
}, 1000);


// es6
const obj = {
    a: 1,
    b: 2,
};

// 接了一个obj  返回了一个可以被拦截的obj
// 装饰者模式
const o1 = new Proxy(obj, {
    set(obj, key, newValue) {
        // 拦截赋值动作
        obj[key] = newValue;
    },
    get(obj, key) {
        // 拦截取值动作
        return obj[key];
    },
});

o1.a++;

```

## 模块化 es module 5*

> 现代框架必备

### 必要条件

1. script的type属性必为module

2. 文件的根目录要起服务

   ```shell
   npx serve "文件夹目录"
   ```

### 导出

```js
// 1. 一起导出
const a = 1;
const b = 2;
const c = [];

export {
    a,
    b,
    c,
    // 3.2 默认导出第二种写法
    // 123 as default,
};

// 2. 单个导出
// 常用
export const d = {};
export function fn() {
    console.log('导出普通函数');
}
export const f1 = () => {
    console.log('导出箭头函数');
};

// 3. 默认导出
// 3.1 常用
export default 123;
```

### 导入

1. ```js
   import xxx, { a, b, c } from '文件路径';
   
   console.log(xxx); // 123
   console.log(a); // 1
   console.log(b); // 2
   console.log(c); // []
   ```

2. ```js
   import * as xxx from '文件路径';
   
   console.log(xxx.a); // 1
   console.log(xxx.b); // 2
   console.log(xxx.c); // []
   console.log(xxx.default); // 123
   ```

3. ```js
   // 改名
   import { a as aa } from '文件路径';
   
   const a = 12345;
   
   console.log(a); // 12345
   console.log(aa); // 1
   ```

## Promise 5*(面试80%)

### 使用

1. .then的返回值会给下一个.then

   ```js
   axios({
       // ...
   })
   	.then((res) => {
       	return 123;
   	})
   	.then((res) => {
       	console.log(res); // 123
       	return 456;
   	})
   	.then((res) => {
       	console.log(res); // 456
   	})
   ```

2. .then中的报错会让程序进入.catch回调

   ```js
   axios({
       // ...
   })
   	.then((res) => {
       	console.log(undefined.b);
   	})
   	.catch((err) => {
       	console.error(err); // 报错
   	})
   ```

3. await等到的结果是最后一个.then的返回值

   ```js
   async function fn() {
       // const res = await axios({ ... }); // res.data服务器返回的数据
       const res = await axios({ ... })
           .then(() => {
               return 123;
           })
           .then((res) => {
               console.log(res); // 123
           });
      	console.log(res); // undefined
   }
   
   fn();
   ```

4. (重要) (工作要用) 封装请求函数

   ```js
   // 需求: 得到姓名列表
   
   // 封装
   function getNameList() {
       return axios({ ... })
       	.then(res => {
                return res.data.data.map(d => d.name);    
            });
   }
   
   // 使用1.
   getNameList().then(res => {
       console.log(res); // 姓名列表
   });
   
   // 使用2.
   (async function () {
       const res = await getNameList();
       console.log(res); // 姓名列表
   })();
   ```

### Promise实例

> 封装异步逻辑

```js
function fn() {
    return new Promise((resolve, reject) => {
        // 一段异步逻辑
        setTimeout(() => {
         	console.log(2);
            // 需要告知Promise 等待完成(等待的结果)
            resolve(999);
     	}, 1000);
    });
}

(async () => {
    console.log(1);
    // await Promise实例
    fn().then(res => {
        console.log(res); // 999
    });
    console.log(3);
})();
```

```js
// reject
function fn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > .5) {
                resolve(1);
            } else {
                reject('嘿嘿嘿');
            }
        }, 1000);
    });
}

fn()
    .then(res => {
        console.log(res); // 1
    })
    .catch(err => {
        console.error(err); // '嘿嘿嘿'
    });
```

### 如何使用Promise封装xhr(简易axios)(面试 20%)

```js
function bxios(config) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(config.method, config.url); // 准备发请求
        xhr.send(); // 发送
        // 拿数据
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // 请求成功了
                    resolve({
                        data: JSON.parse(xhr.responseText),
                        config,
                        // ...
                    });
                } else {
                    reject(xhr);
                }
            }
        };
    });
}

bxios({
    method: 'get',
    url: 'http://47.98.249.40:1234/todo/list',
})
    .then(res => {
    // ...
    console.log(res)
});

```

