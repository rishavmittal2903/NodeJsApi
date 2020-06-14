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
    public static get SqlClient():mysql.Connection
    {
        if (!SqlConnection._instance) {
            SqlConnection._instance = new SqlConnection();
            const port:number=process.env.sqlPort?parseInt(process.env.sqlPort):3306;
            SqlConnection._instance._sqlClient=mysql.createConnection({
                host:process.env.sqlHost,
                user:process.env.sqlUser,
                password: process.env.sqlPassword,
                //database: process.env.sqlDB,
                port
                
              
            })
        }
        return SqlConnection._instance._sqlClient;
    }
}
export default SqlConnection;