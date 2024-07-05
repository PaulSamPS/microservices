import { IPost, PostAggregate } from '@lib/post';
import { PaginationDto } from '@lib/shared';

export abstract class PostRepository {
  abstract save(post: IPost): Promise<PostAggregate>;
  abstract findOne(id: string): Promise<PostAggregate | null>;
  // TODO исправить ответ
  abstract findAll(pagination: PaginationDto): Promise<PostAggregate[]>;
  abstract delete(id: string): Promise<boolean>;
}
