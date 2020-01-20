const http = require('http');
const {Pool,Client}  = require('pg');

const hostname = 'localhost';

const port = 8080;



const pool = new Pool({
    user: 'tangmo',
    host: 'localhost',
    database : 'tester',
    password : 'tangmo',
    port:3310,

})

const server = http.createServer((req,res) => {
    if(req.method ==='GET'&& req.url==='/echo'){
        var data;
        pool.query('select * from test.users', (err,res) => {
            //console.log(err,res.rows[0]);
            //data = res.rows[0];
            //pool.end();
            
        })
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('data : '+data+'\n');
        
    }else{
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('Hello, World2\n');
    }
    
})

server.listen(port,hostname,() => {
    console.log('Server running at http://${hostname}:${port}/');
})
