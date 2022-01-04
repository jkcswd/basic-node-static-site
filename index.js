/* 
  localhost:8080 should take users to index.html
  localhost:8080/about should take users to about.html
  localhost:8080/contact-me should take users to contact-me.html
  404.html should display any time the user tries to go to a page not listed above.
*/

const express = require('express');
const app = express();
const port = 8080;

app.get('/', function(req, res) {
  res.send()
});

app.listen(port, function() {
  console.log(`Listening on port ${port}!`)
});
