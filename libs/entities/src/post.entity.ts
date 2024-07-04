import { Post } from '@prisma/client';

export class PostEntity implements Post {
  id: string;
  title: string;
  message: string;
  authorId: string;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}
