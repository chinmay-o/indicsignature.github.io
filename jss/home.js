

$("#culture").click(function() {
    $('html, body').animate({
        scrollTop: $("#cultureContent").offset().top - 80},
        'slow');
});

$("#aboutUs").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutUsContent").offset().top - 80},
        'slow');
});
