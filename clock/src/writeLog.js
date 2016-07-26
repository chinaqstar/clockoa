'use strict';
const fs = require('fs');
const path = require('path');
const s2 = require('small2');
const CONF = require('../config.js');

let baseName = ~path.basename(CONF.logPath).indexOf('.') ? 'log' : CONF.logPath || 'log';

let logPath = path.resolve(__dirname, '../', baseName);

let logFile = path.join(logPath, `${s2.getDate("YYYYMMDD")}.log`);

const writeLog = (str) => {
  let time = new Date().toLocaleString();
  let writeInfo = `[${time}] -- ${str} \n`;

  s2.mkdirPath(logPath, function(err) {
    if(err) {
      console.log('创建文件夹失败');
      return ;
    }
    fs.writeFileSync(logFile, writeInfo, {
      encoding: 'utf-8',
      flag: 'a'
    });
  })
}

module.exports = writeLog;
