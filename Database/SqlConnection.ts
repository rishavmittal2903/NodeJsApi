import mysql from "mysql" 
import {config} from "dotenv";
const environmentConfig=config();
class SqlConnection
{
    private static _instance: SqlConnection;
    private _sqlClient:any;
    private constructor()
    {
    }
    public static get SqlClient()
    {
        if (!SqlConnection._instance) {
            SqlConnection._instance = new SqlConnection();
        }
        return SqlConnection._instance;
    }
    public get createConnection():mysql.Connection{
        const port:number=process.env.sqlPort?parseInt(process.env.sqlPort):0;
        SqlConnection._instance._sqlClient=mysql.createConnection({
            host:process.env.sqlHostname,
            user: process.env.username,
            password: process.env.password,
            database: process.env.sqlDB,
            port
        })
        return SqlConnection._instance._sqlClient;
    }
    public get sqlInstance():mysql.Connection{
        return SqlConnection._instance._sqlClient;
    }
}
export default SqlConnection;