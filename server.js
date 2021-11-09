const http = require('http')

const server = http.createServer(function(req,res){
    res.end('Marcelo evangelista vieira')
})


const port = (process.env.PORT || 3000)

server.listen(port,function(){
    console.log(`servidor rodando ---> http://localhost:${port}`)
})
