import { AuthenticateToken } from "./middleware/AuthenticateToken";
import cors from "cors"
import Express,{Request,Response,NextFunction} from "express"
import {swaggerDocumentation} from "./documentation/Swagger"
import swaggerUi from "swagger-ui-express"
import {entityRouter} from "./controllers/EntityController"
import {authRouter} from "./controllers/AuthController"
import { handleError, ErrorCallback } from "./handler/ExceptionHandler";
import RedisClient from "./redisCache/RedisClient";
import https from "https"

const app = Express();
var port =process.env.PORT||8080;
app.use(cors());
app.use(Express.static(__dirname));
app.use(Express.json())
app.use('/Entity',AuthenticateToken,entityRouter)
app.use('/token',authRouter);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));
RedisClient.RedisClientInstance.on("connect",(err,next:NextFunction)=>{
  if(err){next(ErrorCallback(err))};
  console.log("connected to redis");
})
app.use((err:any, req:Request, res:Response, next:NextFunction) => {
    handleError(err, res);
  });
  app.listen(8081,()=>console.log('Http server started on port '+8081))
  https.createServer(app).listen(port, () => console.log('https server started on port '+8080))