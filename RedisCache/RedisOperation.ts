import RedisClient from "../RedisCache/RedisClient"
import ErrorHandler, { ErrorCallback } from "../Handlers/ExceptionHandler"
import { CONNECTION_NOT_ESTABLISHED, KEY_NOT_EXIST } from "../Shared/ErrorMessages";

const Instance=RedisClient.RedisClientInstance.redisInstance;
const isConnectionEstablished = () => {
    if (!Instance.connected)
        throw new ErrorHandler(500, CONNECTION_NOT_ESTABLISHED);
}
export const setValue = (key: string, value: any) => {
    isConnectionEstablished();
    Instance.set(key, value,(err,reply)=>{
        ErrorCallback(err);
    });
}
export  const getValueAsperKey =async (key: string) => {
    isConnectionEstablished();
    if(!Instance.exists(key))
    {
        throw new ErrorHandler(500, KEY_NOT_EXIST);
    }
 return  await new Promise((resolve,reject)=>{
    Instance.get(key,(err,value)=>{
       if(err) reject(err)
       resolve(value);
    });
  })
     
}
export const setValueWithExipryTime = (key: string,expiryTime:number, value: any) => {
    isConnectionEstablished();
    Instance.setex(key,expiryTime,value,(err,reply)=>{
        ErrorCallback(err);
    });
}
export const setHashRecord = (hashSetKey:string,key: string, value: any) => {
    isConnectionEstablished();
    Instance.hset(hashSetKey,key, value,(err,reply)=>{
        ErrorCallback(err);
    });
}