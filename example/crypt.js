const CryptoJS = require("crypto-js");

const secretKey = "secret key 123"
// Encrypt
const ciphertext = CryptoJS.AES.encrypt('1', secretKey).toString();
console.log(ciphertext)

// Decrypt
const bytes  = CryptoJS.AES.decrypt(ciphertext, secretKey);
const originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText);

// 위변조 Decrypt
const 위변조된_문자열 = "U2FsdGVkX1+AGcmuO7HcLuXV8Hm8+oYF15xWgk2Be+U="
console.log(위변조된_문자열)

const bytes2  = CryptoJS.AES.decrypt(위변조된_문자열, secretKey);
const originalText2 = bytes2.toString(CryptoJS.enc.Utf8);

console.log("위변조 시도 복호화: ", originalText2);