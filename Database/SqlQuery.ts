import SqlConnection from "./SqlConnection"
import { MysqlError } from "mysql";
import { ErrorCallback } from "../Handlers/ExceptionHandler";

export const openConnection = () => {
  console.log("reached");
    SqlConnection.SqlClient.connect((err: MysqlError) => {
        ErrorCallback(err);
console.log("connected to database")
    });
}
export const closeConnection = () => {
    let isClosed: boolean = true;
    SqlConnection.SqlClient.end((err) => {
        ErrorCallback(err);
    });
}
export const destroyConnection = () => {
    SqlConnection.SqlClient.destroy();
}
export const insertPageConfig = () => {
    try {
        openConnection();
        /**
         * query
         * 
         */

    }
    catch (err) {
        ErrorCallback(err);
    }
    finally {
        closeConnection()
    }
}
export const getPageConfig = (tenantId:string) => {
    try {
        openConnection();
        /**
         * query
         * 
         */

    }
    catch (err) {
        ErrorCallback(err);
    }
    finally {
        closeConnection()
    }
}