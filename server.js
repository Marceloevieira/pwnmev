const http = require('http');

const server = http.createServer(function(req,res){
    res.end('olá mundo')
})


const port = (process.env.port || 3000)

server.listen(port,function() {
    console.log(`servidor rodando ---> http://localhost:${port}`)
})