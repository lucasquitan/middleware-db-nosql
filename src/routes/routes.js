import { Router } from 'express';

const router = new Router();

router.get('/', (request, response) => {
  response.json({ message: 'Ok' });
});

export default router;
