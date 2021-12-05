import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { HelperModule } from './helper/helper.module';
import { TableModule } from './table/table.module';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, TaskModule, HelperModule, AuthModule, TableModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
