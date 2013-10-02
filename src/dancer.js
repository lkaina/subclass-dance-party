var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.rand = Math.random();
  this.size = Math.random()*20+5;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="'+this.className+'"></span>');
  this.setPosition(top, left);
  this.step();
  this.timer = null;
};

Dancer.prototype.step = function(){
  var dancer = this;
  this.timer = setTimeout(function(){
    dancer.step();
    dancer.findClosest();
  }, this.timeBetweenSteps);
};

Dancer.prototype.stopStep = function(){
  clearTimeout(this.timer);
};

Dancer.prototype.getPosition = function(){
  return [this.top, this.left];
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.top = top;
  this.left = left;
  this.$node.animate(styleSettings,{queue:false}, 500);
};

Dancer.prototype.findClosest = function(){
  var nodeList = window.dancers;
  var minDist = Math.sqrt($(window).width()^2+$(window).height()^2);
  var closestNode = null;
  for(var i = 0; i < nodeList.length; i++){
    if(nodeList[i]!== this){
      var distToNode = Math.sqrt(Math.pow((this.left-nodeList[i].left),2)+Math.pow((this.top-nodeList[i].top),2));
      if (distToNode < minDist){
        closestNode = nodeList[i];
        minDist = distToNode;
      }
    }
  }
  if (closestNode && minDist < 100){
    closestNode.setPosition($(window).height(),$(window).width());
    closestNode.$node.stop();
  }
  else {
    return;
  }
};

