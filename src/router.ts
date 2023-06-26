import express, { Router, RequestHandler } from 'express';
import glob from 'glob';
import path from 'path';

const router: Router = express.Router();

// Dynamically require all the serverless functions in the `api/` directory
glob.sync('./api/**/*.ts').forEach((file) => {
  const route = '/' + path.relative('./api', file).replace('.ts', '');
  const serverlessFunction: RequestHandler = require(path.resolve(
    file
  )).default;
  router.all(route, serverlessFunction);
});

export default router;
