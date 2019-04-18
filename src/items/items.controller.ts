import { ItemsService } from './items.service';
import { Request, Response, NextFunction } from 'express';

/**
 * Controller for all routes of items
 */
export class ItemsController {

    public static async search(req: Request, res: Response, next: NextFunction) {
        const { q } = req.query;
        try {
            const data = await ItemsService.search(q);
            res.json(data);
        } catch(err) {
            next(err);
        }
    }

    public static async detailById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        try {
            const  resp = await ItemsService.detailById(id);
            res.json(resp);
        } catch(err) {
            next(err);
        }
    }
    
}