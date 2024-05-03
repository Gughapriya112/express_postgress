import "reflect-metadata";
import { DataSource } from "typeorm";
import { ConnectionOptions, createConnection } from 'typeorm';

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port:  5432,
  username: "postgres",
  password: "password",
  database: "temperary_db",

  synchronize:  false,
//logging logs sql command on the treminal
  logging: false,
  entities: [],
  migrations: [__dirname + "/migration/*.ts"],
  subscribers: [],
});

export default AppDataSource;