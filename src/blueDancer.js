var BlueDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bluedancer"></span>');
};
BlueDancer.prototype = new Dancer();
BlueDancer.prototype.constructor = BlueDancer;

BlueDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
