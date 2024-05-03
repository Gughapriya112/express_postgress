import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsArray, ValidateNested, isBoolean, IsBoolean, IsNumber } from 'class-validator';

export class columnDatatype {
  @IsString()
  @IsNotEmpty()
  columnName: string;
  @IsString()
  @IsNotEmpty()
  dataType: string;
  @IsBoolean()
  @IsNotEmpty()
  isNullable: boolean;
  @IsBoolean()
  @IsNotEmpty()
  isPrimary: boolean;
  @IsNumber()
  precision: number;
}

export class DBTableDto {
  @IsString()
  @IsNotEmpty()
  public dbName: string;
  @IsString()
  @IsNotEmpty()
  public schemaName: string;
  @IsString()
  @IsNotEmpty()
  public tableName: string;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => columnDatatype)
  columnTypes: columnDatatype[];
}
