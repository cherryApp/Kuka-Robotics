// Load modules.
const http = require('http'),
      path = require('path'),
      fs = require('fs');

const server = http.createServer( (request, response) => {
    console.log(`Method: ${request.method}, Url: ${request.url}`);
    router(request, response);
});

const router = (req, res) => {
    let filePath = path.join(__dirname, 'template');
    if (req.url == '/' || req.url == 'index') {
        filePath = path.join(filePath, 'index.html');
    } else {
        filePath = path.join(filePath, req.url+'.html');
    }

    readHTML(filePath, (err, data) => {
        if (err) {
            return res.end('Error in request.');
        }
        res.end(data);
    });
};

const readHTML = (filePath, callBack) => {
    // let filePath = path.join(__dirname, 'users.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`File not found: ${filePath}`);
            return callBack(err);
        }
        callBack(null, data);
    });



};

server.listen(3333, () => {
    console.log('Server is running...');
});