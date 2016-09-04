var currDiv = "#home";
$(document).ready(function(){
    $("#home").show();
    $("#aboutme").hide();
    $("#displayHome").click(function(){
        $(currDiv).hide();
        $("#home").show();
        currDiv = "#home";
    });
    $("#displayAbout").click(function(){
          $(currDiv).hide();
          $("#aboutme").show();
          currDiv = "#aboutme";
      });
});