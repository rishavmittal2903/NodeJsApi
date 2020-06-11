import { Router, Request, Response, NextFunction } from "express"
import { httpRequest } from "../Client/HttpClient";
import { tokenUrl } from "../Shared/ConfigUrl";
import { Enums } from "../Shared/Enums";
import { getAuthorizationHeader } from "../Utils/ConfigWrapper";
import ErrorHandler from "../Handlers/ExceptionHandler";
import { INTERNAL_SERVER_ERROR } from "../Shared/ErrorMessages";
export const authRouter = Router();
authRouter.get('/getToken', (request: Request, response: Response,next:NextFunction) => {
    const configHeader = getAuthorizationHeader()
    httpRequest(tokenUrl, Enums.GET, undefined, configHeader).then((res) => {
        response.send(res.data);
    })
        .catch((error) => {  next(new ErrorHandler(500,INTERNAL_SERVER_ERROR)) })
})
