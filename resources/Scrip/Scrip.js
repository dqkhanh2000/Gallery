$(document).ready(function(){
    var lg = false;
    if(lg==false){
        
        $("#login-modal").modal({bakdrop:"static"});
        $("#login-modal").on('shown.bs.modal', function () {
            $("#btn-login").click(function(event){
                event.preventDefault();
           });
           $('.navbar').hide();
        });
    }
    $("#btn-login").click(function(){
        $('.navbar').show();
    }); 
    $(document).on("click",".content-img",function(event) {
        var linkContentImage = $(this).attr("src");
        $(".detail-img").attr("src", linkContentImage);
        $(".showdetail").css("display", "block");
        $("html, body").animate({scrollTop: 100}, 500);
    }); 
    $(window).scroll(function(event) {
        var pos_body = $('html,body').scrollTop() + $(window).height();
        var  height  = parseInt($(".col-xl-3").height() + $(".showdetail").height());
        if(pos_body - 50 <= height && pos_body + 50 >= height){
           for(var i = 1; i<=4; i++){
            var src = Math.floor(Math.random() * 50) + 1;
            var add = $('<img src="" alt="" class="content-img justadd">').attr("src", "./resources/img/"+src+".jpg");
            var className = '.column-'+i;
            $(className).append(add);
            $(".justadd").hide().show(1000);
            $(".justadd").attr("class", "content-img");
           }
        }
        
    });
});