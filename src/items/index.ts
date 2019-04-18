import * as express from 'express';
import itemsRouter from './routes';

const router = express.Router();

router.use('/items', itemsRouter);

export default router;