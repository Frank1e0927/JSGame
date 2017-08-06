var init = function() {

  // for util log
  var log = console.log.bind(console)

  // for make up canvas
  var canvas = document.querySelector('#isCanvas')
  var context = canvas.getContext('2d')

  // 挡板变量坐标
  var x = 150
  var y = 700
  // for make up image into canvas
  var img = new Image()
  img.src = './paddle.png'
  img.onload = function() {
    context.drawImage(img, x, y)
  }

  // event
  window.addEventListener('keydown', function(event){
    var _k = event.key
    if(_k == 'a') {
      x -= 10
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y)
    }else if (_k == 'd') {
      x += 10
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y)
    }
  })
  // clear canvas 
  context.clearRect(0, 0, canvas.width, canvas.height);
  // window.addEventListener('keyup', function(event){
    
  // })
}

init()