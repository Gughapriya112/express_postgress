# This project creates postgres database, schema and tables.
# DB.ts - Database connection and query execution.
# Clone the project, npm i and provide "npm run start:dev" to start the application.
# API URL details:
Method - Post
URL - http://localhost:3010/createDBTable
payload:
{
    "dbName": "eSense1", //database name to be created
    "tableName": "user1", //table name to be created
    "schemaName":"testSchema", //schema name to be created
    "columnTypes": [
        {
            "columnName": "userID",
            "dataType": "bigint",
            "isNullable": false,
            "isPrimary": true,
            "precision":""
        },
        {
            "columnName": "userName",
            "dataType": "character varying",
            "isNullable": true,
            "isPrimary": false,
            "precision":"220"
        },
        {
            "columnName": "age",
            "dataType": "bigint",
            "isNullable": true,
            "isPrimary": false,
            "precision":""
        },
        {
            "columnName": "phoneNumber",
            "dataType": "bigint",
            "isNullable": true,
            "isPrimary": false,
            "precision":""
        }
    ]
} //Columns for the tables.
