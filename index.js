/* 
  localhost:8080 should take users to index.html
  localhost:8080/about should take users to about.html
  localhost:8080/contact-me should take users to contact-me.html
  404.html should display any time the user tries to go to a page not listed above.
*/

const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 8080;

const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  })

});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});