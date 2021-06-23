
const routes = require('./routes');
const url = require('url');
const moment = require('moment');
module.exports = ((req,res) =>{
 	/* url allocation*/  
	let incomingUrl = url.parse(req.url,true);
	let path =  incomingUrl.pathname;
	path = path.replace(/^\/+|\/+$/g,""); 
	/* on data*/
    req.on('data',() =>{
	   console.log("got some data");
	});
	/ on end*/
	req.on('end',()=>{
	
	   let route =  typeof routes[path] !== "undefined" ? routes[path] :routes["home"];
	   let data = {path:path};	  
	   route(data,res);
	});   
});