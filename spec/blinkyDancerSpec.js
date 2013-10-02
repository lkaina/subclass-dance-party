describe("blinkyDancer", function() {

  var blinkyDancer;
  var regularDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe("blueDancer", function() {

  var blueDancer;
  var regularDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blueDancer = new BlueDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blueDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blueDancer.$node, 'toggle');
    blueDancer.step();
    expect(blueDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blueDancer, "step");
      expect(blueDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(blueDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(blueDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe("hippieDancer", function() {

  var hippieDancer;
  var regularDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    hippieDancer = new HippieDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(hippieDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(hippieDancer.$node, 'toggle');
    hippieDancer.step();
    expect(hippieDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(hippieDancer, "step");
      expect(hippieDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(hippieDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(hippieDancer.step.callCount).to.be.equal(2);
    });
  });
});