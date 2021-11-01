import { Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ReserveDeskCommand } from '../../../domain/command/reserve-desk';

@Controller('desks')
export class DesksController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('reserve')
  reserve() {
    this.commandBus.execute(new ReserveDeskCommand());
  }
}
