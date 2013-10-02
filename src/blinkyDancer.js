var BlinkyDancer = function(top, left, timeBetweenSteps) {
  this.className = 'blinkydancer';
  Dancer.call(this, top, left, timeBetweenSteps);
  var red = 255;
  var green = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*255);
  this.$node.css({'border': '10px solid rgb('+red+','+green+','+blue});
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle({'opacity': 1});
  this.$node.animate({'width': 50, 'height':45, 'border-radius':20}, Math.random()*500 + 500);
};

BlinkyDancer.prototype.lineUp = function() {
  var newTop = $(window).height() - 50;
  Dancer.prototype.setPosition.call(this, newTop, this.left);
};

