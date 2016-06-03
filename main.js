$(document).ready(function () {
    $('#menu').click(function() {
        $("#overlay").css("visibility", "visible");
    });

    $('#close').click(function() {
        $('#overlay').css("visibility", "hidden");
    })
});