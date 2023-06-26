import express, { Express } from 'express';
import router from './router';

export function createServer() {
  const app: Express = express();
  app.use('/api', router);
  return app;
}
