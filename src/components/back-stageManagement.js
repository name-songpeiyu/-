//排他
for (let a of $(".li")) {
    a.onclick = function () {
        for (let b of $(".li")) {
            $(b).removeClass("list");
        }
        $(this).addClass("list");
    }
}
function hut1() {
    $("iframe").attr("src", "../views/ht1.html");
}
function hut2() {
    $("iframe").attr("src", "../views/ht3.html");
}