import { IPost } from '@lib/post';

export interface ISetPublished {
  setPublished(): void;
}

export const SET_PUBLISHED = function (this: IPost) {
  this.isPublished = true;
};
