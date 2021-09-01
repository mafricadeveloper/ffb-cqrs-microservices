import { Module } from '@nestjs/common';
import { SitesModule } from './sites/sites.module';

@Module({
  imports: [SitesModule],
})
export class AppModule {}
