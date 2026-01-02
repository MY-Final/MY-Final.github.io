// 点击爱心效果
(function(window, document) {
  function createHeart(event) {
    var d = document.createElement("div");
    d.className = "click-heart";
    var colors = ["#9370DB", "#BA55D3", "#8A2BE2", "#9932CC", "#8B008B"];
    var color = colors[Math.floor(Math.random() * colors.length)];
    
    d.style.cssText = "position:fixed;left:" + 
      (event.clientX - 10) + "px;top:" + 
      (event.clientY - 10) + "px;width:20px;height:20px;z-index:9999;color:" + 
      color + ";font-size:20px;transform:rotate(45deg);pointer-events:none;";
    
    var heart = document.createElement("div");
    heart.innerHTML = "♥";
    heart.style.cssText = "position:absolute;left:0;top:0;";
    d.appendChild(heart);
    document.body.appendChild(d);
    
    setTimeout(function() {
      d.style.transform = "translateY(-100px) rotate(45deg) scale(2)";
      d.style.opacity = "0";
      d.style.transition = "all 1s ease-in-out";
      
      setTimeout(function() {
        document.body.removeChild(d);
      }, 1000);
    }, 10);
  }
  
  // 定义样式
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = 
    ".click-heart{opacity:1;}";
  document.head.appendChild(style);
  
  // 原始点击事件
  var oldClick = window.onclick;
  
  window.onclick = function(event) {
    createHeart(event);
    if (typeof oldClick === "function") {
      oldClick.apply(this, arguments);
    }
  };
  
})(window, document); 