 import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

 import IAppointmentRepository from '@modules/appointments/repositories/IAppintmentRepository';
 import AppointmentRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

 import IUserRepository from '@modules/users/repositories/IUsersRepository';
 import UsersRepository from '@modules/users/infra/typeorm/repositories/UserRepository';


 import IUserTokenRepository from '@modules/users/repositories/IUserTokenReposory';
import UserTokenRepository from '@modules/users/infra/typeorm/repositories/UserTokenRepository';


 container.registerSingleton<IAppointmentRepository>('AppointmentRepository', AppointmentRepository);
 container.registerSingleton<IUserRepository>('UsersRepository', UsersRepository);
 container.registerSingleton<IUserTokenRepository>('UserTokensRepository',UserTokenRepository);
