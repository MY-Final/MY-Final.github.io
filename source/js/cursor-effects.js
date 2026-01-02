// 简单可靠的鼠标拖尾效果
(function() {
  var hearts = [];
  var colors = ['#9370DB', '#BA55D3', '#8A2BE2', '#9932CC', '#8B008B'];
  
  function generateHeart(x, y) {
    var heart = document.createElement('div');
    heart.innerHTML = '♥';
    heart.style.position = 'fixed';
    heart.style.top = y + 'px';
    heart.style.left = x + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '999999';
    heart.style.fontSize = (10 + Math.random() * 10) + 'px';
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.opacity = 1;
    heart.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
    document.body.appendChild(heart);
    
    setTimeout(function() {
      heart.style.transform = 'translateY(-50px) rotate(' + (Math.random() * 90 - 45) + 'deg)';
      heart.style.opacity = 0;
    }, 10);
    
    setTimeout(function() {
      heart.remove();
    }, 800);
  }
  
  var lastX = 0;
  var lastY = 0;
  var throttleTimer;
  
  function throttle(callback, time) {
    if (throttleTimer) return;
    throttleTimer = setTimeout(function() {
      callback();
      throttleTimer = null;
    }, time);
  }
  
  document.addEventListener('mousemove', function(e) {
    // 计算鼠标移动的距离
    var distance = Math.sqrt(Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2));
    
    // 如果移动距离大于一定阈值，或者通过节流控制，则生成爱心
    if (distance > 15 || !throttleTimer) {
      throttle(function() {
        generateHeart(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
      }, 15); // 降低至15毫秒，提高流畅度
    }
  });
})(); 