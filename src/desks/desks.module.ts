import { Module } from '@nestjs/common';
import { ReserveDeskHandler } from './application/command/reserve-desk.handler';
import { DesksController } from './infrastructure/nest/controller/desks';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  controllers: [DesksController],
  providers: [ReserveDeskHandler],
})
export class DesksModule {}
