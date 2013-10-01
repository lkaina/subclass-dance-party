var BlueDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = Object.create(Dancer.prototype);
  Dancer.call(this, top, left, timeBetweenSteps);
  // return blinkyDancer;
};

//BlueDancer.prototype = Object.create(Dancer.prototype);
BlueDancer.prototype = new Dancer();
BlueDancer.prototype.constructor = BlueDancer;

BlueDancer.prototype.step = function() {
  // debugger;
  // call the old version of step at the beginning of any call to this new version of step
  //console.log('blinky this: ', this);
  Dancer.prototype.step.call(this);
  // console.log('toggle');
  //debugger;
  console.log("this: ", this);
  console.log("$node: ", this.$node);
  this.$node.toggle();
};

// function makeDancer() {
//   return new BlueDancer();
// }