//正则
let ifname = /^[a-z]{5,8}$/;
let ifpsw = /^\w{6,16}$/;
let username = document.getElementById("username");
let password = document.getElementById("password");
let confirms = document.getElementById("confirm");
username.oninput = function () {
    if (ifname.test(username.value)) {
        $("#shuname").css("opacity", "0");

    } else {
        $("#shuname").css("opacity", "1");

    }
}
password.oninput = function () {
    if (ifpsw.test(password.value)) {
        $("#shupass").css("opacity", "0");
    } else {
        $("#shupass").css("opacity", "1");
    }
}
confirms.oninput = function () {
    if (password.value == confirms.value) {
        $("#shucon").css("opacity", "0");
    } else {
        $("#shucon").css("opacity", "1");
    }
}


// 创建类
class Val {
    constructor(user, psw, time, times, slt) {
        this.user = user;
        this.psw = psw;
        this.time = time;
        this.times = times;
        this.slt = slt;
    }
}
//封装弹窗
const _window = $('#window')[0];
win = (con) => {
    _window.style.top = '20px'
    _window.style.opacity = '1'
    _window.innerText = con;
    setTimeout(function () {
        _window.style.top = '-50px'
        _window.style.opacity = '0'
    }, 1300)
}

//输入错误则无法点击
$(".loginbut").click(function () {
    if (ifname.test(username.value) && ifpsw.test(password.value) && password.value == confirms.value) {
        let register = new Val($("#username").val(), hex_md5($("#password").val()), getTimer(), null, $("select").val());
        $.post("admin/zhuche", JSON.stringify(register), function (a) {
            if (a == 1) {
                win("用户名重复！")
            } else {
                $(".login").css("display", "none");
                $(".logup").css("display", "block");
                win("注册成功！");
            }
        })
    } else {
        win("输入不合法");
    }
})

//登录
$(".logupbut").click(function () {
    let logupdat = new Val($(".username").val(), hex_md5($(".password").val()), null, getTimer(), null);
    if ($(".username").val() == "" || $(".password").val() == "") {
        win("请填写内容");
    } else {
        $.post("logupbut/login", JSON.stringify(logupdat), function (a) {
            win(a);
        })
    }
})
// 登录 注册 隐藏与否  （有无账号）


$(".logupbut1").click(function () {
    $(".login").css("display", "none");
    $(".logup").css("display", "block");
})
$(".loginbut1").click(function () {
    $(".login").css("display", "block");
    $(".logup").css("display", "none");
})