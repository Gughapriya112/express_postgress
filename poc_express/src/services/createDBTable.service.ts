import { Service } from 'typedi';
import { Client } from 'pg';
import { DBTableDto } from '../dtos/dbTable.dto';
import dbConfig from '../db/db';


@Service()
export class CreateDBTable {

    public async createDBTable(reqdata: DBTableDto): Promise<any> {
        try {

            //DB creation 
            const isDbQuery = `SELECT datname FROM pg_catalog.pg_database WHERE datname = '${reqdata.dbName}'`;
            const isDBResponse = await dbConfig(null, isDbQuery)

            if (isDBResponse.rowCount === 0) {
                const createDbQuery = `CREATE DATABASE "${reqdata.dbName}";`;
                const createDbResponse = await dbConfig('', createDbQuery)
                console.log(`created database ${reqdata.dbName}.`);
            } else {
                console.log(`${reqdata.dbName} database already exists.`);
            }

            //Schema creation
            const isSchemaQuery = `select exists (select * from pg_catalog.pg_namespace where nspname = '${reqdata.schemaName}');`;
            const isSchemaResponse = await dbConfig(reqdata.dbName, isSchemaQuery)
            if (isSchemaResponse.rowCount === 0) {
                const createSchemaQuery = `CREATE SCHEMA "${reqdata.schemaName}";`;
                const createSchemaResponse = await dbConfig(reqdata.dbName, createSchemaQuery)
                console.log(`created schema ${reqdata.schemaName}.`);
            } else {
                console.log(`${reqdata.schemaName} Schema already exists.`);
            }

            //table creation
            let fields = '';
            reqdata.columnTypes.map((column) => {
                let temp = '';
                let prim = '';

                if (column.isNullable == true) {
                    temp = "NULL";
                } else if (column.isPrimary == true && column.isNullable == false) {
                    temp = "PRIMARY KEY NOT NULL"
                } else {
                    temp = "NOT NULL";
                }
                if (column.precision) {
                    prim = `(${column.precision})`
                }
                fields += column.columnName + ' ' + column.dataType + prim + ' ' + temp + ',';
            })
            fields = fields.substring(0, fields.length - 1);
            const createTableQuery = `CREATE TABLE   "${reqdata.schemaName}".${reqdata.tableName}(${fields});`;
            const table = await dbConfig(reqdata.dbName, createTableQuery);

            if (table.rowCount == null) {
                console.log(`created table ${reqdata.tableName}.`);
            } else {
                console.log(`${reqdata.tableName} table already exists.`);
            }
            return "Created";
        } catch (e) {
            console.log(e);
        }
    }
}

