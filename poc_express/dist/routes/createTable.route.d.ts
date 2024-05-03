import { Routes } from "../interfaces/route.interface";
import { CreateTableController } from "../controller/createTable.controller";
export declare class CreateTableRoute implements Routes {
    router: import("express-serve-static-core").Router;
    path: string;
    create: CreateTableController;
    constructor();
    private initializeRoutes;
}
