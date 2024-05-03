import { Router } from "express";
import { Routes } from "../interfaces/route.interface";
import { ValidationMiddleware } from "../middleware/validation.middleware";
import { CreateDBTableController } from "../controller/createDBTable.controller";
import { DBTableDto } from "../dtos/dbTable.dto";
import bodyParser from "body-parser";
let jsonParser = bodyParser.json();

export class CreateDBTableRoute implements Routes {

    public router = Router();
    public path = '/createDBTable';
    public create = new CreateDBTableController();
    constructor() {
        this.initializeRoutes();
    }

    private async initializeRoutes() {
        this.router.post(`${this.path}`, jsonParser,this.create.createDBTable);
        // this.router.get(`${this.path}/:id(\\d+)`, this.create.createTable);
        // this.router.post(`${this.path}`, ValidationMiddleware(CreateUserDto), this.user.createUser);
        // this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(CreateUserDto, true), this.user.updateUser);
        // this.router.delete(`${this.path}/:id(\\d+)`, this.user.deleteUser);
    }
}
