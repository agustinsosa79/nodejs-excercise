const http = require('node:http')

const PORT = 3000


const usuarios = [
    {nombre: 'agustin', apellido: 'sosa', edad: 20},
    {nombre: 'rodrigo', apellido: 'sosa', edad: 20}
];

const productos = [ 
    {nombre: 'camiseta', precio: 4000},
    {nombre: 'pantalon', precio: 5000}
];

const server = http.createServer((req, res) => {
    if (req.url === '/api/products') {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200;
        res.end(JSON.stringify(productos));
    } else if (req.url === '/api/users') {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200
        res.end(JSON.stringify(usuarios))
    } else {
        const error = 404
        res.statusCode = 404
        res.end(JSON.stringify(`Pagina no encontrada error-${error}`))
    }
})


server.listen(PORT,() => {
    console.log(`Escuchando el puerto http://localhost:${PORT}`);
    
})