var _0xe57afd = require("./832.js");
require("./68.js");
require("./116.js");
var _0xd68bca = _0xe57afd.asn1;
var _0x4dbae4 = module.exports = _0xe57afd.pkcs7asn1 = _0xe57afd.pkcs7asn1 || {};
_0xe57afd.pkcs7 = _0xe57afd.pkcs7 || {};
_0xe57afd.pkcs7.asn1 = _0x4dbae4;
var _0x2083e1 = {
  name: "ContentInfo",
  tagClass: _0xd68bca.Class.UNIVERSAL,
  type: _0xd68bca.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "ContentInfo.ContentType",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.OID,
    constructed: false,
    capture: "contentType"
  }, {
    name: "ContentInfo.content",
    tagClass: _0xd68bca.Class.CONTEXT_SPECIFIC,
    type: 0,
    constructed: true,
    optional: true,
    captureAsn1: "content"
  }]
};
_0x4dbae4.contentInfoValidator = _0x2083e1;
var _0x11daee = {
  name: "EncryptedContentInfo",
  tagClass: _0xd68bca.Class.UNIVERSAL,
  type: _0xd68bca.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "EncryptedContentInfo.contentType",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.OID,
    constructed: false,
    capture: "contentType"
  }, {
    name: "EncryptedContentInfo.contentEncryptionAlgorithm",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",
      tagClass: _0xd68bca.Class.UNIVERSAL,
      type: _0xd68bca.Type.OID,
      constructed: false,
      capture: "encAlgorithm"
    }, {
      name: "EncryptedContentInfo.contentEncryptionAlgorithm.parameter",
      tagClass: _0xd68bca.Class.UNIVERSAL,
      captureAsn1: "encParameter"
    }]
  }, {
    name: "EncryptedContentInfo.encryptedContent",
    tagClass: _0xd68bca.Class.CONTEXT_SPECIFIC,
    type: 0,
    capture: "encryptedContent",
    captureAsn1: "encryptedContentAsn1"
  }]
};
_0x4dbae4.envelopedDataValidator = {
  name: "EnvelopedData",
  tagClass: _0xd68bca.Class.UNIVERSAL,
  type: _0xd68bca.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "EnvelopedData.Version",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.INTEGER,
    constructed: false,
    capture: "version"
  }, {
    name: "EnvelopedData.RecipientInfos",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.SET,
    constructed: true,
    captureAsn1: "recipientInfos"
  }].concat(_0x11daee)
};
_0x4dbae4.encryptedDataValidator = {
  name: "EncryptedData",
  tagClass: _0xd68bca.Class.UNIVERSAL,
  type: _0xd68bca.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "EncryptedData.Version",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.INTEGER,
    constructed: false,
    capture: "version"
  }].concat(_0x11daee)
};
var _0x3830bd = {
  name: "SignerInfo",
  tagClass: _0xd68bca.Class.UNIVERSAL,
  type: _0xd68bca.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "SignerInfo.version",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.INTEGER,
    constructed: false
  }, {
    name: "SignerInfo.issuerAndSerialNumber",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "SignerInfo.issuerAndSerialNumber.issuer",
      tagClass: _0xd68bca.Class.UNIVERSAL,
      type: _0xd68bca.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "issuer"
    }, {
      name: "SignerInfo.issuerAndSerialNumber.serialNumber",
      tagClass: _0xd68bca.Class.UNIVERSAL,
      type: _0xd68bca.Type.INTEGER,
      constructed: false,
      capture: "serial"
    }]
  }, {
    name: "SignerInfo.digestAlgorithm",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "SignerInfo.digestAlgorithm.algorithm",
      tagClass: _0xd68bca.Class.UNIVERSAL,
      type: _0xd68bca.Type.OID,
      constructed: false,
      capture: "digestAlgorithm"
    }, {
      name: "SignerInfo.digestAlgorithm.parameter",
      tagClass: _0xd68bca.Class.UNIVERSAL,
      constructed: false,
      captureAsn1: "digestParameter",
      optional: true
    }]
  }, {
    name: "SignerInfo.authenticatedAttributes",
    tagClass: _0xd68bca.Class.CONTEXT_SPECIFIC,
    type: 0,
    constructed: true,
    optional: true,
    capture: "authenticatedAttributes"
  }, {
    name: "SignerInfo.digestEncryptionAlgorithm",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.SEQUENCE,
    constructed: true,
    capture: "signatureAlgorithm"
  }, {
    name: "SignerInfo.encryptedDigest",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.OCTETSTRING,
    constructed: false,
    capture: "signature"
  }, {
    name: "SignerInfo.unauthenticatedAttributes",
    tagClass: _0xd68bca.Class.CONTEXT_SPECIFIC,
    type: 1,
    constructed: true,
    optional: true,
    capture: "unauthenticatedAttributes"
  }]
};
_0x4dbae4.signedDataValidator = {
  name: "SignedData",
  tagClass: _0xd68bca.Class.UNIVERSAL,
  type: _0xd68bca.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "SignedData.Version",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.INTEGER,
    constructed: false,
    capture: "version"
  }, {
    name: "SignedData.DigestAlgorithms",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.SET,
    constructed: true,
    captureAsn1: "digestAlgorithms"
  }, _0x2083e1, {
    name: "SignedData.Certificates",
    tagClass: _0xd68bca.Class.CONTEXT_SPECIFIC,
    type: 0,
    optional: true,
    captureAsn1: "certificates"
  }, {
    name: "SignedData.CertificateRevocationLists",
    tagClass: _0xd68bca.Class.CONTEXT_SPECIFIC,
    type: 1,
    optional: true,
    captureAsn1: "crls"
  }, {
    name: "SignedData.SignerInfos",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.SET,
    capture: "signerInfos",
    optional: true,
    value: [_0x3830bd]
  }]
};
_0x4dbae4.recipientInfoValidator = {
  name: "RecipientInfo",
  tagClass: _0xd68bca.Class.UNIVERSAL,
  type: _0xd68bca.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "RecipientInfo.version",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.INTEGER,
    constructed: false,
    capture: "version"
  }, {
    name: "RecipientInfo.issuerAndSerial",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "RecipientInfo.issuerAndSerial.issuer",
      tagClass: _0xd68bca.Class.UNIVERSAL,
      type: _0xd68bca.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "issuer"
    }, {
      name: "RecipientInfo.issuerAndSerial.serialNumber",
      tagClass: _0xd68bca.Class.UNIVERSAL,
      type: _0xd68bca.Type.INTEGER,
      constructed: false,
      capture: "serial"
    }]
  }, {
    name: "RecipientInfo.keyEncryptionAlgorithm",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "RecipientInfo.keyEncryptionAlgorithm.algorithm",
      tagClass: _0xd68bca.Class.UNIVERSAL,
      type: _0xd68bca.Type.OID,
      constructed: false,
      capture: "encAlgorithm"
    }, {
      name: "RecipientInfo.keyEncryptionAlgorithm.parameter",
      tagClass: _0xd68bca.Class.UNIVERSAL,
      constructed: false,
      captureAsn1: "encParameter",
      optional: true
    }]
  }, {
    name: "RecipientInfo.encryptedKey",
    tagClass: _0xd68bca.Class.UNIVERSAL,
    type: _0xd68bca.Type.OCTETSTRING,
    constructed: false,
    capture: "encKey"
  }]
};