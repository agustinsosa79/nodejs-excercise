const http = require('node:http');

const usuarios = [];



const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/usuarios') {
        let body = ''
        req.on('data', chunk => {
            body += chunk
        })

        req.on('end', () => {
            const datos = JSON.parse(body)
            if (Array.isArray(datos)) {
                usuarios.push(...datos)
            } else {
                usuarios.push(datos)
            }
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({mensaje: 'datos recibidos', usuarios}))
        })

    } else if (req.method === 'GET' && req.url === '/usuarios') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(usuarios))
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end('Error al enviar losdatos')
    }
})



server.listen(3000, () => {
    console.log(`escucuchando el puerto http://localhost:${3000}`);
    
})