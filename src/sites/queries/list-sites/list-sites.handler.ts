import { Site } from 'src/sites/entities/site.entity';
import { ListSitesQuery } from './list-sites.query';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SiteRepository } from 'src/sites/repository/site-repository';
import { Observable } from 'rxjs';

@QueryHandler(ListSitesQuery)
export class ListSitesHandler implements IQueryHandler<ListSitesQuery> {
  constructor(private siteRepository: SiteRepository) {}

  async execute(query: ListSitesQuery): Promise<Observable<Site[]>> {
    return this.siteRepository.findAll(query.year, query.month);
  }
}
