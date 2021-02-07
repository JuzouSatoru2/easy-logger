const easylogger = require('./index');

function middleware(req, res, next) {
  switch (true) {
    case res.statusCode < 200:
      easylogger.info(req.method + ' ' + req.path + ' ' + res.statusCode);
      break;
    case res.statusCode > 199 && res.statusCode < 300:
      easylogger.success(req.method + ' ' + req.path + ' ' + res.statusCode);
      break;
    case res.statusCode > 299 && res.statusCode < 400:
      easylogger.warn(req.method + ' ' + req.path + ' ' + res.statusCode);
      break;
    case res.statusCode > 399 && res.statusCode < 500:
      easylogger.error(req.method + ' ' + req.path + ' ' + res.statusCode);
      break;
    case res.statusCode > 499 && res.statusCode < 600:
      easylogger.error(req.method + ' ' + req.path + ' ' + res.statusCode);
      break;
  }
  next();
}

module.exports = middleware;
