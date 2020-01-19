const http = require('http');

const hostname = '127.0.0.1';

const port = 8080;

const server = http.createServer((req,res) => {
    if(req.method ==='GET'&& req.url==='/echo'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('Hello, World1\n');
    }else{
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('Hello, World2\n');
    }
    
})

server.listen(port,hostname,() => {
    console.log('Server running at http://${hostname}:${port}/');
})
