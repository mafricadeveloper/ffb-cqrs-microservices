import { Site } from 'src/sites/entities/site.entity';
// import { CreateBookDto } from 'src/sites/dto/create-book.dto';
// import { UpdateBookDto } from 'src/sites/dto/update-book.dto';
import { sites } from './fixtures/sites';
import { SiteRepository } from '../site-repository';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SiteRepositoryMemoryAdapter extends SiteRepository {
  // private sites = sites;

  constructor(private readonly http: HttpService) {
    super();
  }

  async findOneByName(
    name: string,
    year: string,
    month: string,
  ): Promise<Site> {
    try {
      const res = await lastValueFrom(
        this.http.post(`http://192.168.1.12/site/api/AllSiteYearly`, {
          year: year,
          month: month,
        }),
      );
      const result = res.data.map(function (data) {
        delete data.color;
        delete data.legendFontColor;
        delete data.legendFontSize;
        return data;
      });

      const item = result.find((element) => element.name == name);

      return item;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async findAll(year: string, month: string): Promise<Site[]> {
    try {
      const res = await lastValueFrom(
        this.http.post(`http://192.168.1.12/site/api/AllSiteYearly`, {
          year: year,
          month: month,
        }),
      );
      const result = res.data.map(function (data) {
        delete data.color;
        delete data.legendFontColor;
        delete data.legendFontSize;
        return data;
      });

      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
