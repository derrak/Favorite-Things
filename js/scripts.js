$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    const fav1 = $("#item1").val().toUpperCase();
    const fav2 = $("#item2").val().toUpperCase();
    const fav3 = $("#item3").val().toUpperCase();

    const favArray = [fav1, fav2, fav3];

    favArray.sort();

    favArray.forEach(function(item) {
    $("ul").append("<li>"+item+"</li>");
    });
    
    //works
    //$(".dataEntry").css("display","none");

    $(".dataEntry").addClass("classWaitingToBeApplied");

  });
}); 

