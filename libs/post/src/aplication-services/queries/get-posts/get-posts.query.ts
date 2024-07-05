import { PaginationDto } from '@lib/shared';

export class GetPostsQuery {
  constructor(public readonly pagination: PaginationDto) {}
}
