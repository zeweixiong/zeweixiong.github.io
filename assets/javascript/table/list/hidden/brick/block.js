var Block=function(position){
  // position is in the form of [0,0]
  var p=position
  var image=imageFromPath('block.png')
  var o={
    image: image,
    x: p[0],
    y: p[1],
    width: 50,
    height: 20,
    alive: true,
    lives: p[2] || 1,
  }
  o.kill=function(){
    o.lives--
    if (o.lives<1){
      o.alive=false
    }
  }
  return o 
}