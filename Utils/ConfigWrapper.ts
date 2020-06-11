import {config} from "dotenv";
const environmentConfig=config();
export const getHeaders=(config:object|undefined)=>{
        const defaultHeaders: any = {
          "Accept": 'application/json, text/plain',
          'Content-type': 'application/json',
        };
 return Object.assign(defaultHeaders, config);
}
export const getAuthorizationHeader=()=>{
  const authorizationHeader = { "authorization": process.env.accessToken}
  return authorizationHeader;
}