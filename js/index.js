
$(document).ready(function(){
  setBindings();
  $("#card").delay(1000).fadeIn(1000);
});

function setBindings(){
  $("nav a").click(function(e){
    e.preventDefault();
    var sectionID =  e.currentTarget.id + "Section";
    
    $("html body").animate({
      scrollTop: $("#" + sectionID).offset().top
    }, 1000)
  })
}