console.log('html connected')

function makeNewPos(){
  let h = $(window).height() - 50;
  let w = $(window).width() -50;
  let nh = h * Math.random();
  let nw = w * Math.random();
  return [nw,nh]
}

function animateDiv(){
  $("#piece1").parent().css({position: 'absolute'});
  $("#piece1").css({position:'absolute'});
  $("#piece1").animate({
    top: makeNewPos()[1],
    left: makeNewPos()[0]
  }, 1000, animateDiv)
}