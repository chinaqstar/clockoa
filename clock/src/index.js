'use strict';

const Promise = require('promise');
const login = require('./login.js');
const writeLog = require('./writeLog.js');
const CONF = require('../config.js');

const reg = (mode) => {
  return new Promise((resolve, reject) => {
    writeLog('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

    let dutyUrl;
    // 判断上班打卡，还是下班打卡
    if (mode === 'off') {
      dutyUrl = CONF.offDutyUrl;
      writeLog('auto:' + mode + ' 开始下班打卡');
    } else if (mode === 'on') {
      dutyUrl = CONF.onDutyUrl;
      writeLog('auto:' + mode + ' 开始上班打卡');
    } else {
      writeLog("打卡参数不正确；mode：on 上班，off 下班");
      reject("打卡参数不正确；mode：on 上班，off 下班班");
    }

    login((err, fetch) => {
      if(err) {
        writeLog(err);
        reject(err);
      }
      fetch(dutyUrl, (err, res) => {
        if (err) {
          writeLog(JSON.stringify(err));
          reject(err);
        }
        writeLog('打卡成功');
        writeLog('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
        resolve();
      }); // fetch
    }); // login
  }); // promise
} // reg

module.exports = reg;
