import { Body, Controller, Delete, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { UserCreateDto } from "./dto/user-create.dto";
import { UserLoginDto } from "./dto/user-login.dto";
import { UserUpdateDto } from "./dto/user-update.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/login')
    @HttpCode(HttpStatus.CREATED)
    async loginUser(@Body() userLoginDto: UserLoginDto): Promise<string> {
        return await this.userService.loginUser(userLoginDto);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createUser(@Body() createUserDto: UserCreateDto): Promise<void> {
        return await this.userService.createUser(createUserDto);
    }

    @Patch(':id')
    @HttpCode(HttpStatus.CREATED)
    async updateUser(@Body() updateUserDto: UserUpdateDto, @Param('id') id: string): Promise<void> {
        return await this.userService.updateUser(updateUserDto, id);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteUser(@Param('id') id: string): Promise<void> {
        return await this.userService.deleteUser(id);
    }
}