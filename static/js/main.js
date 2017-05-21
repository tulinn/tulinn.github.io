$(document).ready(function() {
	$(".nav").find(".active").removeClass("active");

	var selectedNavbarIndex;	
    var path = window.location.pathname;
    if (path == "/") {
    	selectedNavbarIndex = 0;
    } else if (path == "/about/") {
    	selectedNavbarIndex = 1;
    }

    $(".nav").children().eq(selectedNavbarIndex).addClass("active");
});