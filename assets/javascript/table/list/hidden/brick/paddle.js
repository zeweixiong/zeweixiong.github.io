var Paddle=function(){
  var image=imageFromPath('paddle.png')
  var o={
    image: image,
    x: 100,
    y: 280,
    width: 100,
    height: 5,
    speed: 5,
  }
  o.moveLeft=function(){
    if (o.x>0){
      o.x-=o.speed        
    }
  }
  o.moveRight=function(){
    if (o.x+o.width<400){
      o.x+=o.speed 
    }
  }
  return o 
}