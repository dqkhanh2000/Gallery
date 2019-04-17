$(document).ready(function(){
    var tt1 = "hide";
        tt2 = "hide";
        ttcheck = "hide";
    $("#icon-pass").click(function () {
        if(tt1=="hide"){
            $('.pass').prop('type','text');
            $("#icon-pass").prop('class','far fa-eye');
            tt1="show";
        }
        else{
            $('.pass').prop('type','password');
            $("#icon-pass").prop('class','far fa-eye-slash');
            tt1="hide";
        }});
       $("#icon-confirm-pass").click(function () {
        if(tt2=="hide"){
            $('.confirm-pass').prop('type','text');
            $("#icon-confirm-pass").prop('class','far fa-eye');
            tt2="show";
        }
        else{
            $('.confirm-pass').prop('type','password');
            $("#icon-confirm-pass").prop('class','far fa-eye-slash');
            tt2="hide";
        }
        });
    $('.check-box').click(function(){
        if(ttcheck=="hide"){
            ttcheck="show";
        }else{
            ttcheck="hide";
        }
    });
    $('.button').click(function (event) {
        if(ttcheck=="hide"){
            alert("Vui lòng chấp nhận điều khoản!!");
            event.preventDefault();
        }
    });  
});
            