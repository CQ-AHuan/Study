# JSON

> 一种数据形式
>
> null属于JSON范围内
>
> undefined, function 不算在JSON范围内

```json
{
    "a": 1,
    "b": 2,
    "c": 3
}
```

```js
const obj = {
    a: 1,
    b: 2,
};
```

## 转字符串(序列化)

```js
const str = JSON.stringify(obj); // '{"a":1,"b":2}'
```

## 从字符串的JSON转回JSON数据(解析)

```js
console.log( JSON.parse(str) );
```

