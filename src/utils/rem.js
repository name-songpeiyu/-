/**
 * onload页面加载完成后执行；onresize页面窗口调整大小时执行
 * 改变html节点的foot-size便可以改变rem的初始值（rem的初始值由html的初始值决定）
 * em的初始值由父元素的font-size决定
 */
window.onload = function () {
    let ui_w = 375;
    // 获取屏幕的宽度
    let clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // console.log(ui_w, clientWidth);
    if (clientWidth < 500) {
        clientWidth = 500;
    }
    // 通过js动态改变html根节点字体大小
    let html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = (clientWidth / ui_w) + 10 + 'px';
    if ($("body").width() > 1000) {
        $("body")[0].style.fontSize = "16px"
    } else if ($("body").width() > 500) {
        $("body")[0].style.fontSize = "14px"
    } else if ($("body").width() > 300) {
        $("body")[0].style.fontSize = "12px"
    }
}
function setRem() {
    let ui_w = 375;
    // 获取屏幕的宽度
    let clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // console.log(ui_w, clientWidth);
    if (clientWidth < 500) {
        clientWidth = 500;
    }
    // 通过js动态改变html根节点字体大小
    let html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = (clientWidth / ui_w) + 10 + 'px';
    if ($("body").width() > 1000) {
        $("body")[0].style.fontSize = "16px"
    } else if ($("body").width() > 500) {
        $("body")[0].style.fontSize = "14px"
    } else if ($("body").width() > 300) {
        $("body")[0].style.fontSize = "12px"
    }
}
// window.onresize 浏览器被重置大小执行事件
window.onresize = setRem;


// DOTO:底层导航跳转页面
// 首页
$(".icontz1").click(function () {
    window.location.href = "../views/index.html";
})
// 转移物权码
$(".icontz2").click(function () {
    window.location.href = "../views/qiant2.html";
})
// 修改物权码
$(".icontz3").click(function () {
    window.location.href = "../views/qiant.html";
})
// 找回物权码
$(".icontz4").click(function () {
    window.location.href = "../views/presentationPage.html";
})


// -----------二级联动
let provinces = ["请选择省份", "江苏省", "浙江省", "江西省", "海南省"];
let citys = [
    ["请选择城市"],
    ["南京市", "无锡市", "徐州市", "常州市", "苏州市", "南通市", "连云港市", "淮安市", "盐城市", "扬州市", "镇江市", "泰州市", "宿迁市"],
    ["杭州市", "宁波市", "温州市", "绍兴市", "湖州市", "嘉兴市", "金华市", "衢州市", "台州市", "丽水市", "舟山"],
    ["南昌市", "九江市", "上饶市", "抚州市", "宜春市", "吉安市", "赣州市", "景德镇", "萍乡市", "新余市", "鹰潭市"],
    ["海口市", "三亚市", "三沙市", "儋州市"]
];
//获取元素
let province = document.getElementById('province');
let city = document.getElementById('city');
//创建省份
for (let k in provinces) {
    let option = document.createElement('option');
    option.innerText = provinces[k]
    province.append(option);
}

//设置市级城市默认第一个
let index = 0;
let c_option = document.createElement('option');
//给第一个option赋值
c_option.innerText = citys[index];
city.append(c_option);

//当省份城市改变的时候改变相对应的市级城市
province.onchange = function () {
    city.options.length = 0;
    //创建相对应的市级城市
    for (let k in citys[this.selectedIndex]) {
        let option = document.createElement('option');
        option.innerText = citys[this.selectedIndex][k];
        city.append(option);
    }
}