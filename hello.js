'use strict';
const http = require('http');
http.createServer((req,res)=>{
  res.writeHead(200,{'Content-type': 'text/html'});
  res.end('<h1>hello Node js</h1>');
}).listen(7000,()=>{console.log("hi we are listining");});