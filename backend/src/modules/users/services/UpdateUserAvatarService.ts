import path from 'path';
import fs from 'fs';
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import uploadConfig from '@config/upload';
import User from '../infra/typeorm/entities/User';

import IUserRepository from '../repositories/IUsersRepository';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

interface Request{
  avatar_id:string;
  avatarFilename:string;
}
@injectable()
class updateUserAvatarService{
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
    ){

  }
  public async execute({ avatar_id, avatarFilename } :Request ): Promise<User> {

    const user = await this.usersRepository.findById(avatar_id);

    if(!user){
      throw new AppError('Only authenticated users can change avatar .', 401);
    }
    if(user.avatar){
      await this.storageProvider.deleteFile(user.avatar);
    }

    const filename = await this.storageProvider.saveFile(avatarFilename);

    user.avatar = filename;

    await this.usersRepository.save(user);

    return user;
  }
}

export default updateUserAvatarService;
