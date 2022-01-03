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
  const urlString = url.parse(req.url, true);
  
  if (urlString.path === '/'){
    fs.readFile('index.html', (err, data) => {
      if (err) { console.log(err) }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
      return;
    });
  }else if (urlString.path === '/about'){
    fs.readFile('about.html', (err, data) => {
      if (err) { console.log(err) }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
      return;
    })
  }else if (urlString.path === '/contact-me'){
    fs.readFile('contact-me.html', (err, data) => {
      if (err) { console.log(err) }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
      return;
    })
  }else {
    fs.readFile('404.html', (err, data) => {
      if (err) { console.log(err) }
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
      return;
    })
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});