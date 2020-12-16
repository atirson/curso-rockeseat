import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import updateUserAvatarService from './UpdateUserAvatarService';
import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';

import AppError from '@shared/errors/AppError';

describe('UpdateUserAvatar', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();
    const UpdateUserAvatar = new updateUserAvatarService(fakeUsersRepository, fakeStorageProvider);


    const user = await fakeUsersRepository.create({
      name:'John Doe',
      email:'teste@teste.com',
      password:'123456',
    })

    await UpdateUserAvatar.execute({
      avatar_id: user.id,
      avatarFilename: 'avatar.jpg',
    });

    expect(user.avatar).toBe('avatar.jpg');
  });

  it('should not be able to update avatar from non existing user ', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();
    const UpdateUserAvatar = new updateUserAvatarService(fakeUsersRepository, fakeStorageProvider);




    expect( UpdateUserAvatar.execute({
      avatar_id: 'non-existing-user',
      avatarFilename: 'avatar.jpg',
    })).rejects.toBeInstanceOf(AppError);
  });


  it('should delete old avatar when updating new one ', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();

    const deleteFile = jest.spyOn(fakeStorageProvider,'deleteFile');

    const UpdateUserAvatar = new updateUserAvatarService(fakeUsersRepository, fakeStorageProvider);

    const user = await fakeUsersRepository.create({
      name:'John Doe',
      email:'teste@teste.com',
      password:'123456',
    })

    await UpdateUserAvatar.execute({
      avatar_id: user.id,
      avatarFilename: 'avatar.jpg',
    });

    await UpdateUserAvatar.execute({
      avatar_id: user.id,
      avatarFilename: 'avatar2.jpg',
    });

    expect(deleteFile).toHaveBeenCalledWith('avatar.jpg');
    expect(user.avatar).toBe('avatar2.jpg');
  });
});
