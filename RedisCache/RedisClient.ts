import redis,{RedisClient as Client} from "redis" 
import {config} from "dotenv";
const environmentConfig=config();
class RedisClient
{
    private static _instance: RedisClient;
    private _redisClient:any;
    private constructor()
    {
    }
    public static get RedisClientInstance():Client
    {
        if (!RedisClient._instance) {
            RedisClient._instance = new RedisClient();
            const port:number=process.env.redisPort?parseInt(process.env.redisPort):6379;
            RedisClient._instance._redisClient=redis.createClient({
                host:process.env.redisHost,
                port
            })
        }
        
        return RedisClient._instance._redisClient;
    }
}
export default RedisClient;