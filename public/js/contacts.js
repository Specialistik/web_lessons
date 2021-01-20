$(document).ready(function(){
  var height = 100;
  var width = 100;
  function moveSquare(){
    height++;
    width++;
    $("#square")
      .css("top", height + "px")
      .css("left", width + "px")
  }
  
  $("#square").click(function(){
    setInterval(moveSquare, 30);
  })  
})