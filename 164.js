var _0x84d44b = require("./832.js");
require("./925.js");
require("./311.js");
var _0x302fd2 = module.exports = _0x84d44b.tls;
function _0x445972(_0x276e3c, _0x8d8c8c, _0x2f6cf4) {
  var _0x5262bc = _0x8d8c8c.entity === _0x84d44b.tls.ConnectionEnd.client;
  _0x276e3c.read.cipherState = {
    init: false,
    cipher: _0x84d44b.cipher.createDecipher("AES-CBC", _0x5262bc ? _0x2f6cf4.keys.server_write_key : _0x2f6cf4.keys.client_write_key),
    iv: _0x5262bc ? _0x2f6cf4.keys.server_write_IV : _0x2f6cf4.keys.client_write_IV
  };
  _0x276e3c.write.cipherState = {
    init: false,
    cipher: _0x84d44b.cipher.createCipher("AES-CBC", _0x5262bc ? _0x2f6cf4.keys.client_write_key : _0x2f6cf4.keys.server_write_key),
    iv: _0x5262bc ? _0x2f6cf4.keys.client_write_IV : _0x2f6cf4.keys.server_write_IV
  };
  _0x276e3c.read.cipherFunction = _0x413798;
  _0x276e3c.write.cipherFunction = _0x2f2d19;
  _0x276e3c.read.macLength = _0x276e3c.write.macLength = _0x2f6cf4.mac_length;
  _0x276e3c.read.macFunction = _0x276e3c.write.macFunction = _0x302fd2.hmac_sha1;
}
function _0x2f2d19(_0x817169, _0x203f05) {
  var _0x219037;
  var _0x2472b5 = false;
  var _0x2d4d93 = _0x203f05.macFunction(_0x203f05.macKey, _0x203f05.sequenceNumber, _0x817169);
  _0x817169.fragment.putBytes(_0x2d4d93);
  _0x203f05.updateSequenceNumber();
  _0x219037 = _0x817169.version.minor === _0x302fd2.Versions.TLS_1_0.minor ? _0x203f05.cipherState.init ? null : _0x203f05.cipherState.iv : _0x84d44b.random.getBytesSync(16);
  _0x203f05.cipherState.init = true;
  var _0x2635b1 = _0x203f05.cipherState.cipher;
  _0x2635b1.start({
    iv: _0x219037
  });
  if (_0x817169.version.minor >= _0x302fd2.Versions.TLS_1_1.minor) {
    _0x2635b1.output.putBytes(_0x219037);
  }
  _0x2635b1.update(_0x817169.fragment);
  if (_0x2635b1.finish(_0x5b3d44)) {
    _0x817169.fragment = _0x2635b1.output;
    _0x817169.length = _0x817169.fragment.length();
    _0x2472b5 = true;
  }
  return _0x2472b5;
}
function _0x5b3d44(_0xbc9ac8, _0x1c53c7, _0x59c6dc) {
  if (!_0x59c6dc) {
    var _0x41eb11 = _0xbc9ac8 - _0x1c53c7.length() % _0xbc9ac8;
    _0x1c53c7.fillWithByte(_0x41eb11 - 1, _0x41eb11);
  }
  return true;
}
function _0x24b983(_0xe41d74, _0x119639, _0x449524) {
  var _0x2f77ec = true;
  if (_0x449524) {
    for (var _0x4b0243 = _0x119639.length(), _0x172a21 = _0x119639.last(), _0x3365c9 = _0x4b0243 - 1 - _0x172a21; _0x3365c9 < _0x4b0243 - 1; ++_0x3365c9) {
      _0x2f77ec = _0x2f77ec && _0x119639.at(_0x3365c9) == _0x172a21;
    }
    if (_0x2f77ec) {
      _0x119639.truncate(_0x172a21 + 1);
    }
  }
  return _0x2f77ec;
}
function _0x413798(_0x5737bd, _0xb771b0) {
  var _0x234322;
  var _0x17d45a = false;
  _0x234322 = _0x5737bd.version.minor === _0x302fd2.Versions.TLS_1_0.minor ? _0xb771b0.cipherState.init ? null : _0xb771b0.cipherState.iv : _0x5737bd.fragment.getBytes(16);
  _0xb771b0.cipherState.init = true;
  var _0x9b58fb = _0xb771b0.cipherState.cipher;
  _0x9b58fb.start({
    iv: _0x234322
  });
  _0x9b58fb.update(_0x5737bd.fragment);
  _0x17d45a = _0x9b58fb.finish(_0x24b983);
  var _0x55e65a = _0xb771b0.macLength;
  var _0x89b9bd = _0x84d44b.random.getBytesSync(_0x55e65a);
  var _0x1eab80 = _0x9b58fb.output.length();
  if (_0x1eab80 >= _0x55e65a) {
    _0x5737bd.fragment = _0x9b58fb.output.getBytes(_0x1eab80 - _0x55e65a);
    _0x89b9bd = _0x9b58fb.output.getBytes(_0x55e65a);
  } else {
    _0x5737bd.fragment = _0x9b58fb.output.getBytes();
  }
  _0x5737bd.fragment = _0x84d44b.util.createBuffer(_0x5737bd.fragment);
  _0x5737bd.length = _0x5737bd.fragment.length();
  var _0x4ce20c = _0xb771b0.macFunction(_0xb771b0.macKey, _0xb771b0.sequenceNumber, _0x5737bd);
  _0xb771b0.updateSequenceNumber();
  _0x17d45a = function (_0x139634, _0x57c4ec, _0x181611) {
    var _0x334c5e = _0x84d44b.hmac.create();
    _0x334c5e.start("SHA1", _0x139634);
    _0x334c5e.update(_0x57c4ec);
    _0x57c4ec = _0x334c5e.digest().getBytes();
    _0x334c5e.start(null, null);
    _0x334c5e.update(_0x181611);
    _0x181611 = _0x334c5e.digest().getBytes();
    return _0x57c4ec === _0x181611;
  }(_0xb771b0.macKey, _0x89b9bd, _0x4ce20c) && _0x17d45a;
  return _0x17d45a;
}
_0x302fd2.CipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA = {
  id: [0, 47],
  name: "TLS_RSA_WITH_AES_128_CBC_SHA",
  initSecurityParameters: function (_0x4e3fcb) {
    _0x4e3fcb.bulk_cipher_algorithm = _0x302fd2.BulkCipherAlgorithm.aes;
    _0x4e3fcb.cipher_type = _0x302fd2.CipherType.block;
    _0x4e3fcb.enc_key_length = 16;
    _0x4e3fcb.block_length = 16;
    _0x4e3fcb.fixed_iv_length = 16;
    _0x4e3fcb.record_iv_length = 16;
    _0x4e3fcb.mac_algorithm = _0x302fd2.MACAlgorithm.hmac_sha1;
    _0x4e3fcb.mac_length = 20;
    _0x4e3fcb.mac_key_length = 20;
  },
  initConnectionState: _0x445972
};
_0x302fd2.CipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA = {
  id: [0, 53],
  name: "TLS_RSA_WITH_AES_256_CBC_SHA",
  initSecurityParameters: function (_0x2bc103) {
    _0x2bc103.bulk_cipher_algorithm = _0x302fd2.BulkCipherAlgorithm.aes;
    _0x2bc103.cipher_type = _0x302fd2.CipherType.block;
    _0x2bc103.enc_key_length = 32;
    _0x2bc103.block_length = 16;
    _0x2bc103.fixed_iv_length = 16;
    _0x2bc103.record_iv_length = 16;
    _0x2bc103.mac_algorithm = _0x302fd2.MACAlgorithm.hmac_sha1;
    _0x2bc103.mac_length = 20;
    _0x2bc103.mac_key_length = 20;
  },
  initConnectionState: _0x445972
};