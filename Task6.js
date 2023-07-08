/*
1. The internet is a global network of interconnected computers and devices that allows for the sharing and transmission of information. It's like a vast web that connects people and machines all around the world.

2.core modules provide essential functionalities for building server-side applications.

3.http --- Launch server, send request
https --- Launch a SSL server
fs --- 	used to handle file system
path --- includes methods to deal with file paths.
os --- provides information about the operating system.
process --- provides information and control about the current Node.js process.

4.A relative path and an absolute path are two different ways to specify the location of a file or directory on a computer or in a file system.
An absolute path is the full path to a file or directory, starting from the root directory. It contains all the necessary information to locate the file or directory, including the drive letter or network name. For example, "C:\Windows\System32\drivers" is an absolute path to the "drivers" directory on the C: drive in Windows.
A relative path, on the other hand, is a path that is relative to the current location or working directory. It does not include the drive letter or network name, and only contains the necessary information to locate the file or directory from the current location. For example, "....\Windows\System32\drivers" is a relative path to the "drivers" directory in Windows, assuming that the current location is two levels above the "Windows" directory.

5.createServer is a method provided by the Node.js http module, which is used to create an HTTP server. When called, it returns an instance of the http.Server class, which is an EventEmitter that can be used to handle incoming HTTP requests.
The createServer method takes one argument, a callback function, which will be invoked whenever an incoming request is received by the server. This callback function takes two arguments, a request object and a response object, which represent the incoming request and the server's response, respectively.

6.An anonymous function is a function that is not bound to an identifier (i.e. a name). They are useful in situations where you need to define a function, but don't need to reference it again after it is defined.

7. server.listen() is a method provided by the http.Server class in Node.js, and it is used to make the server start listening for incoming connections on a specified port. This method takes one or two arguments:
The first argument is the port number on which the server should listen.
 second argument is an optional callback function that will be invoked once the server has started listening.
When the server starts listening, it will wait for incoming requests and invoke the callback function that was passed to createServer for each incoming request.

8.
*/
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log("Nidhi");
    res.end();
    // process.exit();
})

server.listen(4000);