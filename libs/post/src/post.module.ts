import { Module, OnModuleInit } from '@nestjs/common';
import { CommandBus, CqrsModule, EventBus, QueryBus } from '@nestjs/cqrs';
import { PrismaModule } from '@lib/providers/prisma/prisma.module';
import { POST_COMMANDS_HANDLERS } from '@lib/post/aplication-services/commands';
import { POST_EVENTS_HANDLERS } from '@lib/post/aplication-services/events';
import { POST_QUERIES_HANDLERS } from '@lib/post/aplication-services/queries';
import { PostFacade } from '@lib/post/aplication-services';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [
    ...POST_COMMANDS_HANDLERS,
    ...POST_EVENTS_HANDLERS,
    ...POST_QUERIES_HANDLERS,
  ],
  exports: [PostFacade],
})
export class PostModule implements OnModuleInit {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly eventBus: EventBus,
  ) {}

  onModuleInit() {
    this.commandBus.register(POST_COMMANDS_HANDLERS);
    this.queryBus.register(POST_QUERIES_HANDLERS);
    this.eventBus.register(POST_EVENTS_HANDLERS);
  }
}
