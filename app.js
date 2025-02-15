import express from 'express';

import router from './src/routes/routes.js';
import connectDatabase from './src/database/index.js';

const app = express();
const port = process.env.PORT || 4000;
connectDatabase();

app.use(router);

app.listen(port, () => {
  console.log(`Express Server is Running on ${port}`);
});
