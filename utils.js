exports.sendResponse = (res,data,statusCode,headers) =>{
    res.writeHead(statusCode,headers);
    res.write(data);
    res.end("\n");
};
exports.collectData  = (req,callback)=>{
    let data = '';
    req.on('data',(response)=>{
        data+= response;
    });
    req.on('end',()=>{
        callback(data);
    });
}