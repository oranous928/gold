const express = require('express');
const server = express();
const port = '8080';
const host = '0.0.0.0';
server.listen(port,host);
server.get('/',(req,res)=>res.send('Hello'));
server.get('/:state',(req,res)=>stateHandler(req,res));

function stateHandler(req,res){
    res.send(req.params.state);
}