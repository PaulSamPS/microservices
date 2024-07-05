import { IPost, PostAggregate } from '@lib/post';

export abstract class PostRepository {
  abstract save(post: IPost): Promise<PostAggregate>;
  abstract findOne(id: string): Promise<PostAggregate | null>;
  // TODO исправить
  abstract findAll(): Promise<PostAggregate[]>;
  abstract delete(id: string): Promise<boolean>;
}
