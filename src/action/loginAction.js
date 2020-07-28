// import loginApi from "../api/loginApi";
// var CryptoJS = require("crypto-js");

// export function login(loginDetails) {
//     var encrypted = CryptoJS.AES.encrypt(JSON.stringify(loginDetails), CryptoJS.enc.Utf8.parse('2HOwmMKZS1wWvq6qxdeA5moUCubLJiXV'), {
//         mode: CryptoJS.mode.ECB,
//         padding: CryptoJS.pad.Pkcs7
//       }).toString();
//     var encryptData = {data: encrypted}
//     return function (dispatch) {
//         return loginApi.login(encryptData);
//     }
// }