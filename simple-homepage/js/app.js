$(document).ready(function() {
    $("#toggleMenu").click(function() {
        $(".burger-icon").toggle();
        $(".close-icon").toggle();
        $("header nav").toggleClass('show')
        $("header nav").css("opacity", function() {
            return $(this).css("opacity") === "0" ? "1" : "0";
        });
    });
});
