import SqlConnection from "./SqlConnection"
import { MysqlError } from "mysql";
import { ErrorCallback } from "../Handlers/ExceptionHandler";

export const openConnection = () => {
  
    SqlConnection.SqlConnectionInstance.connect((err: MysqlError) => {
        ErrorCallback(err);
    });
}
export const closeConnection = () => {
    let isClosed: boolean = true;
    SqlConnection.SqlConnectionInstance.end((err) => {
        ErrorCallback(err);
    });
}
export const destroyConnection = () => {
    SqlConnection.SqlConnectionInstance.destroy();
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