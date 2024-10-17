// Create web server
// Start server
// Read the request and response
// Parse the request
// Get comments from the database
// Return comments as a JSON response
// Listen on port 3000

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const comments = [
  { username: 'Alice', comment: 'I love this' },
  { username: 'Bob', comment: 'This is awesome' },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/comments' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(comments));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Not found');
  }
  res.end();
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});