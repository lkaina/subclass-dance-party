var HippieDancer = function(top, left, timeBetweenSteps) {
  this.className = 'hippiedancer';
  Dancer.call(this, top, left, timeBetweenSteps);
  var red = Math.floor(Math.random()*255);
  var green = 255;
  var blue = Math.floor(Math.random()*255);
  this.$node.css({'border': '10px solid rgb('+red+','+green+','+blue});
};

HippieDancer.prototype = Object.create(Dancer.prototype);
HippieDancer.prototype.constructor = HippieDancer;

HippieDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var newTop = -1;
  var newLeft = -1;
   while(!(newTop > 0 && newTop < $(window).height())){
    newTop = this.top+100*(Math.random()*2-1);
  }
  while(!(newLeft > 0 && newLeft < $(window).width())){
    newLeft = this.left+100*(Math.random()*2-1);
  }
  Dancer.prototype.setPosition.call(this, newTop, newLeft);
};

HippieDancer.prototype.lineUp = function() {
  Dancer.prototype.stopStep.call(this);
  var newTop = 60;
  this.$node.stop();
  Dancer.prototype.setPosition.call(this, newTop, this.left);
};