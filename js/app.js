
// Open Project

$('.project-item').click(function () {

    var projectID = '#' + $(this).data('project-id');

    $('.project').hide();

    $(projectID).show();

    $('html, body').animate({
        scrollTop: $(projectID).offset().top - 76
    }, 1);

});

$('.project-close').click(function () {

    $(this).closest('.project').hide();

    $('html, body').animate({
        scrollTop: $('#mywork').offset().top - 76
    }, 1);
});


// Menu On Small Screen
$('#menu a').click(function() {
    $('#top-bar').removeClass('expanded');
});
