$(document).ready(function(){
  var right = true;
  var width = 100;
  function moveSquare(){
    if(right === true){
      width += 2;
    } else{
      width -= 2;
    }
    $("#square")
      .css("left", width + "px")
  }
  

    setInterval(moveSquare, 30);
  
  $("body").keydown(function(e) {
    if(e.keyCode == 37) { // left
    right = false;
    }
    else if(e.keyCode == 39) { // right
     right = true;
    }
  });
  
  $(".dick").clone().css("left", "250px")
})