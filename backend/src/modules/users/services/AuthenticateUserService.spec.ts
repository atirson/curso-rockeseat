import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to  authenticate ', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUserService = new CreateUserService(fakeUsersRepository,fakeHashProvider);
    const authenticateUser = new AuthenticateUserService(fakeUsersRepository,fakeHashProvider);


    await createUserService.execute({
      name: 'John Doe',
      email: 'johnDoe@hotmail.com',
      password: '123456'
    });

    const teste =  await authenticateUser.execute({
     email: 'johnDoe@hotmail.com',
     password: '123456'
    });

    expect(teste).toHaveProperty('user');
  });

  it('should not be able to  authenticate with non existing user ', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const authenticateUser = new AuthenticateUserService(fakeUsersRepository,fakeHashProvider);


    expect( authenticateUser.execute({
      email: 'johnDoe@hotmail.com',
      password: '123456'
     })).rejects.toBeInstanceOf(AppError);
  });


  it('should be able to  authenticate with wrong password ', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUserService = new CreateUserService(fakeUsersRepository,fakeHashProvider);
    const authenticateUser = new AuthenticateUserService(fakeUsersRepository,fakeHashProvider);


    await createUserService.execute({
      name: 'John Doe',
      email: 'johnDoe@hotmail.com',
      password: '123456'
    });



    expect(authenticateUser.execute({
      email: 'johnDoe@hotmail.com',
      password: 'wrong-password'
     })).rejects.toBeInstanceOf(AppError);
  });
});
