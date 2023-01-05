// 1. 使用while(true) 打印10个1就不打了
var count = 0;
while (true) {
    console.log(1);
    count++;
    if (count >= 10) {
        break;
    }
}
