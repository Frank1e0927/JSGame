// 定义生成图片路径函数
var imageFromPath = function(path) {
  var image = new Image()
  image.src = path
  return image
}

// 定义生成canvas模块
var Game = function() {
  var g = {
    actions: {},
    keydowns: {},
  }
  // for make up canvas
  var canvas = document.querySelector('#isCanvas')
  var context = canvas.getContext('2d')
  g.canvas = canvas 
  g.context = context

  
  // events
  /**
   * 监听键盘注册事件，
   * 如果按下键盘，那么让g的keydowns对象里面存储一个对应
   * 事件的键名，并且对应的值置为true
   * 
   * 如果释放键盘，那么让g的keydowns对象里面存储的对应的
   * 事件的键名的值更改为false
   */
  window.addEventListener('keydown',function(event){
    g.keydowns[event.key] = true
  })
  window.addEventListener('keyup',function(event){
    g.keydowns[event.key] = false
  })

  // 按键事件注册
  /**
   * 按键的事件注册，把key和callback传入，使得g的action键名为按下的key
   * 并且对应的值成为传入的回调函数（也就是要执行的代码）
   */
  g.registerAction = function(key, callback) {
    g.actions[key] = callback
  }
  // timer
  setInterval(function(){
    // update event
    var actions = Object.keys(g.actions)

    for (var i = 0; i < actions.length; i++) {
      var key = actions[i];
      if(g.keydowns[key]) {
        // 如果按键被按下，调用注册的action
        g.actions[key]()
      }
    }
    // update x & y
    g.update()
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // refresh draw
    g.draw()
  }, 1000/60)
  return g
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
  // 生成canvas模块
  var game = Game()

  // for make up image into canvas
  var paddle = Paddle()

  game.registerAction('ArrowLeft' , function(){
    paddle.moveLeft()
  })
  game.registerAction('ArrowRight' , function(){
    paddle.moveRight()
  })
  game.update = function() {
  }
  game.draw = function() {
    game.context.drawImage(paddle.img, paddle.x, paddle.y)
  }

  // timer
  // setInterval(function(){
  //   // update x & y
  //   if (leftDown) {
  //     paddle.moveLeft()
  //   }else if(rightDown){
  //     paddle.moveRight()
  //   }
  //   // refresh draw
  //   context.clearRect(0, 0, canvas.width, canvas.height);
  //   context.drawImage(paddle.img, paddle.x, paddle.y)
  // }, 1000/60)

}

init()