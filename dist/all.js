$(window).on('load', function(){
    $("#slider").nivoSlider({
        effect: 'random',
        directionNav: true,
    });
    $('.inner').masonry({
        itemSelector: '.inner-item',
        columnWidth: 218
    });
});

