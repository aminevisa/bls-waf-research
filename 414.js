var _0x3b0a32 = require("./832.js");
require("./925.js");
require("./68.js");
require("./480.js");
require("./991.js");
require("./971.js");
require("./270.js");
require("./953.js");
require("./7.js");
require("./95.js");
require("./116.js");
var _0xf76634 = _0x3b0a32.asn1;
var _0x38263d = module.exports = _0x3b0a32.pki = _0x3b0a32.pki || {};
var _0xbd1536 = _0x38263d.oids;
var _0x5b6716 = {
  CN: _0xbd1536.commonName,
  commonName: "CN",
  C: _0xbd1536.countryName,
  countryName: "C",
  L: _0xbd1536.localityName,
  localityName: "L",
  ST: _0xbd1536.stateOrProvinceName,
  stateOrProvinceName: "ST",
  O: _0xbd1536.organizationName,
  organizationName: "O",
  OU: _0xbd1536.organizationalUnitName,
  organizationalUnitName: "OU",
  E: _0xbd1536.emailAddress,
  emailAddress: "E"
};
var _0x2d8b7b = _0x3b0a32.pki.rsa.publicKeyValidator;
var _0x79f337 = {
  name: "Certificate",
  tagClass: _0xf76634.Class.UNIVERSAL,
  type: _0xf76634.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "Certificate.TBSCertificate",
    tagClass: _0xf76634.Class.UNIVERSAL,
    type: _0xf76634.Type.SEQUENCE,
    constructed: true,
    captureAsn1: "tbsCertificate",
    value: [{
      name: "Certificate.TBSCertificate.version",
      tagClass: _0xf76634.Class.CONTEXT_SPECIFIC,
      type: 0,
      constructed: true,
      optional: true,
      value: [{
        name: "Certificate.TBSCertificate.version.integer",
        tagClass: _0xf76634.Class.UNIVERSAL,
        type: _0xf76634.Type.INTEGER,
        constructed: false,
        capture: "certVersion"
      }]
    }, {
      name: "Certificate.TBSCertificate.serialNumber",
      tagClass: _0xf76634.Class.UNIVERSAL,
      type: _0xf76634.Type.INTEGER,
      constructed: false,
      capture: "certSerialNumber"
    }, {
      name: "Certificate.TBSCertificate.signature",
      tagClass: _0xf76634.Class.UNIVERSAL,
      type: _0xf76634.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "Certificate.TBSCertificate.signature.algorithm",
        tagClass: _0xf76634.Class.UNIVERSAL,
        type: _0xf76634.Type.OID,
        constructed: false,
        capture: "certinfoSignatureOid"
      }, {
        name: "Certificate.TBSCertificate.signature.parameters",
        tagClass: _0xf76634.Class.UNIVERSAL,
        optional: true,
        captureAsn1: "certinfoSignatureParams"
      }]
    }, {
      name: "Certificate.TBSCertificate.issuer",
      tagClass: _0xf76634.Class.UNIVERSAL,
      type: _0xf76634.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "certIssuer"
    }, {
      name: "Certificate.TBSCertificate.validity",
      tagClass: _0xf76634.Class.UNIVERSAL,
      type: _0xf76634.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "Certificate.TBSCertificate.validity.notBefore (utc)",
        tagClass: _0xf76634.Class.UNIVERSAL,
        type: _0xf76634.Type.UTCTIME,
        constructed: false,
        optional: true,
        capture: "certValidity1UTCTime"
      }, {
        name: "Certificate.TBSCertificate.validity.notBefore (generalized)",
        tagClass: _0xf76634.Class.UNIVERSAL,
        type: _0xf76634.Type.GENERALIZEDTIME,
        constructed: false,
        optional: true,
        capture: "certValidity2GeneralizedTime"
      }, {
        name: "Certificate.TBSCertificate.validity.notAfter (utc)",
        tagClass: _0xf76634.Class.UNIVERSAL,
        type: _0xf76634.Type.UTCTIME,
        constructed: false,
        optional: true,
        capture: "certValidity3UTCTime"
      }, {
        name: "Certificate.TBSCertificate.validity.notAfter (generalized)",
        tagClass: _0xf76634.Class.UNIVERSAL,
        type: _0xf76634.Type.GENERALIZEDTIME,
        constructed: false,
        optional: true,
        capture: "certValidity4GeneralizedTime"
      }]
    }, {
      name: "Certificate.TBSCertificate.subject",
      tagClass: _0xf76634.Class.UNIVERSAL,
      type: _0xf76634.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "certSubject"
    }, _0x2d8b7b, {
      name: "Certificate.TBSCertificate.issuerUniqueID",
      tagClass: _0xf76634.Class.CONTEXT_SPECIFIC,
      type: 1,
      constructed: true,
      optional: true,
      value: [{
        name: "Certificate.TBSCertificate.issuerUniqueID.id",
        tagClass: _0xf76634.Class.UNIVERSAL,
        type: _0xf76634.Type.BITSTRING,
        constructed: false,
        captureBitStringValue: "certIssuerUniqueId"
      }]
    }, {
      name: "Certificate.TBSCertificate.subjectUniqueID",
      tagClass: _0xf76634.Class.CONTEXT_SPECIFIC,
      type: 2,
      constructed: true,
      optional: true,
      value: [{
        name: "Certificate.TBSCertificate.subjectUniqueID.id",
        tagClass: _0xf76634.Class.UNIVERSAL,
        type: _0xf76634.Type.BITSTRING,
        constructed: false,
        captureBitStringValue: "certSubjectUniqueId"
      }]
    }, {
      name: "Certificate.TBSCertificate.extensions",
      tagClass: _0xf76634.Class.CONTEXT_SPECIFIC,
      type: 3,
      constructed: true,
      captureAsn1: "certExtensions",
      optional: true
    }]
  }, {
    name: "Certificate.signatureAlgorithm",
    tagClass: _0xf76634.Class.UNIVERSAL,
    type: _0xf76634.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "Certificate.signatureAlgorithm.algorithm",
      tagClass: _0xf76634.Class.UNIVERSAL,
      type: _0xf76634.Type.OID,
      constructed: false,
      capture: "certSignatureOid"
    }, {
      name: "Certificate.TBSCertificate.signature.parameters",
      tagClass: _0xf76634.Class.UNIVERSAL,
      optional: true,
      captureAsn1: "certSignatureParams"
    }]
  }, {
    name: "Certificate.signatureValue",
    tagClass: _0xf76634.Class.UNIVERSAL,
    type: _0xf76634.Type.BITSTRING,
    constructed: false,
    captureBitStringValue: "certSignature"
  }]
};
var _0x3a04b8 = {
  name: "rsapss",
  tagClass: _0xf76634.Class.UNIVERSAL,
  type: _0xf76634.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "rsapss.hashAlgorithm",
    tagClass: _0xf76634.Class.CONTEXT_SPECIFIC,
    type: 0,
    constructed: true,
    value: [{
      name: "rsapss.hashAlgorithm.AlgorithmIdentifier",
      tagClass: _0xf76634.Class.UNIVERSAL,
      type: _0xf76634.Class.SEQUENCE,
      constructed: true,
      optional: true,
      value: [{
        name: "rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",
        tagClass: _0xf76634.Class.UNIVERSAL,
        type: _0xf76634.Type.OID,
        constructed: false,
        capture: "hashOid"
      }]
    }]
  }, {
    name: "rsapss.maskGenAlgorithm",
    tagClass: _0xf76634.Class.CONTEXT_SPECIFIC,
    type: 1,
    constructed: true,
    value: [{
      name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier",
      tagClass: _0xf76634.Class.UNIVERSAL,
      type: _0xf76634.Class.SEQUENCE,
      constructed: true,
      optional: true,
      value: [{
        name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",
        tagClass: _0xf76634.Class.UNIVERSAL,
        type: _0xf76634.Type.OID,
        constructed: false,
        capture: "maskGenOid"
      }, {
        name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",
        tagClass: _0xf76634.Class.UNIVERSAL,
        type: _0xf76634.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",
          tagClass: _0xf76634.Class.UNIVERSAL,
          type: _0xf76634.Type.OID,
          constructed: false,
          capture: "maskGenHashOid"
        }]
      }]
    }]
  }, {
    name: "rsapss.saltLength",
    tagClass: _0xf76634.Class.CONTEXT_SPECIFIC,
    type: 2,
    optional: true,
    value: [{
      name: "rsapss.saltLength.saltLength",
      tagClass: _0xf76634.Class.UNIVERSAL,
      type: _0xf76634.Class.INTEGER,
      constructed: false,
      capture: "saltLength"
    }]
  }, {
    name: "rsapss.trailerField",
    tagClass: _0xf76634.Class.CONTEXT_SPECIFIC,
    type: 3,
    optional: true,
    value: [{
      name: "rsapss.trailer.trailer",
      tagClass: _0xf76634.Class.UNIVERSAL,
      type: _0xf76634.Class.INTEGER,
      constructed: false,
      capture: "trailer"
    }]
  }]
};
var _0x973d02 = {
  name: "CertificationRequestInfo",
  tagClass: _0xf76634.Class.UNIVERSAL,
  type: _0xf76634.Type.SEQUENCE,
  constructed: true,
  captureAsn1: "certificationRequestInfo",
  value: [{
    name: "CertificationRequestInfo.integer",
    tagClass: _0xf76634.Class.UNIVERSAL,
    type: _0xf76634.Type.INTEGER,
    constructed: false,
    capture: "certificationRequestInfoVersion"
  }, {
    name: "CertificationRequestInfo.subject",
    tagClass: _0xf76634.Class.UNIVERSAL,
    type: _0xf76634.Type.SEQUENCE,
    constructed: true,
    captureAsn1: "certificationRequestInfoSubject"
  }, _0x2d8b7b, {
    name: "CertificationRequestInfo.attributes",
    tagClass: _0xf76634.Class.CONTEXT_SPECIFIC,
    type: 0,
    constructed: true,
    optional: true,
    capture: "certificationRequestInfoAttributes",
    value: [{
      name: "CertificationRequestInfo.attributes",
      tagClass: _0xf76634.Class.UNIVERSAL,
      type: _0xf76634.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "CertificationRequestInfo.attributes.type",
        tagClass: _0xf76634.Class.UNIVERSAL,
        type: _0xf76634.Type.OID,
        constructed: false
      }, {
        name: "CertificationRequestInfo.attributes.value",
        tagClass: _0xf76634.Class.UNIVERSAL,
        type: _0xf76634.Type.SET,
        constructed: true
      }]
    }]
  }]
};
var _0x5c5fb0 = {
  name: "CertificationRequest",
  tagClass: _0xf76634.Class.UNIVERSAL,
  type: _0xf76634.Type.SEQUENCE,
  constructed: true,
  captureAsn1: "csr",
  value: [_0x973d02, {
    name: "CertificationRequest.signatureAlgorithm",
    tagClass: _0xf76634.Class.UNIVERSAL,
    type: _0xf76634.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "CertificationRequest.signatureAlgorithm.algorithm",
      tagClass: _0xf76634.Class.UNIVERSAL,
      type: _0xf76634.Type.OID,
      constructed: false,
      capture: "csrSignatureOid"
    }, {
      name: "CertificationRequest.signatureAlgorithm.parameters",
      tagClass: _0xf76634.Class.UNIVERSAL,
      optional: true,
      captureAsn1: "csrSignatureParams"
    }]
  }, {
    name: "CertificationRequest.signature",
    tagClass: _0xf76634.Class.UNIVERSAL,
    type: _0xf76634.Type.BITSTRING,
    constructed: false,
    captureBitStringValue: "csrSignature"
  }]
};
function _0x5e2b87(_0x63ac52, _0x4dde2d) {
  if (typeof _0x4dde2d == "string") {
    _0x4dde2d = {
      shortName: _0x4dde2d
    };
  }
  var _0x302c3e;
  for (var _0x4c38c8 = null, _0x24e5a2 = 0; _0x4c38c8 === null && _0x24e5a2 < _0x63ac52.attributes.length; ++_0x24e5a2) {
    _0x302c3e = _0x63ac52.attributes[_0x24e5a2];
    if (_0x4dde2d.type && _0x4dde2d.type === _0x302c3e.type || _0x4dde2d.name && _0x4dde2d.name === _0x302c3e.name || _0x4dde2d.shortName && _0x4dde2d.shortName === _0x302c3e.shortName) {
      _0x4c38c8 = _0x302c3e;
    }
  }
  return _0x4c38c8;
}
_0x38263d.RDNAttributesAsArray = function (_0x7339e9, _0x44f5d2) {
  var _0xf0f33d;
  var _0x33d0dc;
  var _0x38f8e9;
  var _0x509da0 = [];
  for (var _0x5fc591 = 0; _0x5fc591 < _0x7339e9.value.length; ++_0x5fc591) {
    _0xf0f33d = _0x7339e9.value[_0x5fc591];
    for (var _0x42f1a3 = 0; _0x42f1a3 < _0xf0f33d.value.length; ++_0x42f1a3) {
      _0x38f8e9 = {};
      _0x33d0dc = _0xf0f33d.value[_0x42f1a3];
      _0x38f8e9.type = _0xf76634.derToOid(_0x33d0dc.value[0].value);
      _0x38f8e9.value = _0x33d0dc.value[1].value;
      _0x38f8e9.valueTagClass = _0x33d0dc.value[1].type;
      if (_0x38f8e9.type in _0xbd1536) {
        _0x38f8e9.name = _0xbd1536[_0x38f8e9.type];
        if (_0x38f8e9.name in _0x5b6716) {
          _0x38f8e9.shortName = _0x5b6716[_0x38f8e9.name];
        }
      }
      if (_0x44f5d2) {
        _0x44f5d2.update(_0x38f8e9.type);
        _0x44f5d2.update(_0x38f8e9.value);
      }
      _0x509da0.push(_0x38f8e9);
    }
  }
  return _0x509da0;
};
_0x38263d.CRIAttributesAsArray = function (_0x9411b5) {
  var _0x369977 = [];
  for (var _0x589ce6 = 0; _0x589ce6 < _0x9411b5.length; ++_0x589ce6) {
    var _0x536597 = _0x9411b5[_0x589ce6];
    var _0x27559d = _0xf76634.derToOid(_0x536597.value[0].value);
    for (var _0x30bf3c = _0x536597.value[1].value, _0x3355cd = 0; _0x3355cd < _0x30bf3c.length; ++_0x3355cd) {
      var _0x34ade8 = {
        type: _0x27559d,
        value: _0x30bf3c[_0x3355cd].value,
        valueTagClass: _0x30bf3c[_0x3355cd].type
      };
      if (_0x34ade8.type in _0xbd1536) {
        _0x34ade8.name = _0xbd1536[_0x34ade8.type];
        if (_0x34ade8.name in _0x5b6716) {
          _0x34ade8.shortName = _0x5b6716[_0x34ade8.name];
        }
      }
      if (_0x34ade8.type === _0xbd1536.extensionRequest) {
        _0x34ade8.extensions = [];
        for (var _0x193a45 = 0; _0x193a45 < _0x34ade8.value.length; ++_0x193a45) {
          _0x34ade8.extensions.push(_0x38263d.certificateExtensionFromAsn1(_0x34ade8.value[_0x193a45]));
        }
      }
      _0x369977.push(_0x34ade8);
    }
  }
  return _0x369977;
};
function _0x40c73e(_0x166ca7, _0x152143, _0x334187) {
  var _0x38c125 = {};
  if (_0x166ca7 !== _0xbd1536["RSASSA-PSS"]) {
    return _0x38c125;
  }
  if (_0x334187) {
    _0x38c125 = {
      hash: {
        algorithmOid: _0xbd1536.sha1
      },
      mgf: {
        algorithmOid: _0xbd1536.mgf1,
        hash: {
          algorithmOid: _0xbd1536.sha1
        }
      },
      saltLength: 20
    };
  }
  var _0x4262c0 = {};
  var _0x28634c = [];
  if (!_0xf76634.validate(_0x152143, _0x3a04b8, _0x4262c0, _0x28634c)) {
    var _0x54ef4c = new Error("Cannot read RSASSA-PSS parameter block.");
    _0x54ef4c.errors = _0x28634c;
    throw _0x54ef4c;
  }
  if (_0x4262c0.hashOid !== undefined) {
    _0x38c125.hash = _0x38c125.hash || {};
    _0x38c125.hash.algorithmOid = _0xf76634.derToOid(_0x4262c0.hashOid);
  }
  if (_0x4262c0.maskGenOid !== undefined) {
    _0x38c125.mgf = _0x38c125.mgf || {};
    _0x38c125.mgf.algorithmOid = _0xf76634.derToOid(_0x4262c0.maskGenOid);
    _0x38c125.mgf.hash = _0x38c125.mgf.hash || {};
    _0x38c125.mgf.hash.algorithmOid = _0xf76634.derToOid(_0x4262c0.maskGenHashOid);
  }
  if (_0x4262c0.saltLength !== undefined) {
    _0x38c125.saltLength = _0x4262c0.saltLength.charCodeAt(0);
  }
  return _0x38c125;
}
function _0xf5aad8(_0x3d264e) {
  switch (_0xbd1536[_0x3d264e.signatureOid]) {
    case "sha1WithRSAEncryption":
    case "sha1WithRSASignature":
      return _0x3b0a32.md.sha1.create();
    case "md5WithRSAEncryption":
      return _0x3b0a32.md.md5.create();
    case "sha256WithRSAEncryption":
    case "RSASSA-PSS":
      return _0x3b0a32.md.sha256.create();
    case "sha384WithRSAEncryption":
      return _0x3b0a32.md.sha384.create();
    case "sha512WithRSAEncryption":
      return _0x3b0a32.md.sha512.create();
    default:
      var _0x18cc07 = new Error("Could not compute " + _0x3d264e.type + " digest. Unknown signature OID.");
      _0x18cc07.signatureOid = _0x3d264e.signatureOid;
      throw _0x18cc07;
  }
}
function _0x42bbbb(_0x9d7b3f) {
  var _0x9f1280;
  var _0x24d169 = _0x9d7b3f.certificate;
  switch (_0x24d169.signatureOid) {
    case _0xbd1536.sha1WithRSAEncryption:
    case _0xbd1536.sha1WithRSASignature:
      break;
    case _0xbd1536["RSASSA-PSS"]:
      var _0xd8bbfc;
      var _0x55ed9b;
      var _0x39f279;
      if ((_0xd8bbfc = _0xbd1536[_0x24d169.signatureParameters.mgf.hash.algorithmOid]) === undefined || _0x3b0a32.md[_0xd8bbfc] === undefined) {
        (_0x39f279 = new Error("Unsupported MGF hash function.")).oid = _0x24d169.signatureParameters.mgf.hash.algorithmOid;
        _0x39f279.name = _0xd8bbfc;
        throw _0x39f279;
      }
      if ((_0x55ed9b = _0xbd1536[_0x24d169.signatureParameters.mgf.algorithmOid]) === undefined || _0x3b0a32.mgf[_0x55ed9b] === undefined) {
        (_0x39f279 = new Error("Unsupported MGF function.")).oid = _0x24d169.signatureParameters.mgf.algorithmOid;
        _0x39f279.name = _0x55ed9b;
        throw _0x39f279;
      }
      _0x55ed9b = _0x3b0a32.mgf[_0x55ed9b].create(_0x3b0a32.md[_0xd8bbfc].create());
      if ((_0xd8bbfc = _0xbd1536[_0x24d169.signatureParameters.hash.algorithmOid]) === undefined || _0x3b0a32.md[_0xd8bbfc] === undefined) {
        (_0x39f279 = new Error("Unsupported RSASSA-PSS hash function.")).oid = _0x24d169.signatureParameters.hash.algorithmOid;
        _0x39f279.name = _0xd8bbfc;
        throw _0x39f279;
      }
      _0x9f1280 = _0x3b0a32.pss.create(_0x3b0a32.md[_0xd8bbfc].create(), _0x55ed9b, _0x24d169.signatureParameters.saltLength);
  }
  return _0x24d169.publicKey.verify(_0x9d7b3f.md.digest().getBytes(), _0x9d7b3f.signature, _0x9f1280);
}
function _0x328c35(_0x530dba) {
  var _0x35cace;
  var _0x27cb58;
  var _0x4bd11a = _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, []);
  for (var _0x328318 = _0x530dba.attributes, _0x3f52ba = 0; _0x3f52ba < _0x328318.length; ++_0x3f52ba) {
    var _0x1ae598 = (_0x35cace = _0x328318[_0x3f52ba]).value;
    var _0x2380e0 = _0xf76634.Type.PRINTABLESTRING;
    if ("valueTagClass" in _0x35cace && (_0x2380e0 = _0x35cace.valueTagClass) === _0xf76634.Type.UTF8) {
      _0x1ae598 = _0x3b0a32.util.encodeUtf8(_0x1ae598);
    }
    _0x27cb58 = _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SET, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.OID, false, _0xf76634.oidToDer(_0x35cace.type).getBytes()), _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0x2380e0, false, _0x1ae598)])]);
    _0x4bd11a.value.push(_0x27cb58);
  }
  return _0x4bd11a;
}
function _0x546f10(_0x1d11d2) {
  var _0x26f219;
  for (var _0x4f7739 = 0; _0x4f7739 < _0x1d11d2.length; ++_0x4f7739) {
    if ((_0x26f219 = _0x1d11d2[_0x4f7739]).name === undefined) {
      if (_0x26f219.type && _0x26f219.type in _0x38263d.oids) {
        _0x26f219.name = _0x38263d.oids[_0x26f219.type];
      } else if (_0x26f219.shortName && _0x26f219.shortName in _0x5b6716) {
        _0x26f219.name = _0x38263d.oids[_0x5b6716[_0x26f219.shortName]];
      }
    }
    if (_0x26f219.type === undefined) {
      if (!_0x26f219.name || !(_0x26f219.name in _0x38263d.oids)) {
        (_0x1739a2 = new Error("Attribute type not specified.")).attribute = _0x26f219;
        throw _0x1739a2;
      }
      _0x26f219.type = _0x38263d.oids[_0x26f219.name];
    }
    if (_0x26f219.shortName === undefined && _0x26f219.name && _0x26f219.name in _0x5b6716) {
      _0x26f219.shortName = _0x5b6716[_0x26f219.name];
    }
    if (_0x26f219.type === _0xbd1536.extensionRequest && (_0x26f219.valueConstructed = true, _0x26f219.valueTagClass = _0xf76634.Type.SEQUENCE, !_0x26f219.value && _0x26f219.extensions)) {
      _0x26f219.value = [];
      for (var _0x37f70c = 0; _0x37f70c < _0x26f219.extensions.length; ++_0x37f70c) {
        _0x26f219.value.push(_0x38263d.certificateExtensionToAsn1(_0x39b864(_0x26f219.extensions[_0x37f70c])));
      }
    }
    var _0x1739a2;
    if (_0x26f219.value === undefined) {
      (_0x1739a2 = new Error("Attribute value not specified.")).attribute = _0x26f219;
      throw _0x1739a2;
    }
  }
}
function _0x39b864(_0x5cdeb6, _0x4f1775) {
  _0x4f1775 = _0x4f1775 || {};
  if (_0x5cdeb6.name === undefined && _0x5cdeb6.id && _0x5cdeb6.id in _0x38263d.oids) {
    _0x5cdeb6.name = _0x38263d.oids[_0x5cdeb6.id];
  }
  if (_0x5cdeb6.id === undefined) {
    if (!_0x5cdeb6.name || !(_0x5cdeb6.name in _0x38263d.oids)) {
      (_0xd58c5c = new Error("Extension ID not specified.")).extension = _0x5cdeb6;
      throw _0xd58c5c;
    }
    _0x5cdeb6.id = _0x38263d.oids[_0x5cdeb6.name];
  }
  if (_0x5cdeb6.value !== undefined) {
    return _0x5cdeb6;
  }
  if (_0x5cdeb6.name === "keyUsage") {
    var _0x1dcc07 = 0;
    var _0x3c4567 = 0;
    var _0x40c187 = 0;
    if (_0x5cdeb6.digitalSignature) {
      _0x3c4567 |= 128;
      _0x1dcc07 = 7;
    }
    if (_0x5cdeb6.nonRepudiation) {
      _0x3c4567 |= 64;
      _0x1dcc07 = 6;
    }
    if (_0x5cdeb6.keyEncipherment) {
      _0x3c4567 |= 32;
      _0x1dcc07 = 5;
    }
    if (_0x5cdeb6.dataEncipherment) {
      _0x3c4567 |= 16;
      _0x1dcc07 = 4;
    }
    if (_0x5cdeb6.keyAgreement) {
      _0x3c4567 |= 8;
      _0x1dcc07 = 3;
    }
    if (_0x5cdeb6.keyCertSign) {
      _0x3c4567 |= 4;
      _0x1dcc07 = 2;
    }
    if (_0x5cdeb6.cRLSign) {
      _0x3c4567 |= 2;
      _0x1dcc07 = 1;
    }
    if (_0x5cdeb6.encipherOnly) {
      _0x3c4567 |= 1;
      _0x1dcc07 = 0;
    }
    if (_0x5cdeb6.decipherOnly) {
      _0x40c187 |= 128;
      _0x1dcc07 = 7;
    }
    var _0x269ce2 = String.fromCharCode(_0x1dcc07);
    if (_0x40c187 !== 0) {
      _0x269ce2 += String.fromCharCode(_0x3c4567) + String.fromCharCode(_0x40c187);
    } else if (_0x3c4567 !== 0) {
      _0x269ce2 += String.fromCharCode(_0x3c4567);
    }
    _0x5cdeb6.value = _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.BITSTRING, false, _0x269ce2);
  } else if (_0x5cdeb6.name === "basicConstraints") {
    _0x5cdeb6.value = _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, []);
    if (_0x5cdeb6.cA) {
      _0x5cdeb6.value.value.push(_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.BOOLEAN, false, String.fromCharCode(255)));
    }
    if ("pathLenConstraint" in _0x5cdeb6) {
      _0x5cdeb6.value.value.push(_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.INTEGER, false, _0xf76634.integerToDer(_0x5cdeb6.pathLenConstraint).getBytes()));
    }
  } else if (_0x5cdeb6.name === "extKeyUsage") {
    _0x5cdeb6.value = _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, []);
    var _0x105dd0 = _0x5cdeb6.value.value;
    for (var _0x4c194d in _0x5cdeb6) {
      if (_0x5cdeb6[_0x4c194d] === true) {
        if (_0x4c194d in _0xbd1536) {
          _0x105dd0.push(_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.OID, false, _0xf76634.oidToDer(_0xbd1536[_0x4c194d]).getBytes()));
        } else if (_0x4c194d.indexOf(".") !== -1) {
          _0x105dd0.push(_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.OID, false, _0xf76634.oidToDer(_0x4c194d).getBytes()));
        }
      }
    }
  } else if (_0x5cdeb6.name === "nsCertType") {
    _0x1dcc07 = 0;
    _0x3c4567 = 0;
    if (_0x5cdeb6.client) {
      _0x3c4567 |= 128;
      _0x1dcc07 = 7;
    }
    if (_0x5cdeb6.server) {
      _0x3c4567 |= 64;
      _0x1dcc07 = 6;
    }
    if (_0x5cdeb6.email) {
      _0x3c4567 |= 32;
      _0x1dcc07 = 5;
    }
    if (_0x5cdeb6.objsign) {
      _0x3c4567 |= 16;
      _0x1dcc07 = 4;
    }
    if (_0x5cdeb6.reserved) {
      _0x3c4567 |= 8;
      _0x1dcc07 = 3;
    }
    if (_0x5cdeb6.sslCA) {
      _0x3c4567 |= 4;
      _0x1dcc07 = 2;
    }
    if (_0x5cdeb6.emailCA) {
      _0x3c4567 |= 2;
      _0x1dcc07 = 1;
    }
    if (_0x5cdeb6.objCA) {
      _0x3c4567 |= 1;
      _0x1dcc07 = 0;
    }
    _0x269ce2 = String.fromCharCode(_0x1dcc07);
    if (_0x3c4567 !== 0) {
      _0x269ce2 += String.fromCharCode(_0x3c4567);
    }
    _0x5cdeb6.value = _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.BITSTRING, false, _0x269ce2);
  } else if (_0x5cdeb6.name === "subjectAltName" || _0x5cdeb6.name === "issuerAltName") {
    _0x5cdeb6.value = _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, []);
    for (var _0x5e4bc7 = 0; _0x5e4bc7 < _0x5cdeb6.altNames.length; ++_0x5e4bc7) {
      _0x269ce2 = (_0xd8dd98 = _0x5cdeb6.altNames[_0x5e4bc7]).value;
      if (_0xd8dd98.type === 7 && _0xd8dd98.ip) {
        if ((_0x269ce2 = _0x3b0a32.util.bytesFromIP(_0xd8dd98.ip)) === null) {
          (_0xd58c5c = new Error("Extension \"ip\" value is not a valid IPv4 or IPv6 address.")).extension = _0x5cdeb6;
          throw _0xd58c5c;
        }
      } else if (_0xd8dd98.type === 8) {
        _0x269ce2 = _0xd8dd98.oid ? _0xf76634.oidToDer(_0xf76634.oidToDer(_0xd8dd98.oid)) : _0xf76634.oidToDer(_0x269ce2);
      }
      _0x5cdeb6.value.value.push(_0xf76634.create(_0xf76634.Class.CONTEXT_SPECIFIC, _0xd8dd98.type, false, _0x269ce2));
    }
  } else if (_0x5cdeb6.name === "nsComment" && _0x4f1775.cert) {
    if (!/^[\x00-\x7F]*$/.test(_0x5cdeb6.comment) || _0x5cdeb6.comment.length < 1 || _0x5cdeb6.comment.length > 128) {
      throw new Error("Invalid \"nsComment\" content.");
    }
    _0x5cdeb6.value = _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.IA5STRING, false, _0x5cdeb6.comment);
  } else if (_0x5cdeb6.name === "subjectKeyIdentifier" && _0x4f1775.cert) {
    var _0x54d02d = _0x4f1775.cert.generateSubjectKeyIdentifier();
    _0x5cdeb6.subjectKeyIdentifier = _0x54d02d.toHex();
    _0x5cdeb6.value = _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.OCTETSTRING, false, _0x54d02d.getBytes());
  } else if (_0x5cdeb6.name === "authorityKeyIdentifier" && _0x4f1775.cert) {
    _0x5cdeb6.value = _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, []);
    _0x105dd0 = _0x5cdeb6.value.value;
    if (_0x5cdeb6.keyIdentifier) {
      var _0x3d960c = _0x5cdeb6.keyIdentifier === true ? _0x4f1775.cert.generateSubjectKeyIdentifier().getBytes() : _0x5cdeb6.keyIdentifier;
      _0x105dd0.push(_0xf76634.create(_0xf76634.Class.CONTEXT_SPECIFIC, 0, false, _0x3d960c));
    }
    if (_0x5cdeb6.authorityCertIssuer) {
      var _0x2eb1cd = [_0xf76634.create(_0xf76634.Class.CONTEXT_SPECIFIC, 4, true, [_0x328c35(_0x5cdeb6.authorityCertIssuer === true ? _0x4f1775.cert.issuer : _0x5cdeb6.authorityCertIssuer)])];
      _0x105dd0.push(_0xf76634.create(_0xf76634.Class.CONTEXT_SPECIFIC, 1, true, _0x2eb1cd));
    }
    if (_0x5cdeb6.serialNumber) {
      var _0x2f039a = _0x3b0a32.util.hexToBytes(_0x5cdeb6.serialNumber === true ? _0x4f1775.cert.serialNumber : _0x5cdeb6.serialNumber);
      _0x105dd0.push(_0xf76634.create(_0xf76634.Class.CONTEXT_SPECIFIC, 2, false, _0x2f039a));
    }
  } else if (_0x5cdeb6.name === "cRLDistributionPoints") {
    _0x5cdeb6.value = _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, []);
    _0x105dd0 = _0x5cdeb6.value.value;
    var _0xd8dd98;
    var _0x43becf = _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, []);
    var _0x23b8af = _0xf76634.create(_0xf76634.Class.CONTEXT_SPECIFIC, 0, true, []);
    for (_0x5e4bc7 = 0; _0x5e4bc7 < _0x5cdeb6.altNames.length; ++_0x5e4bc7) {
      _0x269ce2 = (_0xd8dd98 = _0x5cdeb6.altNames[_0x5e4bc7]).value;
      if (_0xd8dd98.type === 7 && _0xd8dd98.ip) {
        if ((_0x269ce2 = _0x3b0a32.util.bytesFromIP(_0xd8dd98.ip)) === null) {
          (_0xd58c5c = new Error("Extension \"ip\" value is not a valid IPv4 or IPv6 address.")).extension = _0x5cdeb6;
          throw _0xd58c5c;
        }
      } else if (_0xd8dd98.type === 8) {
        _0x269ce2 = _0xd8dd98.oid ? _0xf76634.oidToDer(_0xf76634.oidToDer(_0xd8dd98.oid)) : _0xf76634.oidToDer(_0x269ce2);
      }
      _0x23b8af.value.push(_0xf76634.create(_0xf76634.Class.CONTEXT_SPECIFIC, _0xd8dd98.type, false, _0x269ce2));
    }
    _0x43becf.value.push(_0xf76634.create(_0xf76634.Class.CONTEXT_SPECIFIC, 0, true, [_0x23b8af]));
    _0x105dd0.push(_0x43becf);
  }
  var _0xd58c5c;
  if (_0x5cdeb6.value === undefined) {
    (_0xd58c5c = new Error("Extension value not specified.")).extension = _0x5cdeb6;
    throw _0xd58c5c;
  }
  return _0x5cdeb6;
}
function _0x4037ca(_0x5245a8, _0x27e9d7) {
  if (_0x5245a8 === _0xbd1536["RSASSA-PSS"]) {
    var _0xf8a515 = [];
    if (_0x27e9d7.hash.algorithmOid !== undefined) {
      _0xf8a515.push(_0xf76634.create(_0xf76634.Class.CONTEXT_SPECIFIC, 0, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.OID, false, _0xf76634.oidToDer(_0x27e9d7.hash.algorithmOid).getBytes()), _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.NULL, false, "")])]));
    }
    if (_0x27e9d7.mgf.algorithmOid !== undefined) {
      _0xf8a515.push(_0xf76634.create(_0xf76634.Class.CONTEXT_SPECIFIC, 1, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.OID, false, _0xf76634.oidToDer(_0x27e9d7.mgf.algorithmOid).getBytes()), _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.OID, false, _0xf76634.oidToDer(_0x27e9d7.mgf.hash.algorithmOid).getBytes()), _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.NULL, false, "")])])]));
    }
    if (_0x27e9d7.saltLength !== undefined) {
      _0xf8a515.push(_0xf76634.create(_0xf76634.Class.CONTEXT_SPECIFIC, 2, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.INTEGER, false, _0xf76634.integerToDer(_0x27e9d7.saltLength).getBytes())]));
    }
    return _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, _0xf8a515);
  }
  return _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.NULL, false, "");
}
function _0x2c8152(_0x2917f5) {
  var _0x47f542 = _0xf76634.create(_0xf76634.Class.CONTEXT_SPECIFIC, 0, true, []);
  if (_0x2917f5.attributes.length === 0) {
    return _0x47f542;
  }
  for (var _0x6227ec = _0x2917f5.attributes, _0x31bd07 = 0; _0x31bd07 < _0x6227ec.length; ++_0x31bd07) {
    var _0x29e1d4 = _0x6227ec[_0x31bd07];
    var _0x27bced = _0x29e1d4.value;
    var _0x5d00c3 = _0xf76634.Type.UTF8;
    if ("valueTagClass" in _0x29e1d4) {
      _0x5d00c3 = _0x29e1d4.valueTagClass;
    }
    if (_0x5d00c3 === _0xf76634.Type.UTF8) {
      _0x27bced = _0x3b0a32.util.encodeUtf8(_0x27bced);
    }
    var _0x3b2ea1 = false;
    if ("valueConstructed" in _0x29e1d4) {
      _0x3b2ea1 = _0x29e1d4.valueConstructed;
    }
    var _0x442471 = _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.OID, false, _0xf76634.oidToDer(_0x29e1d4.type).getBytes()), _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SET, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0x5d00c3, _0x3b2ea1, _0x27bced)])]);
    _0x47f542.value.push(_0x442471);
  }
  return _0x47f542;
}
_0x38263d.certificateFromPem = function (_0x3dbc0b, _0x22500f, _0x467921) {
  var _0x359260 = _0x3b0a32.pem.decode(_0x3dbc0b)[0];
  if (_0x359260.type !== "CERTIFICATE" && _0x359260.type !== "X509 CERTIFICATE" && _0x359260.type !== "TRUSTED CERTIFICATE") {
    var _0x44950a = new Error("Could not convert certificate from PEM; PEM header type is not \"CERTIFICATE\", \"X509 CERTIFICATE\", or \"TRUSTED CERTIFICATE\".");
    _0x44950a.headerType = _0x359260.type;
    throw _0x44950a;
  }
  if (_0x359260.procType && _0x359260.procType.type === "ENCRYPTED") {
    throw new Error("Could not convert certificate from PEM; PEM is encrypted.");
  }
  var _0x314711 = _0xf76634.fromDer(_0x359260.body, _0x467921);
  return _0x38263d.certificateFromAsn1(_0x314711, _0x22500f);
};
_0x38263d.certificateToPem = function (_0x594f06, _0x595d98) {
  var _0xe9d044 = {
    type: "CERTIFICATE",
    body: _0xf76634.toDer(_0x38263d.certificateToAsn1(_0x594f06)).getBytes()
  };
  return _0x3b0a32.pem.encode(_0xe9d044, {
    maxline: _0x595d98
  });
};
_0x38263d.publicKeyFromPem = function (_0x3b01b1) {
  var _0xc695a1 = _0x3b0a32.pem.decode(_0x3b01b1)[0];
  if (_0xc695a1.type !== "PUBLIC KEY" && _0xc695a1.type !== "RSA PUBLIC KEY") {
    var _0x47d721 = new Error("Could not convert public key from PEM; PEM header type is not \"PUBLIC KEY\" or \"RSA PUBLIC KEY\".");
    _0x47d721.headerType = _0xc695a1.type;
    throw _0x47d721;
  }
  if (_0xc695a1.procType && _0xc695a1.procType.type === "ENCRYPTED") {
    throw new Error("Could not convert public key from PEM; PEM is encrypted.");
  }
  var _0x3dcda8 = _0xf76634.fromDer(_0xc695a1.body);
  return _0x38263d.publicKeyFromAsn1(_0x3dcda8);
};
_0x38263d.publicKeyToPem = function (_0x246bdc, _0xb82d77) {
  var _0x55f367 = {
    type: "PUBLIC KEY",
    body: _0xf76634.toDer(_0x38263d.publicKeyToAsn1(_0x246bdc)).getBytes()
  };
  return _0x3b0a32.pem.encode(_0x55f367, {
    maxline: _0xb82d77
  });
};
_0x38263d.publicKeyToRSAPublicKeyPem = function (_0x2641ab, _0x326c87) {
  var _0x249a24 = {
    type: "RSA PUBLIC KEY",
    body: _0xf76634.toDer(_0x38263d.publicKeyToRSAPublicKey(_0x2641ab)).getBytes()
  };
  return _0x3b0a32.pem.encode(_0x249a24, {
    maxline: _0x326c87
  });
};
_0x38263d.getPublicKeyFingerprint = function (_0x4f3fe2, _0x540f01) {
  var _0x128a40;
  var _0x343775 = (_0x540f01 = _0x540f01 || {}).md || _0x3b0a32.md.sha1.create();
  switch (_0x540f01.type || "RSAPublicKey") {
    case "RSAPublicKey":
      _0x128a40 = _0xf76634.toDer(_0x38263d.publicKeyToRSAPublicKey(_0x4f3fe2)).getBytes();
      break;
    case "SubjectPublicKeyInfo":
      _0x128a40 = _0xf76634.toDer(_0x38263d.publicKeyToAsn1(_0x4f3fe2)).getBytes();
      break;
    default:
      throw new Error("Unknown fingerprint type \"" + _0x540f01.type + "\".");
  }
  _0x343775.start();
  _0x343775.update(_0x128a40);
  var _0x2d9cb0 = _0x343775.digest();
  if (_0x540f01.encoding === "hex") {
    var _0x6303e8 = _0x2d9cb0.toHex();
    if (_0x540f01.delimiter) {
      return _0x6303e8.match(/.{2}/g).join(_0x540f01.delimiter);
    } else {
      return _0x6303e8;
    }
  }
  if (_0x540f01.encoding === "binary") {
    return _0x2d9cb0.getBytes();
  }
  if (_0x540f01.encoding) {
    throw new Error("Unknown encoding \"" + _0x540f01.encoding + "\".");
  }
  return _0x2d9cb0;
};
_0x38263d.certificationRequestFromPem = function (_0x29ed25, _0x135493, _0x45a6b5) {
  var _0x2fdfb3 = _0x3b0a32.pem.decode(_0x29ed25)[0];
  if (_0x2fdfb3.type !== "CERTIFICATE REQUEST") {
    var _0x23b3d9 = new Error("Could not convert certification request from PEM; PEM header type is not \"CERTIFICATE REQUEST\".");
    _0x23b3d9.headerType = _0x2fdfb3.type;
    throw _0x23b3d9;
  }
  if (_0x2fdfb3.procType && _0x2fdfb3.procType.type === "ENCRYPTED") {
    throw new Error("Could not convert certification request from PEM; PEM is encrypted.");
  }
  var _0x9d63ba = _0xf76634.fromDer(_0x2fdfb3.body, _0x45a6b5);
  return _0x38263d.certificationRequestFromAsn1(_0x9d63ba, _0x135493);
};
_0x38263d.certificationRequestToPem = function (_0x505344, _0xe477d1) {
  var _0x29a82a = {
    type: "CERTIFICATE REQUEST",
    body: _0xf76634.toDer(_0x38263d.certificationRequestToAsn1(_0x505344)).getBytes()
  };
  return _0x3b0a32.pem.encode(_0x29a82a, {
    maxline: _0xe477d1
  });
};
_0x38263d.createCertificate = function () {
  var _0x5a993c = {
    version: 2,
    serialNumber: "00",
    signatureOid: null,
    signature: null,
    siginfo: {}
  };
  _0x5a993c.siginfo.algorithmOid = null;
  _0x5a993c.validity = {};
  _0x5a993c.validity.notBefore = new Date();
  _0x5a993c.validity.notAfter = new Date();
  _0x5a993c.issuer = {};
  _0x5a993c.issuer.getField = function (_0x50975a) {
    return _0x5e2b87(_0x5a993c.issuer, _0x50975a);
  };
  _0x5a993c.issuer.addField = function (_0xf74ab9) {
    _0x546f10([_0xf74ab9]);
    _0x5a993c.issuer.attributes.push(_0xf74ab9);
  };
  _0x5a993c.issuer.attributes = [];
  _0x5a993c.issuer.hash = null;
  _0x5a993c.subject = {};
  _0x5a993c.subject.getField = function (_0x285890) {
    return _0x5e2b87(_0x5a993c.subject, _0x285890);
  };
  _0x5a993c.subject.addField = function (_0x488ba7) {
    _0x546f10([_0x488ba7]);
    _0x5a993c.subject.attributes.push(_0x488ba7);
  };
  _0x5a993c.subject.attributes = [];
  _0x5a993c.subject.hash = null;
  _0x5a993c.extensions = [];
  _0x5a993c.publicKey = null;
  _0x5a993c.md = null;
  _0x5a993c.setSubject = function (_0x1a296c, _0x238b8d) {
    _0x546f10(_0x1a296c);
    _0x5a993c.subject.attributes = _0x1a296c;
    delete _0x5a993c.subject.uniqueId;
    if (_0x238b8d) {
      _0x5a993c.subject.uniqueId = _0x238b8d;
    }
    _0x5a993c.subject.hash = null;
  };
  _0x5a993c.setIssuer = function (_0x485192, _0x40e309) {
    _0x546f10(_0x485192);
    _0x5a993c.issuer.attributes = _0x485192;
    delete _0x5a993c.issuer.uniqueId;
    if (_0x40e309) {
      _0x5a993c.issuer.uniqueId = _0x40e309;
    }
    _0x5a993c.issuer.hash = null;
  };
  _0x5a993c.setExtensions = function (_0x2ff506) {
    for (var _0xcf7533 = 0; _0xcf7533 < _0x2ff506.length; ++_0xcf7533) {
      _0x39b864(_0x2ff506[_0xcf7533], {
        cert: _0x5a993c
      });
    }
    _0x5a993c.extensions = _0x2ff506;
  };
  _0x5a993c.getExtension = function (_0x37c73f) {
    if (typeof _0x37c73f == "string") {
      _0x37c73f = {
        name: _0x37c73f
      };
    }
    var _0x12bd2d;
    for (var _0x5934c0 = null, _0x4bdd98 = 0; _0x5934c0 === null && _0x4bdd98 < _0x5a993c.extensions.length; ++_0x4bdd98) {
      _0x12bd2d = _0x5a993c.extensions[_0x4bdd98];
      if (_0x37c73f.id && _0x12bd2d.id === _0x37c73f.id || _0x37c73f.name && _0x12bd2d.name === _0x37c73f.name) {
        _0x5934c0 = _0x12bd2d;
      }
    }
    return _0x5934c0;
  };
  _0x5a993c.sign = function (_0x3af202, _0x4c7971) {
    _0x5a993c.md = _0x4c7971 || _0x3b0a32.md.sha1.create();
    var _0x1a06b7 = _0xbd1536[_0x5a993c.md.algorithm + "WithRSAEncryption"];
    if (!_0x1a06b7) {
      var _0x2814e1 = new Error("Could not compute certificate digest. Unknown message digest algorithm OID.");
      _0x2814e1.algorithm = _0x5a993c.md.algorithm;
      throw _0x2814e1;
    }
    _0x5a993c.signatureOid = _0x5a993c.siginfo.algorithmOid = _0x1a06b7;
    _0x5a993c.tbsCertificate = _0x38263d.getTBSCertificate(_0x5a993c);
    var _0x440c6e = _0xf76634.toDer(_0x5a993c.tbsCertificate);
    _0x5a993c.md.update(_0x440c6e.getBytes());
    _0x5a993c.signature = _0x3af202.sign(_0x5a993c.md);
  };
  _0x5a993c.verify = function (_0x5087d9) {
    var _0x300888 = false;
    if (!_0x5a993c.issued(_0x5087d9)) {
      var _0xf6d8fb = _0x5087d9.issuer;
      var _0x3bd101 = _0x5a993c.subject;
      var _0x89670b = new Error("The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject.");
      _0x89670b.expectedIssuer = _0x3bd101.attributes;
      _0x89670b.actualIssuer = _0xf6d8fb.attributes;
      throw _0x89670b;
    }
    var _0x19cf2d = _0x5087d9.md;
    if (_0x19cf2d === null) {
      _0x19cf2d = _0xf5aad8({
        signatureOid: _0x5087d9.signatureOid,
        type: "certificate"
      });
      var _0x1d237e = _0x5087d9.tbsCertificate || _0x38263d.getTBSCertificate(_0x5087d9);
      var _0x3c6ab1 = _0xf76634.toDer(_0x1d237e);
      _0x19cf2d.update(_0x3c6ab1.getBytes());
    }
    if (_0x19cf2d !== null) {
      _0x300888 = _0x42bbbb({
        certificate: _0x5a993c,
        md: _0x19cf2d,
        signature: _0x5087d9.signature
      });
    }
    return _0x300888;
  };
  _0x5a993c.isIssuer = function (_0x4b2f2f) {
    var _0x3f567f = false;
    var _0x20a153 = _0x5a993c.issuer;
    var _0x5a9638 = _0x4b2f2f.subject;
    if (_0x20a153.hash && _0x5a9638.hash) {
      _0x3f567f = _0x20a153.hash === _0x5a9638.hash;
    } else if (_0x20a153.attributes.length === _0x5a9638.attributes.length) {
      var _0x352769;
      var _0x4793b4;
      _0x3f567f = true;
      for (var _0x481673 = 0; _0x3f567f && _0x481673 < _0x20a153.attributes.length; ++_0x481673) {
        _0x352769 = _0x20a153.attributes[_0x481673];
        _0x4793b4 = _0x5a9638.attributes[_0x481673];
        if (_0x352769.type !== _0x4793b4.type || _0x352769.value !== _0x4793b4.value) {
          _0x3f567f = false;
        }
      }
    }
    return _0x3f567f;
  };
  _0x5a993c.issued = function (_0x1098c2) {
    return _0x1098c2.isIssuer(_0x5a993c);
  };
  _0x5a993c.generateSubjectKeyIdentifier = function () {
    return _0x38263d.getPublicKeyFingerprint(_0x5a993c.publicKey, {
      type: "RSAPublicKey"
    });
  };
  _0x5a993c.verifySubjectKeyIdentifier = function () {
    var _0x2c998a = _0xbd1536.subjectKeyIdentifier;
    for (var _0x13361d = 0; _0x13361d < _0x5a993c.extensions.length; ++_0x13361d) {
      var _0x25c2ed = _0x5a993c.extensions[_0x13361d];
      if (_0x25c2ed.id === _0x2c998a) {
        var _0x4a9404 = _0x5a993c.generateSubjectKeyIdentifier().getBytes();
        return _0x3b0a32.util.hexToBytes(_0x25c2ed.subjectKeyIdentifier) === _0x4a9404;
      }
    }
    return false;
  };
  return _0x5a993c;
};
_0x38263d.certificateFromAsn1 = function (_0x2e0549, _0x3e8f17) {
  var _0x47a020 = {};
  var _0x3042e5 = [];
  if (!_0xf76634.validate(_0x2e0549, _0x79f337, _0x47a020, _0x3042e5)) {
    var _0x4165bd = new Error("Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.");
    _0x4165bd.errors = _0x3042e5;
    throw _0x4165bd;
  }
  if (_0xf76634.derToOid(_0x47a020.publicKeyOid) !== _0x38263d.oids.rsaEncryption) {
    throw new Error("Cannot read public key. OID is not RSA.");
  }
  var _0x42c6c1 = _0x38263d.createCertificate();
  _0x42c6c1.version = _0x47a020.certVersion ? _0x47a020.certVersion.charCodeAt(0) : 0;
  var _0x5a5059 = _0x3b0a32.util.createBuffer(_0x47a020.certSerialNumber);
  _0x42c6c1.serialNumber = _0x5a5059.toHex();
  _0x42c6c1.signatureOid = _0x3b0a32.asn1.derToOid(_0x47a020.certSignatureOid);
  _0x42c6c1.signatureParameters = _0x40c73e(_0x42c6c1.signatureOid, _0x47a020.certSignatureParams, true);
  _0x42c6c1.siginfo.algorithmOid = _0x3b0a32.asn1.derToOid(_0x47a020.certinfoSignatureOid);
  _0x42c6c1.siginfo.parameters = _0x40c73e(_0x42c6c1.siginfo.algorithmOid, _0x47a020.certinfoSignatureParams, false);
  _0x42c6c1.signature = _0x47a020.certSignature;
  var _0x5e3ac3 = [];
  if (_0x47a020.certValidity1UTCTime !== undefined) {
    _0x5e3ac3.push(_0xf76634.utcTimeToDate(_0x47a020.certValidity1UTCTime));
  }
  if (_0x47a020.certValidity2GeneralizedTime !== undefined) {
    _0x5e3ac3.push(_0xf76634.generalizedTimeToDate(_0x47a020.certValidity2GeneralizedTime));
  }
  if (_0x47a020.certValidity3UTCTime !== undefined) {
    _0x5e3ac3.push(_0xf76634.utcTimeToDate(_0x47a020.certValidity3UTCTime));
  }
  if (_0x47a020.certValidity4GeneralizedTime !== undefined) {
    _0x5e3ac3.push(_0xf76634.generalizedTimeToDate(_0x47a020.certValidity4GeneralizedTime));
  }
  if (_0x5e3ac3.length > 2) {
    throw new Error("Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.");
  }
  if (_0x5e3ac3.length < 2) {
    throw new Error("Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.");
  }
  _0x42c6c1.validity.notBefore = _0x5e3ac3[0];
  _0x42c6c1.validity.notAfter = _0x5e3ac3[1];
  _0x42c6c1.tbsCertificate = _0x47a020.tbsCertificate;
  if (_0x3e8f17) {
    _0x42c6c1.md = _0xf5aad8({
      signatureOid: _0x42c6c1.signatureOid,
      type: "certificate"
    });
    var _0x3a3b7b = _0xf76634.toDer(_0x42c6c1.tbsCertificate);
    _0x42c6c1.md.update(_0x3a3b7b.getBytes());
  }
  var _0x1ffc06 = _0x3b0a32.md.sha1.create();
  var _0x506a4c = _0xf76634.toDer(_0x47a020.certIssuer);
  _0x1ffc06.update(_0x506a4c.getBytes());
  _0x42c6c1.issuer.getField = function (_0x382b47) {
    return _0x5e2b87(_0x42c6c1.issuer, _0x382b47);
  };
  _0x42c6c1.issuer.addField = function (_0x3e2054) {
    _0x546f10([_0x3e2054]);
    _0x42c6c1.issuer.attributes.push(_0x3e2054);
  };
  _0x42c6c1.issuer.attributes = _0x38263d.RDNAttributesAsArray(_0x47a020.certIssuer);
  if (_0x47a020.certIssuerUniqueId) {
    _0x42c6c1.issuer.uniqueId = _0x47a020.certIssuerUniqueId;
  }
  _0x42c6c1.issuer.hash = _0x1ffc06.digest().toHex();
  var _0x63223f = _0x3b0a32.md.sha1.create();
  var _0x2c1b46 = _0xf76634.toDer(_0x47a020.certSubject);
  _0x63223f.update(_0x2c1b46.getBytes());
  _0x42c6c1.subject.getField = function (_0x3cdb95) {
    return _0x5e2b87(_0x42c6c1.subject, _0x3cdb95);
  };
  _0x42c6c1.subject.addField = function (_0x4001b6) {
    _0x546f10([_0x4001b6]);
    _0x42c6c1.subject.attributes.push(_0x4001b6);
  };
  _0x42c6c1.subject.attributes = _0x38263d.RDNAttributesAsArray(_0x47a020.certSubject);
  if (_0x47a020.certSubjectUniqueId) {
    _0x42c6c1.subject.uniqueId = _0x47a020.certSubjectUniqueId;
  }
  _0x42c6c1.subject.hash = _0x63223f.digest().toHex();
  if (_0x47a020.certExtensions) {
    _0x42c6c1.extensions = _0x38263d.certificateExtensionsFromAsn1(_0x47a020.certExtensions);
  } else {
    _0x42c6c1.extensions = [];
  }
  _0x42c6c1.publicKey = _0x38263d.publicKeyFromAsn1(_0x47a020.subjectPublicKeyInfo);
  return _0x42c6c1;
};
_0x38263d.certificateExtensionsFromAsn1 = function (_0x38b4c8) {
  var _0x4a31fb = [];
  for (var _0x5f44d8 = 0; _0x5f44d8 < _0x38b4c8.value.length; ++_0x5f44d8) {
    for (var _0x5d99ad = _0x38b4c8.value[_0x5f44d8], _0x232926 = 0; _0x232926 < _0x5d99ad.value.length; ++_0x232926) {
      _0x4a31fb.push(_0x38263d.certificateExtensionFromAsn1(_0x5d99ad.value[_0x232926]));
    }
  }
  return _0x4a31fb;
};
_0x38263d.certificateExtensionFromAsn1 = function (_0x403f72) {
  var _0x434fe3 = {};
  _0x434fe3.id = _0xf76634.derToOid(_0x403f72.value[0].value);
  _0x434fe3.critical = false;
  if (_0x403f72.value[1].type === _0xf76634.Type.BOOLEAN) {
    _0x434fe3.critical = _0x403f72.value[1].value.charCodeAt(0) !== 0;
    _0x434fe3.value = _0x403f72.value[2].value;
  } else {
    _0x434fe3.value = _0x403f72.value[1].value;
  }
  if (_0x434fe3.id in _0xbd1536) {
    _0x434fe3.name = _0xbd1536[_0x434fe3.id];
    if (_0x434fe3.name === "keyUsage") {
      var _0x5d394b = 0;
      var _0x52adbe = 0;
      if ((_0x307dbb = _0xf76634.fromDer(_0x434fe3.value)).value.length > 1) {
        _0x5d394b = _0x307dbb.value.charCodeAt(1);
        _0x52adbe = _0x307dbb.value.length > 2 ? _0x307dbb.value.charCodeAt(2) : 0;
      }
      _0x434fe3.digitalSignature = (_0x5d394b & 128) == 128;
      _0x434fe3.nonRepudiation = (_0x5d394b & 64) == 64;
      _0x434fe3.keyEncipherment = (_0x5d394b & 32) == 32;
      _0x434fe3.dataEncipherment = (_0x5d394b & 16) == 16;
      _0x434fe3.keyAgreement = (_0x5d394b & 8) == 8;
      _0x434fe3.keyCertSign = (_0x5d394b & 4) == 4;
      _0x434fe3.cRLSign = (_0x5d394b & 2) == 2;
      _0x434fe3.encipherOnly = (_0x5d394b & 1) == 1;
      _0x434fe3.decipherOnly = (_0x52adbe & 128) == 128;
    } else if (_0x434fe3.name === "basicConstraints") {
      if ((_0x307dbb = _0xf76634.fromDer(_0x434fe3.value)).value.length > 0 && _0x307dbb.value[0].type === _0xf76634.Type.BOOLEAN) {
        _0x434fe3.cA = _0x307dbb.value[0].value.charCodeAt(0) !== 0;
      } else {
        _0x434fe3.cA = false;
      }
      var _0x3b6b6b = null;
      if (_0x307dbb.value.length > 0 && _0x307dbb.value[0].type === _0xf76634.Type.INTEGER) {
        _0x3b6b6b = _0x307dbb.value[0].value;
      } else if (_0x307dbb.value.length > 1) {
        _0x3b6b6b = _0x307dbb.value[1].value;
      }
      if (_0x3b6b6b !== null) {
        _0x434fe3.pathLenConstraint = _0xf76634.derToInteger(_0x3b6b6b);
      }
    } else if (_0x434fe3.name === "extKeyUsage") {
      for (var _0x307dbb = _0xf76634.fromDer(_0x434fe3.value), _0x49d60e = 0; _0x49d60e < _0x307dbb.value.length; ++_0x49d60e) {
        var _0x2e2c5e = _0xf76634.derToOid(_0x307dbb.value[_0x49d60e].value);
        if (_0x2e2c5e in _0xbd1536) {
          _0x434fe3[_0xbd1536[_0x2e2c5e]] = true;
        } else {
          _0x434fe3[_0x2e2c5e] = true;
        }
      }
    } else if (_0x434fe3.name === "nsCertType") {
      _0x5d394b = 0;
      if ((_0x307dbb = _0xf76634.fromDer(_0x434fe3.value)).value.length > 1) {
        _0x5d394b = _0x307dbb.value.charCodeAt(1);
      }
      _0x434fe3.client = (_0x5d394b & 128) == 128;
      _0x434fe3.server = (_0x5d394b & 64) == 64;
      _0x434fe3.email = (_0x5d394b & 32) == 32;
      _0x434fe3.objsign = (_0x5d394b & 16) == 16;
      _0x434fe3.reserved = (_0x5d394b & 8) == 8;
      _0x434fe3.sslCA = (_0x5d394b & 4) == 4;
      _0x434fe3.emailCA = (_0x5d394b & 2) == 2;
      _0x434fe3.objCA = (_0x5d394b & 1) == 1;
    } else if (_0x434fe3.name === "subjectAltName" || _0x434fe3.name === "issuerAltName") {
      var _0x4acd88;
      _0x434fe3.altNames = [];
      _0x307dbb = _0xf76634.fromDer(_0x434fe3.value);
      for (var _0x575e7b = 0; _0x575e7b < _0x307dbb.value.length; ++_0x575e7b) {
        var _0x4afa28 = {
          type: (_0x4acd88 = _0x307dbb.value[_0x575e7b]).type,
          value: _0x4acd88.value
        };
        _0x434fe3.altNames.push(_0x4afa28);
        switch (_0x4acd88.type) {
          case 1:
          case 2:
          case 6:
            break;
          case 7:
            _0x4afa28.ip = _0x3b0a32.util.bytesToIP(_0x4acd88.value);
            break;
          case 8:
            _0x4afa28.oid = _0xf76634.derToOid(_0x4acd88.value);
        }
      }
    } else if (_0x434fe3.name === "subjectKeyIdentifier") {
      _0x307dbb = _0xf76634.fromDer(_0x434fe3.value);
      _0x434fe3.subjectKeyIdentifier = _0x3b0a32.util.bytesToHex(_0x307dbb.value);
    }
  }
  return _0x434fe3;
};
_0x38263d.certificationRequestFromAsn1 = function (_0x38b79f, _0x4d3c4f) {
  var _0x10698f = {};
  var _0x320f6c = [];
  if (!_0xf76634.validate(_0x38b79f, _0x5c5fb0, _0x10698f, _0x320f6c)) {
    var _0x2d2afe = new Error("Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.");
    _0x2d2afe.errors = _0x320f6c;
    throw _0x2d2afe;
  }
  if (_0xf76634.derToOid(_0x10698f.publicKeyOid) !== _0x38263d.oids.rsaEncryption) {
    throw new Error("Cannot read public key. OID is not RSA.");
  }
  var _0x11ebbc = _0x38263d.createCertificationRequest();
  _0x11ebbc.version = _0x10698f.csrVersion ? _0x10698f.csrVersion.charCodeAt(0) : 0;
  _0x11ebbc.signatureOid = _0x3b0a32.asn1.derToOid(_0x10698f.csrSignatureOid);
  _0x11ebbc.signatureParameters = _0x40c73e(_0x11ebbc.signatureOid, _0x10698f.csrSignatureParams, true);
  _0x11ebbc.siginfo.algorithmOid = _0x3b0a32.asn1.derToOid(_0x10698f.csrSignatureOid);
  _0x11ebbc.siginfo.parameters = _0x40c73e(_0x11ebbc.siginfo.algorithmOid, _0x10698f.csrSignatureParams, false);
  _0x11ebbc.signature = _0x10698f.csrSignature;
  _0x11ebbc.certificationRequestInfo = _0x10698f.certificationRequestInfo;
  if (_0x4d3c4f) {
    _0x11ebbc.md = _0xf5aad8({
      signatureOid: _0x11ebbc.signatureOid,
      type: "certification request"
    });
    var _0x48d915 = _0xf76634.toDer(_0x11ebbc.certificationRequestInfo);
    _0x11ebbc.md.update(_0x48d915.getBytes());
  }
  var _0x594dcd = _0x3b0a32.md.sha1.create();
  _0x11ebbc.subject.getField = function (_0x122ee4) {
    return _0x5e2b87(_0x11ebbc.subject, _0x122ee4);
  };
  _0x11ebbc.subject.addField = function (_0x46553c) {
    _0x546f10([_0x46553c]);
    _0x11ebbc.subject.attributes.push(_0x46553c);
  };
  _0x11ebbc.subject.attributes = _0x38263d.RDNAttributesAsArray(_0x10698f.certificationRequestInfoSubject, _0x594dcd);
  _0x11ebbc.subject.hash = _0x594dcd.digest().toHex();
  _0x11ebbc.publicKey = _0x38263d.publicKeyFromAsn1(_0x10698f.subjectPublicKeyInfo);
  _0x11ebbc.getAttribute = function (_0x77f8c0) {
    return _0x5e2b87(_0x11ebbc, _0x77f8c0);
  };
  _0x11ebbc.addAttribute = function (_0xd3359c) {
    _0x546f10([_0xd3359c]);
    _0x11ebbc.attributes.push(_0xd3359c);
  };
  _0x11ebbc.attributes = _0x38263d.CRIAttributesAsArray(_0x10698f.certificationRequestInfoAttributes || []);
  return _0x11ebbc;
};
_0x38263d.createCertificationRequest = function () {
  var _0x5dce09 = {
    version: 0,
    signatureOid: null,
    signature: null,
    siginfo: {}
  };
  _0x5dce09.siginfo.algorithmOid = null;
  _0x5dce09.subject = {};
  _0x5dce09.subject.getField = function (_0x9fe3e6) {
    return _0x5e2b87(_0x5dce09.subject, _0x9fe3e6);
  };
  _0x5dce09.subject.addField = function (_0x20f704) {
    _0x546f10([_0x20f704]);
    _0x5dce09.subject.attributes.push(_0x20f704);
  };
  _0x5dce09.subject.attributes = [];
  _0x5dce09.subject.hash = null;
  _0x5dce09.publicKey = null;
  _0x5dce09.attributes = [];
  _0x5dce09.getAttribute = function (_0x29a2f6) {
    return _0x5e2b87(_0x5dce09, _0x29a2f6);
  };
  _0x5dce09.addAttribute = function (_0x3cc676) {
    _0x546f10([_0x3cc676]);
    _0x5dce09.attributes.push(_0x3cc676);
  };
  _0x5dce09.md = null;
  _0x5dce09.setSubject = function (_0x3d1b3b) {
    _0x546f10(_0x3d1b3b);
    _0x5dce09.subject.attributes = _0x3d1b3b;
    _0x5dce09.subject.hash = null;
  };
  _0x5dce09.setAttributes = function (_0x595a78) {
    _0x546f10(_0x595a78);
    _0x5dce09.attributes = _0x595a78;
  };
  _0x5dce09.sign = function (_0x1f582c, _0x18a599) {
    _0x5dce09.md = _0x18a599 || _0x3b0a32.md.sha1.create();
    var _0x3d9e6e = _0xbd1536[_0x5dce09.md.algorithm + "WithRSAEncryption"];
    if (!_0x3d9e6e) {
      var _0x5c8a33 = new Error("Could not compute certification request digest. Unknown message digest algorithm OID.");
      _0x5c8a33.algorithm = _0x5dce09.md.algorithm;
      throw _0x5c8a33;
    }
    _0x5dce09.signatureOid = _0x5dce09.siginfo.algorithmOid = _0x3d9e6e;
    _0x5dce09.certificationRequestInfo = _0x38263d.getCertificationRequestInfo(_0x5dce09);
    var _0x2db55e = _0xf76634.toDer(_0x5dce09.certificationRequestInfo);
    _0x5dce09.md.update(_0x2db55e.getBytes());
    _0x5dce09.signature = _0x1f582c.sign(_0x5dce09.md);
  };
  _0x5dce09.verify = function () {
    var _0x29fbe6 = false;
    var _0xfbd049 = _0x5dce09.md;
    if (_0xfbd049 === null) {
      _0xfbd049 = _0xf5aad8({
        signatureOid: _0x5dce09.signatureOid,
        type: "certification request"
      });
      var _0x1a902c = _0x5dce09.certificationRequestInfo || _0x38263d.getCertificationRequestInfo(_0x5dce09);
      var _0x63b3a2 = _0xf76634.toDer(_0x1a902c);
      _0xfbd049.update(_0x63b3a2.getBytes());
    }
    if (_0xfbd049 !== null) {
      _0x29fbe6 = _0x42bbbb({
        certificate: _0x5dce09,
        md: _0xfbd049,
        signature: _0x5dce09.signature
      });
    }
    return _0x29fbe6;
  };
  return _0x5dce09;
};
var _0x57f63e = new Date("1950-01-01T00:00:00Z");
var _0x328c17 = new Date("2050-01-01T00:00:00Z");
function _0x40273b(_0x476b3f) {
  if (_0x476b3f >= _0x57f63e && _0x476b3f < _0x328c17) {
    return _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.UTCTIME, false, _0xf76634.dateToUtcTime(_0x476b3f));
  } else {
    return _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.GENERALIZEDTIME, false, _0xf76634.dateToGeneralizedTime(_0x476b3f));
  }
}
_0x38263d.getTBSCertificate = function (_0x24508f) {
  var _0x3e6773 = _0x40273b(_0x24508f.validity.notBefore);
  var _0x2401b4 = _0x40273b(_0x24508f.validity.notAfter);
  var _0x4c399e = _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, [_0xf76634.create(_0xf76634.Class.CONTEXT_SPECIFIC, 0, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.INTEGER, false, _0xf76634.integerToDer(_0x24508f.version).getBytes())]), _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.INTEGER, false, _0x3b0a32.util.hexToBytes(_0x24508f.serialNumber)), _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.OID, false, _0xf76634.oidToDer(_0x24508f.siginfo.algorithmOid).getBytes()), _0x4037ca(_0x24508f.siginfo.algorithmOid, _0x24508f.siginfo.parameters)]), _0x328c35(_0x24508f.issuer), _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, [_0x3e6773, _0x2401b4]), _0x328c35(_0x24508f.subject), _0x38263d.publicKeyToAsn1(_0x24508f.publicKey)]);
  if (_0x24508f.issuer.uniqueId) {
    _0x4c399e.value.push(_0xf76634.create(_0xf76634.Class.CONTEXT_SPECIFIC, 1, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.BITSTRING, false, String.fromCharCode(0) + _0x24508f.issuer.uniqueId)]));
  }
  if (_0x24508f.subject.uniqueId) {
    _0x4c399e.value.push(_0xf76634.create(_0xf76634.Class.CONTEXT_SPECIFIC, 2, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.BITSTRING, false, String.fromCharCode(0) + _0x24508f.subject.uniqueId)]));
  }
  if (_0x24508f.extensions.length > 0) {
    _0x4c399e.value.push(_0x38263d.certificateExtensionsToAsn1(_0x24508f.extensions));
  }
  return _0x4c399e;
};
_0x38263d.getCertificationRequestInfo = function (_0x51d0f9) {
  return _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.INTEGER, false, _0xf76634.integerToDer(_0x51d0f9.version).getBytes()), _0x328c35(_0x51d0f9.subject), _0x38263d.publicKeyToAsn1(_0x51d0f9.publicKey), _0x2c8152(_0x51d0f9)]);
};
_0x38263d.distinguishedNameToAsn1 = function (_0xd84f49) {
  return _0x328c35(_0xd84f49);
};
_0x38263d.certificateToAsn1 = function (_0x5d2276) {
  var _0x8e92ae = _0x5d2276.tbsCertificate || _0x38263d.getTBSCertificate(_0x5d2276);
  return _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, [_0x8e92ae, _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.OID, false, _0xf76634.oidToDer(_0x5d2276.signatureOid).getBytes()), _0x4037ca(_0x5d2276.signatureOid, _0x5d2276.signatureParameters)]), _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.BITSTRING, false, String.fromCharCode(0) + _0x5d2276.signature)]);
};
_0x38263d.certificateExtensionsToAsn1 = function (_0x3c3437) {
  var _0x2ec024 = _0xf76634.create(_0xf76634.Class.CONTEXT_SPECIFIC, 3, true, []);
  var _0x369f7c = _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, []);
  _0x2ec024.value.push(_0x369f7c);
  for (var _0x148adc = 0; _0x148adc < _0x3c3437.length; ++_0x148adc) {
    _0x369f7c.value.push(_0x38263d.certificateExtensionToAsn1(_0x3c3437[_0x148adc]));
  }
  return _0x2ec024;
};
_0x38263d.certificateExtensionToAsn1 = function (_0xc00c2e) {
  var _0x16c01a = _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, []);
  _0x16c01a.value.push(_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.OID, false, _0xf76634.oidToDer(_0xc00c2e.id).getBytes()));
  if (_0xc00c2e.critical) {
    _0x16c01a.value.push(_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.BOOLEAN, false, String.fromCharCode(255)));
  }
  var _0x5590e2 = _0xc00c2e.value;
  if (typeof _0xc00c2e.value != "string") {
    _0x5590e2 = _0xf76634.toDer(_0x5590e2).getBytes();
  }
  _0x16c01a.value.push(_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.OCTETSTRING, false, _0x5590e2));
  return _0x16c01a;
};
_0x38263d.certificationRequestToAsn1 = function (_0x3c48f4) {
  var _0x381136 = _0x3c48f4.certificationRequestInfo || _0x38263d.getCertificationRequestInfo(_0x3c48f4);
  return _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, [_0x381136, _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.SEQUENCE, true, [_0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.OID, false, _0xf76634.oidToDer(_0x3c48f4.signatureOid).getBytes()), _0x4037ca(_0x3c48f4.signatureOid, _0x3c48f4.signatureParameters)]), _0xf76634.create(_0xf76634.Class.UNIVERSAL, _0xf76634.Type.BITSTRING, false, String.fromCharCode(0) + _0x3c48f4.signature)]);
};
_0x38263d.createCaStore = function (_0x267be6) {
  var _0x3b3230 = {
    certs: {}
  };
  function _0x5a5391(_0x471f7a) {
    _0x32e086(_0x471f7a);
    return _0x3b3230.certs[_0x471f7a.hash] || null;
  }
  function _0x32e086(_0x47e6ad) {
    if (!_0x47e6ad.hash) {
      var _0x14e120 = _0x3b0a32.md.sha1.create();
      _0x47e6ad.attributes = _0x38263d.RDNAttributesAsArray(_0x328c35(_0x47e6ad), _0x14e120);
      _0x47e6ad.hash = _0x14e120.digest().toHex();
    }
  }
  _0x3b3230.getIssuer = function (_0xd78589) {
    return _0x5a5391(_0xd78589.issuer);
  };
  _0x3b3230.addCertificate = function (_0x4968a0) {
    if (typeof _0x4968a0 == "string") {
      _0x4968a0 = _0x3b0a32.pki.certificateFromPem(_0x4968a0);
    }
    _0x32e086(_0x4968a0.subject);
    if (!_0x3b3230.hasCertificate(_0x4968a0)) {
      if (_0x4968a0.subject.hash in _0x3b3230.certs) {
        var _0x3d01c4 = _0x3b3230.certs[_0x4968a0.subject.hash];
        if (!_0x3b0a32.util.isArray(_0x3d01c4)) {
          _0x3d01c4 = [_0x3d01c4];
        }
        _0x3d01c4.push(_0x4968a0);
        _0x3b3230.certs[_0x4968a0.subject.hash] = _0x3d01c4;
      } else {
        _0x3b3230.certs[_0x4968a0.subject.hash] = _0x4968a0;
      }
    }
  };
  _0x3b3230.hasCertificate = function (_0x5c3636) {
    if (typeof _0x5c3636 == "string") {
      _0x5c3636 = _0x3b0a32.pki.certificateFromPem(_0x5c3636);
    }
    var _0xa57c5f = _0x5a5391(_0x5c3636.subject);
    if (!_0xa57c5f) {
      return false;
    }
    if (!_0x3b0a32.util.isArray(_0xa57c5f)) {
      _0xa57c5f = [_0xa57c5f];
    }
    var _0x157da6 = _0xf76634.toDer(_0x38263d.certificateToAsn1(_0x5c3636)).getBytes();
    for (var _0x37043e = 0; _0x37043e < _0xa57c5f.length; ++_0x37043e) {
      if (_0x157da6 === _0xf76634.toDer(_0x38263d.certificateToAsn1(_0xa57c5f[_0x37043e])).getBytes()) {
        return true;
      }
    }
    return false;
  };
  _0x3b3230.listAllCertificates = function () {
    var _0x25723f = [];
    for (var _0x1ba0ab in _0x3b3230.certs) {
      if (_0x3b3230.certs.hasOwnProperty(_0x1ba0ab)) {
        var _0x25b9e6 = _0x3b3230.certs[_0x1ba0ab];
        if (_0x3b0a32.util.isArray(_0x25b9e6)) {
          for (var _0xa11b44 = 0; _0xa11b44 < _0x25b9e6.length; ++_0xa11b44) {
            _0x25723f.push(_0x25b9e6[_0xa11b44]);
          }
        } else {
          _0x25723f.push(_0x25b9e6);
        }
      }
    }
    return _0x25723f;
  };
  _0x3b3230.removeCertificate = function (_0x583219) {
    var _0x39b9b6;
    if (typeof _0x583219 == "string") {
      _0x583219 = _0x3b0a32.pki.certificateFromPem(_0x583219);
    }
    _0x32e086(_0x583219.subject);
    if (!_0x3b3230.hasCertificate(_0x583219)) {
      return null;
    }
    var _0x19ed63 = _0x5a5391(_0x583219.subject);
    if (!_0x3b0a32.util.isArray(_0x19ed63)) {
      _0x39b9b6 = _0x3b3230.certs[_0x583219.subject.hash];
      delete _0x3b3230.certs[_0x583219.subject.hash];
      return _0x39b9b6;
    }
    var _0x3bf04a = _0xf76634.toDer(_0x38263d.certificateToAsn1(_0x583219)).getBytes();
    for (var _0x55ce07 = 0; _0x55ce07 < _0x19ed63.length; ++_0x55ce07) {
      if (_0x3bf04a === _0xf76634.toDer(_0x38263d.certificateToAsn1(_0x19ed63[_0x55ce07])).getBytes()) {
        _0x39b9b6 = _0x19ed63[_0x55ce07];
        _0x19ed63.splice(_0x55ce07, 1);
      }
    }
    if (_0x19ed63.length === 0) {
      delete _0x3b3230.certs[_0x583219.subject.hash];
    }
    return _0x39b9b6;
  };
  if (_0x267be6) {
    for (var _0x49cf6e = 0; _0x49cf6e < _0x267be6.length; ++_0x49cf6e) {
      var _0x46bc1f = _0x267be6[_0x49cf6e];
      _0x3b3230.addCertificate(_0x46bc1f);
    }
  }
  return _0x3b3230;
};
_0x38263d.certificateError = {
  bad_certificate: "forge.pki.BadCertificate",
  unsupported_certificate: "forge.pki.UnsupportedCertificate",
  certificate_revoked: "forge.pki.CertificateRevoked",
  certificate_expired: "forge.pki.CertificateExpired",
  certificate_unknown: "forge.pki.CertificateUnknown",
  unknown_ca: "forge.pki.UnknownCertificateAuthority"
};
_0x38263d.verifyCertificateChain = function (_0x53473a, _0x28acb1, _0x1786fb) {
  if (typeof _0x1786fb == "function") {
    _0x1786fb = {
      verify: _0x1786fb
    };
  }
  _0x1786fb = _0x1786fb || {};
  var _0x2d140c = (_0x28acb1 = _0x28acb1.slice(0)).slice(0);
  var _0x2ac0ad = _0x1786fb.validityCheckDate;
  if (_0x2ac0ad === undefined) {
    _0x2ac0ad = new Date();
  }
  var _0xad74dd = true;
  var _0x425195 = null;
  var _0x301b6c = 0;
  do {
    var _0x4481ac = _0x28acb1.shift();
    var _0x4ccb58 = null;
    var _0x422a60 = false;
    if (_0x2ac0ad && (_0x2ac0ad < _0x4481ac.validity.notBefore || _0x2ac0ad > _0x4481ac.validity.notAfter)) {
      _0x425195 = {
        message: "Certificate is not valid yet or has expired.",
        error: _0x38263d.certificateError.certificate_expired,
        notBefore: _0x4481ac.validity.notBefore,
        notAfter: _0x4481ac.validity.notAfter,
        now: _0x2ac0ad
      };
    }
    if (_0x425195 === null) {
      if ((_0x4ccb58 = _0x28acb1[0] || _0x53473a.getIssuer(_0x4481ac)) === null && _0x4481ac.isIssuer(_0x4481ac)) {
        _0x422a60 = true;
        _0x4ccb58 = _0x4481ac;
      }
      if (_0x4ccb58) {
        var _0x248ba9 = _0x4ccb58;
        if (!_0x3b0a32.util.isArray(_0x248ba9)) {
          _0x248ba9 = [_0x248ba9];
        }
        for (var _0x15803d = false; !_0x15803d && _0x248ba9.length > 0;) {
          _0x4ccb58 = _0x248ba9.shift();
          try {
            _0x15803d = _0x4ccb58.verify(_0x4481ac);
          } catch (_0x372435) {}
        }
        if (!_0x15803d) {
          _0x425195 = {
            message: "Certificate signature is invalid.",
            error: _0x38263d.certificateError.bad_certificate
          };
        }
      }
      if (_0x425195 === null && (!_0x4ccb58 || !!_0x422a60) && !_0x53473a.hasCertificate(_0x4481ac)) {
        _0x425195 = {
          message: "Certificate is not trusted.",
          error: _0x38263d.certificateError.unknown_ca
        };
      }
    }
    if (_0x425195 === null && _0x4ccb58 && !_0x4481ac.isIssuer(_0x4ccb58)) {
      _0x425195 = {
        message: "Certificate issuer is invalid.",
        error: _0x38263d.certificateError.bad_certificate
      };
    }
    if (_0x425195 === null) {
      var _0x385159 = {
        keyUsage: true,
        basicConstraints: true
      };
      for (var _0x2eb354 = 0; _0x425195 === null && _0x2eb354 < _0x4481ac.extensions.length; ++_0x2eb354) {
        var _0x27f09a = _0x4481ac.extensions[_0x2eb354];
        if (_0x27f09a.critical && !(_0x27f09a.name in _0x385159)) {
          _0x425195 = {
            message: "Certificate has an unsupported critical extension.",
            error: _0x38263d.certificateError.unsupported_certificate
          };
        }
      }
    }
    if (_0x425195 === null && (!_0xad74dd || _0x28acb1.length === 0 && (!_0x4ccb58 || _0x422a60))) {
      var _0x420a50 = _0x4481ac.getExtension("basicConstraints");
      var _0x6b67c9 = _0x4481ac.getExtension("keyUsage");
      if (_0x6b67c9 !== null) {
        if (!_0x6b67c9.keyCertSign || _0x420a50 === null) {
          _0x425195 = {
            message: "Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",
            error: _0x38263d.certificateError.bad_certificate
          };
        }
      }
      if (_0x425195 === null && _0x420a50 !== null && !_0x420a50.cA) {
        _0x425195 = {
          message: "Certificate basicConstraints indicates the certificate is not a CA.",
          error: _0x38263d.certificateError.bad_certificate
        };
      }
      if (_0x425195 === null && _0x6b67c9 !== null && "pathLenConstraint" in _0x420a50) {
        if (_0x301b6c - 1 > _0x420a50.pathLenConstraint) {
          _0x425195 = {
            message: "Certificate basicConstraints pathLenConstraint violated.",
            error: _0x38263d.certificateError.bad_certificate
          };
        }
      }
    }
    var _0x54855c = _0x425195 === null || _0x425195.error;
    var _0x37c0e3 = _0x1786fb.verify ? _0x1786fb.verify(_0x54855c, _0x301b6c, _0x2d140c) : _0x54855c;
    if (_0x37c0e3 !== true) {
      if (_0x54855c === true) {
        _0x425195 = {
          message: "The application rejected the certificate.",
          error: _0x38263d.certificateError.bad_certificate
        };
      }
      if (_0x37c0e3 || _0x37c0e3 === 0) {
        if (typeof _0x37c0e3 != "object" || _0x3b0a32.util.isArray(_0x37c0e3)) {
          if (typeof _0x37c0e3 == "string") {
            _0x425195.error = _0x37c0e3;
          }
        } else {
          if (_0x37c0e3.message) {
            _0x425195.message = _0x37c0e3.message;
          }
          if (_0x37c0e3.error) {
            _0x425195.error = _0x37c0e3.error;
          }
        }
      }
      throw _0x425195;
    }
    _0x425195 = null;
    _0xad74dd = false;
    ++_0x301b6c;
  } while (_0x28acb1.length > 0);
  return true;
};