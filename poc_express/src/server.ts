import { App } from './app';
import { CreateDBTableRoute } from './routes/createDBTable.route';

console.log("before app start")
const app = new App([new CreateDBTableRoute()]);
console.log("after app start")

app.listen();
