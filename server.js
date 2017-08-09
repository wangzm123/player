const url = require('url');
const path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');
const expressWinston = require('express-winston');
const winston = require('winston'); // for transports.Console
const helmet = require('helmet');
const compression = require('compression');
// 环境变量
const env = process.env.NODE_ENV || 'testing';
const isProd = env === 'testing' ? true : false;
//  APP 配置
const config = isProd ? require('./config.json')
  : require('./config.json');
if (config.watcher) {
  require(config.watcher);
}
const app = express();
// 设置安全的 HTTP Header
app.use(helmet());
// 开启 gzip 压缩
app.use(compression());
// 静态资源
app.use(express.static(path.join(__dirname, 'dist')));
app.use(
  expressWinston.logger({
    transports: [
      new winston.transports.Console({
        json: true,
        colorize: true
      })
    ]
  })
);
app.use('/api', proxy(config.api, {
  proxyReqPathResolver: function (req) {
    return require('url').parse(req.url).path;
  }
}));
app.use('/privilegeApi', proxy(config.privilegeApi, {
  proxyReqPathResolver: function (req) {
    return require('url').parse(req.url).path;
  }
}));
// express-winston errorLogger makes sense AFTER the router.
app.use(
  expressWinston.errorLogger({
    transports: [
      new winston.transports.Console({
        json: true,
        colorize: true
      })
    ]
  })
);
app.listen(config.port, () => {
  console.log(`🌎  => Server is running on port ${config.port}`);
});
