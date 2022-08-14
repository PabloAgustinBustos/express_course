const http = require("http");

const server = http.createServer((req, res) => {
    const {url} = req;
    
    if(url === "/"){
        res.writeHead(200, {"content-type": "text/html"})
        res.end("<h1>home page</h1>")
    }else if(url === "/about"){
        res.writeHead(200, {"content-type": "text/html"})
        res.end("<h1>about</h1>")
    }else{
        res.writeHead(400, {"content-type": "text/html"})
        res.end("<h1>no se encuentra la página</h1>")
    }

}).listen(3001, () => console.log("server lanzado"))