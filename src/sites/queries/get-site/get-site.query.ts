import { IQuery } from '@nestjs/cqrs';

export class GetSiteQuery implements IQuery {
  constructor(public name: string, public year: string, public month: string) {}
}
