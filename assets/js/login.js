// $(function() {

//     $('#login-form-link').click(function(e) {
// 		$("#login-form").delay(100).fadeIn(100);
//  		$("#register-form").fadeOut(100);
// 		$('#register-form-link').removeClass('active');
// 		$(this).addClass('active');
// 		e.preventDefault();
// 	});

// 	$('#register-form-link').click(function(e) {
// 		$("#register-form").delay(100).fadeIn(100);
//  		$("#login-form").fadeOut(100);
// 		$('#login-form-link').removeClass('active');
// 		$(this).addClass('active');
// 		e.preventDefault();
// 	});

// });

function validateEmail($email) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,})?$/;
  	return emailReg.test($email);
}

$(function() {
	$("#activate-submit").click(function(){
		if($("#useractivation").val() != "" && $("#activationcode").val() != "" && validateEmail($("#useractivation").val())){
			$.ajax({
			  method: "POST",
			  url: "login.manager.php",
			  data: { activity: 'activate', email: $("#useractivation").val(), authCode: $("#activationcode").val() }
			}).done(function(msg) {
				if(msg !== ""){
					alert(msg);
				} else {
					window.location = "login.manager.php";
				}
				window.location = "login.manager.php";
			});
		}else{
			alert("Please fill all fields with valid data!");
		}
	});
});

$(function() {
	$("#login-submit").click(function(){
		if($("#username").val() != "" && $("#password1").val() != "" && validateEmail($("#username").val())){
			$.ajax({
			  method: "POST",
			  url: "login.manager.php",
			  data: { activity: 'login', username: $("#username").val(), password: $("#password1").val() }
			}).done(function(msg) {
				if(msg !== ""){
					alert(msg);
				} else {
					window.location = "login.manager.php?activity=success";
				}
			});
		} else {
			alert("Please fill all fields with valid data!");
		}
	});
});

$(function() {
	$("#register-submit").click(function(){
		if($("#first_name").val() != "" && $("#last_name").val() != "" && $("#email").val() != "" && $("#password2").val() != "" && validateEmail($("#email").val())){
			if($("#password2").val() === $("#confirm-password").val()){
				$.ajax({
				  method: "POST",
				  url: "login.manager.php",
				  data: { activity: 'register', first_name: $("#first_name").val(), last_name: $("#last_name").val(), email: $("#email").val(), password: $("#password2").val() }
				}).done(function(msg) {
					   alert(msg);
				});
			} else {
				alert("Passwords do not match!");
			}
			
		} else {
			alert("Please fill all fields with valid data!");
		}
	});
});

$(function() {
	$("#change-password").click(function(){
		if($("#email").val() != "" && validateEmail($("#email").val())){
			if($("#password1").val() === $("#password2").val()){
				$.ajax({
				  method: "POST",
				  url: "login.manager.php",
				  data: { activity: 'change.password', email: $("#email").val(), oldPassword: $("#password2").val(), newPassword: $('#password3').val() }
				}).done(function(msg) {
					   alert(msg);
				});
			} else {
				alert("Passwords do not match.");
			}
			
		} else {
			alert("Please check all fields contain correct data.");
		}
	});
});