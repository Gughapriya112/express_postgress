"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "temperary_db",
    synchronize: false,
    //logging logs sql command on the treminal
    logging: false,
    entities: [],
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
});
exports.default = AppDataSource;
//# sourceMappingURL=config.js.map