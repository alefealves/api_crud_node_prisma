import { IPostRepository } from "../interfaces/IPostRepository";

class CreatePostService {
  constructor(
    private PostRepository: IPostRepository
  ){}

  public async execute(title: string, content: string, useId: number){
    const post = await this.PostRepository.create(title, content, useId);
    return post;
  }
}

export { CreatePostService }