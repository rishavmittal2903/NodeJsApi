import SqlConnection from "./SqlConnection"
import { MysqlError } from "mysql";
import { ErrorCallback } from "../handler/ExceptionHandler";

const sqlInstance=SqlConnection.SqlClient;
export const openConnection = () => {
  console.log("reached");
  sqlInstance.connect((err: MysqlError) => {
        ErrorCallback(err);
console.log("connected to database")
    });
}
export const closeConnection = () => {
    let isClosed: boolean = true;
    sqlInstance.end((err) => {
        ErrorCallback(err);
    });
}
export const destroyConnection = () => {
    sqlInstance.destroy();
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