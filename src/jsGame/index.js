// 定义生成图片路径函数
var imageFromPath = function(path) {
  var image = new Image()
  image.src = path
  return image
}

// 定义挡板模块
var Paddle = function() {
  var image = imageFromPath('paddle.png')
  var _o = {
    img: image,
    x: 150,
    y: 700,
    speed: 8,
  }
  _o.moveLeft = function() {
    _o.x -= _o.speed
  }
  _o.moveRight = function() {
    _o.x += _o.speed
  }
  return _o
}


var init = function() {

  // for util log
  var log = console.log.bind(console)

  // for make up canvas
  var canvas = document.querySelector('#isCanvas')
  var context = canvas.getContext('2d')

  // 挡板变量坐标
  var x = 150
  var y = 700
  var speed = 8

  // 按键状态
  var leftDown = false
  var rightDown = false

  // for make up image into canvas
  var paddle = Paddle()

  // event
  window.addEventListener('keydown', function(event){
    var _k = event.key
    if(_k == 'ArrowLeft') {
      leftDown = true
    }else if (_k == 'ArrowRight') {
      rightDown = true
    }
  })
  window.addEventListener('keyup', function(event){
    var _k = event.key
    if(_k == 'ArrowLeft') {
      leftDown = false
    }else if (_k == 'ArrowRight') {
      rightDown = false
    }
  })

  // timer
  setInterval(function(){
    // update x & y
    if (leftDown) {
      paddle.moveLeft()
    }else if(rightDown){
      paddle.moveRight()
    }
    // refresh draw
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(paddle.img, paddle.x, paddle.y)
  }, 1000/60)

}

init()