import { IQueryHandler } from '@nestjs/cqrs';
import { Type } from '@nestjs/common';

export const POST_QUERIES_HANDLERS: Type<IQueryHandler>[] = [];
