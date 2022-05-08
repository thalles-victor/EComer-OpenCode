import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  hello() {
    return 'You can access api wtih endpoint /graphql';
  }
}
