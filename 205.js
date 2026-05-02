var _0x27e392 = require("./832.js");
require("./68.js");
var _0x5787b7 = _0x27e392.asn1;
exports.privateKeyValidator = {
  name: "PrivateKeyInfo",
  tagClass: _0x5787b7.Class.UNIVERSAL,
  type: _0x5787b7.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "PrivateKeyInfo.version",
    tagClass: _0x5787b7.Class.UNIVERSAL,
    type: _0x5787b7.Type.INTEGER,
    constructed: false,
    capture: "privateKeyVersion"
  }, {
    name: "PrivateKeyInfo.privateKeyAlgorithm",
    tagClass: _0x5787b7.Class.UNIVERSAL,
    type: _0x5787b7.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "AlgorithmIdentifier.algorithm",
      tagClass: _0x5787b7.Class.UNIVERSAL,
      type: _0x5787b7.Type.OID,
      constructed: false,
      capture: "privateKeyOid"
    }]
  }, {
    name: "PrivateKeyInfo",
    tagClass: _0x5787b7.Class.UNIVERSAL,
    type: _0x5787b7.Type.OCTETSTRING,
    constructed: false,
    capture: "privateKey"
  }]
};
exports.publicKeyValidator = {
  name: "SubjectPublicKeyInfo",
  tagClass: _0x5787b7.Class.UNIVERSAL,
  type: _0x5787b7.Type.SEQUENCE,
  constructed: true,
  captureAsn1: "subjectPublicKeyInfo",
  value: [{
    name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
    tagClass: _0x5787b7.Class.UNIVERSAL,
    type: _0x5787b7.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "AlgorithmIdentifier.algorithm",
      tagClass: _0x5787b7.Class.UNIVERSAL,
      type: _0x5787b7.Type.OID,
      constructed: false,
      capture: "publicKeyOid"
    }]
  }, {
    tagClass: _0x5787b7.Class.UNIVERSAL,
    type: _0x5787b7.Type.BITSTRING,
    constructed: false,
    composed: true,
    captureBitStringValue: "ed25519PublicKey"
  }]
};