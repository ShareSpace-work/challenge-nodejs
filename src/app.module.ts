import { Module } from '@nestjs/common';
import { DesksModule } from './desks/desks.module';

@Module({
  imports: [DesksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
