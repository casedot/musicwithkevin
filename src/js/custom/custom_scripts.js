//custom scripts go here
$(".navi-button").on("click", function() {
    $(".overlay").addClass("open");
    return false;
});

$(".close-button").on("click", function() {
    $(".overlay").removeClass("open");
    return false;
});