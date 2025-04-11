import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

interface App {
    use(path: string, router: Router): void;
}

interface RequestHandler {
    (req: any, res: any, next?: any): void;
}

export function setRoutes(app: App): void {
    app.use('/api/accounts', router);
    router.get('/:id', indexController.getAccountDetails.bind(indexController) as RequestHandler);
    router.post('/', indexController.createTransaction.bind(indexController) as RequestHandler);
}