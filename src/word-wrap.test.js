const d3Selection = require('d3-selection');
const jsdom = require('jsdom');
const tape = require('tape');

const d3WordWrap = require('../');

function describe(description, suite) {
  function wrapper(runner) {
    suite(runner.test);
  }

  tape(description, wrapper);
}

describe('wordWrap', function(it) {
  const wrap = d3WordWrap.wordWrap();

  it('should return a new wrapper', function(test) {
    test.equal(typeof wrap, 'function');
    test.end();
  });
});

describe('wrap.width', function(it) {
  const wrap = d3WordWrap.wordWrap(5);

  it('should return the width', function(test) {
    const width = wrap.width();

    test.equal(width, 5);
    test.end();
  });

  it('should default to zero', function(test) {
    const width = d3WordWrap.wordWrap()
            .width();

    test.equal(width, 0);
    test.end();
  });

  it('should chain when used as a setter', function(test) {
    const width = wrap.width(9)
            .width();

    test.equal(width, 9);
    test.end();
  });
});

describe('wrap.height', function(it) {
  const wrap = d3WordWrap.wordWrap(5, 12);

  it('should return the height', function(test) {
    const height = wrap.height();

    test.equal(height, 12);
    test.end();
  });

  it('should default to zero', function(test) {
    const height = d3WordWrap.wordWrap()
            .height();

    test.equal(height, 0);
    test.end();
  });

  it('should chain when used as a setter', function(test) {
    const height = wrap.height(34)
            .height();

    test.equal(height, 34);
    test.end();
  });
});

describe('wrap() callable', function (it) {
  const wrap = d3WordWrap.wordWrap(200, 200);

  it('should replace inject tspan elements into text elements when a line is too long', function (test) {
    const dom = new jsdom.JSDOM('<!DOCTYPE html><div id="root"></div>').window.document;
    let selection = d3Selection.select(dom.body)
        .selectAll('svg:text')
        .data(['This is reasonably long string that should be wrapped on to a second line']);

    selection = selection.enter()
      .append('svg:text')
      .text(function (d) {return d;})
      .merge(selection);

    selection.call(wrap);

    test.end();
  });
});
