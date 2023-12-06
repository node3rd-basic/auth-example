const CryptoJS = require("crypto-js");

const secretKey = "secret key 123"
// Encrypt
const ciphertext = CryptoJS.AES.encrypt('1', secretKey).toString();
console.log(ciphertext)
// Decrypt
const bytes  = CryptoJS.AES.decrypt(ciphertext, secretKey);
const originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText);