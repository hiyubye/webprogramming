const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.on('request', (req, res) => {
    const filename ='week1.html';
    fs.readFile(filename, (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        if(err!= null){
            console.log("Erro \n");
            res.write("<h1> Error </h1>");
            res.end();
        }
        else{
        res.write(data);
        res.end();
        }
    });
});

server.listen(3000, () => {
    console.log("server listens on port 3000");
})