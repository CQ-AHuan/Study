# DOM 5*

> 在js中访问的页面元素

## 操作元素 2

```js
// 增
const el = document.createElement('div'); // 标签名
父元素.appendChild(el);

// 删
元素.remove();

// 改
// 改属性: 
元素.setAttribute('属性名', '属性值');

// 改内容: 
元素.innerText = '新内容';
元素.innerHTML = '<span>123</span>'; // 不推荐

// 查
// 选择第一个匹配的元素
console.log( document.querySelector('#a') );
console.log( document.querySelector('.a') );
console.log( document.querySelector('div') );
console.log( document.querySelector('div:nth-child(1)') );

// 选择所有匹配的元素
console.log( document.querySelectorAll('div') ); // 打印页面中所有的div组成的伪数组

// 选body
console.log( document.body );

// 老年人写法(提过)
// #a 通过id选元素
console.log( document.getElementById('a') );
// .a 通过class类名选元素
console.log( document.getElementsByClassName('a') );
// div 通过标签名选元素
console.log( document.getElementsByTagName('div') );
```

## 操作属性 2

> 属性的增删改查

```html
<div id="a"></div>
<!-- 添加class属性, 属性值为b -->
<div id="a" class="b"></div>
```

```js
const el = document.querySelector('#a');

// 增
el.setAttribute('class', 'b'); // 属性名, 属性值

// 删
el.removeAttribute('id');

// 改
el.setAttribute('class', 'c'); // 属性名, 属性值

// 查
console.log( el.getAttribute('class') );
```

## 事件 5*

```js
// 绑定
元素.addEventListener('事件名', 等待执行的事件处理函数);

// 解绑
元素.removeEventListener('事件名', 等待执行的事件处理函数名);
```

### 计数器练习

```html
<div id="counter">999</div>
<button>+1</button>
```

```js
// 点击+1   #counter中的数字一直增加
const btn = document.querySelector('button');
const counter = document.querySelector('#counter');

btn.addEventListener('click', () => {
    counter.innerText++;
});
```

### 冒泡  5* / 捕获 0(面试<5%)

> 冒泡: 由内至外
>
> 捕获: 由外之内

### 事件对象 5*

#### 位置信息 5

```css
body {
    margin: 0;
}

.win {
    width: 200px;
    height: 200px;
    background-color: brown;
    margin: 3000px 100px;
}
```

```html
<div class="win"></div>
```

```js
const win = document.querySelector('.win');

win.addEventListener('click', (e) => {
    console.log(e);

    // 点击的位置 以自身元素的左上角为基准
    // console.log(e.offsetX, e.offsetY)

    // 点击的位置 以客户端窗口的左上角为基准
    // console.log(e.clientX, e.clientY);

    // 点击的位置 以页面的左上角为基准
    // console.log(e.pageX, e.pageY);
});
```

#### target

```js
div.addEventListener('click', (e) => {
    // 正在click的元素
    console.log(e.target);
});

input.addEventListener('input', (e) => {
    // 输入的值
    console.log(e.target.value);
});
```

## 表单元素 5

> 单标签: 
>
> 无innerText / innerHTML
>
> 输入值

### input:text/password

```html
<input type="text">
```

```js
const inp = document.querySelector('input');
console.log( inp.value ); // 输入的值
```

