#!/usr/bin/env node

const { createServer } = require('../dist/index');
const app = createServer();

const command = process.argv[2];
const port = process.argv[3] || 3000;

if (command === 'dev') {
  app.listen(port, () => console.log(`Server is running on port ${port}`));
} else if (command === 'start') {
  // Add production start logic here
} else {
  console.log('Invalid command. Use "dev" or "start".');
}
