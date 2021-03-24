<h1 align="center">
	<br>
	<br>
	 Easy-Logger
	<br>
	<br>
</h1>

> Easy tool for better console logs

Disclaimer: Package has not the username since its not possible to rename the npm account.

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Alex289/easy-logger?style=flat-square) ![GitHub package.json version](https://img.shields.io/github/package-json/v/Alex289/easy-logger?style=flat-square)

<img src="https://github.com/Alex289/easy-logger/blob/main/examples/Screenshot.JPG" width="500" />

<br>

## Highlights

- Icon indicator
- Current time
- Colored status
- Options for customization
- presets for logging infos, warnings, errors and many more

## Install

```console
$ npm install @juzousatoru2/easy-logger
```

## Usage

```js
const easylogger = require('@juzousatoru2/easy-logger');

easylogger.info('Server started');
easylogger.warn('Server rate is low');
easylogger.error('Something went wrong');
easylogger.debug('Debug messages');
easylogger.success('Upload succeeded');
```

Easy-Logger comes with an easy to use options.

```js
const easylogger = require('@juzousatoru2/easy-logger');

// Add chalk for custom colors
const chalk = require('chalk');

// Remove the icons
easylogger.info('no icons', { 
  icons: false
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
```
## Express middleware

Easy-Logger comes with an pre-made express middleware for logging since 0.0.3.

```js
//...
const easylogger = require('@juzousatoru2/easy-logger/middleware');

app.use(easylogger);

// Or add it to specific routes
app.get('/api', easylogger, (req, res) => {
  res.status(200);
});
```