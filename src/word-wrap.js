export default function(width, height) {
  var _height = height || 0,
      _width = width || 0;

  function wrap(selection) {
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
