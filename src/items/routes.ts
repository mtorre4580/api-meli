import * as express from 'express';
import { ItemsController } from './items.controller';

const router = express.Router();

router.route('/').get(ItemsController.search);
router.route('/:id').get(ItemsController.detailById);

export default router;
