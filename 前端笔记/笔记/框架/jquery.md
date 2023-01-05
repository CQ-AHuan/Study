# jQuery 1

> 操作DOM的

```js
// 使用原生js选择#a
const a = document.querySelector('#a');

// 使用jQuery选择#a
const a = $('#a');
```

## 元素

```js
// 增
const el = $('<div id="abc">123</div>');
el.appendTo(jq父元素);

// 删
el.remove();

// 改内容
el.text('abc');
el.html('<div>111</div>');

// 查(选择器)
console.log( $('css选择器') );

// 查(内容)
console.log( el.text() );
```

## 元素属性

```js
// 增 / 改
// 1.
$('#a').attr('属性名', 属性值);
// 2.
$('#a').attr({
    属性名1: 属性值1,
    属性名2: 属性值2,
});

// 删
$('#a').removeAttr('id');

// 查
console.log( $('#a').attr('属性名') );
```

## 事件

```js
// 绑定
$('button').on('click', () => {
    // 点击时要做的事
});

// 解绑
$('button').off('click', 函数名);
```

## 表单

```js
// 取input:text的值
// js
console.log( el.value );
// jq
// 只取第一个
console.log( $('input').val() );

// 赋值
// 隐式迭代(将所有匹配的元素都赋值了)
$('input').val('hello world!');
```

