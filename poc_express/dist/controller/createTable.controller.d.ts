import { CreateTable } from '../services/createTable.service';
import { NextFunction, Request, Response } from 'express';
export declare class CreateTableController {
    create: CreateTable;
    createTable: (req: Request, res: Response, next: NextFunction) => Promise<any>;
}
