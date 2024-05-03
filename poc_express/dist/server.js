"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var createDBTable_route_1 = require("./routes/createDBTable.route");
console.log("before app start");
var app = new app_1.App([new createDBTable_route_1.CreateDBTableRoute()]);
console.log("after app start");
app.listen();
//# sourceMappingURL=server.js.map