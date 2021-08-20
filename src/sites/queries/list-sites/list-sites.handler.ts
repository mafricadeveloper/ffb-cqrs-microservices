import { Site } from 'src/sites/entities/site.entity';
import { ListSitesQuery } from './list-sites.query';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SiteRepository } from 'src/sites/repository/site-repository';

@QueryHandler(ListSitesQuery)
export class ListSitesHandler implements IQueryHandler<ListSitesQuery> {
  constructor(private siteRepository: SiteRepository) {}

  async execute(query: ListSitesQuery): Promise<Site[]> {
    return this.siteRepository.findAll(query.year, query.month);
  }
}
