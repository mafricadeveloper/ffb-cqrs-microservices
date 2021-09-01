import { Controller } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ListSitesQuery } from './queries/list-sites/list-sites.query';

import { sites } from './repository/memory/fixtures/sites';

import { MessagePattern } from '@nestjs/microservices';

@Controller('sites')
export class SitesController {
  constructor(private readonly queryBus: QueryBus) {}

  @MessagePattern({ cmd: 'QUERY' })
  findAll(data: any) {
    return this.queryBus.execute(new ListSitesQuery(data.year, data.month));
  }
}
