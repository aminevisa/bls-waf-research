var _0x2c0f1e = require("./832.js");
require("./116.js");
require("./764.js");
require("./563.js");
(function () {
  if (_0x2c0f1e.prime) {
    module.exports = _0x2c0f1e.prime;
  } else {
    var _0x10188c = module.exports = _0x2c0f1e.prime = _0x2c0f1e.prime || {};
    var _0x373e8a = _0x2c0f1e.jsbn.BigInteger;
    var _0x312ffc = [6, 4, 2, 4, 2, 4, 6, 2];
    var _0x48709b = new _0x373e8a(null);
    _0x48709b.fromInt(30);
    function _0x2d2329(_0x391061, _0x22ba53) {
      return _0x391061 | _0x22ba53;
    }
    _0x10188c.generateProbablePrime = function (_0x4df063, _0x81750, _0x20978b) {
      if (typeof _0x81750 == "function") {
        _0x20978b = _0x81750;
        _0x81750 = {};
      }
      var _0x51f8ad = (_0x81750 = _0x81750 || {}).algorithm || "PRIMEINC";
      if (typeof _0x51f8ad == "string") {
        _0x51f8ad = {
          name: _0x51f8ad
        };
      }
      _0x51f8ad.options = _0x51f8ad.options || {};
      var _0x5cfbf2 = _0x81750.prng || _0x2c0f1e.random;
      var _0x44eca3 = {
        nextBytes: function (_0x21bc11) {
          var _0x5f440b = _0x5cfbf2.getBytesSync(_0x21bc11.length);
          for (var _0x4c61fc = 0; _0x4c61fc < _0x21bc11.length; ++_0x4c61fc) {
            _0x21bc11[_0x4c61fc] = _0x5f440b.charCodeAt(_0x4c61fc);
          }
        }
      };
      if (_0x51f8ad.name === "PRIMEINC") {
        return function (_0x585020, _0x4d2eee, _0x4318fa, _0x14f7de) {
          if ("workers" in _0x4318fa) {
            return function (_0x4d8485, _0x326415, _0x2c1669, _0x2757b5) {
              if (typeof Worker == "undefined") {
                return _0x116dff(_0x4d8485, _0x326415, _0x2c1669, _0x2757b5);
              }
              var _0x21bb38 = _0x14dd6b(_0x4d8485, _0x326415);
              var _0xd35c4f = _0x2c1669.workers;
              var _0x46bfb9 = _0x2c1669.workLoad || 100;
              var _0x16048b = _0x46bfb9 * 30 / 8;
              var _0x557442 = _0x2c1669.workerScript || "forge/prime.worker.js";
              if (_0xd35c4f === -1) {
                return _0x2c0f1e.util.estimateCores(function (_0x5bb338, _0x47ebef) {
                  if (_0x5bb338) {
                    _0x47ebef = 2;
                  }
                  _0xd35c4f = _0x47ebef - 1;
                  _0x4f843f();
                });
              }
              function _0x4f843f() {
                _0xd35c4f = Math.max(1, _0xd35c4f);
                var _0x3b7c68 = [];
                for (var _0x5b3aa2 = 0; _0x5b3aa2 < _0xd35c4f; ++_0x5b3aa2) {
                  _0x3b7c68[_0x5b3aa2] = new Worker(_0x557442);
                }
                for (_0x5b3aa2 = 0; _0x5b3aa2 < _0xd35c4f; ++_0x5b3aa2) {
                  _0x3b7c68[_0x5b3aa2].addEventListener("message", _0x27e289);
                }
                var _0x2b450d = false;
                function _0x27e289(_0x1c237a) {
                  if (!_0x2b450d) {
                    0;
                    var _0x388f48 = _0x1c237a.data;
                    if (_0x388f48.found) {
                      for (var _0x16d073 = 0; _0x16d073 < _0x3b7c68.length; ++_0x16d073) {
                        _0x3b7c68[_0x16d073].terminate();
                      }
                      _0x2b450d = true;
                      return _0x2757b5(null, new _0x373e8a(_0x388f48.prime, 16));
                    }
                    if (_0x21bb38.bitLength() > _0x4d8485) {
                      _0x21bb38 = _0x14dd6b(_0x4d8485, _0x326415);
                    }
                    var _0x562dd8 = _0x21bb38.toString(16);
                    _0x1c237a.target.postMessage({
                      hex: _0x562dd8,
                      workLoad: _0x46bfb9
                    });
                    _0x21bb38.dAddOffset(_0x16048b, 0);
                  }
                }
              }
              _0x4f843f();
            }(_0x585020, _0x4d2eee, _0x4318fa, _0x14f7de);
          }
          return _0x116dff(_0x585020, _0x4d2eee, _0x4318fa, _0x14f7de);
        }(_0x4df063, _0x44eca3, _0x51f8ad.options, _0x20978b);
      }
      throw new Error("Invalid prime generation algorithm: " + _0x51f8ad.name);
    };
  }
  function _0x116dff(_0x580f2a, _0x117c1f, _0x126ad1, _0xf01d06) {
    var _0xc0c88e = _0x14dd6b(_0x580f2a, _0x117c1f);
    var _0xcd93de = function (_0x2cd423) {
      if (_0x2cd423 <= 100) {
        return 27;
      } else if (_0x2cd423 <= 150) {
        return 18;
      } else if (_0x2cd423 <= 200) {
        return 15;
      } else if (_0x2cd423 <= 250) {
        return 12;
      } else if (_0x2cd423 <= 300) {
        return 9;
      } else if (_0x2cd423 <= 350) {
        return 8;
      } else if (_0x2cd423 <= 400) {
        return 7;
      } else if (_0x2cd423 <= 500) {
        return 6;
      } else if (_0x2cd423 <= 600) {
        return 5;
      } else if (_0x2cd423 <= 800) {
        return 4;
      } else if (_0x2cd423 <= 1250) {
        return 3;
      } else {
        return 2;
      }
    }(_0xc0c88e.bitLength());
    if ("millerRabinTests" in _0x126ad1) {
      _0xcd93de = _0x126ad1.millerRabinTests;
    }
    var _0x1472ff = 10;
    if ("maxBlockTime" in _0x126ad1) {
      _0x1472ff = _0x126ad1.maxBlockTime;
    }
    _0x53f576(_0xc0c88e, _0x580f2a, _0x117c1f, 0, _0xcd93de, _0x1472ff, _0xf01d06);
  }
  function _0x53f576(_0x38e1b3, _0x2458e3, _0x510abd, _0x27e804, _0x230604, _0x7a2800, _0x4c43cb) {
    var _0x5d0cc6 = +new Date();
    do {
      if (_0x38e1b3.bitLength() > _0x2458e3) {
        _0x38e1b3 = _0x14dd6b(_0x2458e3, _0x510abd);
      }
      if (_0x38e1b3.isProbablePrime(_0x230604)) {
        return _0x4c43cb(null, _0x38e1b3);
      }
      _0x38e1b3.dAddOffset(_0x312ffc[_0x27e804++ % 8], 0);
    } while (_0x7a2800 < 0 || +new Date() - _0x5d0cc6 < _0x7a2800);
    _0x2c0f1e.util.setImmediate(function () {
      _0x53f576(_0x38e1b3, _0x2458e3, _0x510abd, _0x27e804, _0x230604, _0x7a2800, _0x4c43cb);
    });
  }
  function _0x14dd6b(_0x37ea4c, _0x59abfb) {
    var _0x5bc6d6 = new _0x373e8a(_0x37ea4c, _0x59abfb);
    var _0x330102 = _0x37ea4c - 1;
    if (!_0x5bc6d6.testBit(_0x330102)) {
      _0x5bc6d6.bitwiseTo(_0x373e8a.ONE.shiftLeft(_0x330102), _0x2d2329, _0x5bc6d6);
    }
    _0x5bc6d6.dAddOffset(31 - _0x5bc6d6.mod(_0x48709b).byteValue(), 0);
    return _0x5bc6d6;
  }
})();