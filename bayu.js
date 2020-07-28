// open owl-carousel-tabs
$(document).ready(function () {
    $('.owl-carousel.owl-contract-scheme').owlCarousel({
        // loop: true,
        margin: 30,
        nav: true,
        dots: true,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            565:{
                items: 2
            },
            767: {
                items: 3,
            },
            1200: {  
                items: 4
            },
            1600: {
                items: 5
            }
        }
    });
});
// close owl-carousel-tabs

// open tab month
$(".box-month").click(function(e){
    if ($("#tab-month").hasClass("active")) {
        $("#tab-month").removeClass("active");
      } else {
        $("#tab-month").addClass("active");
      }
});
// close tab momth

// open pop-up contract scheme confirmation new top open
$(".tab-content-list .button").click(function(e){
    $("#boxContractSchemeConfirmation").addClass("active");
});
// close pop-up contract scheme confirmation new top open

// open pop-up contract scheme confirmation new top close
$(".box-contract-scheme-confirmation .button.back").click(function(e){
    $("#boxContractSchemeConfirmation").removeClass("active");
});
// close pop-up contract scheme confirmation new top close

// open pop-up contract scheme successful new top open
$(".box-contract-scheme-confirmation .button.sign-up").click(function(e){
    $("#boxContractSchemeConfirmation").removeClass("active");
    $("#boxContractSchemeSuccessful").addClass("active");
});
// close pop-up contract scheme successful new top open

// open pop-up contract scheme successful new top close
$(".box-contract-scheme-successful .button.cx-close").click(function(e){
    $("#boxContractSchemeSuccessful").removeClass("active");
});
// close pop-up contract scheme confirmation new top close