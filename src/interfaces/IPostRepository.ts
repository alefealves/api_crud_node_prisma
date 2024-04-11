import { Post } from "@prisma/client";

export interface IPostRepository {
  create(title: string, content: string, userId: number): Promise<Post>;
}