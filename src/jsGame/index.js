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
  var img = new Image()
  img.src = './paddle.png'
  img.onload = function() {
    context.drawImage(img, x, y)
  }

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

  setInterval(function(){
  // update x & y
    if (leftDown) {
      x -= speed

    }else if(rightDown){
      x += speed
    }
    // refresh draw
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, x, y)
  }, 1000/60)

}

init()