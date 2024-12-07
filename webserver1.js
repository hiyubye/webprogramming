const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h3>wow</h3>");
    res.end("<h1>Hello World !</h1>");
});
// server.on('request', (req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("<h3>wow</h3>");
//     res.end("<h1>Hello World !</h1>");}) 
// 원래 이렇게 해야됨.

server.listen(1000, () => {
    console.log("server listens on port 1000");
})