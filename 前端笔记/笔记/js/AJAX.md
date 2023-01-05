# AJAX 阿贾克斯 5*

> BS架构 ( browser >>> server )
>
> 向服务器发送数据（增删改）
>
> 从服务器拿数据（查）

## axios 5*

> 艾克秀斯
>
> 市面上99.999999999%的公司正在使用的ajax技术
>
> 用Promise封装过的ajax

### 第一种方式.then访问结果

```js
axios({
    method: 'get', // 请求方式
    url: '接口地址',
    // 向服务器发送数据
    data: {
        // ...
    },
})
	.then(res => {
    	console.log(res.data); // 服务器返回的数据
	})
	.catch(err => {
    	console.error(err);
	})
```

### 第二种方式 await 访问结果

```js
async function req() {
    const res = await axios( ... ));
    console.log(res.data); // 服务器返回的数据
}
```

处理失败

1. ```js
   // 推荐
   async function req() {
       const res = await axios( ... ).catch(err => {
       	console.error(err);    
       });
       console.log(res.data); // 服务器返回的数据
   }
   ```

2. ```js
   async function req() {
       try {
           const res = await axios( ... );
           console.log(res.data); // 服务器返回的数据
       } catch(err) {
           console.error(err);
       }
   }
   ```

## 原生ajax 0

```js
// XML http request
const xhr = new XMLHttpRequest();
xhr.open('get', 'http://47.98.249.40:1234/todo/list'); // 准备发请求
xhr.send(); // 发送
// 拿数据
xhr.onreadystatechange = function () {
    console.log(xhr);
};
```

## jq ajax 1

> jq v3+ 是可以用Promise版本的ajax的
>
> jq项目(v1.x) 要用jq的ajax发请求

```js
$.ajax({
    method: 'post',
    url: 'http://47.98.249.40:1234/todo',
    data: {
        name: 'zs',
        description: 'hello',
    },
    success(res) {
        // 成功时的代码
        console.log(res);
    },
    error(err) {
        // 失败时的代码
        console.log(err);
    },
    complete(a) {
        console.log(a);
    },
});
```

