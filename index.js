'use strict';
const chalk = require('chalk');

const icons = {
  info: chalk.blue('i'),
  success: chalk.green('√'),
  warning: chalk.yellow('‼'),
  error: chalk.red('×'),
};

const logger = (icon, status, msg, option) => {
  const now = new Date();
  const date = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  const formatted = date.toISOString().replace(/.*T(.*)Z/, '$1');

  let logmessage = option.icons ? icon : ' ';
  logmessage += option.time && !option.customTime ? ` [${formatted}]  ` : ' ';
  logmessage +=
    option.time && option.customTime ? `[${option.customTime}]  ` : '';
  logmessage += option.status && !option.customStatus ? status + '  ' : '';
  logmessage +=
    option.status && option.customStatus ? option.customStatus + '  ' : '';
  logmessage += msg;

  console.log(logmessage);
};

const handleOptions = (option) => {
  const defaultOptions = {
    icons: true,
    time: true,
    status: true,
    customTime: false,
    customStatus: false,
  };

  if (option === undefined) {
    return defaultOptions;
  }

  let finalOptions = defaultOptions;
  finalOptions.icons = typeof option.icons === 'boolean' ? option.icons : true;

  finalOptions.time = typeof option.time === 'boolean' ? option.time : true;

  finalOptions.status =
    typeof option.status === 'boolean' ? option.status : true;

  finalOptions.customTime =
    typeof option.customTime !== 'undefined' ? option.customTime : false;

  finalOptions.customStatus =
    typeof option.customStatus !== 'undefined' ? option.customStatus : false;

  return finalOptions;
};

class easylogger {
  /**
   * Simple log informations
   *
   * @param {String} msg
   * @param {Object} option
   */
  static info(msg, option) {
    logger(icons.info, chalk.blue('info   '), msg, handleOptions(option));
  }
  /**
   * Simple warn informations
   *
   * @param {String} msg
   * @param {Object} option
   */
  static warn(msg, option) {
    logger(icons.warning, chalk.yellow('warn   '), msg, handleOptions(option));
  }
  /**
   * Simple logs errors
   *
   * @param {String} msg
   * @param {Object} option
   */
  static error(msg, option) {
    logger(icons.error, chalk.red('error  '), msg, handleOptions(option));
  }
  /**
   * Simple debug logs
   *
   * @param {String} msg
   * @param {Object} option
   */
  static debug(msg, option) {
    logger(icons.warning, chalk.yellow('debug  '), msg, handleOptions(option));
  }
  /**
   * Simple success message
   *
   * @param {String} msg
   * @param {Object} option
   */
  static success(msg, option) {
    logger(icons.success, chalk.green('success'), msg, handleOptions(option));
  }
}

module.exports = easylogger;
