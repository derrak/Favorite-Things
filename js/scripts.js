$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    const fav1 = $("#favorites1").val();
    const fav2 = $("#favorites2").val();
    const fav3 = $("#favorites3").val();

    const favArray = [fav1, fav2, fav3];
    console.log(favArray);
    console.log(favArray[1],favArray[0],favArray[2]);
  });


}); 

