#!/usr/bin/env node

require('ts-node').register();
const { createServer } = require('../dist/index');
const server = createServer();

const command = process.argv[2];
const port = process.argv[3] || 3000;

if (command === 'dev') {
  server.listen(port, () => console.log(`Server is running on port ${port}`));
} else if (command === 'start') {
  // Add production start logic here
} else {
  console.log('Invalid command. Use "dev" or "start".');
}
