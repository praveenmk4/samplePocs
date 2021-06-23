const utils = require('./utils');
const moment = require('moment');
     exports.monday = (req,res)=>{      
        utils.sendResponse(res,'today data and Time is '+moment().format('LLLL'),200,{'Content-Type': 'application/json'});
     };
     exports.notFound=(req,res)=>{       
         utils.endResponse(res,'Not found',404);
     };
     exports.home=(req,res) =>{
     	utils.sendResponse(res,'<h1>Home</h1>',200,{'Content-Type': 'text/html'});
     };
