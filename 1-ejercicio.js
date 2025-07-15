

const http = require('node:http')
const PORT = 3000

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.statusCode = 200
        res.end('hola a todos')
    }
})


const servidor = server.listen(PORT)


console.log(servidor);



