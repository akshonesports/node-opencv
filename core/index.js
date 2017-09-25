var core = require(require('../binary')() + '/core.node');

core.Matrix.addWeighted = function() {
  var out = new core.Matrix();
  var args = Array.from();
  if (args.length >= 5) {
    // not enough arguments, just let it fail
    args.splice(5, 0, out);
  }
  core.addWeighted.apply(global, args);
  return out;
};

module.exports = core;
