var BlueDancer = function(top, left, timeBetweenSteps) {
  this.className = 'bluedancer';

  Dancer.call(this, top, left, timeBetweenSteps);
  var red = Math.floor(Math.random()*255);
  var green = Math.floor(Math.random()*255);
  var blue = 255;
  this.$node.css({'border': '10px solid rgb('+red+','+green+','+blue});
};
BlueDancer.prototype = Object.create(Dancer.prototype);
BlueDancer.prototype.constructor = BlueDancer;

BlueDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);
  this.$node.animate({'opacity':'toggle'}, 200 + 800 * this.rand);
};

BlueDancer.prototype.lineUp = function() {
  var newLeft = $(window).width() - 30;
  Dancer.prototype.setPosition.call(this, this.top, newLeft);
};
