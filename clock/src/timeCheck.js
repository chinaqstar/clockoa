'use strict';

const CONF = require('../config.js');
let now = new Date().getTime();

const getOnDutyTimestamp = (mode) => {
  let minu = parseInt(mode) ? 30 : 0;
  let date = new Date();
  date.setHours(9);
  date.setMinutes(minu);
  return date.getTime();
}

const getOffDutyTimestamp = (mode) => {
  let minu = parseInt(mode) ? 30 : 0;
  let date = new Date();
  date.setHours(18);
  date.setMinutes(minu);
  return date.getTime();
}

let onDutyTimestamp = getOnDutyTimestamp(CONF.time);
let offDutyTimestamp = getOffDutyTimestamp(CONF.time);

exports.onDutyTimeCheck = now < onDutyTimestamp;
exports.offDutyTimeCheck = now > offDutyTimestamp;
