Mock.mock("yemian/xuanran", "post", function () {
    if (localStorage.admin == '' && localStorage.admin == undefined) {
        return "请登陆注册先！"
    } else {
        let admins = JSON.parse(localStorage.admin);
        let s = `<tr>
        <th>用户名</th>
        <th>密码</th>
        <th>注册时间</th>
        <th>最后登录时间</th>
    </tr>`;
        for (let a of admins) {
            s += ` <tr>
            <td>${a.user}</td>
            <td>${a.psw}</td>
            <td>${a.time}</td>
            <td> ${a.times == undefined ? "未登录" : a.times}</td>
        </tr>`
        }
        $("table").html(s);
    }

})