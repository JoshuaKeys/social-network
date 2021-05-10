const express = require('express');
const http = require('http');

const app = express();

app.use(express.static('dist'));
const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = server;
