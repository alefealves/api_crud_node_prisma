import { Post } from "@prisma/client";
import { IPostRepository } from "../interfaces/IPostRepository";
import { prisma } from "../database";

class PostRepository implements IPostRepository {
  public async create(title: string, content: string, userId: number): Promise<Post> {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        userId
      }
    });
    return post;
  }
}

export {
  PostRepository
}