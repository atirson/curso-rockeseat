import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';


export default class UsersController {
  public async create(request: Request ,response: Response ): Promise<Response>{
      const createUser = container.resolve(CreateUserService);

      const { name, email, password }  = request.body;
      const user = await createUser.execute({
        name,
        email,
        password
      });

      delete user.password;
      return response.json(user);
  }
}
