var Ball=function(){
  var image=imageFromPath('ball.png')
  var o={
    image: image,
    x: 145,
    y: 265,
    width: 15,
    height: 15,
    speedX: 5,
    speedY: -5,
    fired: false,
  }
  o.fire=function(){
    o.fired=true
  }
  o.move=function(){
    if(o.fired){
      // log('move')
      if(o.x<0 || o.x+o.width>400){
        o.speedX*=-1
      }
      if(o.y<0 || o.y+o.height>600){
        o.speedY*=-1
      }
      o.x+=o.speedX
      o.y+=o.speedY
    }
  }
  o.checkCollide=function(o2){
    if (o.y+o.height>o2.y && o.y<o2.y+o2.height){
      if (o.x+o.width>o2.x && o.x<o2.x+o2.width){
        o.speedY*=-1
        return true
      }
    }
    return false
  }
  return o 
}