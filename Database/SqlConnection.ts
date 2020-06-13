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
        //{host: "mysql-test-dev.mysql.database.azure.com", user: "mysqltest@mysql-test-dev", password: "mysqldev@123", database: {your_database}, port: 3306, ssl:true}
        if (!SqlConnection._instance) {
            SqlConnection._instance = new SqlConnection();
            //const port:number=process.env.sqlPort?parseInt(process.env.sqlPort):0;
            SqlConnection._instance._sqlClient=mysql.createConnection({
                host:"mysql-test-dev.mysql.database.azure.com",
                user:"mysqltest@mysql-test-dev",
                password: "mysqldev@123",
                // database: process.env.sqlDB,
                port:3306,
                
              
            })
        }

        return SqlConnection._instance._sqlClient;
    }
}
export default SqlConnection;