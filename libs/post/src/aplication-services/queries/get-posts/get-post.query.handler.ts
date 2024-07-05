import { QueryHandler } from '@nestjs/cqrs';
import { GetPostsQuery } from '@lib/post/aplication-services/queries/get-posts/get-posts.query';
import { PostAggregate } from '@lib/post';
import { PostRepository } from '@lib/post/providers';
import { Logger } from '@nestjs/common';

@QueryHandler(GetPostsQuery)
export class GetPostsQueryHandler
  implements QueryHandler<GetPostsQuery, PostAggregate[]>
{
  private readonly logger = new Logger(GetPostsQueryHandler.name);
  constructor(private readonly postRepository: PostRepository) {}

  async execute(query: GetPostsQuery): Promise<PostAggregate[]> {
    const posts = await this.postRepository.findAll().catch((err) => {
      this.logger.error(err);
      return [] as PostAggregate[];
    });

    return posts;
  }
}
