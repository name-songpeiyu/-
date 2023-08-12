Mock.mock("admin/zhuche", "post", function (dat) {
    let dats = JSON.parse(dat.body);
    if (localStorage.admin == "" || localStorage.admin == undefined) {
        localStorage.admin = JSON.stringify([dats]);
    } else {
        let admins = JSON.parse(localStorage.admin);
        let bool = true;
        for (let a of admins) {
            if (a.user == dats.user) {
                bool = false;
                return 1;
            }
        }
        if (bool == true) {
            admins.push(dats);
            localStorage.admin = JSON.stringify(admins);
        }
    }
})
//登录
Mock.mock("logupbut/login", "post", function (datas) {
    let dat1 = JSON.parse(datas.body);
    let admins = JSON.parse(localStorage.admin);
    let selt = '';
    let bol = false;
    if (admins == '' || admins == undefined) {
        return "先注册后登录"
    } else {
        for (let a of admins) {
            if (a.user == dat1.user && a.psw == dat1.psw) {
                selt = a.slt;
                bol = true;
                a.times = dat1.times;
                break;
            }
        }
        if (bol) {
            localStorage.admin = JSON.stringify(admins);
            if (selt == 1) {
                window.location.href = '../views/index.html';
                // 超级管理员管理页面显示开关；
                localStorage.SuperAdmin = 'false';
                return "用户登陆成功！"
            } else if (selt == 2) {
                window.location.href = '../views/back-stageManagement.html';
                // 超级管理员管理页面显示开关；
                localStorage.SuperAdmin = 'false';
                return "管理员登陆成功！"
            }

        } else if (dat1.user == 0 && dat1.psw == hex_md5("0")) {
            window.location.href = '../views/back-stageManagement.html';
            // 超级管理员管理页面显示开关；
            localStorage.SuperAdmin = 'true';
            return "超级管理员登陆成功";
        }
    }
})