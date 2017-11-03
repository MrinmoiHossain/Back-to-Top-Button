//Back to Top Scroll
$(document).ready(function(){
    $("#scrollTop").hide(),
        $(window).scroll(function(){
            $(this).scrollTop()>300?$("#scrollTop").fadeIn(500):$("#scrollTop").fadeOut(500)
        }),
        $("#scrollTop").click(function(t){
            return t.preventDefault(),
                $("html, body").animate({scrollTop:0},1e3),!1
        })
});
