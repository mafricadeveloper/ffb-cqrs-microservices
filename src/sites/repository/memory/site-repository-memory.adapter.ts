import { Site } from 'src/sites/entities/site.entity';
import { SiteRepository } from '../site-repository';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, Observable } from 'rxjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SiteRepositoryMemoryAdapter extends SiteRepository {
  constructor(private readonly http: HttpService) {
    super();
  }

  async findAll(year: string, month: string): Promise<Observable<Site>> {
    try {
      const res = await lastValueFrom(
        this.http.post(
          `http://localhost:3002/graphql`,
          {
            query: `
                query{ sites(year: "${year}", month: "${month}"){
                  name,
                  production
                }
              }
        `,
          },
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            responseType: 'json',
          },
        ),
      );
      return res.data;
    } catch (err) {
      return err;
    }
  }
}
