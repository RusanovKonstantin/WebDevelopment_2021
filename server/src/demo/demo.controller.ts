import { Controller, Get } from '@nestjs/common';

@Controller('/api/demo')
export class DemoController {
  constructor() {}

  @Get()
  getHello(): any {
    return {"some": 2, "name": "sdfsdf"};
  }
}
