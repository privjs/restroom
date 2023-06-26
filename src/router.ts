import express, { Router, RequestHandler } from 'express';
import { sync } from 'glob';
import path from 'path';

const router: Router = express.Router();

// Dynamically require all the serverless functions in the `api/` directory
sync('./api/**/*.{ts,js}').forEach((file) => {
  const route =
    '/' +
    path
      .relative('./api', file)
      .replace('.ts', '')
      .replace('[', ':')
      .replace(']', '');
  const serverlessFunction: RequestHandler = require(path.resolve(
    file
  )).default;
  router.all(route, serverlessFunction);
});

export default router;
