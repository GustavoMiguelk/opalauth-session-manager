// Importando o objeto HTTP para navegação do pacote node
import http from 'node:http';

// Criar um servidor http com o objeto http.
const server = http.createServer()

server.listen(3000, () => {
    console.log("Servidor Rodando em http://localhost:3000")
    console.log("Bem Vindo(a)!")
})
