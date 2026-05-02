var _0x736a67 = require("./832.js");
require("./68.js");
require("./607.js");
require("./63.js");
require("./953.js");
require("./742.js");
require("./563.js");
require("./137.js");
require("./116.js");
function _0x483f57(_0x6fcb31, _0x2b26de, _0x236ad, _0x39a6ff) {
  var _0x46f82f = _0x736a67.util.createBuffer();
  var _0x3fddd1 = _0x6fcb31.length >> 1;
  var _0x25fb2d = _0x3fddd1 + (_0x6fcb31.length & 1);
  var _0x45c809 = _0x6fcb31.substr(0, _0x25fb2d);
  var _0x432d52 = _0x6fcb31.substr(_0x3fddd1, _0x25fb2d);
  var _0x9fb5b8 = _0x736a67.util.createBuffer();
  var _0x413d4a = _0x736a67.hmac.create();
  _0x236ad = _0x2b26de + _0x236ad;
  var _0x537221 = Math.ceil(_0x39a6ff / 16);
  var _0x546ea0 = Math.ceil(_0x39a6ff / 20);
  _0x413d4a.start("MD5", _0x45c809);
  var _0x58f250 = _0x736a67.util.createBuffer();
  _0x9fb5b8.putBytes(_0x236ad);
  for (var _0x290aea = 0; _0x290aea < _0x537221; ++_0x290aea) {
    _0x413d4a.start(null, null);
    _0x413d4a.update(_0x9fb5b8.getBytes());
    _0x9fb5b8.putBuffer(_0x413d4a.digest());
    _0x413d4a.start(null, null);
    _0x413d4a.update(_0x9fb5b8.bytes() + _0x236ad);
    _0x58f250.putBuffer(_0x413d4a.digest());
  }
  _0x413d4a.start("SHA1", _0x432d52);
  var _0x2f44a0 = _0x736a67.util.createBuffer();
  _0x9fb5b8.clear();
  _0x9fb5b8.putBytes(_0x236ad);
  for (_0x290aea = 0; _0x290aea < _0x546ea0; ++_0x290aea) {
    _0x413d4a.start(null, null);
    _0x413d4a.update(_0x9fb5b8.getBytes());
    _0x9fb5b8.putBuffer(_0x413d4a.digest());
    _0x413d4a.start(null, null);
    _0x413d4a.update(_0x9fb5b8.bytes() + _0x236ad);
    _0x2f44a0.putBuffer(_0x413d4a.digest());
  }
  _0x46f82f.putBytes(_0x736a67.util.xorBytes(_0x58f250.getBytes(), _0x2f44a0.getBytes(), _0x39a6ff));
  return _0x46f82f;
}
function _0x200319(_0x2c55c9, _0x4cd5d6, _0x560cf4) {
  var _0x416834 = false;
  try {
    var _0x134bfb = _0x2c55c9.deflate(_0x4cd5d6.fragment.getBytes());
    _0x4cd5d6.fragment = _0x736a67.util.createBuffer(_0x134bfb);
    _0x4cd5d6.length = _0x134bfb.length;
    _0x416834 = true;
  } catch (_0x59b4ee) {}
  return _0x416834;
}
function _0xdc8e4c(_0x5b108d, _0x1381b1, _0x4fc22c) {
  var _0x5062e5 = false;
  try {
    var _0x2c9a81 = _0x5b108d.inflate(_0x1381b1.fragment.getBytes());
    _0x1381b1.fragment = _0x736a67.util.createBuffer(_0x2c9a81);
    _0x1381b1.length = _0x2c9a81.length;
    _0x5062e5 = true;
  } catch (_0x3c64f1) {}
  return _0x5062e5;
}
function _0x2d1456(_0x138faa, _0xf2e083) {
  var _0x303191 = 0;
  switch (_0xf2e083) {
    case 1:
      _0x303191 = _0x138faa.getByte();
      break;
    case 2:
      _0x303191 = _0x138faa.getInt16();
      break;
    case 3:
      _0x303191 = _0x138faa.getInt24();
      break;
    case 4:
      _0x303191 = _0x138faa.getInt32();
  }
  return _0x736a67.util.createBuffer(_0x138faa.getBytes(_0x303191));
}
function _0x3a4a7d(_0x3b6130, _0x27fae0, _0x54d0a0) {
  _0x3b6130.putInt(_0x54d0a0.length(), _0x27fae0 << 3);
  _0x3b6130.putBuffer(_0x54d0a0);
}
var _0x4d63f1 = {
  Versions: {
    TLS_1_0: {
      major: 3,
      minor: 1
    },
    TLS_1_1: {
      major: 3,
      minor: 2
    },
    TLS_1_2: {
      major: 3,
      minor: 3
    }
  }
};
_0x4d63f1.SupportedVersions = [_0x4d63f1.Versions.TLS_1_1, _0x4d63f1.Versions.TLS_1_0];
_0x4d63f1.Version = _0x4d63f1.SupportedVersions[0];
_0x4d63f1.MaxFragment = 15360;
_0x4d63f1.ConnectionEnd = {
  server: 0,
  client: 1
};
_0x4d63f1.PRFAlgorithm = {
  tls_prf_sha256: 0
};
_0x4d63f1.BulkCipherAlgorithm = {
  none: null,
  rc4: 0,
  des3: 1,
  aes: 2
};
_0x4d63f1.CipherType = {
  stream: 0,
  block: 1,
  aead: 2
};
_0x4d63f1.MACAlgorithm = {
  none: null,
  hmac_md5: 0,
  hmac_sha1: 1,
  hmac_sha256: 2,
  hmac_sha384: 3,
  hmac_sha512: 4
};
_0x4d63f1.CompressionMethod = {
  none: 0,
  deflate: 1
};
_0x4d63f1.ContentType = {
  change_cipher_spec: 20,
  alert: 21,
  handshake: 22,
  application_data: 23,
  heartbeat: 24
};
_0x4d63f1.HandshakeType = {
  hello_request: 0,
  client_hello: 1,
  server_hello: 2,
  certificate: 11,
  server_key_exchange: 12,
  certificate_request: 13,
  server_hello_done: 14,
  certificate_verify: 15,
  client_key_exchange: 16,
  finished: 20
};
_0x4d63f1.Alert = {};
_0x4d63f1.Alert.Level = {
  warning: 1,
  fatal: 2
};
_0x4d63f1.Alert.Description = {
  close_notify: 0,
  unexpected_message: 10,
  bad_record_mac: 20,
  decryption_failed: 21,
  record_overflow: 22,
  decompression_failure: 30,
  handshake_failure: 40,
  bad_certificate: 42,
  unsupported_certificate: 43,
  certificate_revoked: 44,
  certificate_expired: 45,
  certificate_unknown: 46,
  illegal_parameter: 47,
  unknown_ca: 48,
  access_denied: 49,
  decode_error: 50,
  decrypt_error: 51,
  export_restriction: 60,
  protocol_version: 70,
  insufficient_security: 71,
  internal_error: 80,
  user_canceled: 90,
  no_renegotiation: 100
};
_0x4d63f1.HeartbeatMessageType = {
  heartbeat_request: 1,
  heartbeat_response: 2
};
_0x4d63f1.CipherSuites = {};
_0x4d63f1.getCipherSuite = function (_0xeb8526) {
  var _0x18cbe0 = null;
  for (var _0x2eace4 in _0x4d63f1.CipherSuites) {
    var _0x58e001 = _0x4d63f1.CipherSuites[_0x2eace4];
    if (_0x58e001.id[0] === _0xeb8526.charCodeAt(0) && _0x58e001.id[1] === _0xeb8526.charCodeAt(1)) {
      _0x18cbe0 = _0x58e001;
      break;
    }
  }
  return _0x18cbe0;
};
_0x4d63f1.handleUnexpected = function (_0x33b5a3, _0x10025d) {
  if (!!_0x33b5a3.open || _0x33b5a3.entity !== _0x4d63f1.ConnectionEnd.client) {
    _0x33b5a3.error(_0x33b5a3, {
      message: "Unexpected message. Received TLS record out of order.",
      send: true,
      alert: {
        level: _0x4d63f1.Alert.Level.fatal,
        description: _0x4d63f1.Alert.Description.unexpected_message
      }
    });
  }
};
_0x4d63f1.handleHelloRequest = function (_0xf40854, _0x3ee4fd, _0x3229ce) {
  if (!_0xf40854.handshaking && _0xf40854.handshakes > 0) {
    _0x4d63f1.queue(_0xf40854, _0x4d63f1.createAlert(_0xf40854, {
      level: _0x4d63f1.Alert.Level.warning,
      description: _0x4d63f1.Alert.Description.no_renegotiation
    }));
    _0x4d63f1.flush(_0xf40854);
  }
  _0xf40854.process();
};
_0x4d63f1.parseHelloMessage = function (_0x4a4aea, _0x189c39, _0x4b7ad2) {
  var _0x2a629b = null;
  var _0x17070d = _0x4a4aea.entity === _0x4d63f1.ConnectionEnd.client;
  if (_0x4b7ad2 < 38) {
    _0x4a4aea.error(_0x4a4aea, {
      message: _0x17070d ? "Invalid ServerHello message. Message too short." : "Invalid ClientHello message. Message too short.",
      send: true,
      alert: {
        level: _0x4d63f1.Alert.Level.fatal,
        description: _0x4d63f1.Alert.Description.illegal_parameter
      }
    });
  } else {
    var _0x36b9ae = _0x189c39.fragment;
    var _0xbda8d1 = _0x36b9ae.length();
    _0x2a629b = {
      version: {
        major: _0x36b9ae.getByte(),
        minor: _0x36b9ae.getByte()
      },
      random: _0x736a67.util.createBuffer(_0x36b9ae.getBytes(32)),
      session_id: _0x2d1456(_0x36b9ae, 1),
      extensions: []
    };
    if (_0x17070d) {
      _0x2a629b.cipher_suite = _0x36b9ae.getBytes(2);
      _0x2a629b.compression_method = _0x36b9ae.getByte();
    } else {
      _0x2a629b.cipher_suites = _0x2d1456(_0x36b9ae, 2);
      _0x2a629b.compression_methods = _0x2d1456(_0x36b9ae, 1);
    }
    if ((_0xbda8d1 = _0x4b7ad2 - (_0xbda8d1 - _0x36b9ae.length())) > 0) {
      for (var _0x1c8324 = _0x2d1456(_0x36b9ae, 2); _0x1c8324.length() > 0;) {
        _0x2a629b.extensions.push({
          type: [_0x1c8324.getByte(), _0x1c8324.getByte()],
          data: _0x2d1456(_0x1c8324, 2)
        });
      }
      if (!_0x17070d) {
        for (var _0x40f374 = 0; _0x40f374 < _0x2a629b.extensions.length; ++_0x40f374) {
          var _0x18fdb5 = _0x2a629b.extensions[_0x40f374];
          if (_0x18fdb5.type[0] === 0 && _0x18fdb5.type[1] === 0) {
            for (var _0x2b57e8 = _0x2d1456(_0x18fdb5.data, 2); _0x2b57e8.length() > 0;) {
              if (_0x2b57e8.getByte() !== 0) {
                break;
              }
              _0x4a4aea.session.extensions.server_name.serverNameList.push(_0x2d1456(_0x2b57e8, 2).getBytes());
            }
          }
        }
      }
    }
    if (_0x4a4aea.session.version && (_0x2a629b.version.major !== _0x4a4aea.session.version.major || _0x2a629b.version.minor !== _0x4a4aea.session.version.minor)) {
      return _0x4a4aea.error(_0x4a4aea, {
        message: "TLS version change is disallowed during renegotiation.",
        send: true,
        alert: {
          level: _0x4d63f1.Alert.Level.fatal,
          description: _0x4d63f1.Alert.Description.protocol_version
        }
      });
    }
    if (_0x17070d) {
      _0x4a4aea.session.cipherSuite = _0x4d63f1.getCipherSuite(_0x2a629b.cipher_suite);
    } else {
      for (var _0x416cf1 = _0x736a67.util.createBuffer(_0x2a629b.cipher_suites.bytes()); _0x416cf1.length() > 0 && (_0x4a4aea.session.cipherSuite = _0x4d63f1.getCipherSuite(_0x416cf1.getBytes(2)), _0x4a4aea.session.cipherSuite === null););
    }
    if (_0x4a4aea.session.cipherSuite === null) {
      return _0x4a4aea.error(_0x4a4aea, {
        message: "No cipher suites in common.",
        send: true,
        alert: {
          level: _0x4d63f1.Alert.Level.fatal,
          description: _0x4d63f1.Alert.Description.handshake_failure
        },
        cipherSuite: _0x736a67.util.bytesToHex(_0x2a629b.cipher_suite)
      });
    }
    _0x4a4aea.session.compressionMethod = _0x17070d ? _0x2a629b.compression_method : _0x4d63f1.CompressionMethod.none;
  }
  return _0x2a629b;
};
_0x4d63f1.createSecurityParameters = function (_0x15d26a, _0x3222ef) {
  var _0x22ebad = _0x15d26a.entity === _0x4d63f1.ConnectionEnd.client;
  var _0x58efd5 = _0x3222ef.random.bytes();
  var _0x117a4f = _0x22ebad ? _0x15d26a.session.sp.client_random : _0x58efd5;
  var _0x531396 = _0x22ebad ? _0x58efd5 : _0x4d63f1.createRandom().getBytes();
  _0x15d26a.session.sp = {
    entity: _0x15d26a.entity,
    prf_algorithm: _0x4d63f1.PRFAlgorithm.tls_prf_sha256,
    bulk_cipher_algorithm: null,
    cipher_type: null,
    enc_key_length: null,
    block_length: null,
    fixed_iv_length: null,
    record_iv_length: null,
    mac_algorithm: null,
    mac_length: null,
    mac_key_length: null,
    compression_algorithm: _0x15d26a.session.compressionMethod,
    pre_master_secret: null,
    master_secret: null,
    client_random: _0x117a4f,
    server_random: _0x531396
  };
};
_0x4d63f1.handleServerHello = function (_0x4c2811, _0x522a81, _0x17f683) {
  var _0x206ca8 = _0x4d63f1.parseHelloMessage(_0x4c2811, _0x522a81, _0x17f683);
  if (!_0x4c2811.fail) {
    if (!(_0x206ca8.version.minor <= _0x4c2811.version.minor)) {
      return _0x4c2811.error(_0x4c2811, {
        message: "Incompatible TLS version.",
        send: true,
        alert: {
          level: _0x4d63f1.Alert.Level.fatal,
          description: _0x4d63f1.Alert.Description.protocol_version
        }
      });
    }
    _0x4c2811.version.minor = _0x206ca8.version.minor;
    _0x4c2811.session.version = _0x4c2811.version;
    var _0x39f7b1 = _0x206ca8.session_id.bytes();
    if (_0x39f7b1.length > 0 && _0x39f7b1 === _0x4c2811.session.id) {
      _0x4c2811.expect = _0x3d95c0;
      _0x4c2811.session.resuming = true;
      _0x4c2811.session.sp.server_random = _0x206ca8.random.bytes();
    } else {
      _0x4c2811.expect = _0x493aae;
      _0x4c2811.session.resuming = false;
      _0x4d63f1.createSecurityParameters(_0x4c2811, _0x206ca8);
    }
    _0x4c2811.session.id = _0x39f7b1;
    _0x4c2811.process();
  }
};
_0x4d63f1.handleClientHello = function (_0x23b63b, _0x398465, _0x7ee0db) {
  var _0x307854 = _0x4d63f1.parseHelloMessage(_0x23b63b, _0x398465, _0x7ee0db);
  if (!_0x23b63b.fail) {
    var _0x3d053d = _0x307854.session_id.bytes();
    var _0x3bcd59 = null;
    if (_0x23b63b.sessionCache) {
      if ((_0x3bcd59 = _0x23b63b.sessionCache.getSession(_0x3d053d)) === null) {
        _0x3d053d = "";
      } else if (_0x3bcd59.version.major !== _0x307854.version.major || _0x3bcd59.version.minor > _0x307854.version.minor) {
        _0x3bcd59 = null;
        _0x3d053d = "";
      }
    }
    if (_0x3d053d.length === 0) {
      _0x3d053d = _0x736a67.random.getBytes(32);
    }
    _0x23b63b.session.id = _0x3d053d;
    _0x23b63b.session.clientHelloVersion = _0x307854.version;
    _0x23b63b.session.sp = {};
    if (_0x3bcd59) {
      _0x23b63b.version = _0x23b63b.session.version = _0x3bcd59.version;
      _0x23b63b.session.sp = _0x3bcd59.sp;
    } else {
      for (var _0x58540e, _0x544e6b = 1; _0x544e6b < _0x4d63f1.SupportedVersions.length && !((_0x58540e = _0x4d63f1.SupportedVersions[_0x544e6b]).minor <= _0x307854.version.minor); ++_0x544e6b);
      _0x23b63b.version = {
        major: _0x58540e.major,
        minor: _0x58540e.minor
      };
      _0x23b63b.session.version = _0x23b63b.version;
    }
    if (_0x3bcd59 !== null) {
      _0x23b63b.expect = _0x543f16;
      _0x23b63b.session.resuming = true;
      _0x23b63b.session.sp.client_random = _0x307854.random.bytes();
    } else {
      _0x23b63b.expect = _0x23b63b.verifyClient !== false ? _0x15d8c1 : _0x5efb7e;
      _0x23b63b.session.resuming = false;
      _0x4d63f1.createSecurityParameters(_0x23b63b, _0x307854);
    }
    _0x23b63b.open = true;
    _0x4d63f1.queue(_0x23b63b, _0x4d63f1.createRecord(_0x23b63b, {
      type: _0x4d63f1.ContentType.handshake,
      data: _0x4d63f1.createServerHello(_0x23b63b)
    }));
    if (_0x23b63b.session.resuming) {
      _0x4d63f1.queue(_0x23b63b, _0x4d63f1.createRecord(_0x23b63b, {
        type: _0x4d63f1.ContentType.change_cipher_spec,
        data: _0x4d63f1.createChangeCipherSpec()
      }));
      _0x23b63b.state.pending = _0x4d63f1.createConnectionState(_0x23b63b);
      _0x23b63b.state.current.write = _0x23b63b.state.pending.write;
      _0x4d63f1.queue(_0x23b63b, _0x4d63f1.createRecord(_0x23b63b, {
        type: _0x4d63f1.ContentType.handshake,
        data: _0x4d63f1.createFinished(_0x23b63b)
      }));
    } else {
      _0x4d63f1.queue(_0x23b63b, _0x4d63f1.createRecord(_0x23b63b, {
        type: _0x4d63f1.ContentType.handshake,
        data: _0x4d63f1.createCertificate(_0x23b63b)
      }));
      if (!_0x23b63b.fail) {
        _0x4d63f1.queue(_0x23b63b, _0x4d63f1.createRecord(_0x23b63b, {
          type: _0x4d63f1.ContentType.handshake,
          data: _0x4d63f1.createServerKeyExchange(_0x23b63b)
        }));
        if (_0x23b63b.verifyClient !== false) {
          _0x4d63f1.queue(_0x23b63b, _0x4d63f1.createRecord(_0x23b63b, {
            type: _0x4d63f1.ContentType.handshake,
            data: _0x4d63f1.createCertificateRequest(_0x23b63b)
          }));
        }
        _0x4d63f1.queue(_0x23b63b, _0x4d63f1.createRecord(_0x23b63b, {
          type: _0x4d63f1.ContentType.handshake,
          data: _0x4d63f1.createServerHelloDone(_0x23b63b)
        }));
      }
    }
    _0x4d63f1.flush(_0x23b63b);
    _0x23b63b.process();
  }
};
_0x4d63f1.handleCertificate = function (_0x387cca, _0x517547, _0x11131d) {
  if (_0x11131d < 3) {
    return _0x387cca.error(_0x387cca, {
      message: "Invalid Certificate message. Message too short.",
      send: true,
      alert: {
        level: _0x4d63f1.Alert.Level.fatal,
        description: _0x4d63f1.Alert.Description.illegal_parameter
      }
    });
  }
  var _0x396dba;
  var _0x1e9037;
  var _0x5791f8 = _0x517547.fragment;
  var _0x56567c = {
    certificate_list: _0x2d1456(_0x5791f8, 3)
  };
  var _0x2111ed = [];
  try {
    while (_0x56567c.certificate_list.length() > 0) {
      _0x396dba = _0x2d1456(_0x56567c.certificate_list, 3);
      _0x1e9037 = _0x736a67.asn1.fromDer(_0x396dba);
      _0x396dba = _0x736a67.pki.certificateFromAsn1(_0x1e9037, true);
      _0x2111ed.push(_0x396dba);
    }
  } catch (_0x417691) {
    return _0x387cca.error(_0x387cca, {
      message: "Could not parse certificate list.",
      cause: _0x417691,
      send: true,
      alert: {
        level: _0x4d63f1.Alert.Level.fatal,
        description: _0x4d63f1.Alert.Description.bad_certificate
      }
    });
  }
  var _0x2b9e2c = _0x387cca.entity === _0x4d63f1.ConnectionEnd.client;
  if (!_0x2b9e2c && _0x387cca.verifyClient !== true || _0x2111ed.length !== 0) {
    if (_0x2111ed.length === 0) {
      _0x387cca.expect = _0x2b9e2c ? _0x57dd9f : _0x5efb7e;
    } else {
      if (_0x2b9e2c) {
        _0x387cca.session.serverCertificate = _0x2111ed[0];
      } else {
        _0x387cca.session.clientCertificate = _0x2111ed[0];
      }
      if (_0x4d63f1.verifyCertificateChain(_0x387cca, _0x2111ed)) {
        _0x387cca.expect = _0x2b9e2c ? _0x57dd9f : _0x5efb7e;
      }
    }
  } else {
    _0x387cca.error(_0x387cca, {
      message: _0x2b9e2c ? "No server certificate provided." : "No client certificate provided.",
      send: true,
      alert: {
        level: _0x4d63f1.Alert.Level.fatal,
        description: _0x4d63f1.Alert.Description.illegal_parameter
      }
    });
  }
  _0x387cca.process();
};
_0x4d63f1.handleServerKeyExchange = function (_0x3e347b, _0x500937, _0x5d5794) {
  if (_0x5d5794 > 0) {
    return _0x3e347b.error(_0x3e347b, {
      message: "Invalid key parameters. Only RSA is supported.",
      send: true,
      alert: {
        level: _0x4d63f1.Alert.Level.fatal,
        description: _0x4d63f1.Alert.Description.unsupported_certificate
      }
    });
  }
  _0x3e347b.expect = _0x2d73c0;
  _0x3e347b.process();
};
_0x4d63f1.handleClientKeyExchange = function (_0x1e9edf, _0x5ee984, _0x4186ec) {
  if (_0x4186ec < 48) {
    return _0x1e9edf.error(_0x1e9edf, {
      message: "Invalid key parameters. Only RSA is supported.",
      send: true,
      alert: {
        level: _0x4d63f1.Alert.Level.fatal,
        description: _0x4d63f1.Alert.Description.unsupported_certificate
      }
    });
  }
  var _0xe0f1d2 = _0x5ee984.fragment;
  var _0xb8ba84 = {
    enc_pre_master_secret: _0x2d1456(_0xe0f1d2, 2).getBytes()
  };
  var _0x12ca1f = null;
  if (_0x1e9edf.getPrivateKey) {
    try {
      _0x12ca1f = _0x1e9edf.getPrivateKey(_0x1e9edf, _0x1e9edf.session.serverCertificate);
      _0x12ca1f = _0x736a67.pki.privateKeyFromPem(_0x12ca1f);
    } catch (_0x5c938b) {
      _0x1e9edf.error(_0x1e9edf, {
        message: "Could not get private key.",
        cause: _0x5c938b,
        send: true,
        alert: {
          level: _0x4d63f1.Alert.Level.fatal,
          description: _0x4d63f1.Alert.Description.internal_error
        }
      });
    }
  }
  if (_0x12ca1f === null) {
    return _0x1e9edf.error(_0x1e9edf, {
      message: "No private key set.",
      send: true,
      alert: {
        level: _0x4d63f1.Alert.Level.fatal,
        description: _0x4d63f1.Alert.Description.internal_error
      }
    });
  }
  try {
    var _0x38650a = _0x1e9edf.session.sp;
    _0x38650a.pre_master_secret = _0x12ca1f.decrypt(_0xb8ba84.enc_pre_master_secret);
    var _0x20140f = _0x1e9edf.session.clientHelloVersion;
    if (_0x20140f.major !== _0x38650a.pre_master_secret.charCodeAt(0) || _0x20140f.minor !== _0x38650a.pre_master_secret.charCodeAt(1)) {
      throw new Error("TLS version rollback attack detected.");
    }
  } catch (_0x552dda) {
    _0x38650a.pre_master_secret = _0x736a67.random.getBytes(48);
  }
  _0x1e9edf.expect = _0x543f16;
  if (_0x1e9edf.session.clientCertificate !== null) {
    _0x1e9edf.expect = _0x40771c;
  }
  _0x1e9edf.process();
};
_0x4d63f1.handleCertificateRequest = function (_0x3e6014, _0xf87aba, _0x3c686a) {
  if (_0x3c686a < 3) {
    return _0x3e6014.error(_0x3e6014, {
      message: "Invalid CertificateRequest. Message too short.",
      send: true,
      alert: {
        level: _0x4d63f1.Alert.Level.fatal,
        description: _0x4d63f1.Alert.Description.illegal_parameter
      }
    });
  }
  var _0x3d3e8e = _0xf87aba.fragment;
  var _0x4b8bb5 = {
    certificate_types: _0x2d1456(_0x3d3e8e, 1),
    certificate_authorities: _0x2d1456(_0x3d3e8e, 2)
  };
  _0x3e6014.session.certificateRequest = _0x4b8bb5;
  _0x3e6014.expect = _0x29ed8d;
  _0x3e6014.process();
};
_0x4d63f1.handleCertificateVerify = function (_0x25d088, _0x5346d2, _0x4ca756) {
  if (_0x4ca756 < 2) {
    return _0x25d088.error(_0x25d088, {
      message: "Invalid CertificateVerify. Message too short.",
      send: true,
      alert: {
        level: _0x4d63f1.Alert.Level.fatal,
        description: _0x4d63f1.Alert.Description.illegal_parameter
      }
    });
  }
  var _0x319e57 = _0x5346d2.fragment;
  _0x319e57.read -= 4;
  var _0x89d439 = _0x319e57.bytes();
  _0x319e57.read += 4;
  var _0x57094d = {
    signature: _0x2d1456(_0x319e57, 2).getBytes()
  };
  var _0x62f181 = _0x736a67.util.createBuffer();
  _0x62f181.putBuffer(_0x25d088.session.md5.digest());
  _0x62f181.putBuffer(_0x25d088.session.sha1.digest());
  _0x62f181 = _0x62f181.getBytes();
  try {
    if (!_0x25d088.session.clientCertificate.publicKey.verify(_0x62f181, _0x57094d.signature, "NONE")) {
      throw new Error("CertificateVerify signature does not match.");
    }
    _0x25d088.session.md5.update(_0x89d439);
    _0x25d088.session.sha1.update(_0x89d439);
  } catch (_0x198e10) {
    return _0x25d088.error(_0x25d088, {
      message: "Bad signature in CertificateVerify.",
      send: true,
      alert: {
        level: _0x4d63f1.Alert.Level.fatal,
        description: _0x4d63f1.Alert.Description.handshake_failure
      }
    });
  }
  _0x25d088.expect = _0x543f16;
  _0x25d088.process();
};
_0x4d63f1.handleServerHelloDone = function (_0x361cdb, _0x24673c, _0x25d037) {
  if (_0x25d037 > 0) {
    return _0x361cdb.error(_0x361cdb, {
      message: "Invalid ServerHelloDone message. Invalid length.",
      send: true,
      alert: {
        level: _0x4d63f1.Alert.Level.fatal,
        description: _0x4d63f1.Alert.Description.record_overflow
      }
    });
  }
  if (_0x361cdb.serverCertificate === null) {
    var _0x129b16 = {
      message: "No server certificate provided. Not enough security.",
      send: true,
      alert: {
        level: _0x4d63f1.Alert.Level.fatal,
        description: _0x4d63f1.Alert.Description.insufficient_security
      }
    };
    var _0x284aa6 = _0x361cdb.verify(_0x361cdb, _0x129b16.alert.description, 0, []);
    if (_0x284aa6 !== true) {
      if (_0x284aa6 || _0x284aa6 === 0) {
        if (typeof _0x284aa6 != "object" || _0x736a67.util.isArray(_0x284aa6)) {
          if (typeof _0x284aa6 == "number") {
            _0x129b16.alert.description = _0x284aa6;
          }
        } else {
          if (_0x284aa6.message) {
            _0x129b16.message = _0x284aa6.message;
          }
          if (_0x284aa6.alert) {
            _0x129b16.alert.description = _0x284aa6.alert;
          }
        }
      }
      return _0x361cdb.error(_0x361cdb, _0x129b16);
    }
  }
  if (_0x361cdb.session.certificateRequest !== null) {
    _0x24673c = _0x4d63f1.createRecord(_0x361cdb, {
      type: _0x4d63f1.ContentType.handshake,
      data: _0x4d63f1.createCertificate(_0x361cdb)
    });
    _0x4d63f1.queue(_0x361cdb, _0x24673c);
  }
  _0x24673c = _0x4d63f1.createRecord(_0x361cdb, {
    type: _0x4d63f1.ContentType.handshake,
    data: _0x4d63f1.createClientKeyExchange(_0x361cdb)
  });
  _0x4d63f1.queue(_0x361cdb, _0x24673c);
  _0x361cdb.expect = _0x24f79b;
  function _0x5e0b9b(_0x26cc5a, _0x5425e1) {
    if (_0x26cc5a.session.certificateRequest !== null && _0x26cc5a.session.clientCertificate !== null) {
      _0x4d63f1.queue(_0x26cc5a, _0x4d63f1.createRecord(_0x26cc5a, {
        type: _0x4d63f1.ContentType.handshake,
        data: _0x4d63f1.createCertificateVerify(_0x26cc5a, _0x5425e1)
      }));
    }
    _0x4d63f1.queue(_0x26cc5a, _0x4d63f1.createRecord(_0x26cc5a, {
      type: _0x4d63f1.ContentType.change_cipher_spec,
      data: _0x4d63f1.createChangeCipherSpec()
    }));
    _0x26cc5a.state.pending = _0x4d63f1.createConnectionState(_0x26cc5a);
    _0x26cc5a.state.current.write = _0x26cc5a.state.pending.write;
    _0x4d63f1.queue(_0x26cc5a, _0x4d63f1.createRecord(_0x26cc5a, {
      type: _0x4d63f1.ContentType.handshake,
      data: _0x4d63f1.createFinished(_0x26cc5a)
    }));
    _0x26cc5a.expect = _0x3d95c0;
    _0x4d63f1.flush(_0x26cc5a);
    _0x26cc5a.process();
  }
  if (_0x361cdb.session.certificateRequest === null || _0x361cdb.session.clientCertificate === null) {
    return _0x5e0b9b(_0x361cdb, null);
  }
  _0x4d63f1.getClientSignature(_0x361cdb, _0x5e0b9b);
};
_0x4d63f1.handleChangeCipherSpec = function (_0x36771c, _0x57d0da) {
  if (_0x57d0da.fragment.getByte() !== 1) {
    return _0x36771c.error(_0x36771c, {
      message: "Invalid ChangeCipherSpec message received.",
      send: true,
      alert: {
        level: _0x4d63f1.Alert.Level.fatal,
        description: _0x4d63f1.Alert.Description.illegal_parameter
      }
    });
  }
  var _0xedc00c = _0x36771c.entity === _0x4d63f1.ConnectionEnd.client;
  if (_0x36771c.session.resuming && _0xedc00c || !_0x36771c.session.resuming && !_0xedc00c) {
    _0x36771c.state.pending = _0x4d63f1.createConnectionState(_0x36771c);
  }
  _0x36771c.state.current.read = _0x36771c.state.pending.read;
  if (!_0x36771c.session.resuming && _0xedc00c || _0x36771c.session.resuming && !_0xedc00c) {
    _0x36771c.state.pending = null;
  }
  _0x36771c.expect = _0xedc00c ? _0x1f0aff : _0x325934;
  _0x36771c.process();
};
_0x4d63f1.handleFinished = function (_0x59f13a, _0x561f5e, _0x488fdf) {
  var _0x49a687 = _0x561f5e.fragment;
  _0x49a687.read -= 4;
  var _0x52251e = _0x49a687.bytes();
  _0x49a687.read += 4;
  var _0x122bcc = _0x561f5e.fragment.getBytes();
  (_0x49a687 = _0x736a67.util.createBuffer()).putBuffer(_0x59f13a.session.md5.digest());
  _0x49a687.putBuffer(_0x59f13a.session.sha1.digest());
  var _0x2aeba7 = _0x59f13a.entity === _0x4d63f1.ConnectionEnd.client;
  var _0x1c7f5f = _0x2aeba7 ? "server finished" : "client finished";
  var _0x7313fa = _0x59f13a.session.sp;
  if ((_0x49a687 = _0x483f57(_0x7313fa.master_secret, _0x1c7f5f, _0x49a687.getBytes(), 12)).getBytes() !== _0x122bcc) {
    return _0x59f13a.error(_0x59f13a, {
      message: "Invalid verify_data in Finished message.",
      send: true,
      alert: {
        level: _0x4d63f1.Alert.Level.fatal,
        description: _0x4d63f1.Alert.Description.decrypt_error
      }
    });
  }
  _0x59f13a.session.md5.update(_0x52251e);
  _0x59f13a.session.sha1.update(_0x52251e);
  if (_0x59f13a.session.resuming && _0x2aeba7 || !_0x59f13a.session.resuming && !_0x2aeba7) {
    _0x4d63f1.queue(_0x59f13a, _0x4d63f1.createRecord(_0x59f13a, {
      type: _0x4d63f1.ContentType.change_cipher_spec,
      data: _0x4d63f1.createChangeCipherSpec()
    }));
    _0x59f13a.state.current.write = _0x59f13a.state.pending.write;
    _0x59f13a.state.pending = null;
    _0x4d63f1.queue(_0x59f13a, _0x4d63f1.createRecord(_0x59f13a, {
      type: _0x4d63f1.ContentType.handshake,
      data: _0x4d63f1.createFinished(_0x59f13a)
    }));
  }
  _0x59f13a.expect = _0x2aeba7 ? _0x33a36a : _0x117d5c;
  _0x59f13a.handshaking = false;
  ++_0x59f13a.handshakes;
  _0x59f13a.peerCertificate = _0x2aeba7 ? _0x59f13a.session.serverCertificate : _0x59f13a.session.clientCertificate;
  _0x4d63f1.flush(_0x59f13a);
  _0x59f13a.isConnected = true;
  _0x59f13a.connected(_0x59f13a);
  _0x59f13a.process();
};
_0x4d63f1.handleAlert = function (_0x158459, _0x5b53ff) {
  var _0x2612a2;
  var _0x566158 = _0x5b53ff.fragment;
  var _0x57fb24 = {
    level: _0x566158.getByte(),
    description: _0x566158.getByte()
  };
  switch (_0x57fb24.description) {
    case _0x4d63f1.Alert.Description.close_notify:
      _0x2612a2 = "Connection closed.";
      break;
    case _0x4d63f1.Alert.Description.unexpected_message:
      _0x2612a2 = "Unexpected message.";
      break;
    case _0x4d63f1.Alert.Description.bad_record_mac:
      _0x2612a2 = "Bad record MAC.";
      break;
    case _0x4d63f1.Alert.Description.decryption_failed:
      _0x2612a2 = "Decryption failed.";
      break;
    case _0x4d63f1.Alert.Description.record_overflow:
      _0x2612a2 = "Record overflow.";
      break;
    case _0x4d63f1.Alert.Description.decompression_failure:
      _0x2612a2 = "Decompression failed.";
      break;
    case _0x4d63f1.Alert.Description.handshake_failure:
      _0x2612a2 = "Handshake failure.";
      break;
    case _0x4d63f1.Alert.Description.bad_certificate:
      _0x2612a2 = "Bad certificate.";
      break;
    case _0x4d63f1.Alert.Description.unsupported_certificate:
      _0x2612a2 = "Unsupported certificate.";
      break;
    case _0x4d63f1.Alert.Description.certificate_revoked:
      _0x2612a2 = "Certificate revoked.";
      break;
    case _0x4d63f1.Alert.Description.certificate_expired:
      _0x2612a2 = "Certificate expired.";
      break;
    case _0x4d63f1.Alert.Description.certificate_unknown:
      _0x2612a2 = "Certificate unknown.";
      break;
    case _0x4d63f1.Alert.Description.illegal_parameter:
      _0x2612a2 = "Illegal parameter.";
      break;
    case _0x4d63f1.Alert.Description.unknown_ca:
      _0x2612a2 = "Unknown certificate authority.";
      break;
    case _0x4d63f1.Alert.Description.access_denied:
      _0x2612a2 = "Access denied.";
      break;
    case _0x4d63f1.Alert.Description.decode_error:
      _0x2612a2 = "Decode error.";
      break;
    case _0x4d63f1.Alert.Description.decrypt_error:
      _0x2612a2 = "Decrypt error.";
      break;
    case _0x4d63f1.Alert.Description.export_restriction:
      _0x2612a2 = "Export restriction.";
      break;
    case _0x4d63f1.Alert.Description.protocol_version:
      _0x2612a2 = "Unsupported protocol version.";
      break;
    case _0x4d63f1.Alert.Description.insufficient_security:
      _0x2612a2 = "Insufficient security.";
      break;
    case _0x4d63f1.Alert.Description.internal_error:
      _0x2612a2 = "Internal error.";
      break;
    case _0x4d63f1.Alert.Description.user_canceled:
      _0x2612a2 = "User canceled.";
      break;
    case _0x4d63f1.Alert.Description.no_renegotiation:
      _0x2612a2 = "Renegotiation not supported.";
      break;
    default:
      _0x2612a2 = "Unknown error.";
  }
  if (_0x57fb24.description === _0x4d63f1.Alert.Description.close_notify) {
    return _0x158459.close();
  }
  _0x158459.error(_0x158459, {
    message: _0x2612a2,
    send: false,
    origin: _0x158459.entity === _0x4d63f1.ConnectionEnd.client ? "server" : "client",
    alert: _0x57fb24
  });
  _0x158459.process();
};
_0x4d63f1.handleHandshake = function (_0x13ab6b, _0x3a02c9) {
  var _0x11d194 = _0x3a02c9.fragment;
  var _0x1d4db6 = _0x11d194.getByte();
  var _0x3cf9ff = _0x11d194.getInt24();
  if (_0x3cf9ff > _0x11d194.length()) {
    _0x13ab6b.fragmented = _0x3a02c9;
    _0x3a02c9.fragment = _0x736a67.util.createBuffer();
    _0x11d194.read -= 4;
    return _0x13ab6b.process();
  }
  _0x13ab6b.fragmented = null;
  _0x11d194.read -= 4;
  var _0x410682 = _0x11d194.bytes(_0x3cf9ff + 4);
  _0x11d194.read += 4;
  if (_0x1d4db6 in _0x584a8b[_0x13ab6b.entity][_0x13ab6b.expect]) {
    if (_0x13ab6b.entity === _0x4d63f1.ConnectionEnd.server && !_0x13ab6b.open && !_0x13ab6b.fail) {
      _0x13ab6b.handshaking = true;
      _0x13ab6b.session = {
        version: null,
        extensions: {
          server_name: {
            serverNameList: []
          }
        },
        cipherSuite: null,
        compressionMethod: null,
        serverCertificate: null,
        clientCertificate: null,
        md5: _0x736a67.md.md5.create(),
        sha1: _0x736a67.md.sha1.create()
      };
    }
    if (_0x1d4db6 !== _0x4d63f1.HandshakeType.hello_request && _0x1d4db6 !== _0x4d63f1.HandshakeType.certificate_verify && _0x1d4db6 !== _0x4d63f1.HandshakeType.finished) {
      _0x13ab6b.session.md5.update(_0x410682);
      _0x13ab6b.session.sha1.update(_0x410682);
    }
    _0x584a8b[_0x13ab6b.entity][_0x13ab6b.expect][_0x1d4db6](_0x13ab6b, _0x3a02c9, _0x3cf9ff);
  } else {
    _0x4d63f1.handleUnexpected(_0x13ab6b, _0x3a02c9);
  }
};
_0x4d63f1.handleApplicationData = function (_0x3f4d0a, _0x469c35) {
  _0x3f4d0a.data.putBuffer(_0x469c35.fragment);
  _0x3f4d0a.dataReady(_0x3f4d0a);
  _0x3f4d0a.process();
};
_0x4d63f1.handleHeartbeat = function (_0x5f22cc, _0x27c2d5) {
  var _0x2dc9ac = _0x27c2d5.fragment;
  var _0x1e5fc9 = _0x2dc9ac.getByte();
  var _0x40f096 = _0x2dc9ac.getInt16();
  var _0x40fca5 = _0x2dc9ac.getBytes(_0x40f096);
  if (_0x1e5fc9 === _0x4d63f1.HeartbeatMessageType.heartbeat_request) {
    if (_0x5f22cc.handshaking || _0x40f096 > _0x40fca5.length) {
      return _0x5f22cc.process();
    }
    _0x4d63f1.queue(_0x5f22cc, _0x4d63f1.createRecord(_0x5f22cc, {
      type: _0x4d63f1.ContentType.heartbeat,
      data: _0x4d63f1.createHeartbeat(_0x4d63f1.HeartbeatMessageType.heartbeat_response, _0x40fca5)
    }));
    _0x4d63f1.flush(_0x5f22cc);
  } else if (_0x1e5fc9 === _0x4d63f1.HeartbeatMessageType.heartbeat_response) {
    if (_0x40fca5 !== _0x5f22cc.expectedHeartbeatPayload) {
      return _0x5f22cc.process();
    }
    if (_0x5f22cc.heartbeatReceived) {
      _0x5f22cc.heartbeatReceived(_0x5f22cc, _0x736a67.util.createBuffer(_0x40fca5));
    }
  }
  _0x5f22cc.process();
};
var _0x493aae = 1;
var _0x57dd9f = 2;
var _0x2d73c0 = 3;
var _0x29ed8d = 4;
var _0x3d95c0 = 5;
var _0x1f0aff = 6;
var _0x33a36a = 7;
var _0x24f79b = 8;
var _0x15d8c1 = 1;
var _0x5efb7e = 2;
var _0x40771c = 3;
var _0x543f16 = 4;
var _0x325934 = 5;
var _0x117d5c = 6;
var _0x4dafe5 = _0x4d63f1.handleUnexpected;
var _0x4627df = _0x4d63f1.handleChangeCipherSpec;
var _0x5d2801 = _0x4d63f1.handleAlert;
var _0x394ac4 = _0x4d63f1.handleHandshake;
var _0x189da7 = _0x4d63f1.handleApplicationData;
var _0x184561 = _0x4d63f1.handleHeartbeat;
var _0x4d5ab2 = [];
_0x4d5ab2[_0x4d63f1.ConnectionEnd.client] = [[_0x4dafe5, _0x5d2801, _0x394ac4, _0x4dafe5, _0x184561], [_0x4dafe5, _0x5d2801, _0x394ac4, _0x4dafe5, _0x184561], [_0x4dafe5, _0x5d2801, _0x394ac4, _0x4dafe5, _0x184561], [_0x4dafe5, _0x5d2801, _0x394ac4, _0x4dafe5, _0x184561], [_0x4dafe5, _0x5d2801, _0x394ac4, _0x4dafe5, _0x184561], [_0x4627df, _0x5d2801, _0x4dafe5, _0x4dafe5, _0x184561], [_0x4dafe5, _0x5d2801, _0x394ac4, _0x4dafe5, _0x184561], [_0x4dafe5, _0x5d2801, _0x394ac4, _0x189da7, _0x184561], [_0x4dafe5, _0x5d2801, _0x394ac4, _0x4dafe5, _0x184561]];
_0x4d5ab2[_0x4d63f1.ConnectionEnd.server] = [[_0x4dafe5, _0x5d2801, _0x394ac4, _0x4dafe5, _0x184561], [_0x4dafe5, _0x5d2801, _0x394ac4, _0x4dafe5, _0x184561], [_0x4dafe5, _0x5d2801, _0x394ac4, _0x4dafe5, _0x184561], [_0x4dafe5, _0x5d2801, _0x394ac4, _0x4dafe5, _0x184561], [_0x4627df, _0x5d2801, _0x4dafe5, _0x4dafe5, _0x184561], [_0x4dafe5, _0x5d2801, _0x394ac4, _0x4dafe5, _0x184561], [_0x4dafe5, _0x5d2801, _0x394ac4, _0x189da7, _0x184561], [_0x4dafe5, _0x5d2801, _0x394ac4, _0x4dafe5, _0x184561]];
var _0x3c8cc7 = _0x4d63f1.handleHelloRequest;
var _0x3a46fa = _0x4d63f1.handleServerHello;
var _0x4850d8 = _0x4d63f1.handleCertificate;
var _0x5258d2 = _0x4d63f1.handleServerKeyExchange;
var _0x49501a = _0x4d63f1.handleCertificateRequest;
var _0x11b8eb = _0x4d63f1.handleServerHelloDone;
var _0x42482f = _0x4d63f1.handleFinished;
var _0x584a8b = [];
_0x584a8b[_0x4d63f1.ConnectionEnd.client] = [[_0x4dafe5, _0x4dafe5, _0x3a46fa, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5], [_0x3c8cc7, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4850d8, _0x5258d2, _0x49501a, _0x11b8eb, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5], [_0x3c8cc7, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x5258d2, _0x49501a, _0x11b8eb, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5], [_0x3c8cc7, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x49501a, _0x11b8eb, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5], [_0x3c8cc7, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x11b8eb, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5], [_0x3c8cc7, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5], [_0x3c8cc7, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x42482f], [_0x3c8cc7, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5], [_0x3c8cc7, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5]];
var _0x2bd5a9 = _0x4d63f1.handleClientHello;
var _0x4e47ec = _0x4d63f1.handleClientKeyExchange;
var _0x5c27fa = _0x4d63f1.handleCertificateVerify;
_0x584a8b[_0x4d63f1.ConnectionEnd.server] = [[_0x4dafe5, _0x2bd5a9, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5], [_0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4850d8, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5], [_0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4e47ec, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5], [_0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x5c27fa, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5], [_0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5], [_0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x42482f], [_0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5], [_0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5, _0x4dafe5]];
_0x4d63f1.generateKeys = function (_0x34bbfc, _0x45771b) {
  var _0x2f1490 = _0x483f57;
  var _0x17eb2d = _0x45771b.client_random + _0x45771b.server_random;
  if (!_0x34bbfc.session.resuming) {
    _0x45771b.master_secret = _0x2f1490(_0x45771b.pre_master_secret, "master secret", _0x17eb2d, 48).bytes();
    _0x45771b.pre_master_secret = null;
  }
  _0x17eb2d = _0x45771b.server_random + _0x45771b.client_random;
  var _0x56983d = _0x45771b.mac_key_length * 2 + _0x45771b.enc_key_length * 2;
  var _0x26e19b = _0x34bbfc.version.major === _0x4d63f1.Versions.TLS_1_0.major && _0x34bbfc.version.minor === _0x4d63f1.Versions.TLS_1_0.minor;
  if (_0x26e19b) {
    _0x56983d += _0x45771b.fixed_iv_length * 2;
  }
  var _0x3a175e = _0x2f1490(_0x45771b.master_secret, "key expansion", _0x17eb2d, _0x56983d);
  var _0x491912 = {
    client_write_MAC_key: _0x3a175e.getBytes(_0x45771b.mac_key_length),
    server_write_MAC_key: _0x3a175e.getBytes(_0x45771b.mac_key_length),
    client_write_key: _0x3a175e.getBytes(_0x45771b.enc_key_length),
    server_write_key: _0x3a175e.getBytes(_0x45771b.enc_key_length)
  };
  if (_0x26e19b) {
    _0x491912.client_write_IV = _0x3a175e.getBytes(_0x45771b.fixed_iv_length);
    _0x491912.server_write_IV = _0x3a175e.getBytes(_0x45771b.fixed_iv_length);
  }
  return _0x491912;
};
_0x4d63f1.createConnectionState = function (_0x20fc05) {
  var _0x1e2878 = _0x20fc05.entity === _0x4d63f1.ConnectionEnd.client;
  function _0x488a96() {
    var _0x2c0377 = {
      sequenceNumber: [0, 0],
      macKey: null,
      macLength: 0,
      macFunction: null,
      cipherState: null,
      cipherFunction: function (_0x1f1621) {
        return true;
      },
      compressionState: null,
      compressFunction: function (_0x4ef6b1) {
        return true;
      },
      updateSequenceNumber: function () {
        if (_0x2c0377.sequenceNumber[1] === 4294967295) {
          _0x2c0377.sequenceNumber[1] = 0;
          ++_0x2c0377.sequenceNumber[0];
        } else {
          ++_0x2c0377.sequenceNumber[1];
        }
      }
    };
    return _0x2c0377;
  }
  var _0x306a48 = {
    read: _0x488a96(),
    write: _0x488a96()
  };
  _0x306a48.read.update = function (_0x2336af, _0x32add7) {
    if (_0x306a48.read.cipherFunction(_0x32add7, _0x306a48.read)) {
      if (!_0x306a48.read.compressFunction(_0x2336af, _0x32add7, _0x306a48.read)) {
        _0x2336af.error(_0x2336af, {
          message: "Could not decompress record.",
          send: true,
          alert: {
            level: _0x4d63f1.Alert.Level.fatal,
            description: _0x4d63f1.Alert.Description.decompression_failure
          }
        });
      }
    } else {
      _0x2336af.error(_0x2336af, {
        message: "Could not decrypt record or bad MAC.",
        send: true,
        alert: {
          level: _0x4d63f1.Alert.Level.fatal,
          description: _0x4d63f1.Alert.Description.bad_record_mac
        }
      });
    }
    return !_0x2336af.fail;
  };
  _0x306a48.write.update = function (_0x5196a2, _0x1b74ab) {
    if (_0x306a48.write.compressFunction(_0x5196a2, _0x1b74ab, _0x306a48.write)) {
      if (!_0x306a48.write.cipherFunction(_0x1b74ab, _0x306a48.write)) {
        _0x5196a2.error(_0x5196a2, {
          message: "Could not encrypt record.",
          send: false,
          alert: {
            level: _0x4d63f1.Alert.Level.fatal,
            description: _0x4d63f1.Alert.Description.internal_error
          }
        });
      }
    } else {
      _0x5196a2.error(_0x5196a2, {
        message: "Could not compress record.",
        send: false,
        alert: {
          level: _0x4d63f1.Alert.Level.fatal,
          description: _0x4d63f1.Alert.Description.internal_error
        }
      });
    }
    return !_0x5196a2.fail;
  };
  if (_0x20fc05.session) {
    var _0x32e1fb = _0x20fc05.session.sp;
    _0x20fc05.session.cipherSuite.initSecurityParameters(_0x32e1fb);
    _0x32e1fb.keys = _0x4d63f1.generateKeys(_0x20fc05, _0x32e1fb);
    _0x306a48.read.macKey = _0x1e2878 ? _0x32e1fb.keys.server_write_MAC_key : _0x32e1fb.keys.client_write_MAC_key;
    _0x306a48.write.macKey = _0x1e2878 ? _0x32e1fb.keys.client_write_MAC_key : _0x32e1fb.keys.server_write_MAC_key;
    _0x20fc05.session.cipherSuite.initConnectionState(_0x306a48, _0x20fc05, _0x32e1fb);
    switch (_0x32e1fb.compression_algorithm) {
      case _0x4d63f1.CompressionMethod.none:
        break;
      case _0x4d63f1.CompressionMethod.deflate:
        _0x306a48.read.compressFunction = _0xdc8e4c;
        _0x306a48.write.compressFunction = _0x200319;
        break;
      default:
        throw new Error("Unsupported compression algorithm.");
    }
  }
  return _0x306a48;
};
_0x4d63f1.createRandom = function () {
  var _0xd5a2c8 = new Date();
  var _0x4fec14 = +_0xd5a2c8 + _0xd5a2c8.getTimezoneOffset() * 60000;
  var _0xe5e4d6 = _0x736a67.util.createBuffer();
  _0xe5e4d6.putInt32(_0x4fec14);
  _0xe5e4d6.putBytes(_0x736a67.random.getBytes(28));
  return _0xe5e4d6;
};
_0x4d63f1.createRecord = function (_0x46ef81, _0x2468f1) {
  if (_0x2468f1.data) {
    return {
      type: _0x2468f1.type,
      version: {
        major: _0x46ef81.version.major,
        minor: _0x46ef81.version.minor
      },
      length: _0x2468f1.data.length(),
      fragment: _0x2468f1.data
    };
  } else {
    return null;
  }
};
_0x4d63f1.createAlert = function (_0x19c38b, _0x5f17f9) {
  var _0x2cd480 = _0x736a67.util.createBuffer();
  _0x2cd480.putByte(_0x5f17f9.level);
  _0x2cd480.putByte(_0x5f17f9.description);
  return _0x4d63f1.createRecord(_0x19c38b, {
    type: _0x4d63f1.ContentType.alert,
    data: _0x2cd480
  });
};
_0x4d63f1.createClientHello = function (_0x1c46a3) {
  _0x1c46a3.session.clientHelloVersion = {
    major: _0x1c46a3.version.major,
    minor: _0x1c46a3.version.minor
  };
  var _0x44e87a = _0x736a67.util.createBuffer();
  for (var _0x243495 = 0; _0x243495 < _0x1c46a3.cipherSuites.length; ++_0x243495) {
    var _0x364445 = _0x1c46a3.cipherSuites[_0x243495];
    _0x44e87a.putByte(_0x364445.id[0]);
    _0x44e87a.putByte(_0x364445.id[1]);
  }
  var _0xcf000f = _0x44e87a.length();
  var _0x174f3f = _0x736a67.util.createBuffer();
  _0x174f3f.putByte(_0x4d63f1.CompressionMethod.none);
  var _0x3de57d = _0x174f3f.length();
  var _0x3a1099 = _0x736a67.util.createBuffer();
  if (_0x1c46a3.virtualHost) {
    var _0x146acc = _0x736a67.util.createBuffer();
    _0x146acc.putByte(0);
    _0x146acc.putByte(0);
    var _0x122b96 = _0x736a67.util.createBuffer();
    _0x122b96.putByte(0);
    _0x3a4a7d(_0x122b96, 2, _0x736a67.util.createBuffer(_0x1c46a3.virtualHost));
    var _0x456446 = _0x736a67.util.createBuffer();
    _0x3a4a7d(_0x456446, 2, _0x122b96);
    _0x3a4a7d(_0x146acc, 2, _0x456446);
    _0x3a1099.putBuffer(_0x146acc);
  }
  var _0x3fe8b1 = _0x3a1099.length();
  if (_0x3fe8b1 > 0) {
    _0x3fe8b1 += 2;
  }
  var _0xe7ee6c = _0x1c46a3.session.id;
  var _0x4e7915 = _0xe7ee6c.length + 1 + 2 + 4 + 28 + 2 + _0xcf000f + 1 + _0x3de57d + _0x3fe8b1;
  var _0x105b3d = _0x736a67.util.createBuffer();
  _0x105b3d.putByte(_0x4d63f1.HandshakeType.client_hello);
  _0x105b3d.putInt24(_0x4e7915);
  _0x105b3d.putByte(_0x1c46a3.version.major);
  _0x105b3d.putByte(_0x1c46a3.version.minor);
  _0x105b3d.putBytes(_0x1c46a3.session.sp.client_random);
  _0x3a4a7d(_0x105b3d, 1, _0x736a67.util.createBuffer(_0xe7ee6c));
  _0x3a4a7d(_0x105b3d, 2, _0x44e87a);
  _0x3a4a7d(_0x105b3d, 1, _0x174f3f);
  if (_0x3fe8b1 > 0) {
    _0x3a4a7d(_0x105b3d, 2, _0x3a1099);
  }
  return _0x105b3d;
};
_0x4d63f1.createServerHello = function (_0x488053) {
  var _0x2bb9c5 = _0x488053.session.id;
  var _0x2b66cd = _0x2bb9c5.length + 1 + 2 + 4 + 28 + 2 + 1;
  var _0x281cdc = _0x736a67.util.createBuffer();
  _0x281cdc.putByte(_0x4d63f1.HandshakeType.server_hello);
  _0x281cdc.putInt24(_0x2b66cd);
  _0x281cdc.putByte(_0x488053.version.major);
  _0x281cdc.putByte(_0x488053.version.minor);
  _0x281cdc.putBytes(_0x488053.session.sp.server_random);
  _0x3a4a7d(_0x281cdc, 1, _0x736a67.util.createBuffer(_0x2bb9c5));
  _0x281cdc.putByte(_0x488053.session.cipherSuite.id[0]);
  _0x281cdc.putByte(_0x488053.session.cipherSuite.id[1]);
  _0x281cdc.putByte(_0x488053.session.compressionMethod);
  return _0x281cdc;
};
_0x4d63f1.createCertificate = function (_0x4665c4) {
  var _0x321be7;
  var _0x2ef832 = _0x4665c4.entity === _0x4d63f1.ConnectionEnd.client;
  var _0x2c1c91 = null;
  if (_0x4665c4.getCertificate) {
    _0x321be7 = _0x2ef832 ? _0x4665c4.session.certificateRequest : _0x4665c4.session.extensions.server_name.serverNameList;
    _0x2c1c91 = _0x4665c4.getCertificate(_0x4665c4, _0x321be7);
  }
  var _0x258f99 = _0x736a67.util.createBuffer();
  if (_0x2c1c91 !== null) {
    try {
      if (!_0x736a67.util.isArray(_0x2c1c91)) {
        _0x2c1c91 = [_0x2c1c91];
      }
      var _0x167b0f = null;
      for (var _0x18554c = 0; _0x18554c < _0x2c1c91.length; ++_0x18554c) {
        var _0x2f5b28 = _0x736a67.pem.decode(_0x2c1c91[_0x18554c])[0];
        if (_0x2f5b28.type !== "CERTIFICATE" && _0x2f5b28.type !== "X509 CERTIFICATE" && _0x2f5b28.type !== "TRUSTED CERTIFICATE") {
          var _0x2f93de = new Error("Could not convert certificate from PEM; PEM header type is not \"CERTIFICATE\", \"X509 CERTIFICATE\", or \"TRUSTED CERTIFICATE\".");
          _0x2f93de.headerType = _0x2f5b28.type;
          throw _0x2f93de;
        }
        if (_0x2f5b28.procType && _0x2f5b28.procType.type === "ENCRYPTED") {
          throw new Error("Could not convert certificate from PEM; PEM is encrypted.");
        }
        var _0x5294ca = _0x736a67.util.createBuffer(_0x2f5b28.body);
        if (_0x167b0f === null) {
          _0x167b0f = _0x736a67.asn1.fromDer(_0x5294ca.bytes(), false);
        }
        var _0x36f354 = _0x736a67.util.createBuffer();
        _0x3a4a7d(_0x36f354, 3, _0x5294ca);
        _0x258f99.putBuffer(_0x36f354);
      }
      _0x2c1c91 = _0x736a67.pki.certificateFromAsn1(_0x167b0f);
      if (_0x2ef832) {
        _0x4665c4.session.clientCertificate = _0x2c1c91;
      } else {
        _0x4665c4.session.serverCertificate = _0x2c1c91;
      }
    } catch (_0x408f57) {
      return _0x4665c4.error(_0x4665c4, {
        message: "Could not send certificate list.",
        cause: _0x408f57,
        send: true,
        alert: {
          level: _0x4d63f1.Alert.Level.fatal,
          description: _0x4d63f1.Alert.Description.bad_certificate
        }
      });
    }
  }
  var _0x44d8bd = 3 + _0x258f99.length();
  var _0x1e406d = _0x736a67.util.createBuffer();
  _0x1e406d.putByte(_0x4d63f1.HandshakeType.certificate);
  _0x1e406d.putInt24(_0x44d8bd);
  _0x3a4a7d(_0x1e406d, 3, _0x258f99);
  return _0x1e406d;
};
_0x4d63f1.createClientKeyExchange = function (_0xf81cee) {
  var _0x54b0dd = _0x736a67.util.createBuffer();
  _0x54b0dd.putByte(_0xf81cee.session.clientHelloVersion.major);
  _0x54b0dd.putByte(_0xf81cee.session.clientHelloVersion.minor);
  _0x54b0dd.putBytes(_0x736a67.random.getBytes(46));
  var _0x59a398 = _0xf81cee.session.sp;
  _0x59a398.pre_master_secret = _0x54b0dd.getBytes();
  var _0x3f540c = (_0x54b0dd = _0xf81cee.session.serverCertificate.publicKey.encrypt(_0x59a398.pre_master_secret)).length + 2;
  var _0x844067 = _0x736a67.util.createBuffer();
  _0x844067.putByte(_0x4d63f1.HandshakeType.client_key_exchange);
  _0x844067.putInt24(_0x3f540c);
  _0x844067.putInt16(_0x54b0dd.length);
  _0x844067.putBytes(_0x54b0dd);
  return _0x844067;
};
_0x4d63f1.createServerKeyExchange = function (_0x538449) {
  var _0xdedcf = _0x736a67.util.createBuffer();
  return _0xdedcf;
};
_0x4d63f1.getClientSignature = function (_0xe818b3, _0x18c914) {
  var _0x1e3081 = _0x736a67.util.createBuffer();
  _0x1e3081.putBuffer(_0xe818b3.session.md5.digest());
  _0x1e3081.putBuffer(_0xe818b3.session.sha1.digest());
  _0x1e3081 = _0x1e3081.getBytes();
  _0xe818b3.getSignature = _0xe818b3.getSignature || function (_0x2f17ea, _0x2052ae, _0x362c90) {
    var _0x34bb4c = null;
    if (_0x2f17ea.getPrivateKey) {
      try {
        _0x34bb4c = _0x2f17ea.getPrivateKey(_0x2f17ea, _0x2f17ea.session.clientCertificate);
        _0x34bb4c = _0x736a67.pki.privateKeyFromPem(_0x34bb4c);
      } catch (_0x38a541) {
        _0x2f17ea.error(_0x2f17ea, {
          message: "Could not get private key.",
          cause: _0x38a541,
          send: true,
          alert: {
            level: _0x4d63f1.Alert.Level.fatal,
            description: _0x4d63f1.Alert.Description.internal_error
          }
        });
      }
    }
    if (_0x34bb4c === null) {
      _0x2f17ea.error(_0x2f17ea, {
        message: "No private key set.",
        send: true,
        alert: {
          level: _0x4d63f1.Alert.Level.fatal,
          description: _0x4d63f1.Alert.Description.internal_error
        }
      });
    } else {
      _0x2052ae = _0x34bb4c.sign(_0x2052ae, null);
    }
    _0x362c90(_0x2f17ea, _0x2052ae);
  };
  _0xe818b3.getSignature(_0xe818b3, _0x1e3081, _0x18c914);
};
_0x4d63f1.createCertificateVerify = function (_0x522cb3, _0x373f5b) {
  var _0xf81fc9 = _0x373f5b.length + 2;
  var _0x407928 = _0x736a67.util.createBuffer();
  _0x407928.putByte(_0x4d63f1.HandshakeType.certificate_verify);
  _0x407928.putInt24(_0xf81fc9);
  _0x407928.putInt16(_0x373f5b.length);
  _0x407928.putBytes(_0x373f5b);
  return _0x407928;
};
_0x4d63f1.createCertificateRequest = function (_0x4cc20f) {
  var _0x136574 = _0x736a67.util.createBuffer();
  _0x136574.putByte(1);
  var _0x3880ae = _0x736a67.util.createBuffer();
  for (var _0x783d7 in _0x4cc20f.caStore.certs) {
    var _0x3bf8b2 = _0x4cc20f.caStore.certs[_0x783d7];
    var _0x2383b3 = _0x736a67.pki.distinguishedNameToAsn1(_0x3bf8b2.subject);
    var _0x5347e6 = _0x736a67.asn1.toDer(_0x2383b3);
    _0x3880ae.putInt16(_0x5347e6.length());
    _0x3880ae.putBuffer(_0x5347e6);
  }
  var _0x422b82 = 1 + _0x136574.length() + 2 + _0x3880ae.length();
  var _0x2d573d = _0x736a67.util.createBuffer();
  _0x2d573d.putByte(_0x4d63f1.HandshakeType.certificate_request);
  _0x2d573d.putInt24(_0x422b82);
  _0x3a4a7d(_0x2d573d, 1, _0x136574);
  _0x3a4a7d(_0x2d573d, 2, _0x3880ae);
  return _0x2d573d;
};
_0x4d63f1.createServerHelloDone = function (_0xe66c1d) {
  var _0x5ce083 = _0x736a67.util.createBuffer();
  _0x5ce083.putByte(_0x4d63f1.HandshakeType.server_hello_done);
  _0x5ce083.putInt24(0);
  return _0x5ce083;
};
_0x4d63f1.createChangeCipherSpec = function () {
  var _0x592c27 = _0x736a67.util.createBuffer();
  _0x592c27.putByte(1);
  return _0x592c27;
};
_0x4d63f1.createFinished = function (_0x3be9e4) {
  var _0x4b2a57 = _0x736a67.util.createBuffer();
  _0x4b2a57.putBuffer(_0x3be9e4.session.md5.digest());
  _0x4b2a57.putBuffer(_0x3be9e4.session.sha1.digest());
  var _0x1547b7 = _0x3be9e4.entity === _0x4d63f1.ConnectionEnd.client;
  var _0x4c499c = _0x3be9e4.session.sp;
  var _0xe4675a = _0x1547b7 ? "client finished" : "server finished";
  _0x4b2a57 = _0x483f57(_0x4c499c.master_secret, _0xe4675a, _0x4b2a57.getBytes(), 12);
  var _0x330c0f = _0x736a67.util.createBuffer();
  _0x330c0f.putByte(_0x4d63f1.HandshakeType.finished);
  _0x330c0f.putInt24(_0x4b2a57.length());
  _0x330c0f.putBuffer(_0x4b2a57);
  return _0x330c0f;
};
_0x4d63f1.createHeartbeat = function (_0x7698d8, _0x4cfd8a, _0x2a10b1 = _0x4cfd8a.length) {
  var _0x33851b = _0x736a67.util.createBuffer();
  _0x33851b.putByte(_0x7698d8);
  _0x33851b.putInt16(_0x2a10b1);
  _0x33851b.putBytes(_0x4cfd8a);
  var _0xbc8497 = _0x33851b.length();
  var _0x10e687 = Math.max(16, _0xbc8497 - _0x2a10b1 - 3);
  _0x33851b.putBytes(_0x736a67.random.getBytes(_0x10e687));
  return _0x33851b;
};
_0x4d63f1.queue = function (_0x7be062, _0x439abd) {
  if (_0x439abd && (_0x439abd.fragment.length() !== 0 || _0x439abd.type !== _0x4d63f1.ContentType.handshake && _0x439abd.type !== _0x4d63f1.ContentType.alert && _0x439abd.type !== _0x4d63f1.ContentType.change_cipher_spec)) {
    if (_0x439abd.type === _0x4d63f1.ContentType.handshake) {
      var _0x4ae3c3 = _0x439abd.fragment.bytes();
      _0x7be062.session.md5.update(_0x4ae3c3);
      _0x7be062.session.sha1.update(_0x4ae3c3);
      _0x4ae3c3 = null;
    }
    var _0xf06c75;
    if (_0x439abd.fragment.length() <= _0x4d63f1.MaxFragment) {
      _0xf06c75 = [_0x439abd];
    } else {
      _0xf06c75 = [];
      for (var _0x533c84 = _0x439abd.fragment.bytes(); _0x533c84.length > _0x4d63f1.MaxFragment;) {
        _0xf06c75.push(_0x4d63f1.createRecord(_0x7be062, {
          type: _0x439abd.type,
          data: _0x736a67.util.createBuffer(_0x533c84.slice(0, _0x4d63f1.MaxFragment))
        }));
        _0x533c84 = _0x533c84.slice(_0x4d63f1.MaxFragment);
      }
      if (_0x533c84.length > 0) {
        _0xf06c75.push(_0x4d63f1.createRecord(_0x7be062, {
          type: _0x439abd.type,
          data: _0x736a67.util.createBuffer(_0x533c84)
        }));
      }
    }
    for (var _0x4df6cc = 0; _0x4df6cc < _0xf06c75.length && !_0x7be062.fail; ++_0x4df6cc) {
      var _0xd210ec = _0xf06c75[_0x4df6cc];
      if (_0x7be062.state.current.write.update(_0x7be062, _0xd210ec)) {
        _0x7be062.records.push(_0xd210ec);
      }
    }
  }
};
_0x4d63f1.flush = function (_0x4eb6a6) {
  for (var _0x5b54d8 = 0; _0x5b54d8 < _0x4eb6a6.records.length; ++_0x5b54d8) {
    var _0x5c002c = _0x4eb6a6.records[_0x5b54d8];
    _0x4eb6a6.tlsData.putByte(_0x5c002c.type);
    _0x4eb6a6.tlsData.putByte(_0x5c002c.version.major);
    _0x4eb6a6.tlsData.putByte(_0x5c002c.version.minor);
    _0x4eb6a6.tlsData.putInt16(_0x5c002c.fragment.length());
    _0x4eb6a6.tlsData.putBuffer(_0x4eb6a6.records[_0x5b54d8].fragment);
  }
  _0x4eb6a6.records = [];
  return _0x4eb6a6.tlsDataReady(_0x4eb6a6);
};
function _0x44e437(_0x3d3467) {
  switch (_0x3d3467) {
    case true:
      return true;
    case _0x736a67.pki.certificateError.bad_certificate:
      return _0x4d63f1.Alert.Description.bad_certificate;
    case _0x736a67.pki.certificateError.unsupported_certificate:
      return _0x4d63f1.Alert.Description.unsupported_certificate;
    case _0x736a67.pki.certificateError.certificate_revoked:
      return _0x4d63f1.Alert.Description.certificate_revoked;
    case _0x736a67.pki.certificateError.certificate_expired:
      return _0x4d63f1.Alert.Description.certificate_expired;
    case _0x736a67.pki.certificateError.certificate_unknown:
      return _0x4d63f1.Alert.Description.certificate_unknown;
    case _0x736a67.pki.certificateError.unknown_ca:
      return _0x4d63f1.Alert.Description.unknown_ca;
    default:
      return _0x4d63f1.Alert.Description.bad_certificate;
  }
}
_0x4d63f1.verifyCertificateChain = function (_0x5e1213, _0x390c04) {
  try {
    var _0x2444f7 = {};
    for (var _0x49ee60 in _0x5e1213.verifyOptions) {
      _0x2444f7[_0x49ee60] = _0x5e1213.verifyOptions[_0x49ee60];
    }
    _0x2444f7.verify = function (_0x23bb0f, _0x1182d1, _0x299908) {
      _0x44e437(_0x23bb0f);
      var _0x2fffcc = _0x5e1213.verify(_0x5e1213, _0x23bb0f, _0x1182d1, _0x299908);
      if (_0x2fffcc !== true) {
        if (typeof _0x2fffcc == "object" && !_0x736a67.util.isArray(_0x2fffcc)) {
          var _0x152112 = new Error("The application rejected the certificate.");
          _0x152112.send = true;
          _0x152112.alert = {
            level: _0x4d63f1.Alert.Level.fatal,
            description: _0x4d63f1.Alert.Description.bad_certificate
          };
          if (_0x2fffcc.message) {
            _0x152112.message = _0x2fffcc.message;
          }
          if (_0x2fffcc.alert) {
            _0x152112.alert.description = _0x2fffcc.alert;
          }
          throw _0x152112;
        }
        if (_0x2fffcc !== _0x23bb0f) {
          _0x2fffcc = function (_0x417282) {
            switch (_0x417282) {
              case true:
                return true;
              case _0x4d63f1.Alert.Description.bad_certificate:
                return _0x736a67.pki.certificateError.bad_certificate;
              case _0x4d63f1.Alert.Description.unsupported_certificate:
                return _0x736a67.pki.certificateError.unsupported_certificate;
              case _0x4d63f1.Alert.Description.certificate_revoked:
                return _0x736a67.pki.certificateError.certificate_revoked;
              case _0x4d63f1.Alert.Description.certificate_expired:
                return _0x736a67.pki.certificateError.certificate_expired;
              case _0x4d63f1.Alert.Description.certificate_unknown:
                return _0x736a67.pki.certificateError.certificate_unknown;
              case _0x4d63f1.Alert.Description.unknown_ca:
                return _0x736a67.pki.certificateError.unknown_ca;
              default:
                return _0x736a67.pki.certificateError.bad_certificate;
            }
          }(_0x2fffcc);
        }
      }
      return _0x2fffcc;
    };
    _0x736a67.pki.verifyCertificateChain(_0x5e1213.caStore, _0x390c04, _0x2444f7);
  } catch (_0x1c5bad) {
    var _0x7d899d = _0x1c5bad;
    if (typeof _0x7d899d != "object" || _0x736a67.util.isArray(_0x7d899d)) {
      _0x7d899d = {
        send: true,
        alert: {
          level: _0x4d63f1.Alert.Level.fatal,
          description: _0x44e437(_0x1c5bad)
        }
      };
    }
    if (!("send" in _0x7d899d)) {
      _0x7d899d.send = true;
    }
    if (!("alert" in _0x7d899d)) {
      _0x7d899d.alert = {
        level: _0x4d63f1.Alert.Level.fatal,
        description: _0x44e437(_0x7d899d.error)
      };
    }
    _0x5e1213.error(_0x5e1213, _0x7d899d);
  }
  return !_0x5e1213.fail;
};
_0x4d63f1.createSessionCache = function (_0x4a1145, _0x47e95b) {
  var _0x34cbae = null;
  if (_0x4a1145 && _0x4a1145.getSession && _0x4a1145.setSession && _0x4a1145.order) {
    _0x34cbae = _0x4a1145;
  } else {
    (_0x34cbae = {}).cache = _0x4a1145 || {};
    _0x34cbae.capacity = Math.max(_0x47e95b || 100, 1);
    _0x34cbae.order = [];
    for (var _0x39d183 in _0x4a1145) {
      if (_0x34cbae.order.length <= _0x47e95b) {
        _0x34cbae.order.push(_0x39d183);
      } else {
        delete _0x4a1145[_0x39d183];
      }
    }
    _0x34cbae.getSession = function (_0xccd116) {
      var _0x24c1f8 = null;
      var _0x2428d1 = null;
      if (_0xccd116) {
        _0x2428d1 = _0x736a67.util.bytesToHex(_0xccd116);
      } else if (_0x34cbae.order.length > 0) {
        _0x2428d1 = _0x34cbae.order[0];
      }
      if (_0x2428d1 !== null && _0x2428d1 in _0x34cbae.cache) {
        _0x24c1f8 = _0x34cbae.cache[_0x2428d1];
        delete _0x34cbae.cache[_0x2428d1];
        for (var _0x2af8d5 in _0x34cbae.order) {
          if (_0x34cbae.order[_0x2af8d5] === _0x2428d1) {
            _0x34cbae.order.splice(_0x2af8d5, 1);
            break;
          }
        }
      }
      return _0x24c1f8;
    };
    _0x34cbae.setSession = function (_0x5e1c9d, _0x25e6e3) {
      if (_0x34cbae.order.length === _0x34cbae.capacity) {
        var _0x222472 = _0x34cbae.order.shift();
        delete _0x34cbae.cache[_0x222472];
      }
      _0x222472 = _0x736a67.util.bytesToHex(_0x5e1c9d);
      _0x34cbae.order.push(_0x222472);
      _0x34cbae.cache[_0x222472] = _0x25e6e3;
    };
  }
  return _0x34cbae;
};
_0x4d63f1.createConnection = function (_0xbd540e) {
  var _0x36d45d = null;
  _0x36d45d = _0xbd540e.caStore ? _0x736a67.util.isArray(_0xbd540e.caStore) ? _0x736a67.pki.createCaStore(_0xbd540e.caStore) : _0xbd540e.caStore : _0x736a67.pki.createCaStore();
  var _0xb4a492 = _0xbd540e.cipherSuites || null;
  if (_0xb4a492 === null) {
    _0xb4a492 = [];
    for (var _0x2b68a3 in _0x4d63f1.CipherSuites) {
      _0xb4a492.push(_0x4d63f1.CipherSuites[_0x2b68a3]);
    }
  }
  var _0x273c0f = _0xbd540e.server ? _0x4d63f1.ConnectionEnd.server : _0x4d63f1.ConnectionEnd.client;
  var _0x3a759d = _0xbd540e.sessionCache ? _0x4d63f1.createSessionCache(_0xbd540e.sessionCache) : null;
  var _0x2db06f = {
    version: {
      major: _0x4d63f1.Version.major,
      minor: _0x4d63f1.Version.minor
    },
    entity: _0x273c0f,
    sessionId: _0xbd540e.sessionId,
    caStore: _0x36d45d,
    sessionCache: _0x3a759d,
    cipherSuites: _0xb4a492,
    connected: _0xbd540e.connected,
    virtualHost: _0xbd540e.virtualHost || null,
    verifyClient: _0xbd540e.verifyClient || false,
    verify: _0xbd540e.verify || function (_0x5a211f, _0x4ef010, _0x1de915, _0x195913) {
      return _0x4ef010;
    },
    verifyOptions: _0xbd540e.verifyOptions || {},
    getCertificate: _0xbd540e.getCertificate || null,
    getPrivateKey: _0xbd540e.getPrivateKey || null,
    getSignature: _0xbd540e.getSignature || null,
    input: _0x736a67.util.createBuffer(),
    tlsData: _0x736a67.util.createBuffer(),
    data: _0x736a67.util.createBuffer(),
    tlsDataReady: _0xbd540e.tlsDataReady,
    dataReady: _0xbd540e.dataReady,
    heartbeatReceived: _0xbd540e.heartbeatReceived,
    closed: _0xbd540e.closed,
    error: function (_0x15e983, _0x30655c) {
      _0x30655c.origin = _0x30655c.origin || (_0x15e983.entity === _0x4d63f1.ConnectionEnd.client ? "client" : "server");
      if (_0x30655c.send) {
        _0x4d63f1.queue(_0x15e983, _0x4d63f1.createAlert(_0x15e983, _0x30655c.alert));
        _0x4d63f1.flush(_0x15e983);
      }
      var _0x36bf53 = _0x30655c.fatal !== false;
      if (_0x36bf53) {
        _0x15e983.fail = true;
      }
      _0xbd540e.error(_0x15e983, _0x30655c);
      if (_0x36bf53) {
        _0x15e983.close(false);
      }
    },
    deflate: _0xbd540e.deflate || null,
    inflate: _0xbd540e.inflate || null,
    reset: function (_0x328fd7) {
      _0x2db06f.version = {
        major: _0x4d63f1.Version.major,
        minor: _0x4d63f1.Version.minor
      };
      _0x2db06f.record = null;
      _0x2db06f.session = null;
      _0x2db06f.peerCertificate = null;
      _0x2db06f.state = {
        pending: null,
        current: null
      };
      _0x2db06f.entity;
      _0x4d63f1.ConnectionEnd.client;
      _0x2db06f.expect = 0;
      _0x2db06f.fragmented = null;
      _0x2db06f.records = [];
      _0x2db06f.open = false;
      _0x2db06f.handshakes = 0;
      _0x2db06f.handshaking = false;
      _0x2db06f.isConnected = false;
      _0x2db06f.fail = !_0x328fd7 && _0x328fd7 !== undefined;
      _0x2db06f.input.clear();
      _0x2db06f.tlsData.clear();
      _0x2db06f.data.clear();
      _0x2db06f.state.current = _0x4d63f1.createConnectionState(_0x2db06f);
    }
  };
  _0x2db06f.reset();
  _0x2db06f.handshake = function (_0x1c8260) {
    if (_0x2db06f.entity !== _0x4d63f1.ConnectionEnd.client) {
      _0x2db06f.error(_0x2db06f, {
        message: "Cannot initiate handshake as a server.",
        fatal: false
      });
    } else if (_0x2db06f.handshaking) {
      _0x2db06f.error(_0x2db06f, {
        message: "Handshake already in progress.",
        fatal: false
      });
    } else {
      if (_0x2db06f.fail && !_0x2db06f.open && _0x2db06f.handshakes === 0) {
        _0x2db06f.fail = false;
      }
      _0x2db06f.handshaking = true;
      var _0x36a506 = null;
      if ((_0x1c8260 = _0x1c8260 || "").length > 0) {
        if (_0x2db06f.sessionCache) {
          _0x36a506 = _0x2db06f.sessionCache.getSession(_0x1c8260);
        }
        if (_0x36a506 === null) {
          _0x1c8260 = "";
        }
      }
      if (_0x1c8260.length === 0 && _0x2db06f.sessionCache && (_0x36a506 = _0x2db06f.sessionCache.getSession()) !== null) {
        _0x1c8260 = _0x36a506.id;
      }
      _0x2db06f.session = {
        id: _0x1c8260,
        version: null,
        cipherSuite: null,
        compressionMethod: null,
        serverCertificate: null,
        certificateRequest: null,
        clientCertificate: null,
        sp: {},
        md5: _0x736a67.md.md5.create(),
        sha1: _0x736a67.md.sha1.create()
      };
      if (_0x36a506) {
        _0x2db06f.version = _0x36a506.version;
        _0x2db06f.session.sp = _0x36a506.sp;
      }
      _0x2db06f.session.sp.client_random = _0x4d63f1.createRandom().getBytes();
      _0x2db06f.open = true;
      _0x4d63f1.queue(_0x2db06f, _0x4d63f1.createRecord(_0x2db06f, {
        type: _0x4d63f1.ContentType.handshake,
        data: _0x4d63f1.createClientHello(_0x2db06f)
      }));
      _0x4d63f1.flush(_0x2db06f);
    }
  };
  _0x2db06f.process = function (_0x45b1bf) {
    var _0x20876e = 0;
    if (_0x45b1bf) {
      _0x2db06f.input.putBytes(_0x45b1bf);
    }
    if (!_0x2db06f.fail) {
      if (_0x2db06f.record !== null && _0x2db06f.record.ready && _0x2db06f.record.fragment.isEmpty()) {
        _0x2db06f.record = null;
      }
      if (_0x2db06f.record === null) {
        _0x20876e = function (_0x28ee1d) {
          var _0x462ce3 = 0;
          var _0x1011f3 = _0x28ee1d.input;
          var _0xe52b6a = _0x1011f3.length();
          if (_0xe52b6a < 5) {
            _0x462ce3 = 5 - _0xe52b6a;
          } else {
            _0x28ee1d.record = {
              type: _0x1011f3.getByte(),
              version: {
                major: _0x1011f3.getByte(),
                minor: _0x1011f3.getByte()
              },
              length: _0x1011f3.getInt16(),
              fragment: _0x736a67.util.createBuffer(),
              ready: false
            };
            var _0x314f72 = _0x28ee1d.record.version.major === _0x28ee1d.version.major;
            if (_0x314f72 && _0x28ee1d.session && _0x28ee1d.session.version) {
              _0x314f72 = _0x28ee1d.record.version.minor === _0x28ee1d.version.minor;
            }
            if (!_0x314f72) {
              _0x28ee1d.error(_0x28ee1d, {
                message: "Incompatible TLS version.",
                send: true,
                alert: {
                  level: _0x4d63f1.Alert.Level.fatal,
                  description: _0x4d63f1.Alert.Description.protocol_version
                }
              });
            }
          }
          return _0x462ce3;
        }(_0x2db06f);
      }
      if (!_0x2db06f.fail && _0x2db06f.record !== null && !_0x2db06f.record.ready) {
        _0x20876e = function (_0x1e522e) {
          var _0x48a7b1 = 0;
          var _0xdd0034 = _0x1e522e.input;
          var _0x3f6119 = _0xdd0034.length();
          if (_0x3f6119 < _0x1e522e.record.length) {
            _0x48a7b1 = _0x1e522e.record.length - _0x3f6119;
          } else {
            _0x1e522e.record.fragment.putBytes(_0xdd0034.getBytes(_0x1e522e.record.length));
            _0xdd0034.compact();
            if (_0x1e522e.state.current.read.update(_0x1e522e, _0x1e522e.record)) {
              if (_0x1e522e.fragmented !== null) {
                if (_0x1e522e.fragmented.type === _0x1e522e.record.type) {
                  _0x1e522e.fragmented.fragment.putBuffer(_0x1e522e.record.fragment);
                  _0x1e522e.record = _0x1e522e.fragmented;
                } else {
                  _0x1e522e.error(_0x1e522e, {
                    message: "Invalid fragmented record.",
                    send: true,
                    alert: {
                      level: _0x4d63f1.Alert.Level.fatal,
                      description: _0x4d63f1.Alert.Description.unexpected_message
                    }
                  });
                }
              }
              _0x1e522e.record.ready = true;
            }
          }
          return _0x48a7b1;
        }(_0x2db06f);
      }
      if (!_0x2db06f.fail && _0x2db06f.record !== null && _0x2db06f.record.ready) {
        (function (_0x2cb1c9, _0x48b207) {
          var _0x550ed9 = _0x48b207.type - _0x4d63f1.ContentType.change_cipher_spec;
          var _0x380427 = _0x4d5ab2[_0x2cb1c9.entity][_0x2cb1c9.expect];
          if (_0x550ed9 in _0x380427) {
            _0x380427[_0x550ed9](_0x2cb1c9, _0x48b207);
          } else {
            _0x4d63f1.handleUnexpected(_0x2cb1c9, _0x48b207);
          }
        })(_0x2db06f, _0x2db06f.record);
      }
    }
    return _0x20876e;
  };
  _0x2db06f.prepare = function (_0x49b447) {
    _0x4d63f1.queue(_0x2db06f, _0x4d63f1.createRecord(_0x2db06f, {
      type: _0x4d63f1.ContentType.application_data,
      data: _0x736a67.util.createBuffer(_0x49b447)
    }));
    return _0x4d63f1.flush(_0x2db06f);
  };
  _0x2db06f.prepareHeartbeatRequest = function (_0x486320, _0x353340) {
    if (_0x486320 instanceof _0x736a67.util.ByteBuffer) {
      _0x486320 = _0x486320.bytes();
    }
    if (_0x353340 === undefined) {
      _0x353340 = _0x486320.length;
    }
    _0x2db06f.expectedHeartbeatPayload = _0x486320;
    _0x4d63f1.queue(_0x2db06f, _0x4d63f1.createRecord(_0x2db06f, {
      type: _0x4d63f1.ContentType.heartbeat,
      data: _0x4d63f1.createHeartbeat(_0x4d63f1.HeartbeatMessageType.heartbeat_request, _0x486320, _0x353340)
    }));
    return _0x4d63f1.flush(_0x2db06f);
  };
  _0x2db06f.close = function (_0x4eddbb) {
    if (!_0x2db06f.fail && _0x2db06f.sessionCache && _0x2db06f.session) {
      var _0x1f4b66 = {
        id: _0x2db06f.session.id,
        version: _0x2db06f.session.version,
        sp: _0x2db06f.session.sp
      };
      _0x1f4b66.sp.keys = null;
      _0x2db06f.sessionCache.setSession(_0x1f4b66.id, _0x1f4b66);
    }
    if (_0x2db06f.open) {
      _0x2db06f.open = false;
      _0x2db06f.input.clear();
      if (_0x2db06f.isConnected || _0x2db06f.handshaking) {
        _0x2db06f.isConnected = _0x2db06f.handshaking = false;
        _0x4d63f1.queue(_0x2db06f, _0x4d63f1.createAlert(_0x2db06f, {
          level: _0x4d63f1.Alert.Level.warning,
          description: _0x4d63f1.Alert.Description.close_notify
        }));
        _0x4d63f1.flush(_0x2db06f);
      }
      _0x2db06f.closed(_0x2db06f);
    }
    _0x2db06f.reset(_0x4eddbb);
  };
  return _0x2db06f;
};
module.exports = _0x736a67.tls = _0x736a67.tls || {};
for (var _0x4ca85e in _0x4d63f1) {
  if (typeof _0x4d63f1[_0x4ca85e] != "function") {
    _0x736a67.tls[_0x4ca85e] = _0x4d63f1[_0x4ca85e];
  }
}
_0x736a67.tls.prf_tls1 = _0x483f57;
_0x736a67.tls.hmac_sha1 = function (_0x54e5ca, _0x3687c9, _0x1d09bc) {
  var _0x3145d9 = _0x736a67.hmac.create();
  _0x3145d9.start("SHA1", _0x54e5ca);
  var _0x4297e1 = _0x736a67.util.createBuffer();
  _0x4297e1.putInt32(_0x3687c9[0]);
  _0x4297e1.putInt32(_0x3687c9[1]);
  _0x4297e1.putByte(_0x1d09bc.type);
  _0x4297e1.putByte(_0x1d09bc.version.major);
  _0x4297e1.putByte(_0x1d09bc.version.minor);
  _0x4297e1.putInt16(_0x1d09bc.length);
  _0x4297e1.putBytes(_0x1d09bc.fragment.bytes());
  _0x3145d9.update(_0x4297e1.getBytes());
  return _0x3145d9.digest().getBytes();
};
_0x736a67.tls.createSessionCache = _0x4d63f1.createSessionCache;
_0x736a67.tls.createConnection = _0x4d63f1.createConnection;