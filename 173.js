var _0x20ba2f = require("./832.js");
require("./925.js");
require("./607.js");
require("./63.js");
require("./137.js");
require("./116.js");
var _0x26314f = module.exports = _0x20ba2f.ssh = _0x20ba2f.ssh || {};
function _0x50e388(_0x6966bf, _0x328cc7) {
  var _0x20322b = _0x328cc7.toString(16);
  if (_0x20322b[0] >= "8") {
    _0x20322b = "00" + _0x20322b;
  }
  var _0x192a6f = _0x20ba2f.util.hexToBytes(_0x20322b);
  _0x6966bf.putInt32(_0x192a6f.length);
  _0x6966bf.putBytes(_0x192a6f);
}
function _0x2368d0(_0x31eb46, _0x5a4432) {
  _0x31eb46.putInt32(_0x5a4432.length);
  _0x31eb46.putString(_0x5a4432);
}
function _0x454afc() {
  var _0xe1c0e8 = _0x20ba2f.md.sha1.create();
  for (var _0x3028e7 = arguments.length, _0x474ec1 = 0; _0x474ec1 < _0x3028e7; ++_0x474ec1) {
    _0xe1c0e8.update(arguments[_0x474ec1]);
  }
  return _0xe1c0e8.digest();
}
_0x26314f.privateKeyToPutty = function (_0x23028e, _0x4ed791, _0x22e219) {
  var _0x1c86b8 = (_0x4ed791 = _0x4ed791 || "") === "" ? "none" : "aes256-cbc";
  var _0x4850a1 = "PuTTY-User-Key-File-2: ssh-rsa\r\n";
  _0x4850a1 += "Encryption: " + _0x1c86b8 + "\r\n";
  _0x4850a1 += "Comment: " + (_0x22e219 = _0x22e219 || "") + "\r\n";
  var _0x25e4d1 = _0x20ba2f.util.createBuffer();
  _0x2368d0(_0x25e4d1, "ssh-rsa");
  _0x50e388(_0x25e4d1, _0x23028e.e);
  _0x50e388(_0x25e4d1, _0x23028e.n);
  var _0x17ceda = _0x20ba2f.util.encode64(_0x25e4d1.bytes(), 64);
  var _0x1996c9 = Math.floor(_0x17ceda.length / 66) + 1;
  _0x4850a1 += "Public-Lines: " + _0x1996c9 + "\r\n";
  _0x4850a1 += _0x17ceda;
  var _0x1f927b;
  var _0x3c5533 = _0x20ba2f.util.createBuffer();
  _0x50e388(_0x3c5533, _0x23028e.d);
  _0x50e388(_0x3c5533, _0x23028e.p);
  _0x50e388(_0x3c5533, _0x23028e.q);
  _0x50e388(_0x3c5533, _0x23028e.qInv);
  if (_0x4ed791) {
    var _0x5b2b42 = _0x3c5533.length() + 16 - 1;
    _0x5b2b42 -= _0x5b2b42 % 16;
    var _0x3f321c = _0x454afc(_0x3c5533.bytes());
    _0x3f321c.truncate(_0x3f321c.length() - _0x5b2b42 + _0x3c5533.length());
    _0x3c5533.putBuffer(_0x3f321c);
    var _0x1eff01 = _0x20ba2f.util.createBuffer();
    _0x1eff01.putBuffer(_0x454afc("\0\0\0\0", _0x4ed791));
    _0x1eff01.putBuffer(_0x454afc("\0\0\0", _0x4ed791));
    var _0x57e864 = _0x20ba2f.aes.createEncryptionCipher(_0x1eff01.truncate(8), "CBC");
    _0x57e864.start(_0x20ba2f.util.createBuffer().fillWithByte(0, 16));
    _0x57e864.update(_0x3c5533.copy());
    _0x57e864.finish();
    var _0x40b151 = _0x57e864.output;
    _0x40b151.truncate(16);
    _0x1f927b = _0x20ba2f.util.encode64(_0x40b151.bytes(), 64);
  } else {
    _0x1f927b = _0x20ba2f.util.encode64(_0x3c5533.bytes(), 64);
  }
  _0x4850a1 += "\r\nPrivate-Lines: " + (_0x1996c9 = Math.floor(_0x1f927b.length / 66) + 1) + "\r\n";
  _0x4850a1 += _0x1f927b;
  var _0x258152 = _0x454afc("putty-private-key-file-mac-key", _0x4ed791);
  var _0x17dc5b = _0x20ba2f.util.createBuffer();
  _0x2368d0(_0x17dc5b, "ssh-rsa");
  _0x2368d0(_0x17dc5b, _0x1c86b8);
  _0x2368d0(_0x17dc5b, _0x22e219);
  _0x17dc5b.putInt32(_0x25e4d1.length());
  _0x17dc5b.putBuffer(_0x25e4d1);
  _0x17dc5b.putInt32(_0x3c5533.length());
  _0x17dc5b.putBuffer(_0x3c5533);
  var _0xd078c0 = _0x20ba2f.hmac.create();
  _0xd078c0.start("sha1", _0x258152);
  _0xd078c0.update(_0x17dc5b.bytes());
  return _0x4850a1 += "\r\nPrivate-MAC: " + _0xd078c0.digest().toHex() + "\r\n";
};
_0x26314f.publicKeyToOpenSSH = function (_0x594e52, _0x2d0184) {
  _0x2d0184 = _0x2d0184 || "";
  var _0x4e83a6 = _0x20ba2f.util.createBuffer();
  _0x2368d0(_0x4e83a6, "ssh-rsa");
  _0x50e388(_0x4e83a6, _0x594e52.e);
  _0x50e388(_0x4e83a6, _0x594e52.n);
  return "ssh-rsa " + _0x20ba2f.util.encode64(_0x4e83a6.bytes()) + " " + _0x2d0184;
};
_0x26314f.privateKeyToOpenSSH = function (_0x177c38, _0x21ed2f) {
  if (_0x21ed2f) {
    return _0x20ba2f.pki.encryptRsaPrivateKey(_0x177c38, _0x21ed2f, {
      legacy: true,
      algorithm: "aes128"
    });
  } else {
    return _0x20ba2f.pki.privateKeyToPem(_0x177c38);
  }
};
_0x26314f.getPublicKeyFingerprint = function (_0x372944, _0x1ee1ef) {
  var _0x1daf82 = (_0x1ee1ef = _0x1ee1ef || {}).md || _0x20ba2f.md.md5.create();
  var _0x4aa28c = _0x20ba2f.util.createBuffer();
  _0x2368d0(_0x4aa28c, "ssh-rsa");
  _0x50e388(_0x4aa28c, _0x372944.e);
  _0x50e388(_0x4aa28c, _0x372944.n);
  _0x1daf82.start();
  _0x1daf82.update(_0x4aa28c.getBytes());
  var _0x441413 = _0x1daf82.digest();
  if (_0x1ee1ef.encoding === "hex") {
    var _0x350467 = _0x441413.toHex();
    if (_0x1ee1ef.delimiter) {
      return _0x350467.match(/.{2}/g).join(_0x1ee1ef.delimiter);
    } else {
      return _0x350467;
    }
  }
  if (_0x1ee1ef.encoding === "binary") {
    return _0x441413.getBytes();
  }
  if (_0x1ee1ef.encoding) {
    throw new Error("Unknown encoding \"" + _0x1ee1ef.encoding + "\".");
  }
  return _0x441413;
};