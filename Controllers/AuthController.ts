import { Router, Request, Response, NextFunction } from "express"
import { httpRequest } from "../client/HttpClient";
import { tokenUrl } from "../shared/ConfigUrl";
import { Enums } from "../shared/Enums";
import { getAuthorizationHeader } from "../utils/ConfigWrapper";
import ErrorHandler from "../handler/ExceptionHandler";
import { INTERNAL_SERVER_ERROR } from "../shared/ErrorMessages";
export const authRouter = Router();
authRouter.get('/getToken', (request: Request, response: Response,next:NextFunction) => {
    const configHeader = getAuthorizationHeader()
    httpRequest(tokenUrl, Enums.GET, undefined, configHeader).then((res) => {
        response.send(res.data);
    })
        .catch((error) => {  next(new ErrorHandler(500,INTERNAL_SERVER_ERROR)) })
})
