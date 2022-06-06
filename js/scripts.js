$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    const fav1 = $("#favorites1").val();
    const fav2 = $("#favorites2").val();
    const fav3 = $("#favorites3").val();

    const favArray = [fav1, fav2, fav3];
    const newArray = [];
    newArray.push(favArray[1],favArray[0],favArray[2]);

    $(".favorite2").append(newArray[0]);
    $(".favorite1").append(newArray[1]);
    $(".favorite3").append(newArray[2]);
  });
}); 

