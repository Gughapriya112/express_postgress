import { DBTableDto } from '@/dtos/dbTable.dto';
import { CreateDBTable } from '../services/createDBTable.service';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

export class CreateDBTableController {

  public create = Container.get(CreateDBTable);

  public createDBTable = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const temp: DBTableDto = req.body;
      // console.log("Request Body", temp)
      const tableData = await this.create.createDBTable(temp);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: tableData, message: "Created" });
    } catch (e) {
      console.log("error", e)
      next(e)
    }
  }
}
