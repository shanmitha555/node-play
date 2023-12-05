const http = require('http');
const routes = require('./routes');
//const { handler } = require('./routes');
//const fs = require ('fs');
console.log(routes.sometext);
const server = http.createServer(routes.handler);
/** 
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    //console.log(url, method);
    
    if (url === '/'){
        console.log('empty slash');
        res.write('<html>');
        res.write('<title>empty slash</title>');
        res.write("<h1>hello world</h1>");
        res.write('<body><form action="/message" method="POST"><input type="text" name="txtMessage"> <button type="submit">Submit</button></form></body>')
        res.write('</html>');  
        return res.end();

    }

    if (url === '/message' && method === 'POST'){
        //fs.writeFileSync('message.txt', 'sample text');
        console.log("message slash");
        
        const requestBody = [];
        req.on('data', chunk => {
            requestBody.push(chunk);
            console.log(chunk);
        })
        
        req.on('end', () => {
            const parsedRequestBody = Buffer.concat(requestBody).toString();
            const message = parsedRequestBody.split('=')[1];
            fs.writeFileSync('message.txt', message);

        })
       

        req.on('end', () => {
            const parsedRequestBody = Buffer.concat(requestBody).toString();
            const message = parsedRequestBody.split('=')[1];
            fs.writeFile("message.txt", message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                //res.write('<title>message slash</title>');
                return res.end();
            })
        })
       
       
    }
    
    res.setHeader('content', 'text/html');
    res.write('<html>');
    res.write('<title>Message</title>');
    res.write('<body><h1>hello world</h1></body>');
    res.write('</html>');
    res.end();    
});
*/

server.listen(10000);