import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ReserveDeskCommand } from '../../domain/command/reserve-desk';

@CommandHandler(ReserveDeskCommand)
export class ReserveDeskHandler implements ICommandHandler<ReserveDeskCommand> {
  async execute(command: ReserveDeskCommand) {
    // do stuff
  }
}
