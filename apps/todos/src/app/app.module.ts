import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosService } from './todo/todo.service';
import { AuthModule } from '@monorepo-with-nx/auth';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, TodosService],
})
export class AppModule {}
