import { AuthenticateToken } from "./Middleware/AuthenticateToken";
import cors from "cors"
import Express,{Request,Response,NextFunction} from "express"
import {swaggerDocumentation} from "./Documentation/Swagger"
import swaggerUi from "swagger-ui-express"
import {entityRouter} from "./Controllers/EntityController"
import {authRouter} from "./Controllers/AuthController"
import { handleError, ErrorCallback } from "./Handlers/ExceptionHandler";
import RedisClient from "./RedisCache/RedisClient";
const app = Express();
var port =process.env.PORT||8080;

app.use(cors());
app.use(Express.static(__dirname));
app.use(Express.json())
app.use('/Entity',entityRouter)
app.use('/token',authRouter);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));
RedisClient.RedisClientInstance.on("connect",(err,reply)=>{
  ErrorCallback(err);
  console.log("connected to redis");
})
app.use((err:any, req:Request, res:Response, next:NextFunction) => {
    handleError(err, res);
  });
app.listen(port, () => console.log('server started'))