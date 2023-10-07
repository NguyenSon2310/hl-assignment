import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from './content.entity';
import { IsNull, Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Content)
    private readonly contentRepository: Repository<Content>,
  ) {}
  async getContent() {
    const content = await this.contentRepository.findOne({
      where: { isLike: IsNull() },
    });
    if (!content) {
      return {
        id: null,
        content: "That's all the jokes for today! Come back another day!",
      };
    }
    return content;
  }

  async reaction(id: number, isLike: boolean) {
    await this.contentRepository.update({ id }, { isLike });
  }

  async clearReaction() {
    await this.contentRepository.update({}, { isLike: null });
  }
}
