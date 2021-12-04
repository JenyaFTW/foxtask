import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
