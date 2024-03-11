$(document).ready(function() {
    $("#toggleMenu").click(function() {
        $("body").toggleClass('no-scroll');
        $(".burger-icon").toggle();
        $(".close-icon").toggle();
        $("header nav").toggleClass('show');
        $("#colorMode").toggleClass('show');
        $("header nav").css("opacity", function() {
            return $(this).css("opacity") === "0" ? "1" : "0";
        });
    });
});
