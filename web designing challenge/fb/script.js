$(document).ready(function(){
    $("#signup-form").validate({
        rules:{

        fname:{
            required:true,
            minlength:4,
            maxlength:8
        },
        sname:{
            required:true
        },
        emailAddress:{
            required:true,
            email:true
        },
        password:{
            minlength:6
        },
        password_again:{
            equalTo:'#password'
        },
        day:{
            required:true
        },
        gender:{
            required:true
        }
    },
    messages:{
        fname:{
        required:'Enter firstname',
        minlength:'Enter atleast 4 characters'
    }}
    })
})
function checkPasswordStrength() {
    var number = /([0-9])/;
    var alphabets = /([a-zA-Z])/;
    var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
    if($('#password').val().length<6) {
    $('#password-strength-status').removeClass();
    $('#password-strength-status').addClass('weak-password');
    $('#password-strength-status').html("Weak (should be atleast 6 characters.)");
    } else {  	
    if($('#password').val().match(number) && $('#password').val().match(alphabets) && $('#password').val().match(special_characters)) {            
    $('#password-strength-status').removeClass();
    $('#password-strength-status').addClass('strong-password');
    $('#password-strength-status').html("Strong");
    } else {
    $('#password-strength-status').removeClass();
    $('#password-strength-status').addClass('medium-password');
    $('#password-strength-status').html("Medium (should include alphabets, numbers and special characters.)");
    }}}