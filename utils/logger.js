var log4js = require('log4js');

module.exports = function() {
    log4js.configure(
        {
        appenders: { 'file': { type: 'file', filename: 'logs/file.log' }
                    
     },
        categories: { default: { appenders: ['file'], level: 'info' }}
        }
      );
        var logger = log4js.getLogger('file');
        return logger;
     };

