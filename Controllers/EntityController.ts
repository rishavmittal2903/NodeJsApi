import { Router, Request, Response, NextFunction } from "express"
import { setValue, getValueAsperKey } from "../redisCache/RedisOperation";
import { swaggerDocumentation } from "../documentation/Swagger";
import { ErrorCallback } from "../handler/ExceptionHandler";
import {createDatabase, closeConnection } from "../database/SqlQuery";
export const entityRouter = Router();

entityRouter.get('/getUIDefination', (request: Request, response: Response,next:NextFunction) => {

setValue("UIDef1",JSON.stringify(swaggerDocumentation),next);
getValueAsperKey("UIDef1",next).then((data)=>{
response.send(JSON.stringify(data));
}
).catch((err)=>next(ErrorCallback(err)))

});

entityRouter.get('/pageConfig/:tenantId', (request: Request, response: Response,next:NextFunction) => {
 createDatabase(next).then((res)=>response.send(res)).catch((err)=>next(ErrorCallback(err))).finally(()=>closeConnection(next));
})

entityRouter.post('/pageConfig', (request: Request, response: Response,next:NextFunction) => {

})

entityRouter.put('/pageConfig/:existingTenantId', (request: Request, response: Response,next:NextFunction) => {
    response.sendStatus(200);
})