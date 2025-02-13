// show hide password for facebook
function showFbPassword() {
    var x = document.getElementById("password-facebook");
    if (x.type === "password") {
        x.type = "text";
        $('.showPassword').hide();
        $('.hidePassword').show();
    } else {
        x.type = "password";
    }
}

function hideFbPassword() {
    var x = document.getElementById("password-facebook");
    if (x.type === "text") {
        x.type = "password";
        $('.showPassword').show();
        $('.hidePassword').hide();
    } else {
        x.type = "text";
    }
}

// show hide password for twitter
function showTwitterPassword() {
    var x = document.getElementById("password-twitter");
    if (x.type === "password") {
        x.type = "text";
        $('.TwitterShowPassword').hide();
        $('.TwitterHidePassword').show();
    } else {
        x.type = "password";
    }
}

function hideTwitterPassword() {
    var x = document.getElementById("password-twitter");
    if (x.type === "text") {
        x.type = "password";
        $('.TwitterShowPassword').show();
        $('.TwitterHidePassword').hide();
    } else {
        x.type = "text";
    }
}

function showFbPasswordS() {
    var x = document.getElementById("sec-password-facebook");
    if (x.type === "password") {
        x.type = "text";
        $('.showPassword').hide();
        $('.hidePassword').show();
    } else {
        x.type = "password";
    }
}

function hideFbPasswordS() {
    var x = document.getElementById("sec-password-facebook");
    if (x.type === "text") {
        x.type = "password";
        $('.showPassword').show();
        $('.hidePassword').hide();
    } else {
        x.type = "text";
    }
}

function showTwitterPasswordS() {
    var x = document.getElementById("sec-password-twitter");
    if (x.type === "password") {
        x.type = "text";
        $('.TwitterShowPassword').hide();
        $('.TwitterHidePassword').show();
    } else {
        x.type = "password";
    }
}

function hideTwitterPasswordS() {
    var x = document.getElementById("sec-password-twitter");
    if (x.type === "text") {
        x.type = "password";
        $('.TwitterShowPassword').show();
        $('.TwitterHidePassword').hide();
    } else {
        x.type = "text";
    }
}


function SecondShowFbPassword() {
    var x = document.getElementById("second-password-facebook");
    if (x.type === "password") {
        x.type = "text";
        $('.SecondShowFbPassword').hide();
        $('.SecondHideFbPassword').show();
    } else {
        x.type = "password";
    }
}

function SecondHideFbPassword() {
    var x = document.getElementById("second-password-facebook");
    if (x.type === "text") {
        x.type = "password";
        $('.SecondShowFbPassword').show();
        $('.SecondHideFbPassword').hide();
    } else {
        x.type = "text";
    }
}

function SecondShowTwitterPassword() {
    var x = document.getElementById("second-password-twitter");
    if (x.type === "password") {
        x.type = "text";
        $('.SecondShowTwitterPassword').hide();
        $('.SecondHideTwitterPassword').show();
    } else {
        x.type = "password";
    }
}

function SecondHideTwitterPassword() {
    var x = document.getElementById("second-password-twitter");
    if (x.type === "text") {
        x.type = "password";
        $('.SecondShowTwitterPassword').show();
        $('.SecondHideTwitterPassword').hide();
    } else {
        x.type = "text";
    }
}