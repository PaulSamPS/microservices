import { IPost } from '@lib/post/domain/post.interface';
import { AggregateRoot } from '@nestjs/cqrs';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { PostServices } from '@lib/post/domain/services';

export class PostAggregate extends PostServices implements IPost {
  id: string = randomStringGenerator();
  title: string;
  authorId: string;
  message: string;
  isPublished = false;
  createdAt = new Date().toISOString();
  updatedAt = new Date().toISOString();

  private constructor() {
    super();
  }

  static create(post: Partial<IPost>) {
    const _post = new PostAggregate();
    Object.assign(_post, post);

    return _post;
  }
}
