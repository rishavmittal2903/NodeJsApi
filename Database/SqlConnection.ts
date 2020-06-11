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
            const port:number=process.env.sqlPort?parseInt(process.env.sqlPort):0;
            SqlConnection._instance._sqlClient=mysql.createConnection({
                host:process.env.sqlHostname,
                user: process.env.username,
                password: process.env.password,
                database: process.env.sqlDB,
                port
            })
        }

        return SqlConnection._instance._sqlClient;
    }
}
export default SqlConnection;