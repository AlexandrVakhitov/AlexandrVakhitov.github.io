jQuery(document).ready(function(){

    $(function() {
        $(".ellipse-png").click(function() {
            $(".form-content").css('opacity', '1');
        })
    });

    $(function() {
        $(".x-png").click(function() {
            $(".form-content").css('opacity', '0');
        })
    });
});