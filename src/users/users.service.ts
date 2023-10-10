import { HttpStatus, Injectable, NotFoundException, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GoogleLoginDto } from 'src/auth/dto/googleLogin.dto';
import { SignUpDTO } from 'src/auth/dto/singup.dto';
import { CreateUserDto, updateUser } from './dto/create-user.dto';
import { UserDocument } from './schema/user.schema'

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async createUser(createUserDto: CreateUserDto | SignUpDTO): Promise<UserDocument> {
    let user: any = this.userModel.find({
      email : createUserDto.email
    });
    if(user){
      throw  new HttpException(`User allredy exist with this email ${createUserDto.email}`, HttpStatus.NOT_ACCEPTABLE);
    }
    const newUser = await new this.userModel(createUserDto);
    return newUser.save();
  }

  async upsertUser(user: GoogleLoginDto): Promise<UserDocument> {
    const newUser =  await this.userModel.findOneAndUpdate({email:user.email}, {...user, ssoProvider: user.provider}, {new: true,upsert: true})
    return newUser;
  }

  async updateUser(
    userId: number,
    createUserDto: updateUser,
  ): Promise<UserDocument> {
    const existingUser = await this.userModel.findByIdAndUpdate(
      userId,
      createUserDto,
      { new: true },
    );
    if (!existingUser) {
      throw new NotFoundException(`user #${userId} not found`);
    }
    return existingUser;
  }

  async updatePartialUserByEmail(
    email: string,
    object: any,
  ): Promise<UserDocument> {
    const existingUser = await this.userModel.findOneAndUpdate(
      {email: email},
      object,
      { new: true },
    );
    if (!existingUser) {
      throw new NotFoundException(`user not found`);
    }
    return existingUser;
  }

  async getAllUsers(): Promise<UserDocument[]> {
    const userData = await this.userModel.find();
    if (!userData || userData.length == 0) {
      throw new NotFoundException('users data not found!');
    }
    return userData;
  }

  async getUser(userId: string): Promise<UserDocument> {
    const existingUser = await this.userModel.findById(userId).exec();
    if (!existingUser) {
      throw new NotFoundException(`user #${userId} not found`);
    }
    return existingUser;
  }

  async getAllUsersByRole(userType: string): Promise<UserDocument> {
    let queryObject={
      roles:{
        $in:[userType]
      }
    }
    const requstedUserList: any = await this.userModel.find(queryObject).exec();
    if (!requstedUserList) {
      throw new NotFoundException(`user #${userType} not found`);
    }
    return requstedUserList;
  }

  async getAllUsersCount(): Promise<any> {
      const usersCount :any = await this.userModel.countDocuments();
      const tutorsCount = await this.userModel.countDocuments({ roles: 'Tutor' });
      const studentsCount = await this.userModel.countDocuments({ roles: 'Student' });
      return { tutors: tutorsCount, students: studentsCount, usersCount}; 
  }

  async getUserByEmail(email: string): Promise<UserDocument> {
    const existingUser = await this.userModel.findOne({ email: email }).exec();
    if (!existingUser) {
      throw new NotFoundException(`user ${email} not found`);
    }
    return existingUser;
  }

  async deleteUser(userId: number): Promise<UserDocument> {
    const deletedUser = await this.userModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      throw new NotFoundException(`user #${userId} not found`);
    }
    return deletedUser;
  }
}
