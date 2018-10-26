// Make fs module promisify.
const fs = require('fs');

/**
 * Read files and return a promise.
 */
const read = (filePath, encode='utf8') => {
    return new Promise( (resolve, reject) => {
        fs.readFile(filePath, encode, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

/**
 * Write files with promise.
 */
const write = (filePath='', encode='utf8', content='', options=null) => {
    return new Promise( (resolve, reject) => {
        fs.writeFile(filePath, content, options || encode, (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
};

module.exports = {
    "read": read,
    "write": write
};