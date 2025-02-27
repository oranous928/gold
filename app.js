const express = require('express');
const server = express();
const port = '8008';
const host = '127.0.0.1';
server.listen(port,host);
server.get('/',(req,res)=>res.send('Hello'));
server.get('/:state',(req,res)=>stateHandler(req,res));
function stateHandler(req,res){
    res.send(req.params.state);
}