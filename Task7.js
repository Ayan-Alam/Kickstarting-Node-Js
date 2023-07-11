/*
1.At the core of Node.js' event-driven architecture is the Event Loop. The Event Loop is a mechanism that continuously checks for pending events and triggers their associated event handlers. It operates on a single thread, which means it can only process one event at a time, but it does so quickly, giving the illusion of parallelism.

2. Node.js follows an event-driven architecture, where it registers event handlers for various events and utilizes an Event Loop to process these events. Since Node.js is single-threaded, it can only process one event at a time. However, the Event Loop is extremely fast and can quickly switch between events, giving the illusion of parallelism. This enables Node.js to handle a large number of concurrent requests without being overwhelmed by context-switching overhead.

3.The process.exit() function is a method provided by the Node.js process module, and it is used to terminate the Node.js process with a specified exit code. When process.exit() is called, it immediately stops the execution of the current Node.js process and exits.

4.req.url: The req.url property contains the URL path and query parameters of the incoming request
  req.headers: The req.headers property contains an object representing the headers of the incoming request.
  req.method: The req.method property contains the HTTP method or verb of the incoming request. The HTTP methods define the type of operation to be performed on the requested resource.
*/
const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    res.write('<html><h1>hello testing my server</h1>');
    if(req.url === '/home'){
        res.write('<body><h1>Welcome home</h1></body>');
    }else if(req.url === '/about'){
        res.write('<body><h1>Welcome To My About Page</h1></body>');
    }else if(req.url === '/node'){
        res.write('<body><h1>Welcome To My Node.js Project</h1></body>');
    }
    res.write('</html>');
    res.end();
    //process.exit();
})

server.listen(4000);
