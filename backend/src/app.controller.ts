import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async root() {
    const result = await this.appService.getContent();
    return { ...result };
  }

  @Post()
  async reaction(@Body('id') id: number, @Body('isLike') isLike: boolean) {
    await this.appService.reaction(id, isLike);
  }

  @Post('/clear')
  async clearReaction() {
    await this.appService.clearReaction();
  }
}
