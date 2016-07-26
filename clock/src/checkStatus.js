'use strict';

const cheerio = require('cheerio');
const Promise = require('promise');
const iconv = require('iconv-lite');
const login = require('./login.js');
const writeLog = require('./writeLog.js');
const CONF = require('../config.js');

const opts = {
  'method': 'GET',
  'url': CONF.checkUrl,
  'encoding': null
}

const getRegisterStatus = (data) => {
  const html = iconv.decode(data, 'gb2312');
  const $ = cheerio.load(html, {decodeEntities: false});

  const tdata = $('.TableData td');

  let clockinTime = tdata.eq(-7).text();
  let clockoutTime = tdata.eq(-2).text();

  clockinTime = clockinTime === '未登记' ? false : clockinTime;
  clockoutTime = clockoutTime === '未登记' ? false : clockoutTime;

  return {
    clockinTime,
    clockoutTime
  };
}

const fetchUrl = () => {
  writeLog(CONF.checkUrl);
  return new Promise((resolve, reject) => {
    login((err, fetch) => {
      if(err) {
        writeLog(err);
        reject(err);
      }
      fetch(opts, function(err, res, body) {
        if (!err && res.statusCode == 200) {
          // console.log(body);
          resolve(getRegisterStatus(body));
        } else {
          writeLog(err);
          reject(err);
        }
      }); // fetch
    }); // login
  }); // promise
}

module.exports = fetchUrl;
