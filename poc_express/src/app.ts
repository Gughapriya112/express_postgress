import 'reflect-metadata';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import express from 'express';
import AppDataSource from './db/config';
import { Routes } from './interfaces/route.interface';
import bodyParser from "body-parser";
import helmet from 'helmet';
import stream from 'stream';
import cors from 'cors';
import hpp from 'hpp';
import compression from 'compression';

export class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = 3010;
    // this.connectToDatabase();
    this.initializeRoutes(routes);
    this.initializeMiddlewares();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`=================================`);
      console.log(` --> 🚀 App listening on the port ${this.port}`);
      console.log(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  public connectToDatabase() {
    AppDataSource.initialize().then(async () => {
      console.log("Data Source has been initialized!");
    })
      .catch((error) => console.log(error));
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(morgan("dev", { stream }));
    this.app.use(cors({ origin: "*", credentials: true }));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());

  }
}