// Load modules.
const http = require('http'),
      path = require('path'),
      fsHandler = require('./modules/fsHandler'),
      logModule = require('./modules/logModule');

const server = http.createServer( async (req, res) => {
    let filePath = path.join(__dirname, 'json/users.json');
    await logModule.log(`Method: ${req.method}, url: ${req.url}`);
    let json = await fsHandler.read(filePath);
    res.end(json);
});

server.listen( 3333, () => {
    console.log('Server is running.');
});