'use strict';

const request = require("request").defaults({ jar: true });
const writeLog = require('./writeLog.js');
const CONF = require('../config.js');

let loginOpts = {
  method: 'POST',
  uri: CONF.loginUrl,
  formData: { UNAME: CONF.username, PASSWORD: CONF.pwd }
}

const checkCookies = (cookie, cb) => {
  if (cookie && cookie.length < 2) {
    return cb(`登陆失败，检查log文件，查看登陆获取到的headers，cookie中是否有userid，或者用户名or密码是否正确`);
  }
  writeLog('登陆成功');
  return cb(null, request);
}

const login = (cb) => {
  request(loginOpts, (err, res) => {
    if (err) {
      writeLog(JSON.stringify(err));
      throw new Error("登陆失败");
    }
    checkCookies(res.headers['set-cookie'], cb);
  }); // request
}

module.exports = login;
