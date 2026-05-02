var _0x23032d = require("./832.js");
require("./925.js");
require("./68.js");
require("./480.js");
require("./270.js");
require("./953.js");
require("./496.js");
require("./563.js");
require("./116.js");
require("./414.js");
var _0x33226e = _0x23032d.asn1;
var _0x5cac96 = module.exports = _0x23032d.pkcs7 = _0x23032d.pkcs7 || {};
function _0x287349(_0x35ea5f) {
  var _0x40a8ae = {};
  var _0x110267 = [];
  if (!_0x33226e.validate(_0x35ea5f, _0x5cac96.asn1.recipientInfoValidator, _0x40a8ae, _0x110267)) {
    var _0x1cc9a1 = new Error("Cannot read PKCS#7 RecipientInfo. ASN.1 object is not an PKCS#7 RecipientInfo.");
    _0x1cc9a1.errors = _0x110267;
    throw _0x1cc9a1;
  }
  return {
    version: _0x40a8ae.version.charCodeAt(0),
    issuer: _0x23032d.pki.RDNAttributesAsArray(_0x40a8ae.issuer),
    serialNumber: _0x23032d.util.createBuffer(_0x40a8ae.serial).toHex(),
    encryptedContent: {
      algorithm: _0x33226e.derToOid(_0x40a8ae.encAlgorithm),
      parameter: _0x40a8ae.encParameter ? _0x40a8ae.encParameter.value : undefined,
      content: _0x40a8ae.encKey
    }
  };
}
function _0x36c60b(_0x16ea0e) {
  var _0x552174;
  var _0x3be5b7 = [];
  for (var _0xde2596 = 0; _0xde2596 < _0x16ea0e.length; ++_0xde2596) {
    _0x3be5b7.push((_0x552174 = _0x16ea0e[_0xde2596], _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SEQUENCE, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.INTEGER, false, _0x33226e.integerToDer(_0x552174.version).getBytes()), _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SEQUENCE, true, [_0x23032d.pki.distinguishedNameToAsn1({
      attributes: _0x552174.issuer
    }), _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.INTEGER, false, _0x23032d.util.hexToBytes(_0x552174.serialNumber))]), _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SEQUENCE, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OID, false, _0x33226e.oidToDer(_0x552174.encryptedContent.algorithm).getBytes()), _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.NULL, false, "")]), _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OCTETSTRING, false, _0x552174.encryptedContent.content)])));
  }
  return _0x3be5b7;
}
function _0x2136b1(_0x309bea) {
  var _0x420212 = _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SEQUENCE, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.INTEGER, false, _0x33226e.integerToDer(_0x309bea.version).getBytes()), _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SEQUENCE, true, [_0x23032d.pki.distinguishedNameToAsn1({
    attributes: _0x309bea.issuer
  }), _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.INTEGER, false, _0x23032d.util.hexToBytes(_0x309bea.serialNumber))]), _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SEQUENCE, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OID, false, _0x33226e.oidToDer(_0x309bea.digestAlgorithm).getBytes()), _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.NULL, false, "")])]);
  if (_0x309bea.authenticatedAttributesAsn1) {
    _0x420212.value.push(_0x309bea.authenticatedAttributesAsn1);
  }
  _0x420212.value.push(_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SEQUENCE, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OID, false, _0x33226e.oidToDer(_0x309bea.signatureAlgorithm).getBytes()), _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.NULL, false, "")]));
  _0x420212.value.push(_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OCTETSTRING, false, _0x309bea.signature));
  if (_0x309bea.unauthenticatedAttributes.length > 0) {
    var _0x19a037 = _0x33226e.create(_0x33226e.Class.CONTEXT_SPECIFIC, 1, true, []);
    for (var _0x1502ba = 0; _0x1502ba < _0x309bea.unauthenticatedAttributes.length; ++_0x1502ba) {
      var _0x10d881 = _0x309bea.unauthenticatedAttributes[_0x1502ba];
      _0x19a037.values.push(_0x1cf2e4(_0x10d881));
    }
    _0x420212.value.push(_0x19a037);
  }
  return _0x420212;
}
function _0x1cf2e4(_0x56d361) {
  var _0x34ebc5;
  if (_0x56d361.type === _0x23032d.pki.oids.contentType) {
    _0x34ebc5 = _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OID, false, _0x33226e.oidToDer(_0x56d361.value).getBytes());
  } else if (_0x56d361.type === _0x23032d.pki.oids.messageDigest) {
    _0x34ebc5 = _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OCTETSTRING, false, _0x56d361.value.bytes());
  } else if (_0x56d361.type === _0x23032d.pki.oids.signingTime) {
    var _0x23e513 = new Date("1950-01-01T00:00:00Z");
    var _0x2315a8 = new Date("2050-01-01T00:00:00Z");
    var _0x3e1d1a = _0x56d361.value;
    if (typeof _0x3e1d1a == "string") {
      var _0x3bb71c = Date.parse(_0x3e1d1a);
      _0x3e1d1a = isNaN(_0x3bb71c) ? _0x3e1d1a.length === 13 ? _0x33226e.utcTimeToDate(_0x3e1d1a) : _0x33226e.generalizedTimeToDate(_0x3e1d1a) : new Date(_0x3bb71c);
    }
    _0x34ebc5 = _0x3e1d1a >= _0x23e513 && _0x3e1d1a < _0x2315a8 ? _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.UTCTIME, false, _0x33226e.dateToUtcTime(_0x3e1d1a)) : _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.GENERALIZEDTIME, false, _0x33226e.dateToGeneralizedTime(_0x3e1d1a));
  }
  return _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SEQUENCE, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OID, false, _0x33226e.oidToDer(_0x56d361.type).getBytes()), _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SET, true, [_0x34ebc5])]);
}
function _0x4f8fcc(_0xcb9e4e, _0x242aa2, _0x4cad70) {
  var _0x2ec97d = {};
  if (!_0x33226e.validate(_0x242aa2, _0x4cad70, _0x2ec97d, [])) {
    var _0x43aed9 = new Error("Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.");
    _0x43aed9.errors = _0x43aed9;
    throw _0x43aed9;
  }
  if (_0x33226e.derToOid(_0x2ec97d.contentType) !== _0x23032d.pki.oids.data) {
    throw new Error("Unsupported PKCS#7 message. Only wrapped ContentType Data supported.");
  }
  if (_0x2ec97d.encryptedContent) {
    var _0x54bcc5 = "";
    if (_0x23032d.util.isArray(_0x2ec97d.encryptedContent)) {
      for (var _0x3352e6 = 0; _0x3352e6 < _0x2ec97d.encryptedContent.length; ++_0x3352e6) {
        if (_0x2ec97d.encryptedContent[_0x3352e6].type !== _0x33226e.Type.OCTETSTRING) {
          throw new Error("Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects.");
        }
        _0x54bcc5 += _0x2ec97d.encryptedContent[_0x3352e6].value;
      }
    } else {
      _0x54bcc5 = _0x2ec97d.encryptedContent;
    }
    _0xcb9e4e.encryptedContent = {
      algorithm: _0x33226e.derToOid(_0x2ec97d.encAlgorithm),
      parameter: _0x23032d.util.createBuffer(_0x2ec97d.encParameter.value),
      content: _0x23032d.util.createBuffer(_0x54bcc5)
    };
  }
  if (_0x2ec97d.content) {
    _0x54bcc5 = "";
    if (_0x23032d.util.isArray(_0x2ec97d.content)) {
      for (_0x3352e6 = 0; _0x3352e6 < _0x2ec97d.content.length; ++_0x3352e6) {
        if (_0x2ec97d.content[_0x3352e6].type !== _0x33226e.Type.OCTETSTRING) {
          throw new Error("Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects.");
        }
        _0x54bcc5 += _0x2ec97d.content[_0x3352e6].value;
      }
    } else {
      _0x54bcc5 = _0x2ec97d.content;
    }
    _0xcb9e4e.content = _0x23032d.util.createBuffer(_0x54bcc5);
  }
  _0xcb9e4e.version = _0x2ec97d.version.charCodeAt(0);
  _0xcb9e4e.rawCapture = _0x2ec97d;
  return _0x2ec97d;
}
function _0x5920f1(_0x2351b6) {
  if (_0x2351b6.encryptedContent.key === undefined) {
    throw new Error("Symmetric key not available.");
  }
  if (_0x2351b6.content === undefined) {
    var _0xca6abe;
    switch (_0x2351b6.encryptedContent.algorithm) {
      case _0x23032d.pki.oids["aes128-CBC"]:
      case _0x23032d.pki.oids["aes192-CBC"]:
      case _0x23032d.pki.oids["aes256-CBC"]:
        _0xca6abe = _0x23032d.aes.createDecryptionCipher(_0x2351b6.encryptedContent.key);
        break;
      case _0x23032d.pki.oids.desCBC:
      case _0x23032d.pki.oids["des-EDE3-CBC"]:
        _0xca6abe = _0x23032d.des.createDecryptionCipher(_0x2351b6.encryptedContent.key);
        break;
      default:
        throw new Error("Unsupported symmetric cipher, OID " + _0x2351b6.encryptedContent.algorithm);
    }
    _0xca6abe.start(_0x2351b6.encryptedContent.parameter);
    _0xca6abe.update(_0x2351b6.encryptedContent.content);
    if (!_0xca6abe.finish()) {
      throw new Error("Symmetric decryption failed.");
    }
    _0x2351b6.content = _0xca6abe.output;
  }
}
_0x5cac96.messageFromPem = function (_0x250fa2) {
  var _0x161dbd = _0x23032d.pem.decode(_0x250fa2)[0];
  if (_0x161dbd.type !== "PKCS7") {
    var _0x110e49 = new Error("Could not convert PKCS#7 message from PEM; PEM header type is not \"PKCS#7\".");
    _0x110e49.headerType = _0x161dbd.type;
    throw _0x110e49;
  }
  if (_0x161dbd.procType && _0x161dbd.procType.type === "ENCRYPTED") {
    throw new Error("Could not convert PKCS#7 message from PEM; PEM is encrypted.");
  }
  var _0x3b41f1 = _0x33226e.fromDer(_0x161dbd.body);
  return _0x5cac96.messageFromAsn1(_0x3b41f1);
};
_0x5cac96.messageToPem = function (_0x2b36f7, _0x4d8dd1) {
  var _0x3cfc1c = {
    type: "PKCS7",
    body: _0x33226e.toDer(_0x2b36f7.toAsn1()).getBytes()
  };
  return _0x23032d.pem.encode(_0x3cfc1c, {
    maxline: _0x4d8dd1
  });
};
_0x5cac96.messageFromAsn1 = function (_0x592422) {
  var _0x4324f3 = {};
  var _0xe7b092 = [];
  if (!_0x33226e.validate(_0x592422, _0x5cac96.asn1.contentInfoValidator, _0x4324f3, _0xe7b092)) {
    var _0x41a0c0 = new Error("Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.");
    _0x41a0c0.errors = _0xe7b092;
    throw _0x41a0c0;
  }
  var _0x372108;
  var _0x5cd13c = _0x33226e.derToOid(_0x4324f3.contentType);
  switch (_0x5cd13c) {
    case _0x23032d.pki.oids.envelopedData:
      _0x372108 = _0x5cac96.createEnvelopedData();
      break;
    case _0x23032d.pki.oids.encryptedData:
      _0x372108 = _0x5cac96.createEncryptedData();
      break;
    case _0x23032d.pki.oids.signedData:
      _0x372108 = _0x5cac96.createSignedData();
      break;
    default:
      throw new Error("Cannot read PKCS#7 message. ContentType with OID " + _0x5cd13c + " is not (yet) supported.");
  }
  _0x372108.fromAsn1(_0x4324f3.content.value[0]);
  return _0x372108;
};
_0x5cac96.createSignedData = function () {
  var _0x508d9a = null;
  return _0x508d9a = {
    type: _0x23032d.pki.oids.signedData,
    version: 1,
    certificates: [],
    crls: [],
    signers: [],
    digestAlgorithmIdentifiers: [],
    contentInfo: null,
    signerInfos: [],
    fromAsn1: function (_0x114549) {
      _0x4f8fcc(_0x508d9a, _0x114549, _0x5cac96.asn1.signedDataValidator);
      _0x508d9a.certificates = [];
      _0x508d9a.crls = [];
      _0x508d9a.digestAlgorithmIdentifiers = [];
      _0x508d9a.contentInfo = null;
      _0x508d9a.signerInfos = [];
      if (_0x508d9a.rawCapture.certificates) {
        for (var _0x472ab9 = _0x508d9a.rawCapture.certificates.value, _0x3395dd = 0; _0x3395dd < _0x472ab9.length; ++_0x3395dd) {
          _0x508d9a.certificates.push(_0x23032d.pki.certificateFromAsn1(_0x472ab9[_0x3395dd]));
        }
      }
    },
    toAsn1: function () {
      if (!_0x508d9a.contentInfo) {
        _0x508d9a.sign();
      }
      var _0x4b4c2a = [];
      for (var _0x42696e = 0; _0x42696e < _0x508d9a.certificates.length; ++_0x42696e) {
        _0x4b4c2a.push(_0x23032d.pki.certificateToAsn1(_0x508d9a.certificates[_0x42696e]));
      }
      var _0x802270 = [];
      var _0x384d1d = _0x33226e.create(_0x33226e.Class.CONTEXT_SPECIFIC, 0, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SEQUENCE, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.INTEGER, false, _0x33226e.integerToDer(_0x508d9a.version).getBytes()), _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SET, true, _0x508d9a.digestAlgorithmIdentifiers), _0x508d9a.contentInfo])]);
      if (_0x4b4c2a.length > 0) {
        _0x384d1d.value[0].value.push(_0x33226e.create(_0x33226e.Class.CONTEXT_SPECIFIC, 0, true, _0x4b4c2a));
      }
      if (_0x802270.length > 0) {
        _0x384d1d.value[0].value.push(_0x33226e.create(_0x33226e.Class.CONTEXT_SPECIFIC, 1, true, _0x802270));
      }
      _0x384d1d.value[0].value.push(_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SET, true, _0x508d9a.signerInfos));
      return _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SEQUENCE, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OID, false, _0x33226e.oidToDer(_0x508d9a.type).getBytes()), _0x384d1d]);
    },
    addSigner: function (_0x2bbe7d) {
      var _0x51f101 = _0x2bbe7d.issuer;
      var _0x2d8000 = _0x2bbe7d.serialNumber;
      if (_0x2bbe7d.certificate) {
        var _0x50349d = _0x2bbe7d.certificate;
        if (typeof _0x50349d == "string") {
          _0x50349d = _0x23032d.pki.certificateFromPem(_0x50349d);
        }
        _0x51f101 = _0x50349d.issuer.attributes;
        _0x2d8000 = _0x50349d.serialNumber;
      }
      var _0x4b8353 = _0x2bbe7d.key;
      if (!_0x4b8353) {
        throw new Error("Could not add PKCS#7 signer; no private key specified.");
      }
      if (typeof _0x4b8353 == "string") {
        _0x4b8353 = _0x23032d.pki.privateKeyFromPem(_0x4b8353);
      }
      var _0x557b54 = _0x2bbe7d.digestAlgorithm || _0x23032d.pki.oids.sha1;
      switch (_0x557b54) {
        case _0x23032d.pki.oids.sha1:
        case _0x23032d.pki.oids.sha256:
        case _0x23032d.pki.oids.sha384:
        case _0x23032d.pki.oids.sha512:
        case _0x23032d.pki.oids.md5:
          break;
        default:
          throw new Error("Could not add PKCS#7 signer; unknown message digest algorithm: " + _0x557b54);
      }
      var _0x2e51d5 = _0x2bbe7d.authenticatedAttributes || [];
      if (_0x2e51d5.length > 0) {
        var _0x5bd68a = false;
        var _0x196f9d = false;
        for (var _0x47ef4a = 0; _0x47ef4a < _0x2e51d5.length; ++_0x47ef4a) {
          var _0x475472 = _0x2e51d5[_0x47ef4a];
          if (_0x5bd68a || _0x475472.type !== _0x23032d.pki.oids.contentType) {
            if (_0x196f9d || _0x475472.type !== _0x23032d.pki.oids.messageDigest) ;else {
              _0x196f9d = true;
              if (_0x5bd68a) {
                break;
              }
            }
          } else {
            _0x5bd68a = true;
            if (_0x196f9d) {
              break;
            }
          }
        }
        if (!_0x5bd68a || !_0x196f9d) {
          throw new Error("Invalid signer.authenticatedAttributes. If signer.authenticatedAttributes is specified, then it must contain at least two attributes, PKCS #9 content-type and PKCS #9 message-digest.");
        }
      }
      _0x508d9a.signers.push({
        key: _0x4b8353,
        version: 1,
        issuer: _0x51f101,
        serialNumber: _0x2d8000,
        digestAlgorithm: _0x557b54,
        signatureAlgorithm: _0x23032d.pki.oids.rsaEncryption,
        signature: null,
        authenticatedAttributes: _0x2e51d5,
        unauthenticatedAttributes: []
      });
    },
    sign: function (_0x54690f) {
      var _0x163f62;
      _0x54690f = _0x54690f || {};
      if (typeof _0x508d9a.content != "object" || _0x508d9a.contentInfo === null) {
        _0x508d9a.contentInfo = _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SEQUENCE, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OID, false, _0x33226e.oidToDer(_0x23032d.pki.oids.data).getBytes())]);
        if ("content" in _0x508d9a) {
          if (_0x508d9a.content instanceof _0x23032d.util.ByteBuffer) {
            _0x163f62 = _0x508d9a.content.bytes();
          } else if (typeof _0x508d9a.content == "string") {
            _0x163f62 = _0x23032d.util.encodeUtf8(_0x508d9a.content);
          }
          if (_0x54690f.detached) {
            _0x508d9a.detachedContent = _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OCTETSTRING, false, _0x163f62);
          } else {
            _0x508d9a.contentInfo.value.push(_0x33226e.create(_0x33226e.Class.CONTEXT_SPECIFIC, 0, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OCTETSTRING, false, _0x163f62)]));
          }
        }
      }
      if (_0x508d9a.signers.length !== 0) {
        (function (_0x226c39) {
          var _0x2a2b77;
          _0x2a2b77 = _0x508d9a.detachedContent ? _0x508d9a.detachedContent : (_0x2a2b77 = _0x508d9a.contentInfo.value[1]).value[0];
          if (!_0x2a2b77) {
            throw new Error("Could not sign PKCS#7 message; there is no content to sign.");
          }
          var _0x26cd6a = _0x33226e.derToOid(_0x508d9a.contentInfo.value[0].value);
          var _0x195d15 = _0x33226e.toDer(_0x2a2b77);
          _0x195d15.getByte();
          _0x33226e.getBerValueLength(_0x195d15);
          _0x195d15 = _0x195d15.getBytes();
          for (var _0x5ca88f in _0x226c39) {
            _0x226c39[_0x5ca88f].start().update(_0x195d15);
          }
          var _0x1a23d4 = new Date();
          for (var _0x5cde02 = 0; _0x5cde02 < _0x508d9a.signers.length; ++_0x5cde02) {
            var _0x240408 = _0x508d9a.signers[_0x5cde02];
            if (_0x240408.authenticatedAttributes.length === 0) {
              if (_0x26cd6a !== _0x23032d.pki.oids.data) {
                throw new Error("Invalid signer; authenticatedAttributes must be present when the ContentInfo content type is not PKCS#7 Data.");
              }
            } else {
              _0x240408.authenticatedAttributesAsn1 = _0x33226e.create(_0x33226e.Class.CONTEXT_SPECIFIC, 0, true, []);
              var _0x582903 = _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SET, true, []);
              for (var _0x4270ad = 0; _0x4270ad < _0x240408.authenticatedAttributes.length; ++_0x4270ad) {
                var _0x344a3c = _0x240408.authenticatedAttributes[_0x4270ad];
                if (_0x344a3c.type === _0x23032d.pki.oids.messageDigest) {
                  _0x344a3c.value = _0x226c39[_0x240408.digestAlgorithm].digest();
                } else if (_0x344a3c.type === _0x23032d.pki.oids.signingTime) {
                  _0x344a3c.value ||= _0x1a23d4;
                }
                _0x582903.value.push(_0x1cf2e4(_0x344a3c));
                _0x240408.authenticatedAttributesAsn1.value.push(_0x1cf2e4(_0x344a3c));
              }
              _0x195d15 = _0x33226e.toDer(_0x582903).getBytes();
              _0x240408.md.start().update(_0x195d15);
            }
            _0x240408.signature = _0x240408.key.sign(_0x240408.md, "RSASSA-PKCS1-V1_5");
          }
          _0x508d9a.signerInfos = function (_0x3c91cf) {
            var _0x54de8f = [];
            for (var _0x1bcb6d = 0; _0x1bcb6d < _0x3c91cf.length; ++_0x1bcb6d) {
              _0x54de8f.push(_0x2136b1(_0x3c91cf[_0x1bcb6d]));
            }
            return _0x54de8f;
          }(_0x508d9a.signers);
        })(function () {
          var _0x2f2fd0 = {};
          for (var _0x28f1be = 0; _0x28f1be < _0x508d9a.signers.length; ++_0x28f1be) {
            var _0x573a33 = _0x508d9a.signers[_0x28f1be];
            if (!((_0x1ccae0 = _0x573a33.digestAlgorithm) in _0x2f2fd0)) {
              _0x2f2fd0[_0x1ccae0] = _0x23032d.md[_0x23032d.pki.oids[_0x1ccae0]].create();
            }
            if (_0x573a33.authenticatedAttributes.length === 0) {
              _0x573a33.md = _0x2f2fd0[_0x1ccae0];
            } else {
              _0x573a33.md = _0x23032d.md[_0x23032d.pki.oids[_0x1ccae0]].create();
            }
          }
          _0x508d9a.digestAlgorithmIdentifiers = [];
          for (var _0x1ccae0 in _0x2f2fd0) {
            _0x508d9a.digestAlgorithmIdentifiers.push(_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SEQUENCE, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OID, false, _0x33226e.oidToDer(_0x1ccae0).getBytes()), _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.NULL, false, "")]));
          }
          return _0x2f2fd0;
        }());
      }
    },
    verify: function () {
      throw new Error("PKCS#7 signature verification not yet implemented.");
    },
    addCertificate: function (_0x9e30ae) {
      if (typeof _0x9e30ae == "string") {
        _0x9e30ae = _0x23032d.pki.certificateFromPem(_0x9e30ae);
      }
      _0x508d9a.certificates.push(_0x9e30ae);
    },
    addCertificateRevokationList: function (_0x345a7a) {
      throw new Error("PKCS#7 CRL support not yet implemented.");
    }
  };
};
_0x5cac96.createEncryptedData = function () {
  var _0x4e3421 = null;
  return _0x4e3421 = {
    type: _0x23032d.pki.oids.encryptedData,
    version: 0,
    encryptedContent: {
      algorithm: _0x23032d.pki.oids["aes256-CBC"]
    },
    fromAsn1: function (_0x302935) {
      _0x4f8fcc(_0x4e3421, _0x302935, _0x5cac96.asn1.encryptedDataValidator);
    },
    decrypt: function (_0x303278) {
      if (_0x303278 !== undefined) {
        _0x4e3421.encryptedContent.key = _0x303278;
      }
      _0x5920f1(_0x4e3421);
    }
  };
};
_0x5cac96.createEnvelopedData = function () {
  var _0x35d923 = null;
  return _0x35d923 = {
    type: _0x23032d.pki.oids.envelopedData,
    version: 0,
    recipients: [],
    encryptedContent: {
      algorithm: _0x23032d.pki.oids["aes256-CBC"]
    },
    fromAsn1: function (_0x44af98) {
      var _0x40bb3d = _0x4f8fcc(_0x35d923, _0x44af98, _0x5cac96.asn1.envelopedDataValidator);
      _0x35d923.recipients = function (_0x52962e) {
        var _0x4bfecc = [];
        for (var _0x793f0c = 0; _0x793f0c < _0x52962e.length; ++_0x793f0c) {
          _0x4bfecc.push(_0x287349(_0x52962e[_0x793f0c]));
        }
        return _0x4bfecc;
      }(_0x40bb3d.recipientInfos.value);
    },
    toAsn1: function () {
      return _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SEQUENCE, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OID, false, _0x33226e.oidToDer(_0x35d923.type).getBytes()), _0x33226e.create(_0x33226e.Class.CONTEXT_SPECIFIC, 0, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SEQUENCE, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.INTEGER, false, _0x33226e.integerToDer(_0x35d923.version).getBytes()), _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SET, true, _0x36c60b(_0x35d923.recipients)), _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SEQUENCE, true, (_0x307bfb = _0x35d923.encryptedContent, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OID, false, _0x33226e.oidToDer(_0x23032d.pki.oids.data).getBytes()), _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.SEQUENCE, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OID, false, _0x33226e.oidToDer(_0x307bfb.algorithm).getBytes()), _0x307bfb.parameter ? _0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OCTETSTRING, false, _0x307bfb.parameter.getBytes()) : undefined]), _0x33226e.create(_0x33226e.Class.CONTEXT_SPECIFIC, 0, true, [_0x33226e.create(_0x33226e.Class.UNIVERSAL, _0x33226e.Type.OCTETSTRING, false, _0x307bfb.content.getBytes())])]))])])]);
      var _0x307bfb;
    },
    findRecipient: function (_0x50bf9f) {
      var _0x143717 = _0x50bf9f.issuer.attributes;
      for (var _0x42d70d = 0; _0x42d70d < _0x35d923.recipients.length; ++_0x42d70d) {
        var _0x34693d = _0x35d923.recipients[_0x42d70d];
        var _0x4bf25f = _0x34693d.issuer;
        if (_0x34693d.serialNumber === _0x50bf9f.serialNumber && _0x4bf25f.length === _0x143717.length) {
          var _0x187877 = true;
          for (var _0x3f8ce0 = 0; _0x3f8ce0 < _0x143717.length; ++_0x3f8ce0) {
            if (_0x4bf25f[_0x3f8ce0].type !== _0x143717[_0x3f8ce0].type || _0x4bf25f[_0x3f8ce0].value !== _0x143717[_0x3f8ce0].value) {
              _0x187877 = false;
              break;
            }
          }
          if (_0x187877) {
            return _0x34693d;
          }
        }
      }
      return null;
    },
    decrypt: function (_0x948226, _0xd4d44a) {
      if (_0x35d923.encryptedContent.key === undefined && _0x948226 !== undefined && _0xd4d44a !== undefined) {
        switch (_0x948226.encryptedContent.algorithm) {
          case _0x23032d.pki.oids.rsaEncryption:
          case _0x23032d.pki.oids.desCBC:
            var _0x403423 = _0xd4d44a.decrypt(_0x948226.encryptedContent.content);
            _0x35d923.encryptedContent.key = _0x23032d.util.createBuffer(_0x403423);
            break;
          default:
            throw new Error("Unsupported asymmetric cipher, OID " + _0x948226.encryptedContent.algorithm);
        }
      }
      _0x5920f1(_0x35d923);
    },
    addRecipient: function (_0xb4fbd6) {
      _0x35d923.recipients.push({
        version: 0,
        issuer: _0xb4fbd6.issuer.attributes,
        serialNumber: _0xb4fbd6.serialNumber,
        encryptedContent: {
          algorithm: _0x23032d.pki.oids.rsaEncryption,
          key: _0xb4fbd6.publicKey
        }
      });
    },
    encrypt: function (_0x5d0f04, _0x35455f) {
      if (_0x35d923.encryptedContent.content === undefined) {
        var _0x11084c;
        var _0x2ed7e2;
        var _0xf974c;
        _0x35455f = _0x35455f || _0x35d923.encryptedContent.algorithm;
        _0x5d0f04 = _0x5d0f04 || _0x35d923.encryptedContent.key;
        switch (_0x35455f) {
          case _0x23032d.pki.oids["aes128-CBC"]:
            _0x11084c = 16;
            _0x2ed7e2 = 16;
            _0xf974c = _0x23032d.aes.createEncryptionCipher;
            break;
          case _0x23032d.pki.oids["aes192-CBC"]:
            _0x11084c = 24;
            _0x2ed7e2 = 16;
            _0xf974c = _0x23032d.aes.createEncryptionCipher;
            break;
          case _0x23032d.pki.oids["aes256-CBC"]:
            _0x11084c = 32;
            _0x2ed7e2 = 16;
            _0xf974c = _0x23032d.aes.createEncryptionCipher;
            break;
          case _0x23032d.pki.oids["des-EDE3-CBC"]:
            _0x11084c = 24;
            _0x2ed7e2 = 8;
            _0xf974c = _0x23032d.des.createEncryptionCipher;
            break;
          default:
            throw new Error("Unsupported symmetric cipher, OID " + _0x35455f);
        }
        if (_0x5d0f04 === undefined) {
          _0x5d0f04 = _0x23032d.util.createBuffer(_0x23032d.random.getBytes(_0x11084c));
        } else if (_0x5d0f04.length() != _0x11084c) {
          throw new Error("Symmetric key has wrong length; got " + _0x5d0f04.length() + " bytes, expected " + _0x11084c + ".");
        }
        _0x35d923.encryptedContent.algorithm = _0x35455f;
        _0x35d923.encryptedContent.key = _0x5d0f04;
        _0x35d923.encryptedContent.parameter = _0x23032d.util.createBuffer(_0x23032d.random.getBytes(_0x2ed7e2));
        var _0x3bbef0 = _0xf974c(_0x5d0f04);
        _0x3bbef0.start(_0x35d923.encryptedContent.parameter.copy());
        _0x3bbef0.update(_0x35d923.content);
        if (!_0x3bbef0.finish()) {
          throw new Error("Symmetric encryption failed.");
        }
        _0x35d923.encryptedContent.content = _0x3bbef0.output;
      }
      for (var _0x3cd87d = 0; _0x3cd87d < _0x35d923.recipients.length; ++_0x3cd87d) {
        var _0x57af39 = _0x35d923.recipients[_0x3cd87d];
        if (_0x57af39.encryptedContent.content === undefined) {
          if (_0x57af39.encryptedContent.algorithm !== _0x23032d.pki.oids.rsaEncryption) {
            throw new Error("Unsupported asymmetric cipher, OID " + _0x57af39.encryptedContent.algorithm);
          }
          _0x57af39.encryptedContent.content = _0x57af39.encryptedContent.key.encrypt(_0x35d923.encryptedContent.key.data);
        }
      }
    }
  };
};