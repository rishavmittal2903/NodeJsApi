import RedisClient from "../redisCache/RedisClient"
import ErrorHandler, { ErrorCallback } from "../handler/ExceptionHandler"
import { CONNECTION_NOT_ESTABLISHED, KEY_NOT_EXIST } from "../shared/ErrorMessages";
import { NextFunction } from "express";

const Instance=RedisClient.RedisClientInstance;
const isConnectionEstablished = (next:NextFunction) => {
    if (!Instance.connected)
        next(ErrorCallback(CONNECTION_NOT_ESTABLISHED));
}
export const setValue = (key: string, value: any,next:NextFunction) => {
    isConnectionEstablished(next);
    Instance.set(key, value,(err,reply)=>{
        if(err){next(ErrorCallback(err))};
    });
}
export  const getValueAsperKey =async (key: string,next:NextFunction) => {
    isConnectionEstablished(next);
    if(!Instance.exists(key))
    {
        next(ErrorCallback(KEY_NOT_EXIST));
    }
 return  await new Promise((resolve,reject)=>{
    Instance.get(key,(err,value)=>{
       if(err) reject(err)
       resolve(value);
    });
  })
     
}
export const setValueWithExipryTime = (key: string,expiryTime:number, value: any,next:NextFunction) => {
    isConnectionEstablished(next);
    Instance.setex(key,expiryTime,value,(err,reply)=>{
        if(err){next(ErrorCallback(err))};
    });
}
export const setHashRecord = (hashSetKey:string,key: string, value: any,next:NextFunction) => {
    isConnectionEstablished(next);
    Instance.hset(hashSetKey,key, value,(err,reply)=>{
        if(err){next(ErrorCallback(err))};
    });
}