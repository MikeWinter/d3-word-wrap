export default function(width, height) {
  var _height = height || 0,
      _width = width || 0;

  function wrap(selection) {
    let firstNode = selection.nodes()[0];
    for (let p in firstNode) {
      console.log(p + ': ' + firstNode[p]);
    }
    // console.log('computed: ' + selection.nodes()[0].getComputedTextLength);
    // getClientRects
    // getBoundingClientRect
    console.log(firstNode);
  }

  wrap.width = function(width) {
    return (arguments.length === 0)
            ? _width
            : (_width = width, wrap);
  };

  wrap.height = function(height) {
    return (arguments.length === 0)
            ? _height
            : (_height = height, wrap);
  };

  return wrap;
};
