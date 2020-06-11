import { Router, Request, Response, NextFunction } from "express"
import { setValue, getValueAsperKey } from "../RedisCache/RedisOperation";
import { swaggerDocumentation } from "../Documentation/Swagger";
import ErrorHandler from "../Handlers/ExceptionHandler";
import { openConnection } from "../Database/SqlQuery";
export const entityRouter = Router();

entityRouter.get('/getUIDefination', (request: Request, response: Response,next:NextFunction) => {

setValue("UIDef",JSON.stringify(swaggerDocumentation));
getValueAsperKey("UIDef").then((data)=>{
response.send(data)
}
).catch((err)=>next(new ErrorHandler(500,err.message)))
})

entityRouter.get('/pageConfig:/tenantId', (request: Request, response: Response) => {
openConnection();

})
entityRouter.post('/pageConfig', (request: Request, response: Response) => {


})
entityRouter.put('/pageConfig:/existingTenantId', (request: Request, response: Response) => {


})