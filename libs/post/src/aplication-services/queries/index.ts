import { IQueryHandler } from '@nestjs/cqrs';
import { Type } from '@nestjs/common';
import { GetPostQueryHandler } from './get-post/get-post.query.handler';
import { GetPostsQueryHandler } from './get-posts/get-post.query.handler';

export const POST_QUERIES_HANDLERS: Type<IQueryHandler>[] = [
  GetPostQueryHandler,
  GetPostsQueryHandler,
];
