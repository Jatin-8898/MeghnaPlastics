//window.alert("CAME");

/*$('#main-content').slimScroll({
//    width: '300px',
//    height: '500px',
//    size: '100px',
//    position: 'left',
//    color: '#ffcc00',
//    alwaysVisible: true,
//    distance: '20px',
//    start: $('#child_image_element'),
//    railVisible: true,
//    railColor: '#222',
//    railOpacity: 0.3,
//    wheelStep: 10,
//    allowPageScroll: false,
//    disableFadeOut: false
});*/
/*******************FOR THE PAGE LOAD TO SHOW SOME ANIMATIONS LIKE FADE-IN************/
$("#main").animsition({
    inClass: 'fade-in-down-lg',
    outClass: 'fade-out',
    inDuration: 3500,
    outDuration: 800,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: 'html',
    loadingClass: 'animsition-loading-1',
    loadingInner: '<img src="assets/images/Spinner-1.7s-177px.svg">',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'html',
    transition: function (url) {
        window.location.href = url;
    }
});


$(function (){
   new WOW().init();
    
    /*******************************************
    ***************WORK SECTION**************
    ********************************************/
    
    $('#gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
            enabled: true,  // By default it's false, so don't forget to enable it

            duration: 600,  // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        },
        gallery: {
                enabled: true  
        },
    });
    
    
    $('#clients-section').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 1030,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items : 2
            },
            480 : {
                items: 4
            },
            768 : {
                items : 6
            },
        }
    });
    
});


/******************COUNTING JS*************************8*/
$('.counter').countUp();
