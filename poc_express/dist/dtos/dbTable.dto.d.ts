export declare class columnDatatype {
    columnName: string;
    dataType: string;
    isNullable: boolean;
    isPrimary: boolean;
    precision: number;
}
export declare class DBTableDto {
    dbName: string;
    schemaName: string;
    tableName: string;
    columnTypes: columnDatatype[];
}
