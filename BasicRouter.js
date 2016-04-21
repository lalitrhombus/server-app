'use strict';
const http = require('http');
const url = require('url');

let route ={
  'GET':{
    '/':(req,res)=>{
      res.writeHead(200,{'Content-type':'text/html'});
      res.end('<h1>hello we reached</h1>')
    },
    '/about':(req,res)=>{
      res.writeHead(200,{'Content-type':'text/html'});
      res.end('<h1>hello we reached about</h1>')
    },
    '/api/getinfo':(req,res)=>{
      res.writeHead(200,{'Content-type':'text/html'});
      res.end(JSON.stringify(req.queryParams));
    }
  },
  'POST':{

  },
  'NA':(req,res)=>{
    res.writeHead(404);
    res.end('Content Not Found');
  }
};


function router(req,res){
  let baseUri = url.parse(req.url,true);
  let resolvePath = route[req.method][baseUri.pathname];  
  if(resolvePath != undefined){
    req.queryParams = baseUri.query;
    resolvePath(req,res);
  }
  else{
      route['NA'](req,res);    
  }
}

http.createServer(router).listen(8000,()=>{
  console.log("hi we are listening");
});