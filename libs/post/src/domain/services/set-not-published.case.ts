import { IPost } from '@lib/post';

export interface ISetNotPublished {
  setNotPublished(): void;
}

export const SET_NOT_PUBLISHED = function (this: IPost) {
  this.isPublished = false;
};
