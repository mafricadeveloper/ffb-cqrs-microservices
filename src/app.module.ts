import { Module } from '@nestjs/common';
// import { CqrsModule } from '@nestjs/cqrs';
// import { AppController } from './app.controller';
// import { ItemRepository } from './item/item.repository';
// import { OrderHandler } from './order/order.handler';
// import { FFBQueryHandler } from './query/query.handler';
// import { OrderSaga } from './order/order.saga';
// import { QuerySaga } from './query/query.saga';
// import { ProductionRepository } from './production/production.repository';
// import { HttpModule } from '@nestjs/axios';
import { SitesModule } from './sites/sites.module';

@Module({
  imports: [SitesModule],
})
export class AppModule {}
