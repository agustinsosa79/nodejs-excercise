const http = require('node:http')


const PORT = 4000

const usuarios = [
    {nombre: 'agustin', apellido: 'sosa', edad: 20},
    {nombre: 'rodrigo', apellido: 'sosa', edad: 20}
];


const server = http.createServer((req, res) => {
  const partes = req.url.split('/')

  if (req.method === 'GET') {
    if (partes[1] === 'usuarios' && partes[2]) {
      // Buscar usuario por nombre
      const nombre = partes[2]
      const usuarioEncontrado = usuarios.find(u => u.nombre === nombre)

      if (usuarioEncontrado) {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(usuarioEncontrado))
      } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: 'Usuario no encontrado' }))
      }

    } else if (req.url === '/usuarios') {
      // Devolver todos los usuarios
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(usuarios))

    } else if (req.url === '/') {
      // Página principal
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end('Página principal')
      
    } else {
      // Ruta no encontrada
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/plain')
      res.end('Ruta no encontrada')
    }
  } else {
    // Métodos no soportados
    res.statusCode = 405
    res.setHeader('Content-Type', 'text/plain')
    res.end('Método no soportado')
  }
})


server.listen(PORT, () => {
    console.log(`Escuchando en el puerto http://localhost:${PORT}`);
    
})