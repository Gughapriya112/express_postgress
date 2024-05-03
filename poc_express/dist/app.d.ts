import 'reflect-metadata';
import express from 'express';
import { Routes } from './interfaces/route.interface';
export declare class App {
    app: express.Application;
    env: string;
    port: string | number;
    constructor(routes: Routes[]);
    listen(): void;
    getServer(): express.Application;
    connectToDatabase(): void;
    private initializeRoutes;
    private initializeMiddlewares;
}
