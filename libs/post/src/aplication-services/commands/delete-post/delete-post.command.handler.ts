import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeletePostCommand } from '@lib/post/aplication-services/commands/delete-post/delete-post.command';
import { PostRepository } from '@lib/post/providers';
import { PostAggregate } from '@lib/post';
import { BadRequestException, Logger } from '@nestjs/common';

@CommandHandler(DeletePostCommand)
export class DeletePostCommandHandler
  implements ICommandHandler<DeletePostCommand, boolean>
{
  private readonly logger = new Logger(DeletePostCommandHandler.name);
  constructor(private readonly postRepository: PostRepository) {}

  async execute({ id }: DeletePostCommand): Promise<boolean> {
    const existPost = await this.postRepository.findOne(id).catch((err) => {
      this.logger.error(err);
      return null as PostAggregate;
    });

    if (!existPost) {
      throw new BadRequestException(`Пост с id: ${id} - не найден`);
    }

    const isPostDeleted = await this.postRepository.delete(id).catch((err) => {
      throw new BadRequestException('Возникла ошибка при удалении поста');
    });

    return isPostDeleted;
  }
}
