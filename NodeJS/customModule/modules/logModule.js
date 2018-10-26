const path = require('path'),
      fsHandler = require('./fsHandler'),
      config = require('./config');

let logPath = path.join(__dirname, './log.txt');

const log = (content='') => {
    let d = new Date();
    content = `${d} # ${content}\n`;
    return fsHandler.write(
        config.logFile, 
        'utf8', 
        content,
        {encoding: 'utf8', flag: 'a'}
    );
};

module.exports = {
    "log": log,
    "logFile": logPath
};