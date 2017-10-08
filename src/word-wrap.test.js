var tape = require('tape'),
    d3WordWrap = require('../');

function describe(description, suite) {
  function wrapper(runner) {
    suite(runner.test);
  }

  tape(description, wrapper);
}

describe('wordWrap', function(it) {
  var wrap = d3WordWrap.wordWrap();

  it('should return a new wrapper', function(test) {
    test.equal(typeof wrap, 'function');
    test.end();
  });
});

describe('wrap.width', function(it) {
  var wrap = d3WordWrap.wordWrap(5);

  it('should return the width', function(test) {
    var width = wrap.width();

    test.equal(width, 5);
    test.end();
  });

  it('should default to zero', function(test) {
    var width = d3WordWrap.wordWrap()
            .width();

    test.equal(width, 0);
    test.end();
  });

  it('should chain when used as a setter', function(test) {
    var width = wrap.width(9)
            .width();

    test.equal(width, 9);
    test.end();
  });
});

describe('wrap.height', function(it) {
  var wrap = d3WordWrap.wordWrap(5, 12);

  it('should return the height', function(test) {
    var height = wrap.height();

    test.equal(height, 12);
    test.end();
  });

  it('should default to zero', function(test) {
    var height = d3WordWrap.wordWrap()
            .height();

    test.equal(height, 0);
    test.end();
  });

  it('should chain when used as a setter', function(test) {
    var height = wrap.height(34)
            .height();

    test.equal(height, 34);
    test.end();
  });
});
