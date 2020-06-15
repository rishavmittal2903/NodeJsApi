import SqlConnection from "./SqlConnection"
import { NextFunction } from "express";
const sqlInstance = SqlConnection.SqlClient;

const asyncQuery = (query: string, next: NextFunction) => {
    return new Promise((resolve, reject) => {
        /* This statement automatically get the sql connection and release back to thread pool */
        sqlInstance.getConnection((err, connection) => {
            if (err) { reject(err) }
            else {
                connection.query(query, (err, result) => {
                    connection.release();
                    if (err) { reject(err) }
                    else { resolve(result) }
                })
            }
        })

    })
}

export const createDatabase = (next: NextFunction, database: string) => {
    const query = "CREATE DATABASE " + database;
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