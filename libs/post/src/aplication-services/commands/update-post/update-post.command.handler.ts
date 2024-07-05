import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdatePostCommand } from '@lib/post/aplication-services/commands/update-post/update-post.command';
import { PostAggregate } from '@lib/post';
import { PostRepository } from '@lib/post/providers';
import { BadRequestException, Logger } from '@nestjs/common';

@CommandHandler(UpdatePostCommand)
export class UpdatePostCommandHandler
  implements ICommandHandler<UpdatePostCommand, PostAggregate>
{
  private readonly logger = new Logger(UpdatePostCommandHandler.name);
  constructor(private readonly postRepository: PostRepository) {}

  async execute({ post }: UpdatePostCommand): Promise<PostAggregate> {
    const existPost = await this.postRepository
      .findOne(post.id)
      .catch((err) => {
        this.logger.error(err);
        return null as PostAggregate;
      });

    if (!existPost) {
      throw new BadRequestException(`Пост с id: ${post.id} - не найден`);
    }

    Object.assign(existPost, post);
    const postAggregate = PostAggregate.create(existPost);
    await this.postRepository.save(postAggregate);

    return postAggregate;
  }
}
