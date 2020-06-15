import { Router, Request, Response, NextFunction } from "express"
import { ErrorCallback } from "../handler/ExceptionHandler";
import {createDatabase } from "../database/SqlQuery";
export const configRouter = Router();

configRouter.get('/pageConfig/:tenantId', (request: Request, response: Response,next:NextFunction) => {
 createDatabase(next,request.params.tenantId).then((res)=>response.send(res)).catch((err)=>next(ErrorCallback(err)));
})

configRouter.post('/pageConfig', (request: Request, response: Response,next:NextFunction) => {

})

configRouter.put('/pageConfig/:existingTenantId', (request: Request, response: Response,next:NextFunction) => {
    response.sendStatus(200);
})