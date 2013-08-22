
/**
 * Module dependencies.
 */

var base64 = require('base64');
var RSAKey = require('rsa');

/**
 * Set the 'modulus' and 'exponent' parameters
 *
 * @param {String} modulus
 * @param {String} exponent
 */

function Encryptor(modulus, exponent) {
  this.modulus = modulus;
  this.exponent = exponent;
}

/**
 * Encrypt a 'val'.
 * Create a new RSAKey and set hex values
 *
 * @param {string} val
 * @return {Encryptor}
 */

Encryptor.prototype.encrypt = function(val) {
  var rsa = new RSAKey();
  rsa.setPublic(base64.b64tohex(this.modulus), base64.b64tohex(this.exponent));
  return rsa.encrypt(val);
};

module.exports = Encryptor;