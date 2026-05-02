var _0x490ca9 = require("./832.js");
require("./116.js");
var _0x34d4e0 = null;
if (!!_0x490ca9.util.isNodejs && !_0x490ca9.options.usePureJavaScript && !process.versions["node-webkit"]) {
  _0x34d4e0 = require("./819.js");
}
(module.exports = _0x490ca9.prng = _0x490ca9.prng || {}).create = function (_0x285d85) {
  var _0x360573 = {
    plugin: _0x285d85,
    key: null,
    seed: null,
    time: null,
    reseeds: 0,
    generated: 0,
    keyBytes: ""
  };
  var _0x587888 = _0x285d85.md;
  var _0x2b9ba8 = new Array(32);
  for (var _0x576085 = 0; _0x576085 < 32; ++_0x576085) {
    _0x2b9ba8[_0x576085] = _0x587888.create();
  }
  function _0x2bd4a4() {
    if (_0x360573.pools[0].messageLength >= 32) {
      return _0x206199();
    }
    var _0x3544b8 = 32 - _0x360573.pools[0].messageLength << 5;
    _0x360573.collect(_0x360573.seedFileSync(_0x3544b8));
    _0x206199();
  }
  function _0x206199() {
    _0x360573.reseeds = _0x360573.reseeds === 4294967295 ? 0 : _0x360573.reseeds + 1;
    var _0x59a470 = _0x360573.plugin.md.create();
    _0x59a470.update(_0x360573.keyBytes);
    var _0x380146 = 1;
    for (var _0x45f1c7 = 0; _0x45f1c7 < 32; ++_0x45f1c7) {
      if (_0x360573.reseeds % _0x380146 == 0) {
        _0x59a470.update(_0x360573.pools[_0x45f1c7].digest().getBytes());
        _0x360573.pools[_0x45f1c7].start();
      }
      _0x380146 <<= 1;
    }
    _0x360573.keyBytes = _0x59a470.digest().getBytes();
    _0x59a470.start();
    _0x59a470.update(_0x360573.keyBytes);
    var _0x294d1c = _0x59a470.digest().getBytes();
    _0x360573.key = _0x360573.plugin.formatKey(_0x360573.keyBytes);
    _0x360573.seed = _0x360573.plugin.formatSeed(_0x294d1c);
    _0x360573.generated = 0;
  }
  function _0x2a022e(_0x5dd4a3) {
    var _0x4bfd37 = null;
    var _0x968074 = _0x490ca9.util.globalScope;
    var _0x5cfbdc = _0x968074.crypto || _0x968074.msCrypto;
    if (_0x5cfbdc && _0x5cfbdc.getRandomValues) {
      _0x4bfd37 = function (_0x50f218) {
        return _0x5cfbdc.getRandomValues(_0x50f218);
      };
    }
    var _0xb46fbf = _0x490ca9.util.createBuffer();
    if (_0x4bfd37) {
      while (_0xb46fbf.length() < _0x5dd4a3) {
        var _0x32b26e = Math.max(1, Math.min(_0x5dd4a3 - _0xb46fbf.length(), 65536) / 4);
        var _0xa99cf8 = new Uint32Array(Math.floor(_0x32b26e));
        try {
          _0x4bfd37(_0xa99cf8);
          for (var _0x41af9c = 0; _0x41af9c < _0xa99cf8.length; ++_0x41af9c) {
            _0xb46fbf.putInt32(_0xa99cf8[_0x41af9c]);
          }
        } catch (_0x3f34cb) {
          if (typeof QuotaExceededError == "undefined" || !(_0x3f34cb instanceof QuotaExceededError)) {
            throw _0x3f34cb;
          }
        }
      }
    }
    if (_0xb46fbf.length() < _0x5dd4a3) {
      var _0x2ff3a4;
      var _0x87742f;
      var _0x220aca;
      var _0xbcc6a9 = Math.floor(Math.random() * 65536);
      for (; _0xb46fbf.length() < _0x5dd4a3;) {
        _0x87742f = (_0xbcc6a9 & 65535) * 16807;
        _0x87742f += ((_0x2ff3a4 = (_0xbcc6a9 >> 16) * 16807) & 32767) << 16;
        _0xbcc6a9 = (_0x87742f = ((_0x87742f += _0x2ff3a4 >> 15) & 2147483647) + (_0x87742f >> 31)) & -1;
        for (_0x41af9c = 0; _0x41af9c < 3; ++_0x41af9c) {
          _0x220aca = _0xbcc6a9 >>> (_0x41af9c << 3);
          _0x220aca ^= Math.floor(Math.random() * 256);
          _0xb46fbf.putByte(_0x220aca & 255);
        }
      }
    }
    return _0xb46fbf.getBytes(_0x5dd4a3);
  }
  _0x360573.pools = _0x2b9ba8;
  _0x360573.pool = 0;
  _0x360573.generate = function (_0xacc734, _0x148b89) {
    if (!_0x148b89) {
      return _0x360573.generateSync(_0xacc734);
    }
    var _0x85c6fb = _0x360573.plugin.cipher;
    var _0x5a4c02 = _0x360573.plugin.increment;
    var _0x2c715b = _0x360573.plugin.formatKey;
    var _0xe6e62d = _0x360573.plugin.formatSeed;
    var _0x19c298 = _0x490ca9.util.createBuffer();
    _0x360573.key = null;
    (function _0x560ea8(_0x335fa7) {
      if (_0x335fa7) {
        return _0x148b89(_0x335fa7);
      }
      if (_0x19c298.length() >= _0xacc734) {
        return _0x148b89(null, _0x19c298.getBytes(_0xacc734));
      }
      if (_0x360573.generated > 1048575) {
        _0x360573.key = null;
      }
      if (_0x360573.key === null) {
        return _0x490ca9.util.nextTick(function () {
          (function (_0x13afff) {
            if (_0x360573.pools[0].messageLength >= 32) {
              _0x206199();
              return _0x13afff();
            }
            var _0x51e844 = 32 - _0x360573.pools[0].messageLength << 5;
            _0x360573.seedFile(_0x51e844, function (_0xb781a, _0x43b427) {
              if (_0xb781a) {
                return _0x13afff(_0xb781a);
              }
              _0x360573.collect(_0x43b427);
              _0x206199();
              _0x13afff();
            });
          })(_0x560ea8);
        });
      }
      var _0x2e390d = _0x85c6fb(_0x360573.key, _0x360573.seed);
      _0x360573.generated += _0x2e390d.length;
      _0x19c298.putBytes(_0x2e390d);
      _0x360573.key = _0x2c715b(_0x85c6fb(_0x360573.key, _0x5a4c02(_0x360573.seed)));
      _0x360573.seed = _0xe6e62d(_0x85c6fb(_0x360573.key, _0x360573.seed));
      _0x490ca9.util.setImmediate(_0x560ea8);
    })();
  };
  _0x360573.generateSync = function (_0x43c5f5) {
    var _0x5411f9 = _0x360573.plugin.cipher;
    var _0x72163d = _0x360573.plugin.increment;
    var _0x5b1967 = _0x360573.plugin.formatKey;
    var _0x10aab9 = _0x360573.plugin.formatSeed;
    _0x360573.key = null;
    for (var _0x46ea38 = _0x490ca9.util.createBuffer(); _0x46ea38.length() < _0x43c5f5;) {
      if (_0x360573.generated > 1048575) {
        _0x360573.key = null;
      }
      if (_0x360573.key === null) {
        _0x2bd4a4();
      }
      var _0x2031f8 = _0x5411f9(_0x360573.key, _0x360573.seed);
      _0x360573.generated += _0x2031f8.length;
      _0x46ea38.putBytes(_0x2031f8);
      _0x360573.key = _0x5b1967(_0x5411f9(_0x360573.key, _0x72163d(_0x360573.seed)));
      _0x360573.seed = _0x10aab9(_0x5411f9(_0x360573.key, _0x360573.seed));
    }
    return _0x46ea38.getBytes(_0x43c5f5);
  };
  if (_0x34d4e0) {
    _0x360573.seedFile = function (_0x1aa8b6, _0x15cad6) {
      _0x34d4e0.randomBytes(_0x1aa8b6, function (_0x3cfd08, _0x352638) {
        if (_0x3cfd08) {
          return _0x15cad6(_0x3cfd08);
        }
        _0x15cad6(null, _0x352638.toString());
      });
    };
    _0x360573.seedFileSync = function (_0x879beb) {
      return _0x34d4e0.randomBytes(_0x879beb).toString();
    };
  } else {
    _0x360573.seedFile = function (_0x56b442, _0x50000f) {
      try {
        _0x50000f(null, _0x2a022e(_0x56b442));
      } catch (_0x2b51e4) {
        _0x50000f(_0x2b51e4);
      }
    };
    _0x360573.seedFileSync = _0x2a022e;
  }
  _0x360573.collect = function (_0x3639b5) {
    for (var _0x5eef72 = _0x3639b5.length, _0x27b9c6 = 0; _0x27b9c6 < _0x5eef72; ++_0x27b9c6) {
      _0x360573.pools[_0x360573.pool].update(_0x3639b5.substr(_0x27b9c6, 1));
      _0x360573.pool = _0x360573.pool === 31 ? 0 : _0x360573.pool + 1;
    }
  };
  _0x360573.collectInt = function (_0x150ef7, _0x1f27f6) {
    var _0x2be50c = "";
    for (var _0x26672d = 0; _0x26672d < _0x1f27f6; _0x26672d += 8) {
      _0x2be50c += String.fromCharCode(_0x150ef7 >> _0x26672d & 255);
    }
    _0x360573.collect(_0x2be50c);
  };
  _0x360573.registerWorker = function (_0x1bde28) {
    if (_0x1bde28 === self) {
      _0x360573.seedFile = function (_0x4bb298, _0x536511) {
        self.addEventListener("message", function _0x3d01b6(_0x4747e9) {
          var _0x2b3265 = _0x4747e9.data;
          if (_0x2b3265.forge && _0x2b3265.forge.prng) {
            self.removeEventListener("message", _0x3d01b6);
            _0x536511(_0x2b3265.forge.prng.err, _0x2b3265.forge.prng.bytes);
          }
        });
        self.postMessage({
          forge: {
            prng: {
              needed: _0x4bb298
            }
          }
        });
      };
    } else {
      _0x1bde28.addEventListener("message", function (_0x271807) {
        var _0x5b31dc = _0x271807.data;
        if (_0x5b31dc.forge && _0x5b31dc.forge.prng) {
          _0x360573.seedFile(_0x5b31dc.forge.prng.needed, function (_0x3a512b, _0x5a56ef) {
            _0x1bde28.postMessage({
              forge: {
                prng: {
                  err: _0x3a512b,
                  bytes: _0x5a56ef
                }
              }
            });
          });
        }
      });
    }
  };
  return _0x360573;
};