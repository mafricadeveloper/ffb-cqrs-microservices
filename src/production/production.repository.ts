import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { IProductionInterface } from './production.interface';
import { ProductionModel } from './production.model';
@Injectable()
export class ProductionRepository {
  constructor(private readonly http: HttpService) {}

  // async getProductionByName(name: string) {
  //   // fetch it from database for example
  //   const item: IProductionInterface = {
  //     name,
  //   };
  //   return new ProductionModel(item);
  // }
  async getAll() {
    return [];
  }

  async getProductionByName(name: string) {
    try {
      const res = await lastValueFrom(
        this.http.post(`http://192.168.1.12/site/api/AllSiteYearly`, {
          year: '2020',
          month: '06',
        }),
      );

      const result = res.data.map(function (data) {
        delete data.color;
        delete data.legendFontColor;
        delete data.legendFontSize;
        return data;
      });

      const item: IProductionInterface = result.find(
        (element) => element.name == name,
      );

      return new ProductionModel(item);
    } catch (err) {
      return err;
    }
  }
}
