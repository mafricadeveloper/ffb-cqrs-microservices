import { Module } from '@nestjs/common';
import { SitesController } from './sites.controller';
import { IdGenerator, UuidGenerator } from 'src/shared';
// import { CommandHandlers } from './commands';
import { QueryHandlers } from './queries';
import { CqrsModule } from '@nestjs/cqrs';
import { SiteRepositoryMemoryAdapter } from './repository/memory/site-repository-memory.adapter';
import { SiteRepository } from './repository/site-repository';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [CqrsModule, HttpModule],
  controllers: [SitesController],
  providers: [
    {
      provide: IdGenerator,
      useClass: UuidGenerator,
    },
    {
      provide: SiteRepository,
      useClass: SiteRepositoryMemoryAdapter,
    },
    // ...CommandHandlers,
    ...QueryHandlers,
  ],
})
export class SitesModule {}
