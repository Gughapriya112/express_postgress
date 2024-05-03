import { Routes } from "../interfaces/route.interface";
import { CreateDBTableController } from "../controller/createDBTable.controller";
export declare class CreateDBTableRoute implements Routes {
    router: import("express-serve-static-core").Router;
    path: string;
    create: CreateDBTableController;
    constructor();
    private initializeRoutes;
}
