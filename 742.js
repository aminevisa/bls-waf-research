var _0x15aaba = require("./832.js");
require("./68.js");
require("./270.js");
require("./450.js");
require("./953.js");
require("./960.js");
require("./147.js");
require("./7.js");
require("./95.js");
require("./116.js");
require("./414.js");
var _0x464901 = _0x15aaba.asn1;
var _0x3685fc = module.exports = _0x15aaba.pki = _0x15aaba.pki || {};
_0x3685fc.pemToDer = function (_0x3297b9) {
  var _0x455641 = _0x15aaba.pem.decode(_0x3297b9)[0];
  if (_0x455641.procType && _0x455641.procType.type === "ENCRYPTED") {
    throw new Error("Could not convert PEM to DER; PEM is encrypted.");
  }
  return _0x15aaba.util.createBuffer(_0x455641.body);
};
_0x3685fc.privateKeyFromPem = function (_0x582ce5) {
  var _0x1e0220 = _0x15aaba.pem.decode(_0x582ce5)[0];
  if (_0x1e0220.type !== "PRIVATE KEY" && _0x1e0220.type !== "RSA PRIVATE KEY") {
    var _0x48bd82 = new Error("Could not convert private key from PEM; PEM header type is not \"PRIVATE KEY\" or \"RSA PRIVATE KEY\".");
    _0x48bd82.headerType = _0x1e0220.type;
    throw _0x48bd82;
  }
  if (_0x1e0220.procType && _0x1e0220.procType.type === "ENCRYPTED") {
    throw new Error("Could not convert private key from PEM; PEM is encrypted.");
  }
  var _0xeb5c52 = _0x464901.fromDer(_0x1e0220.body);
  return _0x3685fc.privateKeyFromAsn1(_0xeb5c52);
};
_0x3685fc.privateKeyToPem = function (_0x4534ce, _0x248658) {
  var _0x3f8f41 = {
    type: "RSA PRIVATE KEY",
    body: _0x464901.toDer(_0x3685fc.privateKeyToAsn1(_0x4534ce)).getBytes()
  };
  return _0x15aaba.pem.encode(_0x3f8f41, {
    maxline: _0x248658
  });
};
_0x3685fc.privateKeyInfoToPem = function (_0x20813e, _0x191e4a) {
  var _0x32047e = {
    type: "PRIVATE KEY",
    body: _0x464901.toDer(_0x20813e).getBytes()
  };
  return _0x15aaba.pem.encode(_0x32047e, {
    maxline: _0x191e4a
  });
};