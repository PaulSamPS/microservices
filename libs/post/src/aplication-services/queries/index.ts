import { IQueryHandler } from '@nestjs/cqrs';
import { Type } from '@nestjs/common';
import { GetPostQueryHandler } from './get-post/get-post.query.handler';
import { GetPostsQueryHandler } from './get-posts/get-post.query.handler';

export const POST_QUERIES_HANDLERS: Type<IQueryHandler>[] = [
  GetPostQueryHandler,
  GetPostsQueryHandler,
];

// Query
export * from './get-post/get-post.query';
export * from './get-posts/get-posts.query';

// Handlers
export * from './get-post/get-post.query.handler';
export * from './get-posts/get-post.query.handler';
