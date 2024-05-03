import { CreateDBTable } from '../services/createDBTable.service';
import { NextFunction, Request, Response } from 'express';
export declare class CreateDBTableController {
    create: CreateDBTable;
    createDBTable: (req: Request, res: Response, next: NextFunction) => Promise<any>;
}
