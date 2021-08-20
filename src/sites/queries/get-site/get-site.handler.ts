import { Site } from 'src/sites/entities/site.entity';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetSiteQuery } from './get-site.query';
import { SiteRepository } from 'src/sites/repository/site-repository';

@QueryHandler(GetSiteQuery)
export class GetSiteHandler implements IQueryHandler<GetSiteQuery> {
  constructor(private siteRepository: SiteRepository) {}

  async execute(query: GetSiteQuery): Promise<Site> {
    return this.siteRepository.findOneByName(
      query.name,
      query.year,
      query.month,
    );
  }
}
