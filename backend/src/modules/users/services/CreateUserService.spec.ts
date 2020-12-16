import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserServices from './CreateUserService';
import FakehashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

import AppError from '@shared/errors/AppError';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakehashProvider = new FakehashProvider();
    const createAppointment = new CreateUserServices(fakeUsersRepository, fakehashProvider);

    const user =  await createAppointment.execute({
     name: 'john doe',
     email: 'johnDoe@hotmail.com',
     password: '123456'
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakehashProvider = new FakehashProvider();
    const createAppointment = new CreateUserServices(fakeUsersRepository, fakehashProvider);

    const user =  await createAppointment.execute({
     name: 'john doe',
     email: 'johnDoe@hotmail.com',
     password: '123456'
    });

    expect( createAppointment.execute({
      name: 'john doe',
      email: 'johnDoe@hotmail.com',
      password: '123456'
     }),).rejects.toBeInstanceOf(AppError);
  });



});
