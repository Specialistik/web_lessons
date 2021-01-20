$(document).ready(function(){
  $("#toggle").click(function(){
    $(".video").each(function(index){
      if(index != 2){
        if($(".video").get(index).paused){
          $(".video").get(index).play()
        } else {
          $(".video").get(index).pause()
        }
      }
      
    })
  })

})