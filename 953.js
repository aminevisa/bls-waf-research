var _0xa605f6 = require("./832.js");
require("./116.js");
var _0x1a7cc2 = module.exports = _0xa605f6.pem = _0xa605f6.pem || {};
function _0x166dc9(_0x1e6b54) {
  var _0x2ff682 = _0x1e6b54.name + ": ";
  var _0x3966bc = [];
  var _0x2f0242 = function (_0x226167, _0x44ba8b) {
    return " " + _0x44ba8b;
  };
  for (var _0x1d6f9d = 0; _0x1d6f9d < _0x1e6b54.values.length; ++_0x1d6f9d) {
    _0x3966bc.push(_0x1e6b54.values[_0x1d6f9d].replace(/^(\S+\r\n)/, _0x2f0242));
  }
  _0x2ff682 += _0x3966bc.join(",") + "\r\n";
  var _0x1417ef = 0;
  var _0x37b425 = -1;
  for (_0x1d6f9d = 0; _0x1d6f9d < _0x2ff682.length; ++_0x1d6f9d, ++_0x1417ef) {
    if (_0x1417ef > 65 && _0x37b425 !== -1) {
      var _0x4c38e1 = _0x2ff682[_0x37b425];
      if (_0x4c38e1 === ",") {
        ++_0x37b425;
        _0x2ff682 = _0x2ff682.substr(0, _0x37b425) + "\r\n " + _0x2ff682.substr(_0x37b425);
      } else {
        _0x2ff682 = _0x2ff682.substr(0, _0x37b425) + "\r\n" + _0x4c38e1 + _0x2ff682.substr(_0x37b425 + 1);
      }
      _0x1417ef = _0x1d6f9d - _0x37b425 - 1;
      _0x37b425 = -1;
      ++_0x1d6f9d;
    } else if (_0x2ff682[_0x1d6f9d] === " " || _0x2ff682[_0x1d6f9d] === "\t" || _0x2ff682[_0x1d6f9d] === ",") {
      _0x37b425 = _0x1d6f9d;
    }
  }
  return _0x2ff682;
}
function _0x1b692f(_0x530624) {
  return _0x530624.replace(/^\s+/, "");
}
_0x1a7cc2.encode = function (_0x5be8f9, _0x58875f) {
  _0x58875f = _0x58875f || {};
  var _0xf752bf;
  var _0x195c1f = "-----BEGIN " + _0x5be8f9.type + "-----\r\n";
  if (_0x5be8f9.procType) {
    _0x195c1f += _0x166dc9(_0xf752bf = {
      name: "Proc-Type",
      values: [String(_0x5be8f9.procType.version), _0x5be8f9.procType.type]
    });
  }
  if (_0x5be8f9.contentDomain) {
    _0x195c1f += _0x166dc9(_0xf752bf = {
      name: "Content-Domain",
      values: [_0x5be8f9.contentDomain]
    });
  }
  if (_0x5be8f9.dekInfo) {
    _0xf752bf = {
      name: "DEK-Info",
      values: [_0x5be8f9.dekInfo.algorithm]
    };
    if (_0x5be8f9.dekInfo.parameters) {
      _0xf752bf.values.push(_0x5be8f9.dekInfo.parameters);
    }
    _0x195c1f += _0x166dc9(_0xf752bf);
  }
  if (_0x5be8f9.headers) {
    for (var _0x189f9c = 0; _0x189f9c < _0x5be8f9.headers.length; ++_0x189f9c) {
      _0x195c1f += _0x166dc9(_0x5be8f9.headers[_0x189f9c]);
    }
  }
  if (_0x5be8f9.procType) {
    _0x195c1f += "\r\n";
  }
  _0x195c1f += _0xa605f6.util.encode64(_0x5be8f9.body, _0x58875f.maxline || 64) + "\r\n";
  return _0x195c1f += "-----END " + _0x5be8f9.type + "-----\r\n";
};
_0x1a7cc2.decode = function (_0x44caea) {
  for (var _0x397914, _0x54e2ec = [], _0xd72fad = /\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g, _0x3b1a6c = /([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/, _0x5d891a = /\r?\n/; _0x397914 = _0xd72fad.exec(_0x44caea);) {
    var _0x4c9cce = _0x397914[1];
    if (_0x4c9cce === "NEW CERTIFICATE REQUEST") {
      _0x4c9cce = "CERTIFICATE REQUEST";
    }
    var _0x22c62e = {
      type: _0x4c9cce,
      procType: null,
      contentDomain: null,
      dekInfo: null,
      headers: [],
      body: _0xa605f6.util.decode64(_0x397914[3])
    };
    _0x54e2ec.push(_0x22c62e);
    if (_0x397914[2]) {
      for (var _0x530018 = _0x397914[2].split(_0x5d891a), _0x5907b5 = 0; _0x397914 && _0x5907b5 < _0x530018.length;) {
        var _0x3a9529 = _0x530018[_0x5907b5].replace(/\s+$/, "");
        for (var _0x2df6e3 = _0x5907b5 + 1; _0x2df6e3 < _0x530018.length; ++_0x2df6e3) {
          var _0x402a31 = _0x530018[_0x2df6e3];
          if (!/\s/.test(_0x402a31[0])) {
            break;
          }
          _0x3a9529 += _0x402a31;
          _0x5907b5 = _0x2df6e3;
        }
        if (_0x397914 = _0x3a9529.match(_0x3b1a6c)) {
          var _0x3af594 = {
            name: _0x397914[1],
            values: []
          };
          for (var _0x5c2d3d = _0x397914[2].split(","), _0x5ee259 = 0; _0x5ee259 < _0x5c2d3d.length; ++_0x5ee259) {
            _0x3af594.values.push(_0x1b692f(_0x5c2d3d[_0x5ee259]));
          }
          if (_0x22c62e.procType) {
            if (_0x22c62e.contentDomain || _0x3af594.name !== "Content-Domain") {
              if (_0x22c62e.dekInfo || _0x3af594.name !== "DEK-Info") {
                _0x22c62e.headers.push(_0x3af594);
              } else {
                if (_0x3af594.values.length === 0) {
                  throw new Error("Invalid PEM formatted message. The \"DEK-Info\" header must have at least one subfield.");
                }
                _0x22c62e.dekInfo = {
                  algorithm: _0x5c2d3d[0],
                  parameters: _0x5c2d3d[1] || null
                };
              }
            } else {
              _0x22c62e.contentDomain = _0x5c2d3d[0] || "";
            }
          } else {
            if (_0x3af594.name !== "Proc-Type") {
              throw new Error("Invalid PEM formatted message. The first encapsulated header must be \"Proc-Type\".");
            }
            if (_0x3af594.values.length !== 2) {
              throw new Error("Invalid PEM formatted message. The \"Proc-Type\" header must have two subfields.");
            }
            _0x22c62e.procType = {
              version: _0x5c2d3d[0],
              type: _0x5c2d3d[1]
            };
          }
        }
        ++_0x5907b5;
      }
      if (_0x22c62e.procType === "ENCRYPTED" && !_0x22c62e.dekInfo) {
        throw new Error("Invalid PEM formatted message. The \"DEK-Info\" header must be present if \"Proc-Type\" is \"ENCRYPTED\".");
      }
    }
  }
  if (_0x54e2ec.length === 0) {
    throw new Error("Invalid PEM formatted message.");
  }
  return _0x54e2ec;
};