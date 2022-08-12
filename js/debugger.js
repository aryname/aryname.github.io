$(document).keydown(function(a) {
    return 123 != a.keyCode && (a.ctrlKey && (85 === a.keyCode || 83 === a.keyCode || 65 === a.keyCode) ? !1 : a.ctrlKey && a.shiftKey && (73 === a.keyCode || 67 === a.keyCode) ? !1 : void 0)
}), $(document).ready(function() {
    $(document).keydown(function(a) {
        !0 == a.ctrlKey && ("118" == a.which || "86" == a.which) && a.preventDefault()
    })
}), $("body").on("contextmenu", function() {
    return !1
}), ! function() {
    function a(a) {
        isNaN(+a) && (a = 100);
        var c = +new Date;
        debugger;
        var e = +new Date;
        (isNaN(c) || isNaN(e) || e - c > a) && alert("WHAT AR U DOING???")
    }
    window.attachEvent ? "complete" === document.readyState || "interactive" === document.readyState ? (a(), window.attachEvent("onresize", a), window.attachEvent("onmousemove", a), window.attachEvent("onfocus", a), window.attachEvent("onblur", a)) : setTimeout(argument.callee, 0) : (window.addEventListener("load", a), window.addEventListener("resize", a), window.addEventListener("mousemove", a), window.addEventListener("focus", a), window.addEventListener("blur", a))
}();
