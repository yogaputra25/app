import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('send')
  async sendMessageToUserB(@Body('message') message: string): Promise<string> {
    this.messageService.send(message);
    return 'success';
  }

  @Get('/call')
  public async call() {
    await this.messageService.cekdata();
  }
}
