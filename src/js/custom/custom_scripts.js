//custom scripts go here
$(".navi-button").on("click", function() {
    $(".overlay").addClass("open");
});

$(".close-button").on("click", function() {
    $(".overlay").removeClass("open");
});