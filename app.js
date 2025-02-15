import express from 'express';

import router from './src/routes/routes.js';
import connectDatabase from './src/database/index.js';

const app = express();

connectDatabase();

app.use(router);

app.listen(3000, () => {
  console.log('🚀 Express Server is Running');
});
