const http = require('http');
const url =  require('url') ;
const moment = require('moment');
const handler = require('./handler');
 /** creating server */
 const server = http.createServer(handler);

 server.listen('3001',()=>{console.log('Server listening on the port 3001')});
