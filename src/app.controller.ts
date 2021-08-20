import { Controller, Get } from '@nestjs/common';
import { CommandBus, EventBus, QueryBus } from '@nestjs/cqrs';
import * as uuid from 'uuid';

import { OrderEvent } from './order/order.events';
import { QueryEvent } from './query/query.events';

@Controller()
export class AppController {
  constructor(
    private readonly eventBus: EventBus,
    private queryBus: QueryBus,
    private commandBus: CommandBus,
  ) {}

  @Get('query')
  async query(): Promise<object> {
    const queryTransactionGUID = uuid.v4();
    return this.queryBus.execute(
      new QueryEvent(queryTransactionGUID, 'Jobenar'),
    );
    // return { status: 'QUERY' };
  }
}
