import { AggregateRoot } from '@nestjs/cqrs';
import { IProductionInterface } from './production.interface';
import { QueryEventSuccess, QueryEventFail } from '../query/query.events';
export class ProductionModel extends AggregateRoot {
  constructor(private readonly production: IProductionInterface) {
    super();
  }
  queryOnProduction(queryTransactionGUID: string, name: string) {
    // validation and etc.
    try {
      // business logic
      // upon successful order, dispatch new event
      this.apply(
        new QueryEventSuccess(queryTransactionGUID, this.production.name),
      );
    } catch (e) {
      // dispatch order event fail action
      this.apply(new QueryEventFail(queryTransactionGUID, e));
    }
  }
}
