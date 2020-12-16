import { Router,
} from 'express';
import multer from 'multer';


import uploadConfig from '@config/upload';


import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();

const upload = multer(uploadConfig);

const userController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRouter.post('/', userController.create);

usersRouter.patch('/avatar',ensureAuthenticated,upload.single('avatar'), userAvatarController.update);
export default usersRouter;


// apartir do momento que tenho regra de negocio na rota preciso criar um service
