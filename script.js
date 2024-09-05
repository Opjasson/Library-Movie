const http = require("http");
const port = 3000;
const fs = require('fs')

const renderHtml = (path,res) => {
    fs.readFile(path, (err, data)=>{
        if(err){
            res.writeHead(404)
            res.write('Error: file not found')
        }else {
            res.write(data)
        }
        res.end()
    })
}


http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    })
    
    const url = req.url
    if(url == '/contact'){
        renderHtml('./contact.html',res)
    }else if(url == '/about'){
        renderHtml('./about.html',res)
    }else {
        renderHtml('./index.html',res)
    }

}).listen(port, () => {
    console.log(`Server running in port ${port}...`);
});
