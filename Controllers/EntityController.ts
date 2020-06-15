import { Router, Request, Response, NextFunction } from "express"
import { setValue, getValueAsperKey } from "../redisCache/RedisOperation";
import { swaggerDocumentation } from "../documentation/Swagger";
import { ErrorCallback } from "../handler/ExceptionHandler";
export const entityRouter = Router();

entityRouter.get('/getUIDefination', (request: Request, response: Response,next:NextFunction) => {

setValue("UIDef1",JSON.stringify(swaggerDocumentation),next);
getValueAsperKey("UIDef1",next).then((data)=>{
response.send(JSON.stringify(data));
}
).catch((err)=>next(ErrorCallback(err)))

});
