import { Router, Request, Response, NextFunction } from "express"
import { setValue, getValueAsperKey } from "../redisCache/RedisOperation";
import { swaggerDocumentation } from "../documentation/Swagger";
import ErrorHandler from "../handler/ExceptionHandler";
import { openConnection } from "../database/SqlQuery";
export const entityRouter = Router();

entityRouter.get('/getUIDefination', (request: Request, response: Response,next:NextFunction) => {

setValue("UIDef1",JSON.stringify(swaggerDocumentation));
getValueAsperKey("UIDef1").then((data)=>{
response.send(JSON.stringify(data));
}
).catch((err)=>next(new ErrorHandler(500,err.message)))

});


entityRouter.get('/pageConfig:/tenantId', (request: Request, response: Response) => {
openConnection();

})
entityRouter.post('/pageConfig', (request: Request, response: Response) => {


})
entityRouter.put('/pageConfig:/existingTenantId', (request: Request, response: Response) => {


})