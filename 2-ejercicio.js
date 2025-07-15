import http from 'node:http';


const PORT = 3000



const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Bienvenido al inicio')
    } else if (req.url === '/sobremi') {
        res.end('Bienvenido a la pagina de sobre mi')
    } else {
        res.statusCode = 404;
        res.end('ERROR 404 URL INVALIDA')
    }
})

server.listen(PORT, () => {
    console.log(`Escuchando el puerto http://localhost:${PORT}`);
    
})



