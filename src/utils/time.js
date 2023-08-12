function getTimer() {
    // 对象实例化
    let time = new Date();

    let year = time.getFullYear();
    // 1月到12月(0-11)
    let month = time.getMonth() + 1;
    let dates = time.getDate();

    // 周日-周六(0-6) 刚好对应数字下标
    let day = time.getDay();
    let arr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    // 小于10分钟前面补零
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return year + "-" + month + "-" + dates + " " + hours + ':' + minutes + ':' + seconds + ' ' + arr[day];
}