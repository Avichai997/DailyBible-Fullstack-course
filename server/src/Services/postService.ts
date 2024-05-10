/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  bulkUpdate,
  createOne,
  deleteMany,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from '@Controllers/servicesFactory';
import Post from '@Models/postModel';
import { Request } from 'express';

export const getAllPostsService = (req: Request) => {
  const posts = getAll(Post, req);

  return posts;
};
export const getPostService = (req: Request) => {
  const post = getOne(Post, req);

  return post;
};
export const createPostService = (req: Request) => {
  const post = createOne(Post, req);

  return post;
};
export const updatePostService = (req: Request) => {
  const post = updateOne(Post, req);

  return post;
};
export const bulkUpdatePostService = (req: Request) => {
  const post = bulkUpdate(Post, req);

  return post;
};
export const deletePostService = (req: Request) => {
  const post = deleteOne(Post, req);

  return post;
};
export const deleteManyPostService = () => {
  const post = deleteMany(Post);

  return post;
};
