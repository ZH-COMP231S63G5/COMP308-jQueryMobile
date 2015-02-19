function init() {
    console.log("mobile start");

}


//http://owlgraphic.com/owlcarousel/index.html
$(document).ready(function () {

    $("#owl-demo").owlCarousel({
        autoPlay: 2000,
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

});