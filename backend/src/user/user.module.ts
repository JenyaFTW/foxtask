import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.controller";
import { User } from "./user.entity";
import { AuthService, UserService } from "./user.service";

@Module({
    imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
        secret: "SECRET",
        signOptions: {
      expiresIn: "24h"
    }
    })],
    providers: [UserController, UserService, AuthService],
    exports: []
})
export class UserModule {}