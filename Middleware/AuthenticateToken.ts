import {Request,Response,NextFunction} from "express"
import { Enums } from "../shared/Enums";
import { UNAUTHORIZED } from "../shared/ErrorMessages";
import { getExpiryTime } from "./DecodeToken";
export const AuthenticateToken=(request:Request,response:Response,next:NextFunction)=>
{
const bearerToken=request.headers.authorization?.replace(Enums.BEARER,"");
if(!bearerToken)
{
    response.status(401).json({
        errorMessage:UNAUTHORIZED
    });
}
else if(getExpiryTime(bearerToken)< Date.now()/1000)
{
response.status(401).json({
    errorMessage:UNAUTHORIZED
});
}
else
{
    next();
}
}