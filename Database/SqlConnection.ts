import mysql from "mysql" 
import {config} from "dotenv";
const environmentConfig=config();
class SqlConnection
{
    private static _instance: SqlConnection;
    private _sqlConnection:any;
    private constructor()
    {
    }

    public static get SqlConnectionInstance():mysql.Connection
    {
        if (!SqlConnection._instance) {
            SqlConnection._instance = new SqlConnection();
            SqlConnection._instance._sqlConnection=mysql.createConnection({
                host:process.env.sqlHostname,
                user: process.env.user,
                password: process.env.password,
                database: process.env.database
            })
        }

        return SqlConnection._instance._sqlConnection;
    }
    // public static get SqlConnectionInstance():mysql.Connection{
    //     return SqlConnection._instance._sqlConnection;
    // }
}
export default SqlConnection;