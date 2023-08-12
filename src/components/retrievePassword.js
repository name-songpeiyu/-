window.onload = function () {
    $.post("yemian/xuanran", function (a) {
        console.log(a);
    })
}
$(".md5").click(function () {
    window.location.href = "https://www.somd5.com/";
})