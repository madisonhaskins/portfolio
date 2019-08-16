
$(document).foundation({
  	orbit: {
		animation: 'fade', // Sets the type of animation used for transitioning between slides, can also be 'fade'
		timer_speed: 5000, // Sets the amount of time in milliseconds before transitioning a slide
		pause_on_hover: false, // Pauses on the current slide while hovering
		resume_on_mouseout: false, // If pause on hover is set to true, this setting resumes playback after mousing out of slide
		animation_speed: 500, // Sets the amount of time in milliseconds the transition between slides will last
		slide_number: false,
		navigation_arrows: true,
		swipe: true
  	}
});


// Scroll

function scrollToDiv(element,navheight){
	var offset = element.offset();
  	var offsetTop = offset.top;
  	var totalScroll = offsetTop-navheight;
  	$('body, html').animate({scrollTop: totalScroll}, 800);
}

$('#menu a, #scroll').click(function(e) {
	e.preventDefault();
  	var el = $(this).attr('href');
  	var elWrapped = $(el);
  	scrollToDiv(elWrapped,0);
});

$('.section').waypoint(function(direction) {
    var $active = $(this);
    if (direction === "up") {
    	$active = $active.prev();
    }
    if (!$active.length) {
    	$active.end();
    }
    var currentId = $active.attr('id');
    $('#menu a').removeClass('active');
    $('#menu a[href=#'+currentId+']').addClass('active');
    }, { offset: '30%' }
);


// Headroom

var navigationHeadroom = (function() {

    var docElem = document.documentElement,
        nav = document.querySelector("#navigation"),
        didScroll = false,
        changeHeaderOn = 1;

	var headroom = new Headroom(nav, {
	  	"tolerance": 0,
	  	"offset": 600,
	  	"classes": {
	    	"initial": "headroom",
	    	"pinned": "pinned",
	    	"unpinned": "unpinned"
	  	}
	});

    function init() {
        window.addEventListener("scroll", function(event) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout(scrollPage, 0);
            }
        }, false);
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
        	headroom.init();
        } else {
        	headroom.destroy();
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();


// Animate On Scroll

new AnimOnScroll(document.getElementById('grid'), {
	minDuration : 0.4,
	maxDuration : 0.6,
	viewportFactor : 0.2
});


// Open Project

$('.project-item').click(function () {

    var projectID = '#' + $(this).data('project-id');

    $('.project').hide();

    $(projectID).show();

    $('html, body').animate({
        scrollTop: $(projectID).offset().top - 76
    }, 600);

});

$('.project-close').click(function () {

    $(this).closest('.project').hide();

    $('html, body').animate({
        scrollTop: $('#mywork').offset().top - 76
    }, 600);

});


// Menu On Small Screen

$('#menu a').click(function() {
    $('#top-bar').removeClass('expanded');
});
