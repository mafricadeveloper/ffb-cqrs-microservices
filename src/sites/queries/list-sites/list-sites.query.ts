import { IQuery } from '@nestjs/cqrs';

export class ListSitesQuery implements IQuery {
  constructor(public year: string, public month: string) {}
}
