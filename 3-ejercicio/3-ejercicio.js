import  http from 'node:http';
import  fs  from 'node:fs';

const PORT = 3000


const server = http.createServer((req, res) => {
    if (req.url === '/') {
            fs.readFile('./index.html', 'utf-8', (err, data) => {
                if (err) {
                    res.statusCode = 404;
                    res.end('no se pudo enviar el archivo')
                } else {
                    res.statusCode = 200
                    res.end(data)
                }
            })
            
    } else if (req.url ==='/contacto') {
        fs.readFile('./contacto.html', 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 404
                res.end('Archivo invalido')
            } else {
                res.statusCode = 200
                res.end(data)
            }
        })
    } else if (req.url === '/sobremi') {
        fs.readFile('./sobremi.html', 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 404
                res.end('Archivo invalido')
            } else {
                res.statusCode = 200
                res.end(data)
            }
        })
    } else {
        res.statusCode = 404
        res.end('Su pagina no fue encontrada')
    }
    
})

server.listen(PORT, () => {
    console.log(`estas escuchando el puerto http://localhost:${PORT}`);
    
});
