import SqlConnection from "./SqlConnection"
import { MysqlError } from "mysql";
import { ErrorCallback } from "../handler/ExceptionHandler";
import { NextFunction } from "express";
const sqlInstance = SqlConnection.SqlClient;

const asyncQuery = (query: string, next: NextFunction) => {
    openConnection(next);
    return new Promise((resolve, reject) => {
        sqlInstance.query(query, (err, result) => {
            if (err) { reject(err) }
            else { resolve(result) }
        })
    })
}


export const openConnection = (next: NextFunction) => {
    sqlInstance.connect((err: MysqlError) => {
        if (err) {next(ErrorCallback(err));}
        console.log("connected to database")
    });
}
export const closeConnection = (next: NextFunction) => {
    sqlInstance.end((err) => {
        if (err) { next(ErrorCallback(err)) };
        console.log("disconnected to database")
    });
}
export const destroyConnection = () => {
    sqlInstance.destroy();
}
export const createDatabase = (next: NextFunction) => {
    const query = "CREATE DATABASE UIDefinationTestDB1";
    return asyncQuery(query, next)
}
export const insertPageConfig = (next: NextFunction) => {
    const query = "";
    return asyncQuery(query, next)
}
export const getPageConfig = (tenantId: string, next: NextFunction) => {
    const query = "";
    return asyncQuery(query, next)
}