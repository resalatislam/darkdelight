(function ($) {
    "use strict";

    $(document).ready(function(){
        $('.sider').bxSlider();
        $('#main_header_area').meanmenu({
            meanMenuContainer:'#mobile_menu',
            meanScreenWidth:720,});
    });
}(jQuery));
