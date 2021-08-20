import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { QueryCommand } from './query.command';
import { ProductionRepository } from '../production/production.repository';
@CommandHandler(QueryCommand)
export class FFBQueryHandler implements ICommandHandler<QueryCommand> {
  constructor(
    private readonly productionRepository: ProductionRepository,
    private readonly publisher: EventPublisher,
  ) {}
  async execute(command: QueryCommand) {
    const { queryTransactionGUID, queryName } = command;
    const production = this.publisher.mergeObjectContext(
      await this.productionRepository.getProductionByName(queryName),
    );

    console.log(
      `query id = ${queryTransactionGUID} - ${production.production.name} with production ${production.production.production}`,
    );

    // production.queryOnProduction(queryTransactionGUID, queryName);
    // production.commit();
  }
}
