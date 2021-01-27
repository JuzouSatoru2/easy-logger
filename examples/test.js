const chalk = require('chalk');
const easylogger = require('../index');

easylogger.info('info message');
easylogger.warn('warn message');
easylogger.error('error message');
easylogger.debug('debug message');
easylogger.success('success message');

console.log('\n-----WITH-OPTIONS-----\n');

// Remove the icons
easylogger.info('no icons', {
  icons: false,
});

// Remove the time indicator
easylogger.warn('no time', {
  time: false,
});

// Remove the status
easylogger.error('no status', {
  status: false,
});

// Add a custom date format (works with custom colors too)
easylogger.debug('custom date', {
  customTime: Date.now(),
});

// Add a custom status name (works with custom colors too)
easylogger.success('custom status', {
  customStatus: chalk.yellow('DEBUG'),
});
