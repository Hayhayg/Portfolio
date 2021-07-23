$(".goHome").click(function() {
    $('html,body').animate({
        scrollTop: $(".home").offset().top},
        'slow');
});
$(".goAbout").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
});$(".goPortfolio").click(function() {
    $('html,body').animate({
        scrollTop: $(".portfolio").offset().top},
        'slow');
});$(".goContact").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact").offset().top},
        'slow');
});