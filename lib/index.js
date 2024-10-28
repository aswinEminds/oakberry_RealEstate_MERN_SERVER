const CryptoJS = require("crypto-js");
const { CRYPTO_KEY, JWT_KEY } = require("../config/config");
const jwt = require("jsonwebtoken");

exports.encryptPassword = (password) => {
  return CryptoJS.AES.encrypt(password, CRYPTO_KEY).toString();
};

exports.decryptPassword = (password) => {
  var bytes = CryptoJS.AES.decrypt(password, CRYPTO_KEY);
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  console.log(originalText);
  return originalText;
};

exports.getUserIdFromTocken = (token) => {
  const res = jwt.verify(token, JWT_KEY);
  return res.data;
};
