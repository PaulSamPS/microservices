import { IEventHandler } from '@nestjs/cqrs';
import { Type } from '@nestjs/common';

export const POST_EVENTS_HANDLERS: Type<IEventHandler>[] = [];
