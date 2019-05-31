(function($) {
 "use strict";

    $(document).ready(function(){

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').on("click",function(){
            $("html, body").animate({ scrollTop: 0 }, 300);
            return false;
        });
    });
})(jQuery);


$(window).scroll(function() {
    $edit_mode = document.getElementById('oe_main_menu_navbar');
    if ($(this).scrollTop() > 100){
        if ($edit_mode) {
            $('header div').removeClass("sticky");
        }
        else{
            $('header div').addClass("sticky");
        }
    }
    else{
        $('header div').removeClass("sticky");
  }
});